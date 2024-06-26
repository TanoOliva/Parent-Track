// Header.tsx
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const userName = localStorage.getItem('userName') || 'Invitado';
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    history.push('/login');
  };

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
          <IonMenuButton />
          <div className="logout-container">
            <IonButton onClick={handleLogout}>Cerrar Sesión</IonButton>
          </div>
        </IonButtons>
      </IonToolbar>
      <div className="sub-header">
        <h2>HOLA {userName}</h2>
        <p>Alumn@: {userName}</p>
        <div className="tabs">
          <a href="/home" className={window.location.pathname === '/home' ? 'active' : ''}>Inicio</a>
          <a href="/notas" className={window.location.pathname === '/notas' ? 'active' : ''}>Notas</a>
          <a href="/eventos" className={window.location.pathname === '/eventos' ? 'active' : ''}>Eventos</a>
          <a href="/avisos" className={window.location.pathname === '/avisos' ? 'active' : ''}>Avisos</a>
        </div>
      </div>
    </IonHeader>
  );
};

export default Header;
