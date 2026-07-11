// Central content store for Wander & Whimsy
// Using picsum.photos seeded images so every photo reliably loads.

export const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const destinations = [
  {
    slug: "bali-indonesia",
    name: "Bali, Indonesia",
    tagline: "Island of Gods",
    image: img("bali-hero", 1200, 700),
    thumb: img("bali-thumb", 600, 700),
    description:
      "Bali feels like a dream stitched together with rice paddies, temple bells and endless golden sunsets. Every corner smells of incense and frangipani.",
    highlights: ["Uluwatu Temple sunsets", "Tegallalang rice terraces", "Canggu beach cafés", "Ubud jungle walks"],
    days: 7,
  },
  {
    slug: "paris-france",
    name: "Paris, France",
    tagline: "The City of Love",
    image: img("paris-hero", 1200, 700),
    thumb: img("paris-thumb", 600, 700),
    description:
      "Croissants at dawn, the Seine at dusk, and the Eiffel Tower twinkling every hour — Paris is proof that some clichés are true because they're wonderful.",
    highlights: ["Eiffel Tower at night", "Montmartre cafés", "Louvre wanderings", "Seine river walks"],
    days: 5,
  },
  {
    slug: "kyoto-japan",
    name: "Kyoto, Japan",
    tagline: "Where tradition meets peace",
    image: img("kyoto-hero", 1200, 700),
    thumb: img("kyoto-thumb", 600, 700),
    description:
      "Lantern-lit streets, quiet shrines and the softest matcha lattes. Kyoto moves slowly, and it teaches you to do the same.",
    highlights: ["Fushimi Inari trails", "Gion district evenings", "Bamboo grove mornings", "Tea ceremonies"],
    days: 6,
  },
  {
    slug: "santorini-greece",
    name: "Santorini, Greece",
    tagline: "Dreamy sunsets & white streets",
    image: img("santorini-hero", 1200, 700),
    thumb: img("santorini-thumb", 600, 700),
    description:
      "Whitewashed walls, blue domes and a sunset that turns the whole sky into watercolor. Santorini is a love letter to slow afternoons.",
    highlights: ["Oia sunset point", "Caldera boat rides", "Volcanic beaches", "Cliffside cafés"],
    days: 4,
  },
  {
    slug: "manali-india",
    name: "Manali, India",
    tagline: "Mountains, rivers and peace",
    image: img("manali-hero", 1200, 700),
    thumb: img("manali-thumb", 600, 700),
    description:
      "Pine forests, snow-dusted peaks and rivers that never stop talking. Manali is where the mountains hold you like an old friend.",
    highlights: ["Solang Valley snow", "Old Manali cafés", "Beas river walks", "Rohtang pass views"],
    days: 5,
  },
  {
    slug: "lake-como-italy",
    name: "Lake Como, Italy",
    tagline: "Golden lights, calm waters",
    image: img("como-hero", 1200, 700),
    thumb: img("como-thumb", 600, 700),
    description:
      "Pastel villas, still water and evenings that glow amber. Lake Como is the definition of a slow, beautiful pause.",
    highlights: ["Bellagio evenings", "Villa gardens", "Ferry rides", "Lakeside dinners"],
    days: 3,
  },
];

export const stories = [
  {
    slug: "a-sunrise-to-remember",
    category: "Travel",
    title: "A Sunrise to Remember",
    excerpt: "Waking up to mountains and magic skies.",
    image: img("sunrise-story", 900, 650),
    readTime: "5 min read",
    likes: 128,
    date: "May 18, 2024",
    content: [
      "There is something about waking up before the sun that makes the whole world feel like it belongs only to you. I remember pulling back the curtain of that little wooden cabin in Manali and watching the mountains slowly turn from grey to gold.",
      "I made a cup of coffee, wrapped myself in a blanket, and just sat there — no phone, no plans, just the quiet hush of pine trees and the occasional bird deciding it was time to wake up too.",
      "Some mornings don't need a checklist. They just need you to show up and watch.",
    ],
  },
  {
    slug: "coffee-and-quiet-mornings",
    category: "Coffee",
    title: "Coffee & Quiet Mornings",
    excerpt: "The best conversations happen in silence.",
    image: img("coffee-story", 900, 650),
    readTime: "4 min read",
    likes: 96,
    date: "May 16, 2024",
    content: [
      "I've come to believe that the first cup of coffee in the morning is a conversation with yourself. No agenda, no small talk — just the quiet clink of a spoon and steam curling up like a little ghost.",
      "In every city I've visited, I've made it a ritual to find one small café and sit there for an hour, just watching the world slowly wake up outside the window.",
      "It's funny how the same drink can taste completely different depending on where your heart is that day.",
    ],
  },
  {
    slug: "the-quiet-moments",
    category: "Diaries",
    title: "The Quiet Moments",
    excerpt: "Some of my favorite memories are the quietest.",
    image: img("diary-story", 900, 650),
    readTime: "3 min read",
    likes: 87,
    date: "May 14, 2024",
    content: [
      "Not every memory needs to be loud to matter. Some of the ones I hold closest are the smallest — a candle flickering while it rained outside, a page half-written in my journal, a cup of tea going cold because I was too busy thinking.",
      "This little diary page is for those in-between moments — the ones nobody photographs, but everybody remembers.",
    ],
  },
  {
    slug: "evenings-in-lake-como",
    category: "Travel",
    title: "Evenings in Lake Como",
    excerpt: "Golden lights, calm waters and little dreams.",
    image: img("como-story", 900, 650),
    readTime: "4 min read",
    likes: 105,
    date: "May 12, 2024",
    content: [
      "Lake Como at dusk looks like it was painted by someone who really believed in happy endings. The water turns to liquid gold, the villas light up one by one, and everything just... slows down.",
      "I sat by the shore with a gelato slowly melting in my hand, and thought — I could stay here forever and never get bored of this view.",
    ],
  },
  {
    slug: "solo-travel-tips",
    category: "Tips",
    title: "Solo Travel Tips",
    excerpt: "What I've learned from traveling alone.",
    image: img("tips-story", 900, 650),
    readTime: "6 min read",
    likes: 150,
    date: "May 10, 2024",
    content: [
      "Traveling alone taught me things no group trip ever could — how to sit with my own company, how to ask for help in a language I didn't speak, how to enjoy a meal without needing anyone across the table.",
      "Here are a few things I always carry now: a paper map (yes, really), a journal, a portable charger, and the courage to say yes to a little detour.",
      "The best souvenir from solo travel isn't a photo — it's the quiet confidence you bring home with you.",
    ],
  },
  {
    slug: "a-perfect-rainy-day",
    category: "Diaries",
    title: "A Perfect Rainy Day",
    excerpt: "Books, coffee and the sound of rain.",
    image: img("rainyday-story", 900, 650),
    readTime: "4 min read",
    likes: 74,
    date: "May 14, 2024",
    content: [
      "Rainy days used to feel like plans falling apart. Now they feel like permission — permission to stay in, make tea, and read that book that's been waiting on my shelf for months.",
      "There's a specific kind of happiness in listening to rain against the window while wrapped in a blanket with nowhere to be.",
    ],
  },
  {
    slug: "street-food-adventures",
    category: "Food",
    title: "Street Food Adventures",
    excerpt: "Trying the yummiest street food in Bangkok.",
    image: img("streetfood-story", 900, 650),
    readTime: "5 min read",
    likes: 112,
    date: "May 12, 2024",
    content: [
      "Bangkok at night turns into a giant open kitchen. Every corner smells like lemongrass, chili and something sizzling on a hot pan.",
      "I still think about that little cart near the river that sold pad thai wrapped in a banana leaf — five minutes of eating that I still dream about.",
    ],
  },
  {
    slug: "swiss-alps-diaries",
    category: "Travel",
    title: "Swiss Alps Diaries",
    excerpt: "Snowy views and cozy vibes.",
    image: img("swissalps-story", 900, 650),
    readTime: "6 min read",
    likes: 130,
    date: "May 10, 2024",
    content: [
      "The Swiss Alps don't just look like a postcard, they feel like one — crisp air, snow crunching underfoot, and hot chocolate that tastes better at altitude for reasons I can't explain.",
      "I spent an entire afternoon just watching the cable cars glide over the valley, feeling impossibly small and impossibly happy.",
    ],
  },
];

export const galleryImages = [
  { id: 1, src: img("gallery-1", 700, 900), caption: "Morning light, Kyoto" },
  { id: 2, src: img("gallery-2", 700, 700), caption: "Latte art, somewhere cozy" },
  { id: 3, src: img("gallery-3", 700, 950), caption: "Paris rooftops" },
  { id: 4, src: img("gallery-4", 700, 800), caption: "Campfire nights" },
  { id: 5, src: img("gallery-5", 700, 700), caption: "Rainy window diaries" },
  { id: 6, src: img("gallery-6", 700, 900), caption: "Santorini blues" },
  { id: 7, src: img("gallery-7", 700, 750), caption: "Bookshelf & lavender" },
  { id: 8, src: img("gallery-8", 700, 900), caption: "Airport wanderlust" },
  { id: 9, src: img("gallery-9", 700, 700), caption: "Waffles & berries" },
  { id: 10, src: img("gallery-10", 700, 850), caption: "Autumn work mornings" },
  { id: 11, src: img("gallery-11", 700, 900), caption: "Manali snow trails" },
  { id: 12, src: img("gallery-12", 700, 700), caption: "Croissant & roses" },
];

export const getStoryBySlug = (slug) => stories.find((s) => s.slug === slug);
export const getDestinationBySlug = (slug) => destinations.find((d) => d.slug === slug);
