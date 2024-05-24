import React from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="auth-container">
          <img src="src/imagenes/logo.jpg" className="logo-small" alt="Logo" />
          
          <h2>Bienvenid@</h2>
          <p>Enter your email to sign up for this app</p>
          <form className="auth" id="login">
            <IonItem>
              <IonLabel position="floating">Correo electrónico</IonLabel>
              <IonInput type="email" required></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" required></IonInput>
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
