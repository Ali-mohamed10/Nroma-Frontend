/**
 * Nroma — Internationalization Utilities
 *
 * Provides helpers for locale detection, URL building,
 * language switching, and translation dictionary access.
 */

/** @type {readonly ['ar', 'en']} */
export const locales = /** @type {const} */ (['ar', 'en']);

/** @type {'ar'} */
export const defaultLocale = 'ar';

/**
 * Direction map for each locale.
 * @type {Record<string, 'rtl' | 'ltr'>}
 */
export const directions = {
  ar: 'rtl',
  en: 'ltr',
};

/**
 * Extract the locale from a URL pathname.
 * Falls back to defaultLocale if no match.
 * @param {URL | string} url
 * @returns {'ar' | 'en'}
 */
export function getLocaleFromUrl(url) {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && locales.includes(/** @type {any} */ (firstSegment))) {
    return /** @type {'ar' | 'en'} */ (firstSegment);
  }
  return defaultLocale;
}

/**
 * Get the text direction for a locale.
 * @param {'ar' | 'en'} locale
 * @returns {'rtl' | 'ltr'}
 */
export function getDirection(locale) {
  return directions[locale] || 'ltr';
}

/**
 * Build a localized path with consistent trailing slash.
 * @param {'ar' | 'en'} locale
 * @param {string} [path='']
 * @returns {string}
 */
export function localePath(locale, path = '') {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

/**
 * Get the alternate locale path for language switching.
 * Preserves the equivalent current page and trailing slash.
 * @param {string} currentPath - The current URL pathname
 * @returns {{ locale: 'ar' | 'en', path: string }}
 */
export function getAlternatePath(currentPath) {
  const currentLocale = getLocaleFromUrl(currentPath);
  const alternateLocale = currentLocale === 'ar' ? 'en' : 'ar';
  const pathWithoutLocale = currentPath.replace(/^\/(ar|en)\/?/, '');
  const cleanRoute = pathWithoutLocale.replace(/^\/+/, '').replace(/\/+$/, '');
  const path = cleanRoute ? `/${alternateLocale}/${cleanRoute}/` : `/${alternateLocale}/`;
  return {
    locale: alternateLocale,
    path,
  };
}
