import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import Header from '../components/Header';
import './Avisos.css';

// Importar las imágenes
import profe2Mujer from '../imagenes/profe_2_mujer.jpg';
import profe3Mujer from '../imagenes/profe_3_mujer.jpg';
import profe4Mujer from '../imagenes/profe_4_mujer.jpg';
import profe1Hombre from '../imagenes/profe_1.jpg';
import profe2Hombre from '../imagenes/profe_2.jpg';

const Avisos: React.FC = () => {
  const avisos = [
    { id: 1, initial: 'MA', name: 'Miss Maria Antonia', date: '01/05/2024', message: 'No olvidar cartulina - Artes', avatar: profe2Mujer},
    { id: 2, initial: 'LR', name: 'Miss Leo Ruiz', date: '10/05/2024', message: 'Recordar útiles de aseo - Ed. Física', avatar: profe3Mujer},
    { id: 3, initial: 'SM', name: 'Miss Sofia Melendes', date: '20/05/2024', message: 'Revisar la tarea el 24/05 - Matemática', avatar: profe4Mujer },
    { id: 4, initial: 'EC', name: 'Míster Eduardo Corte', date: '02/06/2024', message: 'Temario prueba: Cuerpo humano - Biología', avatar:profe1Hombre},
    { id: 5, initial: 'FB', name: 'Míster Fernando Burgos', date: '05/06/2024', message: 'Llevar impreso libro “Pinocho” - Lenguaje', avatar: profe2Hombre},
  ];

  return (
    <IonPage>
      <Header title="Avisos" />
      <IonContent>
        <IonList>
          {avisos.map(aviso => (
            <IonItem key={aviso.id}>
              {aviso.avatar ? (
                <IonAvatar slot="start">
                  <img src={aviso.avatar} alt={aviso.name} className="profesor-avatar" />
                </IonAvatar>
              ) : (
                <div className="initials" slot="start">
                  {aviso.initial}
                </div>
              )}
              <IonLabel>
                <h2>{aviso.name}</h2>
                <p>{aviso.date}</p>
                <p>{aviso.message}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Avisos;
