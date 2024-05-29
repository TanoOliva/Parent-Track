# Parent-Track


## Descripcion

Nuestra aplicación móvil, llamada "ParentTrack", está diseñada para brindar a los padres y apoderados una herramienta completa para seguir y apoyar el progreso académico de sus hijos de manera eficiente y conveniente desde sus dispositivos móviles.

Con ParentTrack, los padres pueden acceder fácilmente a información relevante sobre el desempeño académico de sus hijos, recibir notificaciones importantes y estar al tanto de los eventos académicos próximos. La aplicación proporciona una experiencia intuitiva y fácil de usar, diseñada específicamente para satisfacer las necesidades de los padres y apoderados en su rol de apoyo educativo.

## Funcianalidades

1. **Inicio de sesion:** Permite a los usuarios iniciar sesion en la aplicacion.

2. **Registro de usuario:** Permite que los usuarios se registren en la applicaion.

3. **Visualización de Notas y Evaluaciones:** Permite a los padres y apoderados ver las notas y evaluaciones obtenidas por sus hijos en cada curso.

4. **Notificaciones de Comunicaciones de Profesores:** Esta funcionalidad proporciona a los padres notificaciones sobre las comunicaciones enviadas por los profesores, como notas para firmar, recordatorios de eventos, reuniones de padres, etc.

5. **Calendario de Eventos Académicos:** Esta funcionalidad muestra un calendario con eventos académicos importantes, como exámenes, entregas de proyectos, vacaciones escolares, etc.

6. **Seguimiento de Asistencia:** Esta funcionalidad permite a los padres hacer un seguimiento de la asistencia de sus hijos a clases.

## Prototipo

<div align="center">

[![figma-prot-badge]][figma-prot-url] [![figma-dis-badge]][figma-dis-url]

</div>

[figma-prot-badge]: https://img.shields.io/badge/Ver%20prototipo%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-prot-url]:https://www.figma.com/proto/xZU3vypoe8PinN8whM0HjC/web-y-movil?type=design&node-id=43-500&t=cqU8Tn9QRFRAHXjt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=43%3A500&mode=design
[figma-dis-badge]: https://img.shields.io/badge/Ver%20diseño%20UI%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-dis-url]: https://www.figma.com/file/xZU3vypoe8PinN8whM0HjC/web-y-movil?type=design&node-id=0%3A1&mode=dev&t=vmIHxXMtT9RhRpxj-1


## Maquetación 

En la carpeta HTML se encuentra index.html y registro.html

En la carpeta CSS se encuentran las hojas de estilo que se utilizaron para hacer la maquetacion responsiva: auth.css y registro.css
# Entrega 2
## Ejecucion del proyecto 


Para ejecutar el proyecto, se debe clonar el repositorio y ejecutar los siguientes comandos en la terminal:
```bash
git clone -b react https://github.com/TanoOliva/Parent-Track.git

cd ionic-react

npm install

npm install react-hook-form

ionic serve
```

## Formularios

en este proyecto utilizamos la biblioteca `react-hook-form` para la creacion de formularios. 

Se creo la siguiente `interface`:
```typescript
export interface FormularioInput {
  nombre: string;
  rut: string;
  email: string;
  password: string;
  passwordConfirm: string;
  region: string;
  comuna: string;
}
```  
#### Componentes del formulario

Se creo el siguinte formulario 
```typescript
<form onSubmit={handleSubmit(submitFormulario)}>
          <IonItem className="custom-item">
            <IonInput
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "El nombre debe tener como máximo 20 caracteres",
                },
              })}
              className={`${errors.nombre ? "ion-invalid" : "ion-valid"}`}
              type="text"
              labelPlacement="stacked"
              placeholder="Nombre de usuario"
            />
          </IonItem>
          {errors.nombre && (
            <IonText className="error-text">{errors.nombre.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="text"
              labelPlacement="stacked"
              placeholder="RUT"
              {...register("rut", {
                validate: rutValidator,
              })}
            />
          </IonItem>
          {errors.rut && (
            <IonText className="error-text">{errors.rut.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="text"
              labelPlacement="stacked"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "El email no es válido",
                },
              })}
            />
          </IonItem>
          {errors.email && (
            <IonText className="error-text">{errors.email.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="password"
              labelPlacement="stacked"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es requerida",
              })}
            >
              <IonInputPasswordToggle color="medium" slot="end" />
            </IonInput>
          </IonItem>
          {errors.password && (
            <IonText className="error-text">{errors.password.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="password"
              labelPlacement="stacked"
              placeholder="Confirmar contraseña"
              {...register("passwordConfirm", {
                required: "Debes confirmar tu contraseña",
                validate: passMatchValidator,
              })}
            >
              <IonInputPasswordToggle color="medium" slot="end" />
            </IonInput>
          </IonItem>
          {errors.passwordConfirm && (
            <IonText className="error-text">
              {errors.passwordConfirm.message}
            </IonText>
          )}

          <IonItem className="custom-item">
            <IonSelect
              interface="action-sheet"
              placeholder="Seleccione su región"
              onIonChange={handleRegionChange}
              {...register("region", {
                required: "La región es requerida",
              })}
            >
              {regiones &&
                Object.entries(regiones.regiones).map(([key, value]) => (
                  <IonSelectOption key={key} value={key}>
                    {value.nombre}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonItem>
          {errors.region && (
            <IonText className="error-text">{errors.region.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonSelect
              interface="action-sheet"
              placeholder="Seleccione su comuna"
              disabled={!regSel}
              {...register("comuna", {
                required: "La comuna es requerida",
              })}
            >
              {regSel &&
                regSel.comunas.map((comuna) => (
                  <IonSelectOption key={comuna} value={comuna}>
                    {comuna}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonItem>
          {errors.comuna && (
            <IonText className="error-text">{errors.comuna.message}</IonText>
          )}

          <IonItem className="ion-margin-vertical toc" lines="none">
            <IonToggle
              checked={tycChecked}
              onIonChange={() => setTycChecked(!tycChecked)}
            >
              Acepto los términos y condiciones
            </IonToggle>
            {!tycChecked && (
              <IonText color="danger" className="error-text">
                (requerido)
              </IonText>
            )}
          </IonItem>

          <IonButton
            expand="full"
            type="submit"
            className="submit-button"
            disabled={!isValid || !tycChecked}
          >
            Registrarse
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
```
Como se puede observar en el codigo se realiza la validadcion de datos utilizando la libreria `react-hook-form`. Un ejemplo de esto seria en el campo de Region:
``` typescript
<IonItem className="custom-item">
            <IonSelect
              interface="action-sheet"
              placeholder="Seleccione su región"
              onIonChange={handleRegionChange}
              {...register("region", {
                required: "La región es requerida",
              })}
            >
              {regiones &&
                Object.entries(regiones.regiones).map(([key, value]) => (
                  <IonSelectOption key={key} value={key}>
                    {value.nombre}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonItem>
          {errors.region && (
            <IonText className="error-text">{errors.region.message}</IonText>
          )}

```
La validación anterior solo utiliza las validaciones por defecto de `react-hook-form`, y se restrinnge la elecion de una region. Si el campo no cumple con estas validaciones, se muestra un mensaje de error debajo del campo.


## Lectura de Json

1. Creamos un archivo JSON Eventos.json en la carpeta src/assets.

2. Para leer el arcivo:

    - En la pagina de eventos en la carpeta src/pages se importa el archivo eventos.json que contiene los datos de los eventos. La importación convierte automáticamente el contenido del archivo JSON en un objeto JavaScript.

    - Se define un estado llamado eventos utilizando el hook useState. Inicialmente, el estado se establece como un array vacío.

    - El hook useEffect se utiliza para cargar los datos de los eventos una vez que el componente se ha montado. Dentro del useEffect, se llama a la función setEventos para asignar los datos importados (eventosData) al estado eventos. El array vacío [] como segundo argumento de useEffect asegura que esta operación solo se ejecute una vez, cuando el componente se monta por primera vez.

```typescript
import React, { useState, useEffect } from 'react';
import eventosData from '../assets/eventos.json';

const Eventos: React.FC = () => {
  const [eventos, setEventos] = useState([]); // Estado para almacenar los eventos

  // Función para cargar los eventos desde el archivo JSON
  useEffect(() => {
    // Simplemente asigna los datos del archivo JSON al estado de eventos
    setEventos(eventosData);
  }, []);
}
```

### Base de datos
[Diagrama de clases ](Parent-Track/img/Diagrama.png)


