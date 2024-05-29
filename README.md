# Parent-Track


## Descripcion

Nuestra aplicación móvil, llamada "ParentTrack", está diseñada para brindar a los padres y apoderados una herramienta completa para seguir y apoyar el progreso académico de sus hijos de manera eficiente y conveniente desde sus dispositivos móviles.

Con ParentTrack, los padres pueden acceder fácilmente a información relevante sobre el desempeño académico de sus hijos, recibir notificaciones importantes y estar al tanto de los eventos académicos próximos. La aplicación proporciona una experiencia intuitiva y fácil de usar, diseñada específicamente para satisfacer las necesidades de los padres y apoderados en su rol de apoyo educativo.

## Funcionalidades

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

# Ingreso a la Carpeta
cd ionic-react

# Módulos a instalar para poder abrir la página
npm install
npm install react-hook-form

# Inicio de la aplicación web
ionic serve
```

## Formularios


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
![Diagrama Relacional](https://cdn.discordapp.com/attachments/833128126342234143/1244809208520769648/Diagrama_ER_de_base_de_datos_pata_de_gallo.png?ex=6656766a&is=665524ea&hm=b4eebf9db2d8b0b5ae4f9d676dcda19fe158fc41284069120607274aa7c1db59&)

## Patrones de Diseño

1. **Menú Lateral (Side Drawer Navigation):**
   - Este patrón se observa en la implementación del menú lateral en el componente `App.tsx`. El menú lateral proporciona una forma intuitiva de navegar por la aplicación desde dispositivos móviles.
   - Permite a los usuarios acceder fácilmente a diferentes partes de la aplicación deslizando el dedo desde el borde izquierdo de la pantalla.
   - El menú lateral generalmente contiene opciones de navegación, como enlaces a páginas principales, ajustes y funciones relacionadas con el usuario.

2. **Tarjetas Desplegables (Expandable Cards):**
   - Este patrón se utiliza en las pantallas `Eventos`, `Notas` y `Avisos`, donde las tarjetas se expanden para mostrar más detalles al hacer clic en ellas.
   - Proporciona una manera eficiente de presentar información adicional sin sobrecargar la interfaz de usuario.
   - Los usuarios móviles pueden tocar una tarjeta para ver más detalles sin navegar a otra página, lo que mejora la navegación y la experiencia de usuario en dispositivos móviles.

Estos dos patrones de diseño contribuyen a una experiencia de usuario móvil fluida y eficiente al proporcionar una navegación intuitiva y una presentación de información clara y concisa.
