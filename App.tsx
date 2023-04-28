/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {DEFAULT_LIGHT_THEME, ThemeProvider} from './src/theme';
import {ScreenView} from './src/components/ScreenView';
import {Toolbar} from './src/components/Toolbar';
import {ChangeTheme} from './src/containers/ChangeTheme';

function App(): JSX.Element {
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <ScreenView>
        <Toolbar title={'Hello From Root'} />
        <ChangeTheme />
      </ScreenView>
    </ThemeProvider>
  );
}

export default App;
