import {FC, useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useCourses} from '@/hooks/API/useCourses';
import {FlashList} from '@shopify/flash-list';
import {CardCours} from './components/card-cours';
import {Themes} from './components/themes';
import {colors} from '@/constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'main'>;

export const MainScreen: FC<Props> = () => {
  const navigation = useNavigation<Props['navigation']>();
  const {courses} = useCourses();
  const [tagCourses, setTagCourses] = useState<string>();

  console.log('courses', courses);

  const formatCourses = useMemo(() => {
    if (!tagCourses) {
      return courses;
    }
    return courses.filter(course => course.tags.includes(tagCourses));
  }, [courses, tagCourses]);

  return (
    <View style={styles.container}>
      <Themes />
      <FlashList
        data={formatCourses}
        estimatedItemSize={210}
        renderItem={({item}) => <CardCours cours={item} />}
        horizontal
        keyExtractor={item => item.id.toString()}
      />
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
