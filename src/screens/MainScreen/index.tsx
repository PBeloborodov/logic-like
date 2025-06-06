import {FC, useCallback, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/types/navigation';
import {useCourses} from '@/hooks/API/useCourses';
import {FlashList} from '@shopify/flash-list';
import {CardCours} from './components/card-cours';
import {Themes} from './components/themes';
import {colors} from '@/constants/colors';
import Loader from '@/components/loader';

type Props = NativeStackScreenProps<RootStackParamList, 'main'>;

export const MainScreen: FC<Props> = ({navigation, route}) => {
  const {courses, loading, error} = useCourses();
  const {tag} = route.params;

  const formatCourses = useMemo(() => {
    if (tag === 'Все темы') {
      return courses;
    }
    return courses.filter(course => course.tags.includes(tag));
  }, [courses, tag]);
  tag;

  const goFiltersScreen = useCallback(() => {
    navigation.navigate('filters', {tag: tag});
  }, [navigation, tag]);

  return (
    <View style={styles.container}>
      <Themes onPress={goFiltersScreen} themes={tag} />
      {loading && <Loader />}
      {formatCourses.length > 0 && (
        <FlashList
          data={formatCourses}
          estimatedItemSize={210}
          renderItem={({item}) => <CardCours cours={item} />}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainBackground,
  },
});
