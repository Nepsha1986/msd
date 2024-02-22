/**
 * Formats filters for use in the Coronavirus API.
 *
 * @example
 * const filters = {
 *   areaType: 'overview',
 *   date: '2022-01-01',
 * };
 *
 * Output: "areaType=overview;date=2022-01-01"
 *
 * @todo Consider making the function more type-specific if needed.
 */
export const formatFilters = (obj: Record<string, string>): string =>
  Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join(';');
