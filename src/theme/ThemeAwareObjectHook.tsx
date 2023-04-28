import React from 'react';
import {ThemeObject} from './ThemeInterface';
import {useTheme} from './ThemeContext';

type Generator<T extends {}> = (theme: ThemeObject) => T;

export const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  const {theme} = useTheme();

  const ThemeAwareObject = React.useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
