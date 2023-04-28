import {StyleSheet} from 'react-native';
import {ThemeObject} from '../../theme';

const ScreenViewStyle = (_theme: ThemeObject) => {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: _theme.palette?.background?.default,
      flex: 1,
    },
  });
  return styles;
};

export default ScreenViewStyle;
