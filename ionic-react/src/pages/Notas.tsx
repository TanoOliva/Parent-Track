import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import Header from '../components/Header';
import './Notas.css';

const Notas: React.FC = () => {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const toggleSubject = (subject: string) => {
    setOpenSubject(openSubject === subject ? null : subject);
  };

  const subjects = [
    {
      name: 'Lenguaje',
      notes: [
        { name: 'Prueba 1', score: 5.2, absence: 0 },
        { name: 'Control 1', score: 6.0, absence: 0 },
        { name: 'Prueba 2', score: 4.8, absence: 0 },
        { name: 'Control 2', score: 0.0, absence: 0 },
        { name: 'Prueba 3', score: 0.0, absence: 0 },
      ],
    },
    {
      name: 'Matemática',
      notes: [
        { name: 'Prueba 1', score: 0.0, absence: 0 },
        { name: 'Control 1', score: 0.0, absence: 0 },
        { name: 'Prueba 2', score: 0.0, absence: 0 },
      ],
    },
    {
      name: 'Biología',
      notes: [
        { name: 'Prueba 1', score: 0.0, absence: 0 },
        { name: 'Control 1', score: 0.0, absence: 0 },
      ],
    },
    {
      name: 'Historia',
      notes: [
        { name: 'Prueba 1', score: 0.0, absence: 0 },
        { name: 'Control 1', score: 0.0, absence: 0 },
      ],
    },
  ];

  return (
    <IonPage>
      <Header title="" />
      <IonContent className="ion-padding">
        <div className="grade-header">1ERO MEDIO A</div>
        {subjects.map((subject) => (
          <IonCard key={subject.name} className="subject-card">
            <IonCardHeader
              className="subject-header"
              onClick={() => toggleSubject(subject.name)}
            >
              <span>{subject.name}</span>
              <IonIcon
                icon={openSubject === subject.name ? chevronUpOutline : chevronDownOutline}
                className="toggle-icon"
              />
            </IonCardHeader>
            {openSubject === subject.name && (
              <IonCardContent>
                <IonGrid>
                  <IonRow className="notes-header">
                    <IonCol>Nota</IonCol>
                    <IonCol>Falta</IonCol>
                  </IonRow>
                  {subject.notes.map((note, index) => (
                    <IonRow key={index} className="note-row">
                      <IonCol>{note.name}</IonCol>
                      <IonCol>{note.score}</IonCol>
                      <IonCol>{note.absence}</IonCol>
                    </IonRow>
                  ))}
                </IonGrid>
              </IonCardContent>
            )}
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Notas;
