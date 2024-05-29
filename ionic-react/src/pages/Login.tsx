import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email); // Debug: Check email value
    console.log('Password:', password); // Debug: Check password value
    
    if (email.trim() === 'admin@admin.com' && password === 'Admin') {
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
          <p>Ingresa tu correo electrónico para iniciar sesión</p>
          <form className="auth" id="login" onSubmit={handleLogin}>
            <IonItem className="custom-item">
              <IonLabel position="floating">Correo electrónico</IonLabel>
              <IonInput 
                type="email" 
                required 
                onIonChange={e => setEmail(e.detail.value!)} 
                clearInput={true} // Permite limpiar el input
              ></IonInput>
            </IonItem>
            <IonItem className="custom-item">
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput 
                type="password" 
                required 
                onIonChange={e => setPassword(e.detail.value!)} 
                clearInput={true} // Permite limpiar el input
              ></IonInput>
            </IonItem>
            <IonButton expand="block" className="button" type="submit">Iniciar sesión</IonButton>
          </form>
          <div className="separator">-------- o continúa con --------</div>
          <IonButton expand="block" className="button google">
            <img src="src/imagenes/google.png" alt="Google Logo" className="logo-google" /> Google
          </IonButton>
          <p>¿No tienes una cuenta aún? <br /><Link to="/formulario">Regístrate aquí</Link></p> 
          <IonText className="terms">Al hacer clic en continuar, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a></IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
