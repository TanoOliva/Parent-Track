import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Notas.css';

const Notas: React.FC = () => {
  return (
    <IonPage>
      <Header title="Notas" />
      <IonContent>
        {/* Contenido de la página de Notas */}
      </IonContent>
    </IonPage>
  );
};

export default Notas;
