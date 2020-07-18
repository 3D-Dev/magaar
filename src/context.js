// @flow

import { createContext } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

export type AppContextTypes = {|
  pathname: string,
  query: Object,
|};

const AppContext = createContext<AppContextTypes>({
  pathname: '',
  query: {},
  ...ReduxProvider.childContextTypes,
});

export default AppContext;
