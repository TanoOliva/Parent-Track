import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonCheckbox } from '@ionic/react';
import './Registro.css';

const Registro: React.FC = () => {
  const [username, setUsername] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tyc, setTyc] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro aquí
    console.log('Usuario registrado:', { username, rut, email, region, comuna, password, tyc });
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="auth-container">
          <img src="src/imagenes/logo.jpg" className="logo-small" alt="Logo" />
          <h3>Crear una nueva cuenta</h3>
          <form className="auth" id="signup" onSubmit={handleRegister}>
            <IonItem>
              <IonLabel position="floating">Nombre de usuario</IonLabel>
              <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">RUT</IonLabel>
              <IonInput value={rut} onIonChange={e => setRut(e.detail.value!)} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Correo electrónico</IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
            </IonItem>
            <IonItem>
              <IonLabel>Región</IonLabel>
              <IonSelect value={region} placeholder="Selecciona tu región" onIonChange={e => setRegion(e.detail.value!)}>
                <IonSelectOption value="15">Región de Arica y Parinacota</IonSelectOption>
                <IonSelectOption value="1">Región de Tarapacá</IonSelectOption>
                <IonSelectOption value="2">Región de Antofagasta</IonSelectOption>
                <IonSelectOption value="3">Región de Atacama</IonSelectOption>
                <IonSelectOption value="4">Región de Coquimbo</IonSelectOption>
                <IonSelectOption value="5">Región de Valparaíso</IonSelectOption>
                <IonSelectOption value="13">Región Metropolitana de Santiago</IonSelectOption>
                <IonSelectOption value="6">Región del Libertador General Bernardo O'Higgins</IonSelectOption>
                <IonSelectOption value="7">Región del Maule</IonSelectOption>
                <IonSelectOption value="16">Región de Ñuble</IonSelectOption>
                <IonSelectOption value="8">Región del Biobío</IonSelectOption>
                <IonSelectOption value="9">Región de La Araucanía</IonSelectOption>
                <IonSelectOption value="14">Región de Los Ríos</IonSelectOption>
                <IonSelectOption value="10">Región de Los Lagos</IonSelectOption>
                <IonSelectOption value="11">Región de Aysén del General Carlos Ibáñez del Campo</IonSelectOption>
                <IonSelectOption value="12">Región de Magallanes y de la Antártica Chilena</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Comuna</IonLabel>
              <IonSelect value={comuna} placeholder="Selecciona tu comuna" onIonChange={e => setComuna(e.detail.value!)}>
                {/* Aquí debes cargar las opciones de comunas dinámicamente según la región seleccionada */}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Confirme su contraseña</IonLabel>
              <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} required />
            </IonItem>
            <IonItem lines="none">
              <IonCheckbox checked={tyc} onIonChange={e => setTyc(e.detail.checked)} />
              <IonLabel>Acepto los términos y condiciones</IonLabel>
            </IonItem>
            <IonButton expand="block" type="submit">Registrarse</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;
