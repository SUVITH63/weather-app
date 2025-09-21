// Configuration template file
// Copy this file to config.js and add your actual API key

const CONFIG = {
    // Get your free API key from: https://openweathermap.org/api
    // Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key
    OPENWEATHER_API_KEY: 'YOUR_API_KEY_HERE',
    
    // API settings
    API_BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    UNITS: 'metric', // metric, imperial, or kelvin
    
    // App settings
    DEFAULT_CITY: 'Bengaluru',
    AUTO_SEARCH_DELAY: 500, // milliseconds
    
    // Fun facts about Karnataka weather
    FUN_FACTS: [
        "🌧️ Karnataka receives 75% of its rainfall during monsoon season (June-September)!",
        "☕ Coorg (Kodagu) is called the 'Coffee Bowl of India' and has unique weather patterns!",
        "🌡️ Bangalore is known as the 'Air Conditioned City' due to its pleasant climate!",
        "🌊 Coastal Karnataka (Mangalore, Udupi) gets heavy rainfall - over 3000mm annually!",
        "⛰️ Western Ghats in Karnataka create different climate zones within short distances!",
        "🌾 North Karnataka is drier and faces more heat waves than South Karnataka!",
        "🏞️ Mysore has a moderate climate throughout the year - perfect for palaces!",
        "🌪️ Cyclones from Bay of Bengal can affect Karnataka's weather patterns!"
    ]
};

// This file is safe to commit to version control
// Your actual config.js file with the real API key will be ignored by git
