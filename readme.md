# Mi primera aplicación con NPM

En la siguiente practica vamos a crear nuestra primera aplicacion utilizando node.js utilizando dependencias

## Vamos a empezar

Si te gustaria tener los archivos necesarios de esta practica puedes entrar a la siguiente liga (https://github.com/Ericktati1234/My_Pro_Git.git) y descargar la totalidad del proyecto.
### Prerequisitos

Debemos de tener asegurado que tenemos instalados 2 herramientas importantes:

npm 

```
npm --version
---------------------
    -10.7.0 //Por ejemplo
```
node.js 
```
node --version
---------------------
    -v20.14.0 //Por ejemplo
```

Con los anteriores comandos podemos observar sus versiones, en caso de no retornarnos algo similar y necesitemos instalar, podemos ejecutar los siguientes comandos:

```
sudo apt-get install nodejs
```
```
sudo apt install npm
```
Estos comandos nos instalaran nuestras 2 herramientas.


### Creando nuestro espacio de trabajo

Vamos a crear una carpeta donde vamos a almacenar nuestro proyecto, despues vamos a abrir esta carpeta en nuestra terminal y ejecutaremos el siguiente comando:

```
npm init
```
Dicho comando, nos pedira lo siguiente:

*Package name* - Este es el nombre que queremos darle a nuestro paquete a crear
*Version* - En caso de querer definir nuestro paquete con otra version dejaremos este en default
*description* - La descripcion como lo dice el nombre, vamos a dar un pequeño resumen de que es nuestro paquete o para que sirve
*entry point* - Este sera el documento de partida de nuestro paquete, en caso de dejarlo en default, debemos de asegurarnos que nuestro directorio tenga el archivo index.js dentro
*test command* - Este es el comando que deseamos utilizar como acortador para poder ejecutar el comando npm run test 
*git repository* - En caso de que sea almacenado nuestro paquete en un repositorio podriamos dar la liga en este punto
*keywords* - Las palabras clave que definen nuestor paquete, estas deberan estar separadas por comas
*author* - Aqui definimos al autor de la obra, podremos ser nosotros o el que lo este haciendo
*license* - En caso de que definamos una licencia para nuestro paquete, deberemos de especificarla aqui mismo

Al dar nuestro ultimo enter en el ultimo parametro nos imprimirá algo como lo siguiente lo cual es toda la informacion que brindamos en un formato .json, dicha informacion se guardará en un archivo llamado package.json

```
{
  "name": "prueba-para-entregar",
  "version": "1.0.0",
  "description": "Paquete prueba para tarea",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "keywords": [
    "paquete",
    "prueba",
    "facil"
  ],
  "author": "Erick Nevarez",
  "license": "ISC"
}

```
Despues de realizar esta configuracion vamos a instalar dependencias en nuestro proyecto, para ello vamos a ejecutar los siguientes comandos:

```
npm install --save log4js
```
```
npm install --save-dev mocha
```
```
npm install --save-dev eslint
```
Dichos comandos nos van a instalar las dependencias necesarias para nuestra practica


### Configuracion archivo package.json

Nuestro archivo .json solamente posee de los datos que el comando npm init nos ayudo, pero es necesario añadir y modificar ciertos parametros, los cuales son los siguientes:

```
{
 .
 .
 .
 .
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "./node_modules/.bin/mocha", // Este comando puede estar definido como "echo \"Error: no test specified\" && exit 1" asi que lo modificaremos
    "lint": "./node_modules/.bin/eslint index.js",
    "dev": "supervisor index.js"
  },
  "keywords": [
    "web",
    "uach",
    "app",
    "demo"
  ],
  "author": "Erick Nevarez",
  "license": "ISC",
  "dependencies": {
    "log4js": "^6.9.1"
  },
  "devDependencies": {
    "eslint": "8.57.0",
    "mocha": "^10.7.3"
  }
}
```
Explicacion de los Scripts:

test - Nos permitira verificar las pruebas que hayamos definido en la carpeta test dentro de nuestro directorio raiz del proyecto, estos test buscan evaluar condiciones, variables o estados de los archivos dentro de nuesttro directorio raiz

lint - Esta dependencia nos permite verificar que nuestra codificacion esta siguiendo reglas especificas, dichas reglas estan siendo definidas en el archivo .eslintrc.json dentro de nuestra carpeta raiz

dev - Por ultimo esta dependencia nos permite tener en ejecucion el archivo index.js constantemente lo cual nos permite supervisar cualquier refresco en caliente, esto significa que no necesitamos de reiniciar el servidor para observar los cambios

Explicacion de las dependencias: 

Tenemos definida la dependencia log4js, la cual tenemos que se actualice cada vez que se instale nuestro paquete, por eso esta definido en el numero de su version un "^"

Mas debajo tenemos la configuracion de dependencias que utilizamos para desarrollar, definiendo eslint con una version constante (para su correcta compatibilidad) y tenemos mocha con una version que permite actualizarse a la mas actual.

### Pruebas de nuestros archivos

Nuestro archivo index.js puede ser ejecutado asi sin mas, pero vamos a utilizar las herramientas que definimos en nuestro archivo package.json:

Este comando tomará como base los archivos de nuestra carpeta test y ejecutará las pruebas y nos mostrará en consola la validacion de los tests

```
npm run test
```
Este comando tomará como base las reglas del archivo .eslintrc.json y nos arrojará los warnings que hayamos definido para nuestra codificacion y los errors que por default maneja la dependencia lint

```
npm run lint
```
Este comando ejecutara nuestro archivo index.js (o el que hayamos definido como archivo de inicio) solo una vez

```
npm start
```
Este comando ejecutará sin parar nuestro archivo que hayamos definido en la configuracion de "dev" en nuestro archivo package.json, 

```
npm run dev
```

## Implementacion

Para mayor informacion sobre esta practica los invito a que revisen las ligas oficiales de cada dependencia
* [ESLint](https://eslint.org/)
* [Supervisor](https://www.npmjs.com/package/supervisor)
* [Log4js](https://www.npmjs.com/package/log4js)


## Hecho con

* [VsCode](https://code.visualstudio.com) - Como editor de nuestro codigo fuente
* [GitHub](https://github.com) - Como gestor de repositorios remotos

## Contribucion

Si desea contribuir y mejorar el siguiente documento, favor de contactarnos en el siguiente correo (ContactoBinBash@coolmail.com)

## Versionado

Para el versionado y consulta de documento hacemos el uso de [GitHub](https://github.com) con el cual se subieron los archivos necesarios para la practica

## Authors

* **Erick Nevarez** - *Totalidad del trabajo* - [Ericktati1234](https://github.com/Ericktati1234)

Por el momento a la fecha 27/08/2024 no existen colaboradores que hayan participado en el proyecto

## License

Este proyecto es usado solamente para usos didacticos, no nos hacemos responsables ninguno de los autores por el mal uso del codigo anexado
Todos los documentos y links son una via para obtener mayor conocimiento, no se obtiene ningun beneficio personal por el compartir los links

## Reconocimientos

No hay reconocimientos hasta el momento 


