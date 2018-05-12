import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import VersionNumber from 'react-native-version-number';
import { SettingsDividerShort, SettingsCategoryHeader, SettingsPicker } from 'react-native-settings-components';
import { styles, IconInfo } from '../settings';

export class Settings extends Component {
  shouldComponentUpdate(props) {
    return props.navigation.index === 0 ? true : false;
  }

  render() {
    const { lang } = this.props;
    return (
      <View style={styles.container}>
        console.warn(lang)
        <ScrollView style={styles.container}>
          <SettingsCategoryHeader title={this.context.t('settings')} />
          <SettingsPicker
            title={this.context.t('lang')}
            dialogDescription={this.context.t('chooseLang')}
            possibleValues={[
              { label: this.context.t('fi'), value: 'fi' },
              { label: this.context.t('en'), value: 'en' },
              { label: this.context.t('se'), value: 'se' },
              { label: this.context.t('ru'), value: 'ru' }
            ]}
            positiveButtonTitle={this.context.t('positiveButton')}
            negativeButtonTitle={this.context.t('negativeButton')}
            value={this.context.t(lang)}
            onSaveValue={value => {
              this.props.changeLanguage(value);
            }}
            styleModalButtonsText={styles.text}
          />
          <SettingsDividerShort />
          <Text style={styles.version}>
            {this.context.t('version')} {VersionNumber.appVersion}
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
  changeLanguage: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};
