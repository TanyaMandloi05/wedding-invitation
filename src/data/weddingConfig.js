/**
 * Central Wedding Configuration for Jay & Nimisha
 */

export const weddingConfig = {
  // Couple Information (Groom first, then Bride)
  couple: {
    groom: "Jay",
    bride: "Nimisha",
    initials: "J & N",
    monogram: "JN",
    hashtag: "#JayWedsNimisha",
    groomTitle: "The Groom",
    brideTitle: "The Bride",
    groomParents: "S/o Taruna & Shailendra Singh Tanwar",
    brideParents: "D/o Jyoti & Bhushan Sabarwal",
    groomBio: "A new chapter begins for Jay and Nimisha. We're excited to celebrate this special occasion with the people who mean so much to them.",
    brideBio: "A new chapter begins for Jay and Nimisha. We're excited to celebrate this special occasion with the people who mean so much to them.",
  },

  // Core Wedding Reception Date (7:00 PM onwards)
  weddingDate: {
    day: "24",
    month: "November",
    year: "2026",
    weekday: "Tuesday",
    fullDateString: "24 November 2026",
    ceremonyTime: "7:00 PM onwards",
    countdownTarget: "2026-11-24T19:00:00",
  },

  // Main Invitation Texts
  invitationMessage: {
    header: "Together with love and blessings, the Sabarwal Family invites you to celebrate the wedding reception of",
    familyHighlight: "the Sabarwal Family",
    subheading: "Two hearts, one beautiful journey, and a lifetime of togetherness.",
    body: "Join us as we celebrate our wedding reception and create memories that will last forever.",
    closing: "Your Presence Will Make Our Celebration More Special.",
    closingSub: "We would be delighted to have you join us as we begin this beautiful new chapter.",
    signoff: "With Love and Warm Regards",
    thankYou: "Thank You for Being Part of Our Story.",
  },

  // Video Invitation Configuration
  video: {
    src: "", // Plays the automated site video unless an external video path is specified
    title: "Jay & Nimisha — Wedding Reception Video Invitation",
    duration: 50,
  },

  // Background Audio Configuration
  audio: {
    src: "/assets/audio/wedding-music.mp3",
    title: "Aaj Sajeya — Wedding Melodies",
    artist: "Celebration Symphony",
    defaultVolume: 0.75,
  },

  // Uploaded Photographs
  // Website uses strictly the first 3 photos:
  // 1. weddingAttire / coupleMain (Hero arch on main invitation)
  // 2. groomPortrait (Jay portrait on Our Story)
  // 3. bridePortrait (Nimisha portrait on Our Story)
  // The last 2 extra photos (videoExtra1, videoExtra2) are reserved exclusively for the video walkthrough.
  photos: {
    // 1. Main Hero Couple Portrait (Site & Video)
    weddingAttire: {
      id: "couple-main",
      src: "/assets/images/couple-main.jpg",
      alt: "Jay and Nimisha",
      title: "Jay & Nimisha",
    },
    coupleMain: {
      id: "couple-main",
      src: "/assets/images/couple-main.jpg",
      alt: "Jay and Nimisha",
      title: "Jay & Nimisha",
    },
    // 2. Dedicated Groom Portrait (Site & Video)
    groomPortrait: {
      id: "groom-portrait",
      src: "/assets/images/groom-jay.jpg",
      alt: "Jay — The Groom",
      title: "The Groom",
    },
    // 3. Dedicated Bride Portrait (Site & Video)
    bridePortrait: {
      id: "bride-portrait",
      src: "/assets/images/bride-nimisha.jpg",
      alt: "Nimisha — The Bride",
      title: "The Bride",
    },
    // Extra Photos for Video only (Not displayed on the website)
    videoExtra1: {
      id: "couple-video-1",
      src: "/assets/images/couple-video-1.jpg",
      alt: "Jay and Nimisha",
    },
    videoExtra2: {
      id: "couple-video-2",
      src: "/assets/images/couple-video-2.jpg",
      alt: "Jay and Nimisha",
    },
  },

  // Wedding Reception Details
  reception: {
    badge: "The Grand Celebration",
    title: "Wedding Reception",
    subtitle: "In Honor of the Newlyweds Jay & Nimisha",
    invitationText: "With love and happiness, the families of Jay & Nimisha warmly invite you and your family to join us in celebrating their wedding reception. Your presence and blessings will make the occasion even more special.",
    date: "24 November 2026",
    weekday: "Tuesday",
    time: "7:00 PM onwards",
    venueName: "Eden Garden Marriage Garden & Resort",
    venueAddress: "MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh",
    dressCode: "Traditional / Festive Formal Attire",
    highlights: [
      {
        id: "welcome",
        time: "7:00 PM",
        title: "Royal Welcome & Swagat",
        desc: "A warm welcome awaits you with beautiful decorations, refreshing drinks, and music as we begin the celebrations.",
        icon: "Flower2",
        accent: "gold",
      },
      {
        id: "ashirwad",
        time: "8:00 PM onwards",
        title: "Ashirwad Samaroh & Blessings",
        desc: "Join us in blessing Jay & Nimisha as they begin their new journey together. Your wishes and blessings will make this moment even more special.",
        icon: "Gift",
        accent: "rose",
      },
      {
        id: "dinner",
        time: "8:00 PM onwards",
        title: "Swaruchi Bhoj",
        desc: "Enjoy a delicious spread of food with family and friends as we come together to celebrate this special occasion.",
        icon: "UtensilsCrossed",
        accent: "champagne",
      },
    ],
  },

  // Wedding Venue Information
  venue: {
    name: "Eden Garden Marriage Garden & Resort",
    address: "MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh, India",
    city: "Indore, Madhya Pradesh",
    weddingDate: "24 November 2026",
    arrivalTime: "Reception: 7:00 PM onwards",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Eden+Garden+Marriage+Garden+%26+Resort+MR-10+Near+Bridge+New+Bus+Stand+Indore",
    embedMapQuery: "Eden Garden Marriage Garden & Resort, MR-10, Near Bridge, New Bus Stand, Indore, Madhya Pradesh",
  },
};
