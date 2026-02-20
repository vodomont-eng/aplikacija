# 📱 Kako instalirati aplikaciju na iPhone-u

## 🚀 Korak po korak vodič

### Korak 1: Pokreni aplikaciju na računaru

1. Otvori PowerShell ili CMD na računaru
2. Idi u folder aplikacije:
   ```bash
   cd "C:\Users\Hp Elitebook\Desktop\aplikacija"
   ```
3. Pokreni aplikaciju:
   ```bash
   npm run dev
   ```
4. Sačekaj da vidiš poruke:
   - `Server radi na http://localhost:3001`
   - `Za telefon (isti WiFi): http://192.168.X.X:5173`

### Korak 2: Nađi IP adresu računara

1. U PowerShell-u ili CMD-u upiši:
   ```bash
   ipconfig
   ```
2. Potraži **IPv4 Address** (npr. `192.168.1.105`)
3. Zapiši ovu adresu - trebaće ti!

### Korak 3: Poveži iPhone i računar na isti WiFi

**VAŽNO:** Oba uređaja (računar i iPhone) moraju biti na **istoj WiFi mreži**!

1. Na iPhone-u: Settings → Wi-Fi
2. Poveži se na isti WiFi kao i računar

### Korak 4: Otvori aplikaciju na iPhone-u

1. Otvori **Safari** na iPhone-u (ne koristi Chrome ili druge browsere!)
2. U adresnu traku upiši: `http://192.168.X.X:5173`
   - Zameni `192.168.X.X` sa IP adresom tvog računara
   - Primer: `http://192.168.1.105:5173`
3. Pritisni "Go" ili Enter

### Korak 5: Instaliraj aplikaciju na iPhone

1. Kada se aplikacija učita u Safari-ju, klikni na **Share dugme** (kvadrat sa strelicom na gore)
   - Share dugme je obično na dnu ekrana ili gore desno
2. Skroluj dole kroz opcije
3. Pronađi i klikni na **"Add to Home Screen"** (Dodaj na početni ekran)
4. Možeš promeniti ime aplikacije (opciono)
5. Klikni **"Add"** (Dodaj) u gornjem desnom uglu

### Korak 6: Aplikacija je instalirana! 🎉

- Aplikacija će se pojaviti na početnom ekranu tvog iPhone-a
- Imaće svoju ikonicu i izgledaće kao obična aplikacija
- Možeš je otvoriti direktno sa početnog ekrana

### Korak 7: Preuzmi pesme za offline slušanje

1. Otvori aplikaciju (sa početnog ekrana)
2. Idi na tab **Music**
3. Upiši ime pesme u search bar (npr. "Baka Prase Betmen")
4. Klikni **"Pretraži"**
5. Klikni **"Download"** na pesmama koje želiš
6. Sačekaj da se preuzmu (vidićeš "Preuzimanje...")
   - Pesme se automatski čuvaju direktno u telefonu (IndexedDB)
   - Ne moraš da ih preuzimaš ručno - aplikacija to radi automatski!

**VAŽNO:** Preuzmi pesme dok si na internetu i povezan na računar!

### Korak 8: Slušaj offline (bez interneta i bez računara!)

1. **Isključi WiFi** na iPhone-u:
   - Settings → Wi-Fi → isključi
   - ILI isključi mobilne podatke
2. **Isključi računar** ili prekini konekciju - aplikacija radi potpuno offline!
3. Otvori aplikaciju
4. Idi na tab **Playlist**
5. Klikni **"▶ Pusti"** na bilo kojoj preuzetoj pesmi
6. **Radi bez interneta i bez računara!** 🎵

**Sada aplikacija radi potpuno offline!** Pesme su sačuvane direktno u telefonu.

## ⚠️ Važne napomene za iPhone

- **Moraš koristiti Safari** - drugi browseri ne podržavaju PWA instalaciju na iPhone-u
- **Oba uređaja moraju biti na istom WiFi-ju** - inače neće raditi
- **Prvo preuzmi pesme dok si na internetu** - bez toga nećeš moći slušati offline
- Ako obrišeš Safari cache, moraćeš ponovo preuzeti pesme

## 🔧 Ako nešto ne radi

### Problem: Ne mogu da pristupim aplikaciji na iPhone-u

**Rešenje:**
1. Proveri da su oba uređaja na istom WiFi-ju
2. Proveri da je aplikacija pokrenuta na računaru (`npm run dev`)
3. Proveri firewall na računaru - možda blokira port 5173
4. Probaj da isključiš firewall privremeno

### Problem: Ne vidim "Add to Home Screen" opciju

**Rešenje:**
1. Moraš koristiti **Safari** - ne Chrome ili drugi browser
2. Aplikacija mora biti potpuno učitana
3. Pokušaj ponovo - Share → skroluj dole → "Add to Home Screen"

### Problem: Pesme se ne preuzimaju

**Rešenje:**
1. Proveri da je server pokrenut na računaru
2. Ažuriraj yt-dlp:
   ```bash
   npm run update-ytdlp
   ```
3. Restartuj aplikaciju (`Ctrl+C` pa ponovo `npm run dev`)

### Problem: Ne mogu slušati offline

**Rešenje:**
1. Prvo preuzmi pesme dok si na internetu
2. Pusti svaku pesmu bar jednom dok si na internetu (da se kešira)
3. Proveri da je Service Worker aktivan (u Safari Developer Tools)

## 📝 Kako funkcioniše?

- Kada preuzmeš pesmu, aplikacija je automatski čuva direktno u telefonu (IndexedDB)
- MP3 fajlovi se čuvaju lokalno - ne zavisiš od servera
- Bez interneta i bez računara, aplikacija koristi lokalno sačuvane fajlove
- Sve radi automatski - ne moraš ništa posebno da uradiš!
- Pesme su trajno sačuvane u telefonu dok ne obrišeš cache aplikacije

## 🎯 Brzi pregled

1. ✅ Pokreni `npm run dev` na računaru
2. ✅ Nađi IP adresu (`ipconfig`)
3. ✅ Poveži iPhone i računar na isti WiFi
4. ✅ Otvori `http://IP:5173` u Safari-ju
5. ✅ Share → "Add to Home Screen"
6. ✅ Preuzmi pesme
7. ✅ Slušaj offline!

---

**Uživaj u muzici na iPhone-u! 🎶📱**
