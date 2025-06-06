import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {colors} from '@/constants/colors';
type Props = {
  name: string;
  onPress: (v: string) => void;
  isActive: boolean;
};

export const FilterName: FC<Props> = ({name, onPress, isActive}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(name);
      }}
      style={[styles.wrap, isActive && styles.wrapActive]}>
      <Text style={[styles.text, isActive && styles.textActive]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: '#C5D0E6',
    borderWidth: 2,
    minWidth: 336,
    minHeight: 48,
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 3,
  },
  wrapActive: {
    backgroundColor: '#5CBB73',
    borderColor: '#5CBB73',
  },
  text: {
    fontFamily: 'Nunito',
    fontWeight: '800',
    color: '#39414B',
  },
  textActive: {
    color: colors.white,
  },
});
