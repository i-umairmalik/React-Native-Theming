import React from 'react';
import {View, Text, StyleProp, TextStyle} from 'react-native';
import {useTheme, useThemeAwareObject} from '../theme';
import {CurrentThemeStyles} from '../styles';

export const CurrentTheme = () => {
  const {theme} = useTheme();
  const Styles = useThemeAwareObject(CurrentThemeStyles);

  const InfoTextBoldStyles = React.useMemo<StyleProp<TextStyle>>(() => {
    const infoTextBoldStyles: StyleProp<TextStyle> = [
      Styles.infoText,
      Styles.infoTextBold,
    ];

    return infoTextBoldStyles;
  }, [Styles]);
  return (
    <View style={Styles.infoTextWrapper}>
      <Text style={Styles.infoText}>Current Theme is : </Text>
      <Text style={InfoTextBoldStyles}>{theme.mode}</Text>
    </View>
  );
};
