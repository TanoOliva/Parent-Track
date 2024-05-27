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
  IonMenuToggle,
  IonList,
  IonToolbar,
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonAvatar,
  IonPage,
  IonButtons,
  IonMenuButton,

} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Avisos from './pages/Avisos';
import Notas from './pages/Notas';
import Login from './pages/Login';
import Eventos from './pages/Eventos';
import Registro from './pages/Registro';
import { home, list, clipboard, callOutline, headsetOutline, settingsOutline, logOutOutline, menuOutline } from 'ionicons/icons';

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
        <IonMenu contentId="main-content" side="start">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menú</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <IonAvatar>
                <img src="https://via.placeholder.com/150" alt="Mi perfil" />
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

          <IonContent className="ion-padding">
            <IonRouterOutlet>
              <Route path="/login" component={Login} exact />
              <Route path="/registro" component={Registro} exact />
              <Route path="/home" render={() => (isAuthenticated ? <Home /> : <Redirect to="/login" />)} exact />
              <Route path="/avisos" render={() => (isAuthenticated ? <Avisos /> : <Redirect to="/login" />)} exact />
              <Route path="/eventos" render={() => (isAuthenticated ? <Eventos /> : <Redirect to="/login" />)} exact />
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
                  <Route path="/eventos" component={Eventos} exact />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel>Inicio</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="avisos" href="/avisos">
                    <IonIcon icon={list} />
                    <IonLabel>Avisos</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="notas" href="/notas">
                    <IonIcon icon={clipboard} />
                    <IonLabel>Notas</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            )}
          </IonContent>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;