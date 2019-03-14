const location = "Bogota, CO";
const api_key = "c4c29d0c4be972ee5a3d7571699d6e92";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

export default api_weather;