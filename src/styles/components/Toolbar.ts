import {StyleSheet} from 'react-native';
import {ThemeObject} from '../../theme';
import DeviceInfo from 'react-native-device-info';

export const ToolbarStyle = (_theme: ThemeObject) => {
  const styles = StyleSheet.create({
    iosStatusBar: {
      height: DeviceInfo.hasNotch() ? 44 : 20,
      backgroundColor: _theme?.palette?.primary?.main,
    },
    container: {
      alignItems: 'center',
      backgroundColor: _theme?.palette?.primary?.main,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: _theme?.spacing?.base,
      width: '100%',
    },
    text: {
      color: _theme?.palette?.text?.primary,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  return styles;
};

export const createStyleVariables = (_theme: ThemeObject) => {
  const styleVariables = {
    statusBarColor: _theme?.palette?.primary?.dark,
  };
  return styleVariables;
};
