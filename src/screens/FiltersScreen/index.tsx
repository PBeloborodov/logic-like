import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'filters'>;

export const FiltersScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filters экран</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
