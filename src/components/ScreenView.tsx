import React from 'react';
import {View} from 'react-native';

import {useThemeAwareObject} from '../theme';

import {ScreenViewStyle} from '../styles';

export interface ScreenViewProps {
  children?: React.ReactNode;
}

export const ScreenView = React.memo<ScreenViewProps>(props => {
  const Styles = useThemeAwareObject(ScreenViewStyle);

  return <View style={Styles.root}>{props.children}</View>;
});
