# 📱 Kako instalirati aplikaciju na telefon i slušati offline

## 🚀 Brzi vodič

### 1. Pokreni aplikaciju na računaru

```bash
npm run dev
```

Sačekaj da vidiš:
- `Server radi na http://localhost:3001`
- `Za telefon (isti WiFi): http://192.168.X.X:5173`

### 2. Nađi IP adresu računara

**Windows:**
- Otvori PowerShell ili CMD
- Upiši: `ipconfig`
- Potraži **IPv4 Address** (npr. `192.168.1.105`)

### 3. Poveži telefon i računar na isti WiFi

Oba uređaja moraju biti na istoj WiFi mreži!

### 4. Otvori aplikaciju na telefonu

1. Otvori **Chrome** (Android) ili **Safari** (iPhone)
2. U adresnu traku upiši: `http://192.168.X.X:5173`
   (zameni sa svojom IP adresom)
3. Pritisni Enter

### 5. Instaliraj aplikaciju (PWA)

**Android:**
- Pojaviće se banner "Add to Home screen" - klikni na njega
- ILI klikni tri tačke (⋮) → "Install app"
- Potvrdi instalaciju

**iPhone:**
- Klikni Share dugme (kvadrat sa strelicom)
- Skroluj dole → "Add to Home Screen"
- Potvrdi instalaciju

Aplikacija će se pojaviti na početnom ekranu kao obična aplikacija! 🎉

### 6. Preuzmi pesme za offline

1. Otvori aplikaciju
2. Idi na tab **Music**
3. Pretraži pesme (npr. "Baka Prase Betmen")
4. Klikni **Download** na pesmama koje želiš
5. Sačekaj da se preuzmu

**Važno:** Preuzmi pesme dok si na internetu!

### 7. Slušaj offline (bez interneta)

1. **Isključi WiFi ili mobilne podatke** na telefonu
2. Otvori aplikaciju
3. Idi na tab **Playlist**
4. Klikni **▶ Pusti** na bilo kojoj preuzetoj pesmi
5. **Radi bez interneta!** 🎵

## ⚠️ Važne napomene

- **Prvo preuzmi pesme dok si na internetu** - bez toga nećeš moći slušati offline
- Service Worker automatski kešira MP3 fajlove kada ih preuzmeš
- Ako obrišeš cache browsera, moraćeš ponovo preuzeti pesme
- Aplikacija radi kao PWA - ne treba ti Play Store ili App Store

## 🔧 Ako nešto ne radi

1. **Proveri da su oba uređaja na istom WiFi-ju**
2. **Proveri firewall** - možda blokira port 5173
3. **Ažuriraj yt-dlp** ako preuzimanje ne radi:
   ```bash
   npm run update-ytdlp
   ```

## 📝 Kako funkcioniše offline?

- Kada preuzmeš pesmu, Service Worker je automatski kešira u telefonu
- Kada pustiš pesmu prvi put, ona se dodatno kešira za brži pristup
- Bez interneta, aplikacija koristi keširane fajlove umesto servera
- Sve radi automatski - ne moraš ništa posebno da uradiš!

---

**Uživaj u muzici! 🎶**
