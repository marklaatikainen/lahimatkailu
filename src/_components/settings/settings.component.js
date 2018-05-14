import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text, View, AsyncStorage } from 'react-native';
import VersionNumber from 'react-native-version-number';
import { SettingsDividerShort, SettingsCategoryHeader, SettingsPicker } from 'react-native-settings-components';
import { setLanguage } from 'redux-i18n';

import { styles, SettingsIconInfo, convertValue } from '../settings';

export class Settings extends Component {
  shouldComponentUpdate(props) {
    return props.navigation.index === 0 ? true : false;
  }

  render() {
    const { lang, dispatch, icons } = this.props;
    const { t } = this.context;

    return (
      <View style={styles.container}>
        <SettingsCategoryHeader title={t('settings')} />
        <SettingsPicker
          title={t('lang')}
          dialogDescription={t('chooseLang')}
          value={t(lang)}
          valuePlaceholder="..."
          possibleValues={[
            { label: 'Suomi', value: 'Suomi' },
            { label: 'English', value: 'English' },
            { label: 'Svenska', value: 'Svenska' },
            { label: 'Русский', value: 'Русский' }
          ]}
          positiveButtonTitle={t('positiveButton')}
          negativeButtonTitle={t('negativeButton')}
          onSaveValue={val => {
            dispatch(setLanguage(convertValue(val)));
            AsyncStorage.setItem('lang', convertValue(val));
          }}
          styleModalButtonsText={styles.text}
        />
        <SettingsDividerShort />
        <Text style={styles.version}>
          {t('version')} {VersionNumber.appVersion}
        </Text>
        <SettingsDividerShort />
        <SettingsIconInfo icons={icons} />
      </View>
    );
  }
}

Settings.contextTypes = {
  t: PropTypes.func.isRequired
};

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
