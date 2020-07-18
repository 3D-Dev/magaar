// @flow

import type { Node } from 'react';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { Provider as ReduxProvider } from 'react-redux';
import type { AppContextTypes } from '../context';
import AppContext from '../context';

type Props = {|
  insertCss: Function,
  client: Object,
  context: AppContextTypes,
  children: Node,
|};

const App = ({ client, insertCss, context, children }: Props) => (
  // NOTE: If you need to add or modify header, footer etc. of the app,
  // please do that inside the Layout component.
  <ReduxProvider store={context.store}>
    <ApolloProvider client={client}>
      <AppContext.Provider value={context}>
        <StyleContext.Provider value={{ insertCss }}>
          {children}
        </StyleContext.Provider>
      </AppContext.Provider>
    </ApolloProvider>
  </ReduxProvider>
);

export default App;
