import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  TabViewAnimated,
  TabViewPagerPan,
  TabBar,
  SceneMap
} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
// components
import MainPage from '../mainpage/main.component';
import ListPageContainer from '../listpage/listpage.container';
import SettingsContainer from '../settings/settings.container';
import { styles, initialLayout } from '../navigator';
import { navigationActions } from '../../_actions';

export class Navigator extends Component {
  _renderScene = SceneMap({
    settings: SettingsContainer,
    map: MainPage,
    search: ListPageContainer
  });

  _handleIndexChange = index => {
    this.props.dispatch(navigationActions.changeIndex(index));
  };

  _renderIcon({ route }) {
    return <Icon name={route.icon} size={22} style={styles.icon} />;
  }

  _renderFooter = props => (
    <TabBar {...props} style={styles.tabBar} renderIcon={this._renderIcon} />
  );
  render() {
    const { navigation } = this.props;
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={navigation}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
        swipeEnabled={false}
        initialLayout={initialLayout}
        renderPager={props => <TabViewPagerPan {...props} />}
      />
    );
  }
}

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};
