import React from 'react';
import {View} from 'react-native';
import {useThemeAwareObject} from '../theme';

import {CardStyles} from '../styles';

export const CardComponent = ({children}: any) => {
  const Styles = useThemeAwareObject(CardStyles);

  return <View style={Styles.root}>{children}</View>;
};

const Card = React.memo(CardComponent);
export default Card;
