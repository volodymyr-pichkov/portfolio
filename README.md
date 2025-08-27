Link to Neflify: https://portfolio-apply.netlify.app/

# Quest Portfolio (React + Vite + TypeScript + Tailwind)

It provides an interactive quest catalog where users can explore different quests, view detailed information, and make bookings. The app also includes a Contacts page with embedded Google Maps integration for better user experience.

## Features

- **Quest Catalog**

  - Browse available quests
  - Filter by genre (adventure, horror, sci-fi, detective, etc.)
  - Responsive grid layout for all devices

- **Quest Details Page**

  - Display quest description, difficulty, duration, and number of players
  - Booking form with validation
  - User-friendly UI with accessible design

- **Contacts Page**

  - Address and working hours
  - Embedded Google Map with marker
  - Contact information for easy navigation

- **General**
  - Fully responsive (mobile-first approach)
  - Styled with Tailwind for clean, modern design
  - Basic accessibility support

### Quick Start

1. Clone repository:
   git clone <https://github.com/volodymyr-pichkov/portfolio.git>

2. Install dependencies:
   npm install

3. Start the dev server:
   npm run dev

#### Note on Google Maps API Key

The Google Maps integration in this project requires an API key. Since the key is exposed on the frontend, you should replace it with your own key in the ContactDetails component:

const { isLoaded, loadError } = useJsApiLoader({
id: "google-map-script",
googleMapsApiKey: "YOUR_API_KEY_HERE", // <-- Replace with your own key
});

You can get your API key from Google Cloud Console.
