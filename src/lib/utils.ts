import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function whatsAppUrl(phone: string, message: string) {
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`
}

const NBSP = String.fromCharCode(160)

export function keepTitlesTogether(text: string) {
  return text.replace(/(Mrs?\.)\s+/g, (_match, title: string) => title + NBSP)
}
