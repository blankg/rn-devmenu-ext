/**
 * Created by guyblank on 11/2/17.
 */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  NativeEventEmitter,
  NativeModules,
  Modal
} from "react-native";

export default class CustomDevMenuView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  componentWillMount() {
    this.subscription = new NativeEventEmitter(
      NativeModules.CustomDevMenuEventEmitter
    ).addListener("toggleTestView", () => {
      this.setState({ modalVisible: !this.state.modalVisible });
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => this.setState({ modalVisible: false })}
      >
        <View style={styles.devMenuContainer}>
          <Text style={styles.welcome}>Hello custom dev menu!</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  devMenuContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  }
});
