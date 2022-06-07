import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { mount } from 'marketing/MarketingApp';
//import MarketingApp from './components/MarketingApp';
//import AuthApp from './components/AuthApp';
import Progress from './components/Progress';
import Header from './components/Header';
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

//console.log(mount);
export default () => {
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
        <div>
          <h1>Hi there!</h1>
          <hr/>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />            
            </Switch>
          </Suspense>          
        </div>
    </StylesProvider>         
    </BrowserRouter>      
  );    
};

