import WeatherCard from "@/components/weather/WeatherCard";

type WeatherData = {
  current_weather: { temperature: number; weathercode: number };
  daily?: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
    time: string[];
  };
};

export default async function WeatherPage({
  searchParams,
}: {
  searchParams?: { latitude: string; longitude: string };
}) {
  //Київ default
  const lat = searchParams.latitude || "50.45";
  const lon = searchParams.longitude || "30.52";

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m&timezone=Europe/Kyiv`,
    { cache: "no-store" }
  );

  if (!res.ok)
    return (
      <p className="text-red-500 text-center m-8">Failed to load weather</p>
    );

  const data: WeatherData = await res.json();
  const curr = data.current_weather;
  const daily = data.daily!;
  const todayIndex = 0;
  const max = daily.temperature_2m_max[todayIndex];
  const min = daily.temperature_2m_min[todayIndex];

  return <WeatherCard curr={curr} min={min} max={max} nameCity="Kyiv" />;
}
