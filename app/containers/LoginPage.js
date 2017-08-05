'use strict';

import React, { Component } from 'react';
import actions from '../actions/index.js';
import { connect } from 'react-redux';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(actions.login());
  }

  render() {
    return (
      <View style={styles.parentContainer}>
       <Text> Herre </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default connect(state => ({
}))(LoginPage);