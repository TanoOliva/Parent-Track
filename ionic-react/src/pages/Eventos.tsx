import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import Header from '../components/Header';
import eventosData from '../assets/eventos.json'; // Importa el archivo JSON de eventos
import Calendar from '../components/calendario'; // Importa el componente de calendario

const Eventos: React.FC = () => {
  const [eventos, setEventos] = useState([]); // Estado para almacenar los eventos

  // Función para cargar los eventos desde el archivo JSON
  useEffect(() => {
    // Simplemente asigna los datos del archivo JSON al estado de eventos
    setEventos(eventosData);
  }, []);

  return (
    <IonPage>
      <Header title="" />
      <IonContent className="ion-padding">
        {/* Coloca el calendario arriba del contenido de eventos */}
        <Calendar eventos={eventos} />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Próximos Eventos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {/* Mapea sobre los eventos y muestra cada uno */}
            {eventos.map((evento, index) => (
              <p key={index}>{evento.nombre} - {evento.fecha}</p>
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Eventos;
