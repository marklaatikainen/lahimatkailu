export function convertValue(context, value) {
  const { t } = context;

  const langs = [t('fi'), t('en'), t('se'), t('ru')];
  const ret = ['fi', 'en', 'se', 'ru'];

  return ret[langs.indexOf(value)];
}
