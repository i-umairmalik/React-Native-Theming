import React, {useRef, useEffect, useMemo, memo} from 'react';
import {Animated, StyleProp, Text, TextStyle} from 'react-native';

import {useThemeAwareObject} from '../theme';

import {RednerCounterStyles} from '../styles';

export const RenderCounter = memo(() => {
  const Styles = useThemeAwareObject(RednerCounterStyles);

  const numberOfRendersRef = useRef<number>(1);

  const opacityAnimatedValueRef = useRef<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    numberOfRendersRef.current += 1;
  });

  useEffect(() => {
    const fadeOutAnimation = Animated.timing(opacityAnimatedValueRef.current, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    });

    const fadeInAnimation = Animated.timing(opacityAnimatedValueRef.current, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    });

    const sequenceAnimations = Animated.sequence([
      fadeOutAnimation,
      fadeInAnimation,
    ]);

    sequenceAnimations.start();

    return () => {
      sequenceAnimations.stop();
    };
  });

  const RootStyles = useMemo(() => {
    const rootStyles = [
      Styles.root,
      {opacity: opacityAnimatedValueRef.current},
    ];

    return rootStyles;
  }, [Styles]);

  const InfoTextBoldStyles = useMemo<StyleProp<TextStyle>>(() => {
    const infoTextBoldStyles: StyleProp<TextStyle> = [
      Styles.infoText,
      Styles.infoTextBold,
    ];

    return infoTextBoldStyles;
  }, [Styles]);

  return (
    <Animated.View style={RootStyles}>
      <Text style={Styles.infoText}>{'Number of renders: '}</Text>
      <Text style={InfoTextBoldStyles}>{numberOfRendersRef.current}</Text>
    </Animated.View>
  );
});
