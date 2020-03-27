import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { routesHome, routesAdmin } from './routes';
import Admin from './pages/admin/admin';
import HomeTemplate from './template/homeTemplate';
import AdminTemplate from './template/adminTemplate';

function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
          <Route path="/admin" component={Admin} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
