# Annuaire La Loupe

Un seul depot npm workspaces pour l'annuaire et les 14 sites de commerces.
Chaque application garde ses pages, assets, routes et styles, et produit son
propre site statique. Nx n'est pas necessaire.

## Installation

Node.js 24 recommande (voir `.nvmrc`), npm 10 ou plus recent.

```sh
nvm use
npm ci
```

Un seul `package-lock.json` a la racine. Installer les dependances depuis cette
racine, pas depuis les applications. Les dependances declarees par les workspaces
sont mutualisees par npm lorsqu'elles sont compatibles.

## Developpement

```sh
# Annuaire
npm run dev

# Un commerce
npm run dev --workspace=@laloupe/pizza-napoli

# Un deuxieme site en parallele, sur un autre port
npm run dev --workspace=@laloupe/boulangerie-justine-damien -- --port 8081 --strictPort
```

Les configurations existantes utilisent le port 8080 par defaut.

## Verification et build

```sh
npm run check
npm run build
npm run check:build

# Construire ou previsualiser un seul site
npm run build --workspace=@laloupe/pizza-napoli
npm run preview --workspace=@laloupe/pizza-napoli

# Lint des applications (les regles existantes sont conservees)
npm run lint
```

La CI installe depuis le lockfile, verifie le registre des sites, construit les
15 applications et teste leurs domaines et routes dans un conteneur Nginx.
Elle publie l'image Docker testee et sa configuration dans l'artefact `annuaire-vps`.
Sur `main`, elle deploie ensuite cette image sur le VPS via SSH ; les pull requests
ne declenchent aucune publication. Le lint reste une commande separee.

### Points connus apres migration

La reinstallation avec `npm ci` et les 15 builds ont ete verifies localement.
Le lint du code importe echoue encore (interfaces vides, imports `require()`
dans Tailwind et types `any`). Ces fichiers n'ont pas ete modifies par la migration.
L'audit npm signale 13 vulnerabilites : 7 moderees et 6 elevees. Les mises a niveau
de dependances, dont certaines majeures, restent un chantier distinct ; ne pas
appliquer `npm audit fix --force` sans verifier les changements de comportement.

## Structure

```text
apps/
	annuaire/
	assurance-areas/
	... les 13 autres commerces
scripts/check-sites.mjs
scripts/prepare-deploy.mjs
scripts/check-http.mjs
deploy/
	Dockerfile
	deploy.sh
	deploy.test.mjs
sites.json
package.json
package-lock.json
```

Les sources ont ete copiees sans leurs depots Git imbriques ni leurs anciens
workflows GitHub Pages. Les depots d'origine n'ont pas ete modifies ; leur
historique n'est pas importe ici. Les composants UI et configurations locaux
sont conserves pour cette premiere migration, avant une mutualisation ulterieure.

## Domaines et hebergement

`sites.json` associe chaque application a son domaine cible. Les 14 sous-domaines
reprennent les liens existants dans l'annuaire. `laloupe.net` est propose pour
l'annuaire lui-meme et reste a confirmer.

Un conteneur Nginx sert les 15 sites sur le VPS OVH, derriere le Traefik existant.
Il ne publie aucun port sur le VPS : Traefik lui transmet les requetes via son
reseau Docker. Chaque domaine garde son propre HTML, ses assets et ses routes.
Nginx renvoie `/index.html` pour les routes React, mais une vraie 404 pour un
asset absent ou un domaine inconnu.

### Prerequis du VPS

- Docker Engine et Docker Compose v2 avec la commande `up --wait`.
- Un Traefik actif, connecte au reseau Docker externe `traefik`, avec son provider
	Docker, l'entrypoint `websecure` et le certresolver `letsencrypt` configures.
- Les ports 80 et 443 accessibles pour le trafic et le challenge TLS configure
	par l'infrastructure existante.
- SSH sur le port 22, Bash, `rsync` et `flock` sur le VPS.
- Un utilisateur SSH autorise a utiliser Docker sans `sudo` et a ecrire dans le
	repertoire de deploiement. L'acces Docker donne des privileges equivalents
	a root : reserver cette cle a un compte de deploiement de confiance.

Le workflow ne cree pas Traefik, ne redemarre pas l'infrastructure et ne modifie
pas sa configuration. Verifier ces prerequis sur le VPS avant le premier envoi.

### Configuration GitHub

Dans les parametres du nouveau depot, creer un environnement `production`.
Pour un premier deploiement controle, ajouter un approbateur requis si le plan
GitHub le permet. Configurer les secrets suivants dans cet environnement :

| Secret | Valeur attendue |
| --- | --- |
| `SSH_HOST` | Adresse IPv4 ou nom DNS du VPS, sans protocole ni port |
| `SSH_USER` | Compte de deploiement sur le VPS |
| `SSH_PRIVATE_KEY` | Cle privee SSH dediee dont la cle publique est autorisee sur le VPS |
| `APPS_PATH` | Repertoire parent des applications sur le VPS, comme dans les autres projets |

Saisir les secrets directement dans GitHub, jamais dans le depot ou dans le chat.
Comme dans les autres projets, le workflow remplit `known_hosts` automatiquement
avec `ssh-keyscan`. Aucun secret supplementaire de cle hote n'est necessaire.
Cette methode ne verifie pas la cle recuperee contre une empreinte prealablement
connue ; elle ne protege donc pas contre une interception lors de cette collecte.

Le secret `APPS_PATH` est obligatoire et reprend la convention des autres projets :
le workflow ajoute `/annuaire` pour obtenir le repertoire de deploiement de ce
monorepo. Par exemple, `APPS_PATH=/opt/apps` deploie dans `/opt/apps/annuaire` ;
ne pas ajouter `/annuaire` a la valeur du secret. Reprendre la valeur utilisee
par les autres depots sur ce VPS, sans la publier dans le chat.
Preferer un chemin absolu, sans espaces. Le sous-dossier `annuaire` doit etre
dedie a ce deploiement, pas au depot `infra` ni a une autre application.
L'ancienne variable `ANNUAIRE_PATH` n'est plus utilisee.

### DNS et premiere publication

Dans la zone DNS qui gere `laloupe.net`, faire pointer les domaines de `sites.json`
vers l'IPv4 du VPS avec des enregistrements A. Un wildcard `*.laloupe.net` est
possible, mais ne couvre pas `laloupe.net` lui-meme ; les enregistrements explicites
prennent priorite. Ne conserver un AAAA que si l'IPv6 du VPS fonctionne egalement.

Verifier les anciennes routes Traefik : aucun autre routeur ne doit revendiquer
les memes domaines au moment de la bascule. Preparer leur desactivation sans
arreter Traefik ni les services sans rapport avec ces sites.

Apres configuration des secrets et du DNS, publier les changements sur `main`
ou lancer manuellement le workflow `Build and deploy static sites` sur `main`.
La CI construit les sites et l'image, puis transfere l'image testee par SSH.
Node.js n'est pas necessaire sur le VPS. Aucune publication n'a ete effectuee
depuis l'environnement de developpement.

Les versions sont stockees sous `APPS_PATH/annuaire/releases/<release-id>`.
Le lien `APPS_PATH/annuaire/current` est mis a jour seulement apres le controle de
sante du conteneur. Si celui-ci echoue, le script tente de relancer la version
precedente ; au premier deploiement, aucune version precedente n'existe.
Ce controle est local au conteneur : il ne garantit pas le DNS ni le HTTPS public.
Verifier ensuite chaque domaine en HTTPS et l'acces direct a `/commande`,
`/categories` et `/businesses`. Les anciennes images et versions sont conservees ;
surveiller l'espace disque et ne nettoyer qu'apres verification de la production.

### Validation locale du deploiement

```sh
npm run test:deploy
bash -n deploy/deploy.sh
npm run build
npm run prepare:deploy
ANNUAIRE_IMAGE=laloupe-annuaire:local docker compose -f dist/deploy/docker-compose.json config --quiet
docker build -t laloupe-annuaire:local -f deploy/Dockerfile dist/deploy
docker run --rm laloupe-annuaire:local nginx -t
```

`npm run check:http` teste les 15 domaines, leurs assets et le repli React sur un
conteneur deja lance a `http://127.0.0.1:18080`. `SMOKE_URL` permet de changer
cette adresse. La CI gere le lancement et l'arret de ce conteneur temporaire.

GitHub Pages ne fournit pas 15 sites et domaines personnalises independants
depuis un seul depot. Son ancien workflow n'est donc pas repris.

Les formulaires Pizza Napoli et Ada Delices conservent leurs redirections
externes vers Kizeo Forms.