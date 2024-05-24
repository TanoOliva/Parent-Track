import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === 'Admin') {
      localStorage.setItem('isAuthenticated', 'true');
      history.push('/home');
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="auth-container">
          <img src="src/imagenes/logo.jpg" className="logo-small" alt="Logo" />
          <h2>Bienvenid@</h2>
          <p>Enter your email to sign up for this app</p>
          <form className="auth" id="login" onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="floating">Correo electrónico</IonLabel>
              <IonInput type="email" required onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" required onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
            <IonButton expand="block" className="button" type="submit">Iniciar sesión</IonButton>
          </form>
          <div className="separator"> -------- or continue with --------- </div>
          <IonButton expand="block" className="button google">
            <img src="src/imagenes/google.png" alt="Google Logo" className="logo-google" /> Google
          </IonButton>
          <p>¿No tienes una cuenta aún? <br /><a href="registro.html">Regístrate aquí</a></p>
          <IonText className="terms">By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;