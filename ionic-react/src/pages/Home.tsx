import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const handleAvisosClick = () => {
    history.push('/avisos');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOLA NAME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Información</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <p>29</p>
                  <p>Asistencias</p>
                </IonCol>
                <IonCol>
                  <p>0</p>
                  <p>Ausencias</p>
                </IonCol>
                <IonCol>
                  <p>1</p>
                  <p>Faltas</p>
                </IonCol>
                <IonCol>
                  <p>100%</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Últimos Avisos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  <p>01/05</p>
                  <h3>No olvidar cartulina - Artes</h3>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>10/05</p>
                  <h3>Recordar útiles de aseo - Ed. Física</h3>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>20/05</p>
                  <h3>Revisión de tarea 24/05 - Matemática</h3>
                </IonLabel>
              </IonItem>
            </IonList>
            <IonButton expand="full" onClick={handleAvisosClick}>ver todos</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
