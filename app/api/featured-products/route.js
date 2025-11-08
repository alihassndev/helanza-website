import { NextResponse } from "next/server";
import { products } from "@/data/products"; // Import our new master list
import { headers } from "next/headers";

// --- Our 3 "Smart Packs" ---
// We use the product IDs from our data file

const coldPack = [1, 2, 3, 4]; // Puffer, Tracksuit, Versity, Hoodie
const normalPack = [5, 6, 7, 8]; // Leggyset, WindBracker, Soccer, Polo
const hotPack = [9, 10, 11, 12]; // Shortset, Bikini, BasketBall, T-Shirt

// This function finds a product by its ID
function getProductById(id) {
  return products.find((p) => p.id === id);
}

export async function GET(request) {
  // <--- 1. ADD "request" HERE
  try {
    const headersList = request.headers; // <--- 2. CHANGE THIS LINE
    const city = headersList.get("x-vercel-ip-city") || "Sialkot"; // <--- THIS LINE STAYS THE SAME

    const apiKey = process.env.WEATHER_API_KEY;
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!weatherResponse.ok) throw new Error("Failed to fetch weather");

    const weatherData = await weatherResponse.json();
    const temp = weatherData.main.temp;

    let smartPackIds;

    // --- This is our new 3-pack logic ---
    if (temp < 15) {
      // It's Cold (< 15°C)
      smartPackIds = coldPack;
    } else if (temp >= 15 && temp <= 25) {
      // It's Normal (15°C - 25°C)
      smartPackIds = normalPack;
    } else {
      // It's Hot (> 25°C)
      smartPackIds = hotPack;
    }

    // Get the full product details for the IDs in the chosen pack
    const smartProducts = smartPackIds.map(getProductById);

    return NextResponse.json(smartProducts);
  } catch (error) {
    // FALLBACK: If anything fails, just send the "Normal" pack
    const fallbackProducts = normalPack.map(getProductById);
    return NextResponse.json(fallbackProducts);
  }
}

export const revalidate = 0;
