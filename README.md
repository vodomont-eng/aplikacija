# Music & Playlist

Aplikacija za pretragu pesama na YouTube i preuzimanje u MP3 format sa playlistom. **Radi offline - možeš slušati preuzete pesme bez interneta!**

## Funkcionalnosti

- **Music** – pretraga pesama na YouTube putem search bara
- **Download** – preuzimanje pesme u MP3 format ispod svakog rezultata (automatski u playlist)
- **Playlist** – sve preuzete pesme; klikni **▶ Pusti** da slušaš
- **PWA** – radi na telefonu i računaru kao obična aplikacija
- **Offline** – slušaj preuzete pesme bez interneta (Service Worker kešira MP3 fajlove)

---

## Pokretanje na računaru

### 1. Instalacija

```bash
npm install
```

### 2. Pokretanje

```bash
npm run dev
```

- Aplikacija: http://localhost:5173
- Server: http://localhost:3001

---

## Kako pokrenuti na telefonu

Aplikacija mora da radi na računaru. Telefon pristupa preko Wi‑Fi.

### Korak 1: Pokreni aplikaciju na računaru

```bash
cd "C:\Users\dobri\OneDrive\Радна површина\aplikacija"
npm run dev
```

Sačekaj da vidiš poruke:
- `Server radi na http://localhost:3001`
- `Local: http://localhost:5173/`

### Korak 2: Nađi IP adresu računara

1. Otvori **CMD** ili **PowerShell** na računaru
2. Upiši: `ipconfig`
3. Potraži **IPv4 Address** (npr. `192.168.1.105`)

### Korak 3: Poveži telefon i računar na isti Wi‑Fi

Oba uređaja moraju biti na istoj mreži.

### Korak 4: Otvori aplikaciju na telefonu

1. Otvori **Chrome** ili **Safari** na telefonu
2. U adresnu traku upiši: `http://192.168.1.105:5173`  
   (zameni `192.168.1.105` svojom IP adresom)
3. Pritisni Enter

### Korak 5: Instaliraj aplikaciju na telefon (PWA)

**Android (Chrome):**
1. Kada se aplikacija učita, pojaviće se banner "Add to Home screen" ili
2. Klikni na tri tačke (⋮) u gornjem desnom uglu → "Install app" ili "Add to Home screen"
3. Potvrdi instalaciju
4. Aplikacija će se pojaviti na početnom ekranu kao obična aplikacija

**iPhone (Safari):**
1. Klikni na Share dugme (kvadrat sa strelicom)
2. Skroluj dole i izaberi "Add to Home Screen"
3. Potvrdi instalaciju
4. Aplikacija će se pojaviti na početnom ekranu

### Korak 6: Preuzmi pesme za offline slušanje

1. Otvori aplikaciju na telefonu
2. Idi na tab **Music**
3. Pretraži i preuzmi pesme koje želiš (klikni **Download**)
4. Preuzete pesme se automatski keširaju za offline upotrebu
5. Idi na tab **Playlist** da vidiš sve preuzete pesme

### Korak 7: Slušaj offline (bez interneta)

1. **Važno:** Prvo preuzmi pesme dok si na internetu
2. Kada preuzmeš pesme, one se automatski keširaju u telefonu
3. Možeš isključiti internet (WiFi ili mobilni podaci)
4. Otvori aplikaciju i idi na tab **Playlist**
5. Klikni **▶ Pusti** na bilo kojoj pesmi - radi bez interneta!

**Napomena:** Service Worker automatski kešira MP3 fajlove kada ih preuzmeš. Prvi put kada pustiš pesmu, ona se kešira za offline upotrebu.

---

## Ako preuzimanje ne radi

1. **Ažuriraj yt-dlp** (YouTube često menja stranicu):
   ```bash
   npm run update-ytdlp
   ```
   Zatim ponovo pokreni `npm run dev`.

2. **FFmpeg** – aplikacija koristi `ffmpeg-static` (instalira se sa `npm install`). Ako i dalje dobijaš grešku da FFmpeg nije pronađen:
   - Preuzmi **ffmpeg-release-essentials.zip** sa https://www.gyan.dev/ffmpeg/builds/
   - Raspakuj u npr. `C:\ffmpeg`
   - Dodaj `C:\ffmpeg\bin` u sistemski **PATH** (Settings → System → About → Advanced → Environment Variables → Path)

## Napomene

- Preuzete pesme se čuvaju u folderu `playlist/` na računaru
- Na telefonu, pesme se keširaju u browser cache-u (Service Worker)
- Za offline slušanje, prvo preuzmi pesme dok si na internetu
- Ako obrišeš cache browsera, moraćeš ponovo preuzeti pesme
- Aplikacija radi kao PWA (Progressive Web App) - ne treba ti Play Store ili App Store

## Build za produkciju

Ako želiš da postaviš aplikaciju na server (npr. Render, Heroku):

```bash
npm run build
```

Zatim postavi `dist` folder i `server` folder na server. Server će automatski servirati React build u produkciji.
