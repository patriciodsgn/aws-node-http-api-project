# Proyecto Final AWS
*Este README proporciona una descripción completa y clara del proyecto final en AWS, incluyendo el proceso de despliegue, la arquitectura, los endpoints y las tecnologías utilizadas. También se resaltan los logros y desafíos encontrados durante el proyecto.*

---

Este proyecto es una API construida en Node.js 18.x para crear y administrar tareas. Utiliza el framework de Serverless para simplificar la implementación y escalabilidad.


## Documentación y Presentación
Este README es una parte clave de la documentación del proyecto y se presenta de manera efectiva para proporcionar una visión general del proyecto final en AWS.

## Proceso de Despliegue en AWS
El proceso de despliegue en AWS se realiza siguiendo los siguientes pasos:

1. **Configuración de AWS CLI**: Asegúrate de tener configurada la AWS CLI con las credenciales adecuadas para tu cuenta de AWS.

2. **Configuración de Servicios AWS**:

- **Lambda**: Se utilizan funciones Lambda para ejecutar la lógica de la API.
- **DynamoDB**: Se emplea DynamoDB como base de datos para almacenar las tareas.
- **IAM (Identity and Access Management)**: Se configuran permisos IAM para las funciones Lambda y otros servicios según sea necesario.

3. **Configuración de Serverless Framework**: El proyecto utiliza Serverless Framework para simplificar la implementación. Asegúrate de que el archivo serverless.yml esté configurado correctamente con las definiciones de las funciones Lambda y otros recursos necesarios.

4. **Implementación**: Utiliza el Serverless Framework para implementar el proyecto en AWS. Esto desplegará las funciones Lambda, la base de datos DynamoDB y otros recursos definidos.

5. **Configuración de API Gateway**: Configura la API Gateway para gestionar las solicitudes HTTP y enrutarlas a las funciones Lambda correspondientes.

6. **Pruebas de la API**: Realiza pruebas de la API utilizando los endpoints proporcionados.

## Arquitectura
La arquitectura del proyecto incluye las siguientes componentes clave:

- **AWS Lambda**: Utilizado para ejecutar la lógica de la API.
- **DynamoDB**: Base de datos NoSQL utilizada para almacenar las tareas.
- **API Gateway**: Gestiona las solicitudes HTTP y enruta las peticiones a las funciones Lambda correspondientes.

## Estructura:
```
aws-node-http-api-project
|
|--serverless.yml
|
|--client
|    |-- client.http
|
|--node_modules
|
|--README.md
|--NOTES.md
|
|--package-lock.json
|--package.json
|
|--src
    |-- addTask.js
    |-- deleteTask.js
    |-- getTask.js
    |-- getTasks.js
    |-- healthCheck.js
    |-- index.js
    |-- updateTask.js
```

## Endpoints

- Al visitar la url raiz: "Server is ok"
GET - https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/

<br>

- Health Check: donde se entrega más informacion
GET - https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/healthCheck

<br>

- Crear Tarea
POST - https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/tasks

<br>

- Mostrar Todas las Tareas
GET - https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/tasks

<br>

- Mostrar Tarea Específica
GET -https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/tasks/{id}

<br>

- Actualizar Tarea
PUT - https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/tasks/{id}

<br>

- Eliminar Tarea
DELETE - https://x0y0g8le7k.execute-api.sa-east-1.amazonaws.com/tasks/{id}






## Tecnologías Utilizadas
- Node.js
- AWS CLI
- AWS IAM
- AWS Lambda
- DynamoDB
- Serverless Framework

## Decisiones Tomadas
Se eligieron las tecnologías mencionadas debido a su escalabilidad y capacidad para manejar las operaciones CRUD de la API de manera eficiente. La combinación de AWS Lambda y DynamoDB ofrece un entorno sin servidor y altamente disponible.

## Logros y Desafíos

### Logros:

Implementación exitosa de la API en AWS.
Uso eficiente de los servicios sin servidor para reducir la complejidad de la infraestructura.

### Desafíos:

Configuración inicial y permisos IAM en AWS.
Pruebas exhaustivas y manejo de errores en las funciones Lambda.

