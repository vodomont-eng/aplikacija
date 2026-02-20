# 🚀 Kako da objaviš aplikaciju na Render (bez računara)

Aplikacija može da radi na internetu – telefon ima pristup bilo gde, bez uključenog računara.

## 📖 Detaljno uputstvo

Za **kompletno detaljno uputstvo**, pogledaj: **[RENDER-UPUTSTVO.md](./RENDER-UPUTSTVO.md)**

## 🚀 Brzi vodič

### 1. Upload na GitHub

**Opcija A: GitHub Desktop (najlakše)**
1. Preuzmi GitHub Desktop: https://desktop.github.com
2. Otvori GitHub Desktop → File → Add Local Repository
3. Izaberi folder aplikacije
4. Klikni "Publish repository"

**Opcija B: Command Line**
```bash
cd "C:\Users\Hp Elitebook\Desktop\aplikacija"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TVOJE_IME/music-app.git
git push -u origin main
```

### 2. Deploy na Render

1. Idi na **https://render.com** i napravi nalog (GitHub login)
2. Klikni **New +** → **Web Service**
3. Poveži GitHub repozitorijum
4. Podesi:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Instance Type:** Free
   - **Environment Variable:** `NODE_ENV=production`
5. Klikni **Create Web Service**
6. Sačekaj 5–10 minuta
7. Dobijaš link: `https://music-playlist-app-xxx.onrender.com`

### 3. Instaliraj na telefonu

**iPhone (Safari):**
1. Otvori link u Safari-ju
2. Share → "Add to Home Screen"

**Android (Chrome):**
1. Otvori link u Chrome-u
2. "Add to Home screen" ili "Install app"

### 4. Koristi aplikaciju

1. Preuzmi pesme dok si na internetu
2. Pesme se čuvaju u telefonu (IndexedDB)
3. Slušaj offline - radi bez interneta! 🎵

## ⚠️ Napomene

- **Render Free Plan** se uspava posle ~15 min neaktivnosti
- **Prvi otvaranje** može trajati 30–60 sekundi (server se budi)
- **Playlist na serveru** se briše kad se server restartuje
- **Pesme u telefonu** ostaju trajno (IndexedDB)
- Za stalno uključen server potreban je plaćeni plan ($7/mesec)

## 🔗 Alternativa: Railway

1. Otvori **https://railway.app**
2. **New Project** → **Deploy from GitHub**
3. Izaberi repozitorijum
4. Railway automatski prepoznaje Node.js
