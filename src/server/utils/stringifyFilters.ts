/**
 * Formats filters for use in the Coronavirus API.
 *
 * API docs: https://coronavirus.data.gov.uk/details/developers-guide/main-api
 *
 * @example
 * const filters = {
 *   areaType: 'overview',
 *   date: '2022-01-01',
 * };
 *
 * Output: "areaType=overview;date=2022-01-01"
 */
export const stringifyFilters = (filters: Record<string, string>): string =>
  Object.entries(filters)
    .map(([key, value]) => `${key}=${value}`)
    .join(';');
