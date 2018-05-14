export function convertValue(value) {
  const langs = ['Suomi', 'English', 'Svenska', 'Русский'];
  const ret = ['fi', 'en', 'se', 'ru'];

  return ret[langs.indexOf(value)];
}
