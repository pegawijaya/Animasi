import React, { useRef } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity, Text, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = () => {
  const bounceValue = useRef(new Animated.Value(0)).current;

  const startBounce = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -height / 4,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const resetBounce = () => {
    bounceValue.stopAnimation();
    bounceValue.setValue(0);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/474x/24/be/93/24be93a87108744d09c47fe58b520f8f.jpg' }}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.ball,
          { transform: [{ translateY: bounceValue }] },
        ]}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={startBounce}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetBounce}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 80,
    height: 80,
    backgroundColor: '#ff6f61',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#4b6cb7',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  resetButton: {
    backgroundColor: '#ff6f61',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;