import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {FC} from 'react';
import {Cours} from '@/hooks/API/useCourses';

type CardCoursProps = {
  cours: Cours;
};

export const CardCours: FC<CardCoursProps> = ({cours}) => {
  return (
    <View style={styles.dropShadow}>
      <View style={[styles.wrap, {backgroundColor: cours.bgColor}]}>
        <ImageBackground source={{uri: cours.image}} style={styles.img} />
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
  img: {
    width: '100%',
    height: 162,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#5A5776',
    // fontFamily: 'Nunito',
    fontWeight: '800',
    fontSize: 14,
  },
});
