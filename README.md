# Rooftop - Challenge Backend 2021

## Requerimiento

El objetivo es crear un microservicio que se encargue de gestionar la
informacion de cupones y tiendas.
Para esto fue provisto con un script SQL que tiene la estructura y datos necesarios.

La API REST que desarrollarás debe ofrecer 3 recursos:
* Cupones
* Tiendas
* Estadisticas (opcional)

### **Recurso "Cupones"**

Crear un endpoint para cupones, que solo acepte las siguientes peticiones:

* GET
  * Permite consultar si un cupon corresponde a un determinado email
  * Se debe requerir el parametro "email" y "codigo del cupon" en el query string
  * Con ambos parametros debe buscar en la base de datos
  * Devolver codigo de estado 200 en caso de encontrarlo, caso contrario devolver 404

* POST
  * Se solicita el codigo del cupon para crear un cupon nuevo
  * El cupon debe tener obligatoriamente un total exacto de 8 caracteres entre letras y
numeros
  * En caso de crearse correctamente mostrar un codigo 201
  * En caso de error enviar codigo 422 y los errores de la validacion

* PATCH
  * Se solicita el email del usuario para asignarlo a un cupon existente
  * Se debe validar que el email sea un formato valido de email
  * Se debe validar tambien que el mismo email no haya generado otro cupon
previamente
  * En caso correcto devolver 201 y en caso de error devolver 422 con los mensajes de
error

* DELETE
  * Se puede dar de baja un cupon a pasandole el id como parametro en la url
  * Solo es posible borrar un cupon que no haya sido asignado a un cliente
  * Si se borró devolver codigo 201
  * Si el codigo no es valido o no existe, devolver 404

### **Recurso "tiendas"**

El recurso "tiendas" acepta los siguientes métodos:

* GET

  * Debe devolver un listado de todas las tiendas
  * Debe paginar 10 resultados por pagina
  * Incluir en la respuesta el total de tiendas existentes
  * Permitir la busqueda de tiendas utilizando el atributo "name" en el query string

* POST
  * Permite dar de alta nuevas tiendas
  * Se debe validar que el name y la direccion esten completas
  * Utilizar los codigos de respuesta correspondientes

* DELETE
  * Se puede dar de baja una tienda pasandole el id como parametro en la url

### **Recurso "Stats" (opcional)**

Se puede crear un 3 er recurso que devuelva informacion historica y estadistica

* GET

  * Devuelve un objeto que resume:
    * Cantidad total de cupones existente
    * Cantidad total de cupones asignados
    * Cantidad total de cupones sin asignar
    * Cantidad total de cupones creados por dia
    * Cantidad total de cupones asignados por dia

---
## Ejecucion de la aplicación

Para esto se debera abrir la terminal o consola de comandos ubicado en la ruta donde queramos tener el proyecto

1. Clonar el repositorio
```
git clone https://github.com/FacuBnz/challenge-rooftop
```

2. Acceder a la carpeta descargada usando el sig comando:
```
cd challenge-rooftop
```

3. Posicionado en la ruta raiz del proyecto, instalar las dependencias con el siguente comando
```
npm install
```

4. Crear una nueva base de datos con el nombre deseado e importar el script SQL dado por la empresa. En mi caso utilicé postgreSQL. Para importar el script se recomienda ver estos videos.
    * [PGAdmin](https://www.youtube.com/watch?v=j9rqfmzm3II&ab_channel=Ing.ElkinJos%C3%A9NavarroOsorio)
    * [MySQL-Workbench](https://www.youtube.com/watch?v=jTs1nSwAcRM&t=157s&ab_channel=cristianballesteros)

5. Crear el archivo .env en la ruta raiz del proyecto a partir del archivo de ejemplo .env.example y completar las variables de entorno con los datos necesarios.
```
PORT=
TYPEORM_CONNECTION =
TYPEORM_HOST =
TYPEORM_USERNAME =
TYPEORM_PASSWORD =
TYPEORM_DATABASE =
TYPEORM_PORT =
TYPEORM_SCHEMA =
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = false
TYPEORM_ENTITIES = dist/entity/**/*.js    
```

6. En la terminal, posicionada en la ruta raiz del proyecto compilar de ts a js usando el comando:
 ```
 npm run build
 ```
 7. Por ultimo, para arrancar el servidor, se debe ejecutar: 
 ```
 npm run start
 ```

 ---
 ## Links de apoyo

 Para la realización de este challenge utilice los siguintes links de apoyo:

 [TypeOrm](https://typeorm.io/#/),
 [PostgresSQL](https://www.postgresql.org/docs/current/functions-datetime.html). Los ejemplos de la documentación de typeorm y la documentacion de postgres con las funciones para el manejo de fechas me ayudaron a realizar las querys necesarias.

 [Fechas_en_JS](https://lenguajejs.com/javascript/fechas/date-fechas-nativas/) Los ejemplos y la teoria del manejo de fechas de forma nativa con js me ayudaron a conseguir la fecha exacta en js.