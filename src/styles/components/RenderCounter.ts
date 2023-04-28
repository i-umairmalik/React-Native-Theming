import {StyleSheet} from 'react-native';
import {ThemeObject} from '../../theme';
const RednerCounterStyles = (theme: ThemeObject) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
    },
    infoText: {
      color: theme?.palette?.text?.primary,
      fontSize: theme?.typography?.fontSizeLarge,
    },
    infoTextBold: {
      fontWeight: 'bold',
    },
  });

  return styles;
};

export default RednerCounterStyles;
