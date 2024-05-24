import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Avisos from './pages/Avisos';
import Notas from './pages/Notas';
import Login from './pages/Login';
import { home, list, clipboard } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact />
          <Route path="/home" render={() => (isAuthenticated ? <Home /> : <Redirect to="/login" />)} exact />
          <Route path="/avisos" render={() => (isAuthenticated ? <Avisos /> : <Redirect to="/login" />)} exact />
          <Route path="/notas" render={() => (isAuthenticated ? <Notas /> : <Redirect to="/login" />)} exact />
          <Route exact path="/">
            <Redirect to={isAuthenticated ? "/home" : "/login"} />
          </Route>
        </IonRouterOutlet>
        {isAuthenticated && (
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact />
              <Route path="/avisos" component={Avisos} exact />
              <Route path="/notas" component={Notas} exact />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Inicio</IonLabel>
              </IonTabButton>
              <IonTabButton tab="notas" href="/notas">
                <IonIcon icon={clipboard} />
                <IonLabel>Notas</IonLabel>
              </IonTabButton>
              <IonTabButton tab="avisos" href="/avisos">
                <IonIcon icon={list} />
                <IonLabel>Avisos</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
