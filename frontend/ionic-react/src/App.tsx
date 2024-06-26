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
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonList,
  IonItem,
  IonAvatar,
  IonPage,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Avisos from './pages/Avisos';
import Notas from './pages/Notas';
import Login from './pages/Login';
import Eventos from './pages/Eventos';
import Formulario from "./pages/Formulario";
import { home, list, clipboard, callOutline, headsetOutline, settingsOutline, logOutOutline } from 'ionicons/icons';

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
        {/* Contenido principal */}
        <IonPage id="main-content">
          {/* Menú lateral */}
          {isAuthenticated && (
            <IonMenu contentId="main-content" side="end">
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Menú</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <div style={{ textAlign: 'center', padding: '16px'}}>
                  <IonAvatar>
                    <img src="../src/imagenes/luffy.jpg" alt="Mi perfil" />
                  </IonAvatar>
                  <p>Mi perfil</p>
                </div>
                <IonList>
                  <IonItem button>
                    <IonIcon slot="start" icon={callOutline} />
                    <IonLabel>Contacto Colegio</IonLabel>
                  </IonItem>
                  <IonItem button>
                    <IonIcon slot="start" icon={headsetOutline} />
                    <IonLabel>Soporte Técnico</IonLabel>
                  </IonItem>
                  <IonItem button>
                    <IonIcon slot="start" icon={settingsOutline} />
                    <IonLabel>Configuración</IonLabel>
                  </IonItem>
                  <IonItem button>
                    <IonIcon slot="start" icon={logOutOutline} />
                    <IonLabel>Cerrar Sesión</IonLabel>
                  </IonItem>
                </IonList>
              </IonContent>
            </IonMenu>
          )}

          <IonContent>
            <IonRouterOutlet>
              <Route path="/login" component={Login} exact />
              <Route path="/formulario" component={Formulario} exact />
              <Route path="/home" render={() => (isAuthenticated ? <Home /> : <Redirect to="/login" />)} exact />
              <Route path="/avisos" render={() => (isAuthenticated ? <Avisos /> : <Redirect to="/login" />)} exact />
              <Route path="/eventos" render={() => (isAuthenticated ? <Eventos /> : <Redirect to="/login" />)} exact />
              <Route path="/notas" render={() => (isAuthenticated ? <Notas /> : <Redirect to="/login" />)} exact />
              <Route exact path="/">
                <Redirect to={isAuthenticated ? "/login" : "/home"} />
              </Route>
            </IonRouterOutlet>
          </IonContent>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
