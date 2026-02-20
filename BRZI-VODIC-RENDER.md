# ⚡ Brzi vodič - Render deploy

## 🎯 Cilj
Postavi aplikaciju na internet da radi bez računara!

---

## 📝 KORAK 1: GitHub (5 minuta)

### Ako nemaš GitHub nalog:
1. Idi na https://github.com → Sign up
2. Napravi nalog

### Upload projekta:

**NAJLAKŠE - GitHub Desktop:**
1. Preuzmi: https://desktop.github.com
2. Instaliraj
3. Otvori → File → Add Local Repository
4. Izaberi: `C:\Users\Hp Elitebook\Desktop\aplikacija`
5. Klikni "Publish repository"
6. Ime: `music-app`
7. Ostavi Public
8. Klikni "Publish"

**GOTOVO!** ✅

---

## 🌐 KORAK 2: Render (10 minuta)

1. **Idi na:** https://render.com
2. **Klikni:** "Get Started for Free"
3. **Izaberi:** "Sign up with GitHub"
4. **Dozvoli** pristup GitHub-u

### Kreiraj Web Service:

1. **Klikni:** "New +" → "Web Service"
2. **Izaberi** svoj repozitorijum (`music-app`)
3. **Podesi:**
   - Name: `music-app`
   - Region: Frankfurt (ili najbliži)
   - Branch: `main`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Instance Type: **Free**

4. **Environment Variables:**
   - Klikni "Advanced"
   - Add: `NODE_ENV` = `production`

5. **Klikni:** "Create Web Service"

6. **Sačekaj 5-10 minuta** ⏳

7. **Dobijaš link:**
   ```
   https://music-app-xxx.onrender.com
   ```
   **SAČUVAJ OVAJ LINK!** 📝

---

## 📱 KORAK 3: Instaliraj na telefonu

### iPhone:
1. Otvori **Safari**
2. Upiši link sa Render-a
3. **Sačekaj 30-60 sekundi** (server se budi)
4. Share → "Add to Home Screen"
5. **GOTOVO!** ✅

### Android:
1. Otvori **Chrome**
2. Upiši link sa Render-a
3. **Sačekaj 30-60 sekundi**
4. "Add to Home screen" ili "Install app"
5. **GOTOVO!** ✅

---

## 🎵 KORAK 4: Koristi aplikaciju

1. **Otvori aplikaciju** sa početnog ekrana
2. **Idi na Music** → Pretraži pesme
3. **Klikni Download** na pesmama
4. **Sačekaj** da se preuzmu
5. **Idi na Playlist** → Klikni "▶ Pusti"
6. **Radi!** 🎵

### Offline:
1. **Preuzmi pesme** dok si na internetu
2. **Isključi WiFi**
3. **Otvori Playlist**
4. **Klikni "▶ Pusti"**
5. **Radi bez interneta!** 🎉

---

## ⚠️ Važno

- **Render Free Plan** se uspava posle 15 min
- **Prvi otvaranje** traje 30-60 sekundi (server se budi)
- **Pesme se čuvaju u telefonu** - radi offline!
- **Ne treba ti računar** nakon deploy-a!

---

## 🆘 Problem?

- **Deploy ne radi?** → Proveri logove u Render dashboard-u
- **Aplikacija se ne učitava?** → Sačekaj 30-60 sekundi
- **Ne mogu preuzeti pesme?** → Proveri Render logove

---

**Detaljno uputstvo:** [RENDER-UPUTSTVO.md](./RENDER-UPUTSTVO.md)

**Srećno! 🚀**
