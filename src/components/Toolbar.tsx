import React from 'react';

import {Platform, StatusBar, Text, View} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {ToolbarStyle, createStyleVariables} from '../styles';

interface ToolbarProps {
  title: string;
}

export const Toolbar = React.memo<ToolbarProps>(props => {
  const ToolbarStyles = useThemeAwareObject(ToolbarStyle);
  const StyleVariables = useThemeAwareObject(createStyleVariables);

  const IosStatusBarElementOrNull = React.useMemo(() => {
    if (Platform.OS !== 'ios') {
      return null;
    }

    return <View style={ToolbarStyles.iosStatusBar} />;
  }, [ToolbarStyles]);

  return (
    <View>
      {IosStatusBarElementOrNull}
      <View style={ToolbarStyles.container}>
        <StatusBar
          backgroundColor={StyleVariables.statusBarColor}
          barStyle={'light-content'}
        />
        <Text style={ToolbarStyles.text}>{props.title}</Text>
      </View>
    </View>
  );
});
