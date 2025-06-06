import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import IconArrow from '@/assets/img/svg/arrow-down.svg';
import {colors} from '@/constants/colors';

type Props = {
  onPress: () => void;
  themes: string;
};

export const Themes: FC<Props> = ({onPress, themes}) => {
  return (
    <TouchableOpacity style={styles.wrap} onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{themes}</Text>
        <View style={styles.select}>
          <IconArrow />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    top: 30,
  },
  btn: {
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'Nitro',
    fontWeight: '800',
  },
  select: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    marginLeft: 5,
  },
});
