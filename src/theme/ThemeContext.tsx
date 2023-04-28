import React from 'react';

import {DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_MODE} from './DefaultDark';
import {DEFAULT_LIGHT_THEME, DEFAULT_LIGHT_THEME_MODE} from './DefaultLight';
import {ThemeObject} from './ThemeInterface';

interface ProvidedValue {
  theme: ThemeObject;
  setTheme: (theme: ThemeObject) => void;
  toggleTheme: () => void;
}

const Context = React.createContext<ProvidedValue>({
  theme: DEFAULT_LIGHT_THEME,
  setTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

export interface Props {
  initial: ThemeObject;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  const [theme, setTheme] = React.useState<ThemeObject>(props.initial);

  const SetThemeCallback = React.useCallback((newTheme: ThemeObject) => {
    setTheme((currentTheme: ThemeObject) => {
      if (currentTheme.mode === newTheme.mode) {
        return currentTheme;
      }

      return newTheme;
    });
  }, []);

  const ToggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme.mode === DEFAULT_LIGHT_THEME_MODE) {
        return DEFAULT_DARK_THEME;
      }
      if (currentTheme.mode === DEFAULT_DARK_THEME_MODE) {
        return DEFAULT_LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      setTheme: SetThemeCallback,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, SetThemeCallback, ToggleThemeCallback]);

  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
