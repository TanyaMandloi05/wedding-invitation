# Royal Wedding Invitation — Nimisha & Jai

An interactive digital wedding invitation website created for **Nimisha & Jai**, inspired by luxury Indian royal stationery and editorial couture design.

---

## ✨ Features & Experiences

1. **3D Luxury Opening Envelope Experience**
   - Centered luxury champagne & ivory envelope with gold ornamental borders and corner botanicals.
   - Royal crimson & gold wax seal with embossed **NJ** monogram.
   - 3D flap opening animation (`rotateX`) with the wedding invitation card smoothly emerging.
   - Falling rose petal celebration burst (`canvas-confetti`).
   - Seamless transition into the main invitation website.

2. **Immediate Background Music Playback**
   - Powered by the uploaded trimmed wedding music (`Aaj Sajeya - Wedding Melodies`).
   - Starts audio playback directly on the opening envelope click to comply with browser autoplay policies.
   - Persistent floating audio player with animated waveform visualizer, play/pause, volume control, and mute toggle.

3. **Curated Uploaded Photography Integration**
   - Incorporates all 5 user-provided photographs without artificial AI replacements:
     - `photo-wedding-attire.png` — Couple in royal wedding attire with floral garlands (Hero royal arch frame, wedding milestone, and portraits).
     - `photo-sunset-hug.png` — Couple in warm terracotta embrace under golden twilight.
     - `photo-nature-smile.jpg` — Couple in sunlit nature with radiant smiles.
     - `photo-evening-celebration.jpg` — Couple in sophisticated evening attire.
     - `photo-ocean-sunset.png` — Romantic sunset silhouette over ocean waters.

4. **Interactive Scratch-to-Reveal Wedding Date**
   - Canvas-based scratch card supporting mouse drag and mobile touch.
   - Metallic champagne gold scratch surface with ornamental sparkles.
   - Automatically detects when ~50% is scratched and triggers a confetti burst to reveal:
     - **OUR WEDDING DAY**
     - **24 NOVEMBER 2026**
     - **Nimisha & Jai**

5. **Live Countdown to the Big Day**
   - Real-time countdown clock (Days, Hours, Minutes, Seconds) ticking down to **24 November 2026 at 7:30 PM**.
   - Elegant gold border cards with celebration fallback state.

6. **Our Story & 5 Romantic Milestones**
   - Individual introduction cards for Nimisha (The Radiant Bride) and Jai (The Dashing Groom).
   - Central timeline featuring:
     1. The First Meeting
     2. The Beginning of a Beautiful Bond
     3. Precious Memories
     4. A New Chapter Begins
     5. Forever Together

7. **Little Moments, Forever Memories**
   - Editorial photo stories showcasing the couple's journey with location badges and captions.

8. **Wedding Events & 3-Day Itinerary**
   - **Day 1: 22 November 2026, Sunday**
     - *Ganesh Pujan* — 2:00 PM (Separate card)
     - *Mata Pujan* — 9:00 PM onwards (Separate card)
   - **Day 2: 23 November 2026, Monday** (Grouped under same schedule)
     - *Mandap Pujan* — 10:00 AM onwards
     - *Ganga Pujan* — 10:00 AM onwards
     - *Mamera* — 10:00 AM onwards
   - **Day 3: 24 November 2026, Tuesday** (Grand Champagne-Gold Styling)
     - *Shubh Lagna (Wedding Ceremony)* — 7:30 PM onwards
     - *Blessings Ceremony (Ashirwad Samaroh)* — Followed by Pheras
     - *Swaruchi Bhoj (Traditional Wedding Feast)* — 7:30 PM onwards

9. **Photo Gallery & Lightbox**
   - Editorial asymmetric masonry layout.
   - Full-screen Lightbox modal with next/previous controls, keyboard navigation (Escape, Left/Right arrows), captions, and image tags.

10. **Wedding Venue & Directions**
    - **Eden Garden Marriage Garden & Resort**
    - Address: *MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh, India*
    - Interactive Google Maps embed preview.
    - Direct **"Get Directions"** button linking to Google Maps.

11. **Final Blessings & Envelope Replay**
    - "Your Presence Will Make Our Celebration More Special."
    - "Thank You for Being Part of Our Story."
    - Button to replay the opening envelope animation anytime.

---

## 🛠️ Project Structure

```text
invitation/
├── public/
│   └── assets/
│       ├── audio/
│       │   └── wedding-music.mp3      <-- Uploaded trimmed song
│       └── images/
│           ├── photo-wedding-attire.png
│           ├── photo-sunset-hug.png
│           ├── photo-nature-smile.jpg
│           ├── photo-evening-celebration.jpg
│           └── photo-ocean-sunset.png
├── src/
│   ├── assets/                        <-- Mirrored assets for imports
│   ├── components/
│   │   ├── OpeningEnvelope.jsx        <-- 3D flap & wax seal
│   │   ├── MainInvitation.jsx         <-- Royal card & couple names
│   │   ├── ScratchReveal.jsx          <-- Canvas scratch interaction
│   │   ├── WeddingCountdown.jsx       <-- Live countdown timer
│   │   ├── OurStory.jsx               <-- Couple bios & 5 milestones
│   │   ├── SpecialMoments.jsx         <-- Editorial photo journey
│   │   ├── WeddingTimeline.jsx        <-- 3-day itinerary
│   │   ├── PhotoGallery.jsx           <-- Masonry gallery & Lightbox
│   │   ├── VenueSection.jsx           <-- Eden Garden Indore & Map
│   │   ├── MusicPlayer.jsx            <-- Floating visualizer audio player
│   │   ├── FallingPetals.jsx          <-- Canvas rose petals
│   │   └── Footer.jsx                 <-- Closing blessings & signature
│   ├── data/
│   │   └── weddingConfig.js           <-- Central configuration file
│   ├── App.jsx
│   ├── index.css                      <-- Luxury styling & Google Fonts
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ How to Customize / Replace Media Later

All text, dates, timings, venues, photographs, and songs are centrally configured in:
👉 [`src/data/weddingConfig.js`](file:///c:/Users/admin/OneDrive/Desktop/invitation/src/data/weddingConfig.js)

### Replacing Photographs:
1. Drop your high-resolution wedding photos into `public/assets/images/`.
2. Update the filenames or paths inside `weddingConfig.photos` in `src/data/weddingConfig.js`.

### Replacing Background Audio:
1. Place your audio file in `public/assets/audio/`.
2. Update `weddingConfig.audio.src` and `title` in `src/data/weddingConfig.js`.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies (if needed)
npm install

# Start the dev server
npm run dev -- --port 5188 --host

# Build for production
npm run build
```

Open [http://localhost:5188/](http://localhost:5188/) in your web browser.
