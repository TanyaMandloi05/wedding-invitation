/**
 * Central Wedding Configuration for Jay & Nimisha
 * All photos, music, dates, timings, venues, and descriptions are centrally configured here.
 * To replace dummy photos or music in the future, simply update the file paths or URLs here.
 */

export const weddingConfig = {
  // Couple Information (Groom first, then Bride)
  couple: {
    groom: "Jay",
    bride: "Nimisha",
    initials: "J & N",
    monogram: "JN",
    hashtag: "#JayWedsNimisha",
    groomTitle: "The Dashing Groom",
    brideTitle: "The Radiant Bride",
    groomBio: "Steadfast, thoughtful, and full of heartfelt laughter. Jay is the anchor and best friend, ready to begin the most magical journey of a lifetime beside his soulmate.",
    brideBio: "Graceful, vibrant, and with a smile that brightens every room. Nimisha brings joy and warmth to every moment, embarking on this royal chapter of love and forever togetherness.",
  },

  // Core Wedding Reception Date
  weddingDate: {
    day: "24",
    month: "November",
    year: "2026",
    weekday: "Tuesday",
    fullDateString: "24 November 2026",
    ceremonyTime: "7:30 PM onwards",
    countdownTarget: "2026-11-24T19:30:00",
  },

  // Main Invitation Texts
  invitationMessage: {
    header: "Together with love and blessings, we invite you to celebrate the wedding reception of",
    subheading: "Two hearts, one beautiful journey, and a lifetime of togetherness.",
    body: "Join us as we celebrate our wedding reception and create memories that will last forever.",
    closing: "Your Presence Will Make Our Celebration More Special.",
    closingSub: "We would be delighted to have you join us as we begin this beautiful new chapter.",
    signoff: "With Love and Warm Regards",
    thankYou: "Thank You for Being Part of Our Story.",
  },

  // Video Invitation Configuration
  video: {
    src: "/assets/video/invitation-video.mp4",
    youtubeUrl: "",
    title: "Jay & Nimisha — Wedding Reception Video Invitation",
    duration: "1:15",
  },

  // Background Audio Configuration
  audio: {
    src: "/assets/audio/wedding-music.mp3",
    title: "Aaj Sajeya — Wedding Melodies",
    artist: "Celebration Symphony",
    defaultVolume: 0.75,
  },

  // Uploaded Photographs
  photos: {
    // 1. Traditional Wedding Attire (Main Hero Arch)
    weddingAttire: {
      id: "wedding-attire",
      src: "/assets/images/photo-wedding-attire.png",
      alt: "Jay and Nimisha in royal wedding attire with floral garlands",
      title: "Sacred Vows & Timeless Elegance",
      subtitle: "The Royal Union",
      tag: "Wedding Ceremony",
      aspect: "tall",
    },
    // Dedicated Groom Portrait (Groom Card - First)
    groomPortrait: {
      id: "groom-portrait",
      src: "/assets/images/portrait-jai.png",
      alt: "Jay — The Dashing Groom",
      title: "The Dashing Groom",
    },
    // Dedicated Bride Portrait (Bride Card - Second)
    bridePortrait: {
      id: "bride-portrait",
      src: "/assets/images/portrait-nimisha.png",
      alt: "Nimisha — The Radiant Bride",
      title: "The Radiant Bride",
    },
    // 2. Sunset Hug (Warm terracotta tones)
    sunsetHug: {
      id: "sunset-hug",
      src: "/assets/images/photo-sunset-hug.png",
      alt: "Jay and Nimisha sharing a warm embrace under golden sunset skies",
      title: "Warm Whispers & Golden Light",
      subtitle: "Our Quiet Sanctuary",
      tag: "Golden Hour",
      aspect: "tall",
    },
    // 3. Nature Smile (Crisp white daylight)
    natureSmile: {
      id: "nature-smile",
      src: "/assets/images/photo-nature-smile.jpg",
      alt: "Jay and Nimisha smiling together amidst nature and lush greenery",
      title: "Candid Smiles & Sunlit Days",
      subtitle: "Pure Happiness",
      tag: "Candid Joy",
      aspect: "tall",
    },
    // 4. Evening Celebration (Black formal wear)
    eveningCelebration: {
      id: "evening-celebration",
      src: "/assets/images/photo-evening-celebration.jpg",
      alt: "Jay and Nimisha in sophisticated black evening wear celebrating together",
      title: "A Night of Starry Elegance",
      subtitle: "Celebrations of Joy",
      tag: "Evening Gala",
      aspect: "square",
    },
    // 5. Ocean Sunset (Horizon silhouette)
    oceanSunset: {
      id: "ocean-sunset",
      src: "/assets/images/photo-ocean-sunset.png",
      alt: "Jay and Nimisha gazing at each other against an ocean sunset horizon",
      title: "Endless Horizons of Love",
      subtitle: "Looking Into Forever",
      tag: "Romance",
      aspect: "tall",
    },
  },

  // Wedding Reception Details (Exclusively inviting to the Reception)
  reception: {
    badge: "The Grand Celebration",
    title: "Wedding Reception",
    subtitle: "In Honor of the Newlyweds Jay & Nimisha",
    invitationText: "With great joy and boundless love, the families of Jay & Nimisha cordially invite you and your family to grace the auspicious Wedding Reception and shower your heartfelt blessings on the newlyweds.",
    date: "24 November 2026",
    weekday: "Tuesday",
    time: "7:30 PM onwards",
    venueName: "Eden Garden Marriage Garden & Resort",
    venueAddress: "MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh",
    dressCode: "Traditional / Festive Formal Attire",
    highlights: [
      {
        id: "welcome",
        time: "7:30 PM",
        title: "Royal Welcome & Swagat",
        desc: "A warm and fragrant welcome with floral showers, refreshing welcome drinks, and traditional live melodies.",
        icon: "Flower2",
        accent: "gold",
      },
      {
        id: "ashirwad",
        time: "8:00 PM onwards",
        title: "Ashirwad Samaroh & Blessings",
        desc: "Join Jay & Nimisha on the grand royal stage to shower them with flower petals, warmest wishes, and memorable photographs.",
        icon: "Gift",
        accent: "rose",
      },
      {
        id: "dinner",
        time: "8:00 PM onwards",
        title: "Swaruchi Bhoj (Royal Reception Feast)",
        desc: "A lavish banquet featuring royal North Indian & Malwi culinary specialties, live gourmet counters, and exquisite traditional sweets.",
        icon: "UtensilsCrossed",
        accent: "champagne",
      },
    ],
  },

  // Our Story Milestones
  storyMilestones: [
    {
      number: "01",
      title: "The First Meeting",
      subtitle: "Where Fate Wrote Its First Line",
      photoKey: "natureSmile",
      description: "It began with a casual glance and an effortless conversation that felt surprisingly familiar. What started as an ordinary afternoon quickly turned into an unforgettable memory, planting the seed of something truly extraordinary.",
    },
    {
      number: "02",
      title: "The Beginning of a Beautiful Bond",
      subtitle: "From Strangers to Inseparable Best Friends",
      photoKey: "sunsetHug",
      description: "Coffee dates turned into long walks under twilight skies. Through shared laughter, honest conversations, and countless inside jokes, an unshakeable foundation of friendship and deep admiration blossomed.",
    },
    {
      number: "03",
      title: "Precious Memories",
      subtitle: "Moments Captured in the Heart",
      photoKey: "eveningCelebration",
      description: "From celebrating life's quiet triumphs to dancing through joyful family gatherings, every step reinforced that home wasn't a place—it was being right next to each other.",
    },
    {
      number: "04",
      title: "A New Chapter Begins",
      subtitle: "The Promise of Forever",
      photoKey: "oceanSunset",
      description: "With hearts full of gratitude and love, the question was asked and the easiest 'Yes' was given. Two paths converged into one shared horizon, blessed by families and guided by destiny.",
    },
    {
      number: "05",
      title: "Forever Together",
      subtitle: "A Lifetime of Love Awaits",
      photoKey: "weddingAttire",
      description: "Now, as we celebrate our wedding reception, we stand hand in hand ready to begin a lifetime of shared dreams, laughter, and endless devotion.",
    },
  ],

  // Little Moments, Forever Memories
  moments: [
    {
      title: "The First Glimpse",
      caption: "A spark that turned into our forever sanctuary.",
      photoKey: "natureSmile",
      location: "Under Clear Skies",
    },
    {
      title: "Golden Hour Whispers",
      caption: "Finding comfort in each other's warm embrace.",
      photoKey: "sunsetHug",
      location: "Desert Dunes at Dusk",
    },
    {
      title: "Nights to Remember",
      caption: "Dressed in elegance, celebrating the thrill of life.",
      photoKey: "eveningCelebration",
      location: "Gala Evening",
    },
    {
      title: "Dreaming Beyond",
      caption: "Watching the sun kiss the waves, promising tomorrow.",
      photoKey: "oceanSunset",
      location: "Seaside Twilight",
    },
    {
      title: "Royal Beginnings",
      caption: "Steeped in tradition, crowned with pure love.",
      photoKey: "weddingAttire",
      location: "The Wedding Reception",
    },
  ],

  // Wedding Venue Information
  venue: {
    name: "Eden Garden Marriage Garden & Resort",
    address: "MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh, India",
    city: "Indore, Madhya Pradesh",
    weddingDate: "24 November 2026",
    arrivalTime: "Reception: 7:30 PM onwards",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Eden+Garden+Marriage+Garden+%26+Resort+MR-10+Near+Bridge+New+Bus+Stand+Indore",
    embedMapQuery: "Eden Garden Marriage Garden & Resort, MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh",
  },
};
