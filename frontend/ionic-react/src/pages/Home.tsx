import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';
import './Avisos.css';


const Home: React.FC = () => {
  const history = useHistory();
  const handleAvisosClick = () => {
    history.push('/avisos');
  };

  const avisos = [
    { date: '01/05', message: 'No olvidar cartulina - Artes' },
    { date: '10/05', message: 'Recordar útiles de aseo - Ed. Física' },
    { date: '20/05', message: 'Revisión de tarea 24/05 - Matemática' },
  ];

  return (
    <IonPage>
      <Header title="" />
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Información</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <p className="asistencias">29</p>
                  <p>Asistencias</p>
                </IonCol>
                <IonCol>
                <p className="ausencias">0</p>
                  <p>Ausencias</p>
                </IonCol>
                <IonCol>
                  <p>1</p>
                  <p>Faltas</p>
                </IonCol>
                <IonCol>
                  <span className="porcentaje">100%</span>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader style={{ textAlign: "center" }}>
            <IonCardTitle>Últimos Avisos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
            {avisos.map((aviso, index) => (
                <IonItem key={index} className="avisos-item">
                  <div className="avisos-date">
                    <p>{aviso.date}</p>
                  </div>
                  <IonLabel className="avisos-message">
                    <h3>{aviso.message}</h3>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
            <IonButton expand="full" onClick={handleAvisosClick}>ver todos</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
