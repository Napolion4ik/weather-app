export default function LocationMap({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) {
  return (
    <iframe
      src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es&z=14&output=embed`}
      width="400"
      height="350"
      allowFullScreen
      loading="lazy"
      className="rounded-xl border-2 w-full"
    />
  );
}
