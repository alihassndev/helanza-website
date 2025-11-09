import { NextResponse } from "next/server";
// Use the relative path you mentioned
import { products } from "../../../data/products";

const coldPack = [1, 2, 3, 4];
const normalPack = [5, 6, 7, 8];
const hotPack = [9, 10, 11, 12];

function getProductById(id) {
  return products.find((p) => p.id === id);
}

export async function GET(request) {
  try {
    const headersList = request.headers;
    const city = headersList.get("x-vercel-ip-city") || "Sialkot";

    const apiKey = process.env.WEATHER_API_KEY;
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      { cache: "no-store" }
    );

    if (!weatherResponse.ok) throw new Error("Failed to fetch weather");
    const weatherData = await weatherResponse.json();
    const temp = weatherData.main.temp;

    let smartPackIds;
    if (temp < 15) {
      smartPackIds = coldPack;
    } else if (temp >= 15 && temp <= 25) {
      smartPackIds = normalPack;
    } else {
      smartPackIds = hotPack;
    }

    const smartProducts = smartPackIds.map(getProductById);
    return NextResponse.json(smartProducts);
  } catch (error) {
    // FALLBACK
    return NextResponse.json(normalPack.map(getProductById));
  }
}
