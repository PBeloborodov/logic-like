import {FC, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/types/navigation';
import {tags} from '@/constants/tags';
import {FilterName} from './componets/filter-name';

type Props = NativeStackScreenProps<RootStackParamList, 'filters'>;

export const FiltersScreen: FC<Props> = ({route, navigation}) => {
  const {tag} = route.params;

  const CustomHeader = () => <View style={styles.header} />;

  const setActiveTags = useCallback(
    (tagName: string) => {
      navigation.navigate('main', {tag: tagName});
    },
    [navigation],
  );

  useEffect(() => {
    navigation.setOptions({
      animation: 'slide_from_bottom',
      headerTransparent: true,
      header: CustomHeader,
      headerStyle: {
        backgroundColor: 'red',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выбор темы</Text>
      <View style={styles.listWrap}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {tags.map(item => (
            <FilterName
              name={item}
              key={item}
              onPress={setActiveTags}
              isActive={tag === item}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listWrap: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  header: {
    height: 35,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
