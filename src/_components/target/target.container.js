import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { targetActions } from '../../_actions';
import { styles } from '../navigator';
import { Target } from '../target';

function navigateBack() {
  this.props.dispatch(targetActions.closeTarget());
}

class TargetContainer extends Component {
  componentDidMount() {
    this.props.navigation.setParams({ target: this.context.t('target') });
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params && params.target,
      headerStyle: styles.topBar,
      headerTitleStyle: styles.topBarText,
      headerLeft: (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            this.props.dispatch(targetActions.closeTarget());
          }}
        >
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return <Target {...this.props} />;
  }
}

TargetContainer.contextTypes = {
  t: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  target: state.target,
  dimensions: state.dimensions,
  lang: state.i18nState.lang
});

export default connect(mapStateToProps)(TargetContainer);
