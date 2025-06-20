import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Cours} from '@/hooks/API/useCourses';
import {ImageLoader} from '@/components/image-loader';

type CardCoursProps = {
  cours: Cours;
};

export const CardCours: FC<CardCoursProps> = ({cours}) => {
  return (
    <View style={styles.dropShadow}>
      <View style={[styles.wrap, {backgroundColor: cours.bgColor}]}>
        <View style={styles.imgWrap}>
          <ImageLoader url={cours.image} imgStyle={styles.img} />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>{cours.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropShadow: {
    width: 210,
    height: 206,
    backgroundColor: '#E5E8FE',
    borderRadius: 24,
    marginHorizontal: 10,
  },
  wrap: {
    width: 210,
    height: 198,
    borderRadius: 24,
    overflow: 'hidden',
  },
  imgWrap: {
    width: '100%',
    height: 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 144,
    height: 144,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#5A5776',
    fontFamily: 'Nunito',
    fontWeight: '800',
    fontSize: 14,
  },
});
