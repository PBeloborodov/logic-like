import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import IconArrow from '@/assets/img/svg/arrow-down.svg';

type Props = {
  theme?: string;
};

export const Themes: FC<Props> = ({theme}) => {
  return (
    <TouchableOpacity style={styles.wrap}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Все темы</Text>
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
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Nitro',
    fontWeight: '800',
  },
  select: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    marginLeft: 5,
  },
});
