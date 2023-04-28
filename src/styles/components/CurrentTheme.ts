import {StyleSheet} from 'react-native';
import {ThemeObject} from '../../theme';

const CurrentThemeStyles = (_theme: ThemeObject) => {
  const styles = StyleSheet.create({
    infoTextWrapper: {
      flexDirection: 'row',
      marginBottom: _theme?.spacing?.double,
    },
    infoText: {
      color: _theme?.palette?.text?.primary,
      fontSize: _theme?.typography?.fontSizeLarge,
      textTransform: 'capitalize',
    },
    infoTextBold: {
      fontWeight: 'bold',
    },
  });
  return styles;
};

export default CurrentThemeStyles;
