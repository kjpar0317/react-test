import React, { Fragment } from 'react'
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import client from './utils/apolloClient'

import Dashboard from './features/dashboard'
import Login from './features/login'

const App = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
