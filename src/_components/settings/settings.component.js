import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView, Text } from 'react-native';
import VersionNumber from 'react-native-version-number';
import {
  SettingsDividerShort,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from 'react-native-settings-components';

import { styles } from '../settings';

export class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowPushNotifications: false,
      language: ''
    };
  }

  shouldComponentUpdate(props) {
    return props.navigation.index === 0 ? true : false;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SettingsCategoryHeader
          title={this.context.t('settings')}
        />
        <SettingsPicker
          title={this.context.t('lang')}
          dialogDescription={this.context.t('chooseLang')}
          possibleValues={[
            { label: this.context.t('fi'), value: 'fi' },
            { label: this.context.t('en'), value: 'en' },
            { label: this.context.t('se'), value: 'se' },
            { label: this.context.t('ru'), value: 'ru' }
          ]}
          positiveButtonTitle={'Ok'}
          negativeButtonTitle={'Cancel'}
          onSaveValue={value => {
            this.props.changeLanguage(value);
          }}
          value={this.state.language}
          styleModalButtonsText={styles.text}
        />
        <SettingsDividerShort />
        <SettingsSwitch
          title={this.context.t('notifications')}
          onSaveValue={value => {
            this.setState({
              allowPushNotifications: value
            });
          }}
          value={this.state.allowPushNotifications}
          thumbTintColor={
            this.state.allowPushNotifications
              ? styles.switchEnabled
              : styles.switchDisabled
          }
        />
        <SettingsDividerShort />
        <Text style={styles.version}>{this.context.t('version')} {VersionNumber.appVersion}</Text>
      </ScrollView>
    );
  }
}

Settings.contextTypes = {
  t: PropTypes.func.isRequired
};

Settings.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};
