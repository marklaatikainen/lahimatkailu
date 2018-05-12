import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView, Text, View, AsyncStorage } from 'react-native';
import VersionNumber from 'react-native-version-number';
import { SettingsDividerShort, SettingsCategoryHeader, SettingsPicker } from 'react-native-settings-components';
import { setLanguage } from 'redux-i18n';

import { styles, IconInfo } from '../settings';

export class Settings extends Component {
  shouldComponentUpdate(props) {
    return props.navigation.index === 0 ? true : false;
  }

  convertValue(value) {
    const langs = [this.context.t('fi'), this.context.t('en'), this.context.t('se'), this.context.t('ru')];
    const ret = ['fi', 'en', 'se', 'ru'];

    return ret[langs.indexOf(value)];
  }

  render() {
    const { lang, dispatch } = this.props;
    const { t } = this.context;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <SettingsCategoryHeader title={t('settings')} />
          <SettingsPicker
            title={t('lang')}
            dialogDescription={t('chooseLang')}
            value={t(lang)}
            valuePlaceholder="..."
            possibleValues={[
              { label: t('fi'), value: t('fi') },
              { label: t('en'), value: t('en') },
              { label: t('se'), value: t('se') },
              { label: t('ru'), value: t('ru') }
            ]}
            positiveButtonTitle={t('positiveButton')}
            negativeButtonTitle={t('negativeButton')}
            onSaveValue={val => {
              dispatch(setLanguage(this.convertValue(val)));
              AsyncStorage.setItem('lang', this.convertValue(val));
            }}
            styleModalButtonsText={styles.text}
          />
          <SettingsDividerShort />
          <Text style={styles.version}>
            {t('version')} {VersionNumber.appVersion}
          </Text>
        </ScrollView>
        <IconInfo />
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
  dispatch: PropTypes.func.isRequired
};
