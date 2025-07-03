import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const currencyFormat = (amount: number, locale: Intl.LocalesArgument = 'en-US', options: Intl.NumberFormatOptions = {}) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 2,
    ...options
  }).format(amount);
};

export const formatProjectTotalPrice = (project: any) => {
  return currencyFormat(project.total_price ?? 0, 'es-AR', {
    maximumFractionDigits: 0,
    currency: project.currency === 'US$' ? 'usd' : 'eur'
  });
};

export const formatProjectPrice = (price: number, currency: string) => {
  return currencyFormat(price ?? 0, 'es-AR', {
    maximumFractionDigits: 0,
    currency: currency === 'US$' ? 'usd' : 'eur'
  });
};