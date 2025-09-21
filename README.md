# 🌤️ Karnataka Weather Hub

A beautiful weather application that provides current weather information and school holiday predictions for Karnataka districts.

## 🚀 Features

- **Real-time Weather Data** - Current temperature, conditions, and forecasts
- **Karnataka District Support** - All 30+ districts with local information
- **School Holiday Predictions** - Smart algorithm to predict school/college closures
- **Rain Predictions** - Weather-based rain likelihood forecasts
- **Interactive Design** - Beautiful animations and responsive UI
- **Local Tips** - District-specific information and news sources

## 🔧 Setup Instructions

### 1. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key from the dashboard

### 2. Configure Your API Key

**IMPORTANT SECURITY SETUP:**

1. Copy the example configuration:
   ```bash
   cp config.example.js config.js
   ```

2. Edit `config.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   OPENWEATHER_API_KEY: 'your_actual_api_key_here'
   ```

3. **Never commit `config.js` to version control!** It's already in `.gitignore`

### 3. Run the Application

Simply open `index.html` in your web browser - no server required!

## 🔒 Security Best Practices

- ✅ API key is stored in separate `config.js` file
- ✅ `config.js` is automatically ignored by git (`.gitignore`)
- ✅ Example template provided (`config.example.js`)
- ✅ No sensitive data in main code files
- ✅ Clear error messages for missing configuration

## 📁 File Structure

```
weather-app-main/
├── index.html          # Main application
├── config.js           # Your API key (DO NOT COMMIT)
├── config.example.js   # Template (safe to commit)
├── .gitignore         # Keeps sensitive files out of git
└── README.md          # This file
```

## 🎯 How It Works

1. **Weather Data**: Uses OpenWeatherMap API for real-time weather information
2. **Holiday Prediction**: Analyzes weather conditions to predict school closures
3. **District Selection**: Dropdown with all Karnataka districts for easy selection
4. **Smart Algorithms**: Considers humidity, temperature, wind, and weather conditions

## 🌟 Special Features

- **Animated Backgrounds** - Beautiful gradient animations
- **Interactive Elements** - Hover effects and 3D transforms
- **Fun Facts** - Rotating weather trivia about Karnataka
- **Local Tips** - District-specific information and news sources
- **Mobile Responsive** - Works perfectly on all devices

## 🛡️ Troubleshooting

### API Key Issues
- Make sure you've updated `config.js` with your real API key
- Check that your OpenWeatherMap API key is active
- Verify the key has the correct permissions

### Weather Data Not Loading
- Check browser console for error messages
- Ensure you have an internet connection
- Verify the city name is spelled correctly

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for Karnataka weather enthusiasts!**
