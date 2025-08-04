interface CurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

interface WeatherCardProps {
  curr: CurrentWeather;
  max: number;
  min: number;
  nameCity?: string;
}
// Код погоди(weathercode) : яка погода
const weatherDesc: Record<number, string> = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Cloudy",
  45: "Fog",
  48: "Fog with ice crystals",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Light rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Continuous snowflakes",
  80: "Showers",
  95: "Thunderstorm",
};

// Код погоди(weathercode) : смайлик погоди
function getWeatherIcon(code: number) {
  switch (code) {
    case 0:
      return "🌞";
    case 1:
    case 2:
      return "🌤";
    case 3:
      return "☁️";
    case 45:
    case 48:
      return "🌫️";
    case 61:
    case 63:
    case 65:
      return "🌧️";
    case 71:
      return "❄️";
    case 95:
      return "⛈️";
    default:
      return "🌈";
  }
}

function getWeatherDescription(code: number) {
  return weatherDesc[code] || "Needs clarification";
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  curr,
  max,
  min,
  nameCity,
}) => {
  console.log(curr);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-center text-2xl font-bold mb-4">Weather</h1>
      <div className="flex items-center justify-center text-6xl mb-2">
        {getWeatherIcon(curr.weathercode)}
      </div>
      <p className="text-center text-lg mb-4">
        {getWeatherDescription(curr.weathercode)}
      </p>
      {nameCity && (
        <p className="text-center text-lg mb-4 font-bold">{nameCity}</p>
      )}

      <div className=" sm:grid sm:grid-cols-3 text-center gap-4 py-4 border-y">
        <div>
          <p className="text-sm text-gray-500">Now</p>
          <p className="text-2xl">{curr.temperature}°C</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Max</p>
          <p className="text-2xl">{max}°C</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Min</p>
          <p className="text-2xl">{min}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
