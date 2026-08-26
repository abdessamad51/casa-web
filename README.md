# Casa Web — Agence Digitale Maroc

Site web marketing complet pour Casa Web, une agence digitale basée à Casablanca, Maroc. Conçu pour générer des leads et présenter les services de l'agence à des clients marocains et internationaux.

## Stack Technique

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — Design tokens avec palette Indigo & Amber
- **Framer Motion** — Animations scroll-reveal et hover
- **next-intl** — i18n complet (fr 🇫🇷, en 🇬🇧, ar 🇲🇦) avec support RTL
- **react-hook-form + Zod** — Formulaire de contact validé
- **Resend** — Envoi d'emails transactionnels
- **MDX** — Blog et études de cas portfolio

---

## 🚀 Démarrage Rapide (Développement Local)

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Cloner ou se placer dans le répertoire
cd casa-web

# 2. Installer les dépendances
npm install

# 3. Copier le fichier d'environnement
cp .env.example .env.local

# 4. Renseigner les variables dans .env.local (voir section ci-dessous)

# 5. Lancer le serveur de développement
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).  
La route `/` redirige automatiquement vers `/fr` (locale par défaut).

### Variables d'environnement

```env
# URL publique du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Resend — https://resend.com (créer un compte gratuit)
RESEND_API_KEY=re_votre_cle_api
RESEND_FROM_EMAIL=no-reply@votredomaine.com
CONTACT_EMAIL=contact@votredomaine.com

# Google Analytics 4 (laisser vide pour désactiver en dev)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Meta Pixel (optionnel)
NEXT_PUBLIC_META_PIXEL_ID=
```

> **Important** : La variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` doit être **vide** en développement pour ne pas polluer vos données GA4.

---

## 📁 Structure du Projet

```
casa-web/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Toutes les pages sous leur locale
│   │   │   ├── _sections/      # Sections de la page d'accueil
│   │   │   ├── about/
│   │   │   ├── blog/[slug]/
│   │   │   ├── contact/
│   │   │   ├── portfolio/[slug]/
│   │   │   ├── pricing/
│   │   │   ├── privacy/
│   │   │   ├── services/
│   │   │   ├── terms/
│   │   │   ├── layout.tsx      # Layout locale (lang, dir, Navbar, Footer)
│   │   │   └── page.tsx        # Page d'accueil
│   │   ├── api/contact/        # Route API formulaire de contact
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── globals.css
│   ├── components/             # Composants partagés
│   ├── i18n/                   # Configuration next-intl
│   └── lib/                    # Utilitaires
├── content/
│   ├── blog/                   # Articles MDX
│   └── portfolio/              # Études de cas MDX
├── messages/
│   ├── fr.json                 # Traductions françaises (défaut)
│   ├── en.json
│   └── ar.json
└── public/
```

---

## 🌐 Personnalisation

### Changer le nom/logo de l'agence

1. Modifier `src/components/navbar.tsx` — le composant logo (lignes `CW` / `CasaWeb`)
2. Modifier `src/components/footer.tsx` — même composant logo
3. Remplacer `/public/logo.png` par votre logo

### Ajouter un projet au portfolio

Créer un fichier `.mdx` dans `content/portfolio/` :

```mdx
---
title: "Titre du projet"
client: "Nom du client"
category: "web" # web | mobile | landing | ecommerce
date: "2025-01-15"
result: "Résultat mesurable"
tech: ["React", "Node.js"]
---

Contenu de l'étude de cas...
```

### Ajouter un article de blog

Créer un fichier `.mdx` dans `content/blog/` :

```mdx
---
title: "Titre de l'article"
slug: "url-de-larticle"
date: "2025-01-15"
author: "Votre Nom"
category: "seo" # seo | dev | marketing | design
description: "Meta description de l'article"
readingTime: "5 min"
---

Contenu de l'article...
```

---

## 🚢 Déploiement

### Option 1 : Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Importer le repo sur [vercel.com](https://vercel.com)
2. Ajouter les variables d'environnement dans **Project Settings → Environment Variables**
3. Déployer 🎉

C'est tout. Vercel détecte automatiquement Next.js.

---

### Option 2 : VPS Ubuntu + Nginx + PM2 + Certbot

Ce guide démontre nos compétences en déploiement VPS — exactement ce que nous proposons à nos clients.

#### Prérequis Serveur

- Ubuntu 22.04 LTS
- Accès root SSH
- Domaine pointant vers l'IP du serveur (enregistrement A)

#### Étape 1 — Préparer le serveur

```bash
# Mise à jour système
sudo apt update && sudo apt upgrade -y

# Installer Node.js 20 via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Vérifier
node -v  # v20.x.x
npm -v   # 10.x.x

# Installer PM2 globalement
sudo npm install -g pm2

# Installer Nginx
sudo apt install -y nginx

# Installer Certbot pour SSL Let's Encrypt
sudo apt install -y certbot python3-certbot-nginx
```

#### Étape 2 — Déployer l'application

```bash
# Créer un utilisateur dédié (sécurité)
sudo adduser casaweb
sudo usermod -aG sudo casaweb

# Se connecter en tant que casaweb
su - casaweb

# Cloner le repo
git clone https://github.com/votre-org/casa-web.git /home/casaweb/app
cd /home/casaweb/app

# Installer les dépendances
npm ci --production=false

# Créer le fichier .env.local
nano .env.local
# (Renseigner toutes les variables)

# Build production
npm run build

# Démarrer avec PM2
pm2 start npm --name "casa-web" -- start
pm2 startup systemd  # Démarrage automatique au reboot
pm2 save
```

#### Étape 3 — Configurer Nginx

```bash
sudo nano /etc/nginx/sites-available/casa-web
```

Coller cette configuration :

```nginx
server {
    listen 80;
    server_name casa-web.ma www.casa-web.ma;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Caching des assets statiques Next.js
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/casa-web /etc/nginx/sites-enabled/
sudo nginx -t  # Vérifier la config
sudo systemctl reload nginx
```

#### Étape 4 — SSL avec Certbot (HTTPS gratuit)

```bash
sudo certbot --nginx -d casa-web.ma -d www.casa-web.ma
# Suivre les instructions interactives
# Certbot configure automatiquement le renouvellement
```

#### Étape 5 — Déploiement continu (optionnel)

Créer un script de mise à jour :

```bash
nano /home/casaweb/deploy.sh
```

```bash
#!/bin/bash
cd /home/casaweb/app
git pull origin main
npm ci --production=false
npm run build
pm2 restart casa-web
echo "✅ Déploiement terminé"
```

```bash
chmod +x /home/casaweb/deploy.sh
```

Exécuter pour déployer :
```bash
./deploy.sh
```

---

## 🔍 SEO — Checklist Implémentée

- ✅ Métadonnées par page (title, description, OpenGraph, Twitter Card)
- ✅ Images Open Graph auto-générées via `next/og`
- ✅ JSON-LD `LocalBusiness` + `ProfessionalService`
- ✅ `sitemap.xml` dynamique couvrant fr/en/ar
- ✅ `robots.txt` configuré
- ✅ Balises `hreflang` via `alternates.languages`
- ✅ `next/image` avec attributs `alt` significatifs
- ✅ Un seul `<h1>` par page, hiérarchie logique
- ✅ HTML sémantique (`<nav>`, `<main>`, `<article>`, `<footer>`)
- ✅ Accessibilité clavier + `aria-labels`

---

## 🔧 Scripts Disponibles

```bash
npm run dev      # Serveur de développement (Turbopack)
npm run build    # Build de production
npm run start    # Démarrer en mode production
npm run lint     # Linting ESLint
```

---

## 📞 Informations à Personnaliser

Avant de mettre en production, remplacez les données fictives :

| Élément | Fichier(s) à modifier |
|---------|----------------------|
| Nom de l'agence | `messages/*.json` → clé `metadata.siteName` |
| Numéro WhatsApp | `src/lib/utils.ts` → `getWhatsAppUrl()` |
| Email de contact | `.env.local` → `CONTACT_EMAIL` |
| Adresse | `messages/fr.json` → `contact.info.location` |
| Membres de l'équipe | `messages/*.json` → `about.team.members` |
| Prix | `messages/*.json` → `pricing.plans` |
| Projets portfolio | `content/portfolio/*.mdx` |
| Réseaux sociaux | `src/components/structured-data.tsx` → `sameAs` |

---

Développé avec ❤️ à Casablanca par **Casa Web**.
