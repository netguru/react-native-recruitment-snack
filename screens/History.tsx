import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';
import {HistoryItem} from '../components/HistoryItem';
import {MockedHistory} from '../types/history';
import {formatDate} from '../utils/dates';
import { MOCKED_HISTORY } from '../api/mocks';

export const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>History</Text>
      <ScrollView contentContainerStyle={styles.listWrapper}>
        {MOCKED_HISTORY.map((item: MockedHistory) => (
          <HistoryItem
            date={formatDate(item.date)}
            name={item.name}
            temperature={item.temperature}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
    margin: 16,
  },
  listWrapper: {
    flex: 1,
  },
});
