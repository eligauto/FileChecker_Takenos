<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Instalacion

```bash
$ yarn install
```
## Ejecutar la aplicacion

1. Crear un archivo `.env` basado en el archivo `.env.example`
2. Ingresar las variables de entorno de cloudinary
3. Ejecutar el siguiente comando

```bash
yarn start:dev
```

## CURL para probar la aplicacion

### Subir archivos .pdf, jpeg y png

```bash
curl --location 'http://localhost:3000/upload' \
--form 'file=@"/hola/tu/ruta/de/archivo.pdf"'
```

## Respuestas

### ¿Cómo se podrían aprovechar estas funcionalidades dentro del producto de Takenos?

1. **Subir archivos de manera segura**: Se pueden subir archivos de manera segura a la nube, evitando que los archivos se pierdan en caso de que el servidor se caiga.

2. **Gestión de Documentos**: Los usuarios pueden subir documentos importantes como contratos, facturas y otros archivos relacionados con sus actividades en Takenos. Esto mejoraría la organización y accesibilidad de documentos esenciales.

3. **Galería de Imágenes**: Los usuarios pueden subir imágenes a la plataforma, lo que les permitiría compartir imágenes de sus productos, servicios o cualquier otro contenido visual. O una fachera foto de perfil.

### ¿Cómo se vería una arquitectura completa en la que se guarden datos relacionados a estas funcionalidades?

1. **Frontend**: Se puede utilizar una librería como React para crear una interfaz de usuario interactiva y atractiva. Se pueden utilizar componentes como Dropzone para permitir a los usuarios subir archivos de manera sencilla.

2. **Backend**: Uso de microservicios para gestionar la subida de archivos y la gestión de documentos. A parte mira lo que te arme con unas horitas 😎😎

3. **Base de Datos**: Bases de datos relacionales (como PostgreSQL o MSSQL) para almacenar metadatos de los archivos subidos y bases de datos no relacionales (como MongoDB) para almacenar los archivos en sí.

4. **Almacenamiento en la Nube**: Utilizar un servicio de almacenamiento en la nube como Cloudinary para almacenar los archivos de manera segura y escalable. (o cualquier otro servicio de almacenamiento en la nube; AWS S3, Google Cloud Storage, etc.)

5. **Autenticación y Autorización**: Implementar un sistema de autenticación y autorización para proteger los datos de los usuarios y garantizar que solo los usuarios autorizados puedan acceder a los archivos, le da mas confianza al usuario.

6. **Seguridad**: Implementar medidas de seguridad como encriptación de datos, validación de archivos y protección contra ataques de inyección de código para garantizar la integridad y confidencialidad de los datos.

7. **Integración con Otras Plataformas**: Integrar la plataforma con otras aplicaciones y servicios (como Google Drive, Dropbox, etc.) para permitir a los usuarios importar y exportar archivos de manera sencilla.

### ¿Cómo se manejarían algunos aspectos técnicos como la autenticación, el cifrado de datos, y otros aspectos relevantes a la hora de terminar de implementar estas funcionalidades?

1. **Autenticación**: Utilizar un sistema de autenticación basado en tokens (como JWT) para autenticar a los usuarios y proteger las rutas de la API. Se pueden implementar roles y permisos para controlar el acceso a las funcionalidades de subida de archivos y gestión de documentos. Tambien implementar un sistema de autenticación de dos factores para mejorar la seguridad. Y para que le quede comodo al cliente podria ser un OAUTH2.0 con Google, Facebook, etc.

2. **Cifrado de Datos**: Encriptar los datos sensibles (como contraseñas, tokens, etc.) utilizando algoritmos de cifrado seguros (como AES o RSA) para proteger la información de los usuarios. También se puede implementar HTTPS para cifrar la comunicación entre el cliente y el servidor.

3. **Validacion de Archivos**: A medida que vaya creciendo el servicio, se puede implementar una validación de archivos más avanzada para detectar y prevenir archivos maliciosos o dañinos.

4. **Implementacion de Arquitectura de Microservicios**: Utilizar una arquitectura de microservicios para desacoplar las funcionalidades y mejorar la escalabilidad y mantenibilidad del sistema. Cada microservicio puede ser responsable de una funcionalidad específica (subida de archivos, gestión de documentos, etc.) y comunicarse a través de una API REST o un bus de mensajes.

5. **Monitorización y Logging**: Implementar un sistema de monitorización y logging para rastrear el rendimiento y la disponibilidad del sistema, así como para detectar y solucionar problemas de manera proactiva.

6. **Pruebas Automatizadas**: Implementar pruebas automatizadas (unitarias, de integración, etc.) para garantizar la calidad y fiabilidad del sistema. Se pueden utilizar herramientas como Jest

7. **Documentación**: Documentar el código y la arquitectura del sistema para facilitar el mantenimiento y la colaboración entre los desarrolladores. Se pueden utilizar herramientas como Swagger para generar documentación interactiva de la API.
