import {StyleSheet} from 'react-native';
import {ThemeObject} from '../../theme';

const ChangeThemeStyles = (_theme: ThemeObject) => {
  const styles = StyleSheet.create({
    buttonsWrapper: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: _theme?.spacing?.base,
      height: 300,
    },
    button: {
      backgroundColor: _theme?.palette?.primary?.main,
      borderRadius: 4,
      flex: 1,
      justifyContent: 'center',
      marginVertical: _theme?.spacing?.base,
      padding: _theme?.spacing?.base,
    },
    buttonText: {
      color: _theme?.palette?.text?.secondary,
      fontSize: _theme?.typography?.fontSizeLarge,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  return styles;
};

export default ChangeThemeStyles;
