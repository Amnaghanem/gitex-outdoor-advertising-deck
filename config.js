/**
 * Mira Media — GITEX Global 2026 outdoor advertising deck.
 * Exhibition dates are 8–11 December 2026 at Expo City Dubai
 * (Dubai Exhibition Centre listing and the gitex.com conference overview).
 * Arrival Plaza Mega Digital Network at Dubai Exhibition Centre:
 * 6 screens between the South and North Halls, 6 clients,
 * 12-second creative at 2400 × 720 px.
 * Expo City destination screens are the current digital network:
 * 6 step, 4 horizontal, 41 MUPI and 14 smart MUPI (65 total).
 * Station counts are from the attached Expo City / Metro credentials (2024).
 * Rates are not listed here; they are confirmed before booking.
 */
window.DECK = {
  meta: {
    title: "Seen at GITEX.",
    subtitle: "Outdoor advertising for companies attending GITEX Global",
    period: "8–11 December 2026",
    kicker: "Outdoor proposal · For companies attending GITEX",
  },

  brand: {
    name: "Mira Media",
    logo: "assets/mira-logo.png",
    website: "https://miramedia.ae/",
    websiteLabel: "miramedia.ae",
    taglines: [
      "GITEX Global",
      "8–11 December 2026",
      "Expo City Dubai",
      "Outdoor advertising",
      "Mira Media",
    ],
  },

  cover: {
    line1: "Seen at",
    line2: "GITEX.",
    hook: "Outdoor media for every company attending GITEX GLOBAL, 8–11 December 2026 — on the Arrival Plaza between the South and North Halls, on the metro into Expo City, inside the destination, and on the road under the line.",
    windowLabel: "Campaign window",
    window: "8–11 December 2026",
    venueLabel: "Venue",
    venue: "Expo City Dubai",
    tag: "GITEX GLOBAL · 8–11 December 2026 · Expo City Dubai",
  },

  gitex: {
    lead: "GITEX GLOBAL is at Expo City Dubai from Tuesday 8 to Friday 11 December 2026. Four days.",
    facts: [
      { label: "GITEX GLOBAL Expo", value: "8–11 Dec", note: "Expo City Dubai" },
      { label: "Opens", value: "8 Dec", note: "Dubai Exhibition Centre" },
      { label: "Expand North Star", value: "8–11 Dec", note: "Startup show, Expo City Dubai" },
    ],
    note: "The exhibition at Expo City is 8–11 December 2026, from the Dubai Exhibition Centre listing and the gitex.com conference overview.",
    paths: [
      {
        title: "Tuesday 8 December",
        body: "GITEX GLOBAL opens at Dubai Exhibition Centre, Expo City Dubai.",
      },
      {
        title: "Through Friday 11 December",
        body: "The exhibition runs four days at Expo City Dubai. Expand North Star runs 8–11 December 2026 at Expo City Dubai.",
      },
    ],
  },

  halls: {
    title: "Arrival Plaza screens",
    lead: "Six screens on the Arrival Plaza Mega Digital Network, between the South and North Halls at Dubai Exhibition Centre, where GITEX GLOBAL is held. Shared by 6 clients. Each ad plays for 12 seconds.",
    photo: "assets/sites/arrival-plaza-photo.png",
    map: "assets/sites/arrival-plaza-map.jpg",
    photoClass: "is-hall",
    mapLight: true,
    specs: [
      { label: "Quantity", value: "6 screens" },
      { label: "Clients", value: "6" },
      { label: "Resolution", value: "2400 × 720 px" },
      { label: "Creative", value: "12 seconds · JPEG, PNG or MP4" },
      { label: "Location", value: "South & North Halls" },
    ],
  },

  station: {
    title: "Expo Station digital network",
    lead: "134 LED screens at Expo City Station for GITEX GLOBAL, 8–11 December 2026 at Expo City Dubai. Counts are from the 2024 Expo City / Metro credentials. Availability is reconfirmed before booking.",
    total: 134,
    clients: 10,
    duration: "12 sec",
    formats: [
      { name: "PSD", screens: 51 },
      { name: "Platform skylight", screens: 46 },
      { name: "LED column", screens: 29 },
      { name: "Entrance totem", screens: 4 },
      { name: "Wall unit", screens: 2 },
      { name: "Ticketing office", screens: 1 },
      { name: "Police room", screens: 1 },
    ],
    specs: [
      "Entrance, platform, concourse and footbridge",
      "Video or static, 12 seconds per artwork, across 10 clients",
      "À la carte digital screens can be added",
    ],
  },

  city: {
    title: "Expo City destination screens",
    lead: "65 digital screens inside Expo City for people already at the destination during GITEX GLOBAL, 8–11 December 2026.",
    total: 65,
    clients: 10,
    duration: "15 sec",
    formats: [
      { name: "Step screens", screens: 6, photo: "assets/sites/step-screens-bmw.png", slide: "steps" },
      { name: "Horizontal screens", screens: 4, photo: "assets/sites/horizontal-screens-photo.jpg", slide: "horizontal" },
      { name: "MUPI screens", screens: 41, photo: "assets/sites/mupi-screens-photo.png", slide: "mupi" },
      { name: "Smart MUPI screens", screens: 14, photo: "assets/sites/smart-mupi-photo.jpg", slide: "smart" },
    ],
  },

  steps: {
    lead: "Six screens on the Expo and City towers, at Rove before Al Wasl.",
    photo: "assets/sites/step-screens-bmw.png",
    map: "assets/sites/step-screens-map.png",
    specs: [
      { label: "Quantity", value: "6" },
      { label: "Size", value: "259 sqm for 3x | 518 sqm total" },
      { label: "Specification", value: "P10.41 mm" },
      { label: "Location", value: "Rove before Al Wasl" },
    ],
  },

  horizontal: {
    lead: "Four screens at the Sustainability Entrance.",
    photo: "assets/sites/horizontal-screens-photo.jpg",
    map: "assets/sites/horizontal-screens-map.png",
    specs: [
      { label: "Quantity", value: "4" },
      { label: "Size", value: "17 m x 1 m | 43 m x 1 m" },
      { label: "Specification", value: "P3.91 mm" },
      { label: "Location", value: "Sustainability Entrance" },
    ],
  },

  mupi: {
    lead: "41 screens at the entrances and across Expo City.",
    photo: "assets/sites/mupi-screens-photo.png",
    map: "assets/sites/mupi-screens-map.png",
    specs: [
      { label: "Quantity", value: "41" },
      { label: "Size", value: "1 m x 2 m" },
      { label: "Specification", value: "P3.91 mm" },
      { label: "Location", value: "Entrances & all over" },
    ],
  },

  smart: {
    lead: "14 screens at the entrances and around Al Wasl.",
    photo: "assets/sites/smart-mupi-photo.jpg",
    map: "assets/sites/smart-mupi-map.png",
    specs: [
      { label: "Quantity", value: "14" },
      { label: "Size", value: "1.5 m x 3 m" },
      { label: "Specification", value: "P3.91 mm" },
      { label: "Location", value: "Entrances & all over" },
    ],
  },

  graffiti: {
    title: "Metro graffiti on the Expo road",
    lead: "Three circuits on the road under the metro line at Expo City, during GITEX GLOBAL, 8–11 December 2026.",
    stats: [
      { label: "Circuits", value: "3" },
      { label: "Stretch", value: "32" },
      { label: "Pillars", value: "59" },
    ],
    splits: [
      { name: "32A", pillars: 20, where: "Expo Village Residences, and one entry and exit to Expo." },
      { name: "32B", pillars: 20, where: "The middle of the stretch, along Expo Road." },
      { name: "32C", pillars: 19, where: "The other entry and exit to Expo." },
    ],
    body: "Drivers see the panels from Sheikh Mohammed Bin Zayed Road and Expo Road, beside Expo 2020 Metro Station.",
    photo: "assets/sites/metro-graffiti.jpg",
    place: "Expo City Dubai Exhibition Centre",
  },

  rates: {
    peg: 3.6725,
    sites: [
      { name: "Arrival Plaza screens", detail: "6 screens, 6 clients, 12 sec", aed: 55000 * 3.6725 },
      { name: "Metro station screens", detail: "134 screens, 10 clients, 12 sec", aed: 255000 },
      { name: "Expo City", detail: "65 screens, 10 clients, 15 sec", aed: 275000 },
      { name: "Metro graffiti", detail: "Stretch 32, 59 pillars", aed: 56000 * 3.6725 },
    ],
    packages: [
      { name: "Metro and Expo City", detail: "Station screens and destination screens", usd: 96785 },
      { name: "All three", detail: "Station, Expo City, and graffiti", usd: null },
    ],
  },

  plan: {
    lead: "Four layers any company attending GITEX GLOBAL, 8–11 December 2026 at Expo City Dubai, can book together or on their own.",
    layers: [
      {
        num: "01",
        title: "At the halls",
        place: "Arrival Plaza",
        body: "6 screens between the South and North Halls at Dubai Exhibition Centre. Shared by 6 clients. Each ad plays for 12 seconds.",
      },
      {
        num: "02",
        title: "Arrive",
        place: "Expo Station",
        body: "134 LED screens on the entrance, platform, concourse and footbridge. Shared by 10 clients. Each ad plays for 12 seconds.",
      },
      {
        num: "03",
        title: "Arrive on site",
        place: "Expo City",
        body: "65 destination screens — step, horizontal, MUPI and smart MUPI — shared by 10 clients. Each Expo City ad plays for 15 seconds.",
      },
      {
        num: "04",
        title: "Approach",
        place: "Expo road",
        body: "59 pillars across stretches 32A, 32B and 32C, seen from the main road and the service road under the line.",
      },
    ],
  },

  conditions: {
    lead: "Booking conditions for GITEX GLOBAL, 8–11 December 2026 at Expo City Dubai. Arrival Plaza and station artwork each play for 12 seconds. Arrival Plaza is shared by 6 clients, and the station by 10. The other points come from the 2024 Expo City / Metro screen credentials. Mira Media reconfirms each point with the site owner before a campaign is confirmed.",
    items: [
      { title: "Payment", body: "Full payment in advance." },
      { title: "VAT", body: "Amounts are subject to 5% VAT." },
      { title: "Artwork deadline", body: "Material is due 10 working days before the campaign." },
      { title: "Language", body: "Artwork must contain 50% Arabic and pass municipality approval." },
      { title: "Cancellation", body: "No cancellation is accepted once the campaign is booked." },
      { title: "Spot length", body: "Arrival Plaza artwork plays for 12 seconds, across 6 clients. Station LED artwork plays for 12 seconds, across 10 clients. Expo City artwork plays for 15 seconds, across 10 clients." },
    ],
  },

  delivery: {
    lead: "Mira Media is a Dubai advertising agency. This proposal is for GITEX GLOBAL, 8–11 December 2026 at Expo City Dubai. The work can be placement only, or design, production and monitoring together.",
    items: [
      { title: "Placement", body: "More than 10 types of advertising placement across the UAE." },
      { title: "One team", body: "Planning, design, production and installation without handing the job between contractors." },
      { title: "Coverage", body: "Dubai, Abu Dhabi, Sharjah and the other emirates." },
      { title: "Flexible scope", body: "Place finished artwork, or ask Mira Media to design, produce and follow the campaign." },
    ],
  },

  needs: {
    lead: "Any company attending GITEX GLOBAL, 8–11 December 2026 at Expo City Dubai, can send these. Mira Media will come back with available sites, dates and rates.",
    items: [
      "Your company and the campaign objective",
      "Dates inside 8–11 December 2026, or a longer run around the show",
      "Which layer to use: the halls, the station, Expo City, the road, or all of them",
      "Arabic and English artwork, or a request for Mira Media to produce it",
      "A budget range so the recommendation can match it",
    ],
  },

  contact: {
    line1: "Book a site",
    line2: "at GITEX.",
    headline: "Book a site at GITEX.",
    message: "Tell us your company, the dates and the budget for GITEX GLOBAL, 8–11 December 2026 at Expo City Dubai. We will confirm what is still open on the Arrival Plaza, on the station, inside Expo City and on the Expo road.",
    address: "Dubai Hills Estate, Park Heights Square 1, 6th floor, Dubai, UAE",
    poBox: "P.O. Box 213983",
    email: "contact@miramedia.ae",
    phones: ["+971 4 436 8624", "+971 52 966 3372"],
  },
};
