import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput style={styles.input} placeholder="Type city name here..." />
      <Button title="Search" onPress={() => {}} />
      <View style={styles.details}>
        <Text style={styles.cityLabel}>City</Text>
        <Text style={styles.temperatureLabel}>Temperature</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    margin: 16,
  },
  title: {
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityLabel: {
    fontSize: 32,
    opacity: 0.5,
  },
  temperatureLabel: {
    fontSize: 48,
    opacity: 0.8,
  },
});
