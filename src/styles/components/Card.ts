import {StyleSheet} from 'react-native';
import {ThemeObject} from '../../theme';

const CardStyles = (_theme: ThemeObject) => {
  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      backgroundColor: _theme.palette?.background?.paper,
      justifyContent: 'center',
      marginTop: _theme?.spacing?.double,
      padding: _theme?.spacing?.double,
    },
  });
  return styles;
};

export default CardStyles;
