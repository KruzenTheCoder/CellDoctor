import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL =
  "https://wa.me/27617353919?text=Hi%20Cell%20Doctor%2C%20I%20need%20a%20repair%20booking.";

export const PHONE_NUMBER = "061 735 3919";
export const SHOP_ADDRESS = "Shop 10, Gem City, 54 Parthenon Street, Phoenix, 4068";
export const SHOP_ADDRESS_SHORT = "Gem City, Phoenix";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=54+Parthenon+Street+Phoenix+4068+Durban";
export const PHONE_BRANDS = [
  "Apple",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "OPPO",
  "Vivo",
  "Nokia",
  "Google",
  "OnePlus",
  "Motorola",
  "Sony",
  "LG",
  "Realme",
  "Tecno",
  "Infinix",
  "Other",
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(price);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-ZA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
