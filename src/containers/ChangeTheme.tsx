import React, {useMemo, memo} from 'react';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  useTheme,
  useThemeAwareObject,
} from '../theme';
import Card from '../components/Card';
import {CurrentTheme} from '../components/CurrentTheme.';
import {Text, TouchableOpacity, View} from 'react-native';
import {ChangeThemeStyles} from '../styles';
export const ChangeTheme = memo(() => {
  const Styles = useThemeAwareObject(ChangeThemeStyles);

  const {setTheme, toggleTheme} = useTheme();

  const ToggleButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity
        onPress={toggleTheme}
        activeOpacity={0.75}
        style={Styles.button}>
        <Text style={Styles.buttonText}>{'Toggle the Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [toggleTheme, Styles]);
  const SetLightThemeButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => setTheme(DEFAULT_LIGHT_THEME)}
        activeOpacity={0.75}
        style={Styles.button}>
        <Text style={Styles.buttonText}>{'Set light Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [setTheme, Styles]);

  const SetDarkThemeButtonElement = React.useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => setTheme(DEFAULT_DARK_THEME)}
        activeOpacity={0.75}
        style={Styles.button}>
        <Text style={Styles.buttonText}>{'Set dark Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [setTheme, Styles]);

  return (
    <Card>
      <CurrentTheme />
      <View style={Styles.buttonsWrapper}>
        {ToggleButtonElement}
        {SetLightThemeButtonElement}
        {SetDarkThemeButtonElement}
      </View>
    </Card>
  );
});
