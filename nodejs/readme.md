## Introducción
## Que es Node.js

Node.js es un enterno de ejecucion para JavaScript construido con el motor de JavaScript V8 de Chrome.
Es decir, es un entorno en el que podemos ejecutar nuestras aplicaciones de JS sin necesidad de un browser, y nos permite utilizar toda la potencia de Javascript con todas sus nuevas features.

https://nodejs.org/es/

### Caracteriticas

- DESARROLLO EN JAVASCRIPT
Al ser un entornode ejecucion de JS, os permite desarrollar servidores, herramientas, y demas con este lenguaje.

- BASADO EN EL MOTOR V8 DE CHROME
Uno de los motores de mas avanzado del mercado, aunque hay implementaciones con Chackra(Microsoft)

- OPERACIONES DE E/S SIN BLOQUEOS

- ORIENTADA A EVENTOS
La asincronia es un efecto resultando de estos eventos, por lo que con Nodejs, podemos hacer nuestrod desarrollos asincronos.

- POR TODO ELLLO ES LIVIANO Y EFICIENTE
Esto es debido a estar basado en eventos y sin bloqueos.

### Para que sirve
Por lo que es buena opcion para desarrollar

- Servidores Web: Con paquetes propios de Nodejs o de terceros , Express, Koa, Hapi, Next.
- Sockets: Desarrollos badados en sockets, como chats y aplicaciones en tiempo real.
- IOT: Podemos programar nuestras placas Arduino, por ejemplo con Nodejs, al ser liviano.

## NPM(Node Package Manager)

https://www.npmjs.com
npm: es lo mas importante de nodejs

NPM o Node Package Manager, es el gestor de paquetes que nos ofrece NodeJS, o es el gestor de paquetes para Javascript, permitiendonos descubrir nuevos paquetes de JS. Nos permite instalar paquetes de JS, compartirlos, distribuirlos, manejar dependencias y recibir feedback de otros usuarios.

### package.json

Es el fichero donde podemos almacener todos los paquetes de NPM que utilizamos en nuestro proyecto.

Desde la version 5 de npm se genera **package-lock.json**
Se encarga de presentar una snapshot del arbol de dependencias de los paquetes de nuestro proyecto, es decir, convierte nuestro proyecto en determinista.

### Yarn
Es la alternativa de Facebook a npm

Surgio antes de la version 5 de npm, que no era determinista, Yarn genera un fichero **yarn.lock** que es equivalente a **package-lock.json**

## Que podemos hacer con Nodejs

Ejemplos:

### CHAT

- Forma mas tipica en tiempo real
- Ligera
- Alto trafico de datos
- Funciona en distintos dispositivos

### API

- Uso de objetos JSON(Sin transformaciones)
- MongoDB
- Facil de implementar con paquetes como Express, Koa, Hapi.js, Nest
- Las peticiones HTTP son eventos aislados, por lo que en Node, podriamos procesar ficheros, codificar videos.

### Entradas en Espera
- Trabajao con Base de datos es bloqueante
- Al no estar basado en bloqueos, podemos utilizar cualqier (RabittMQ o Apache Kafpa gestores de colas) o gestor de colas para estas acciones
- Por ello, es bueno para la concurrencia.

### Proxy 

- Como servidor proxy
- Puede manejar gran cantidad de conexions simultaneas con modo no-bloqueo

### IOT

- Consume pocos recursos
- Utilizar un solo lenguaje. JavaScript
- Conexiones simultaneas
- E/S sin bloqueos

Y TODO ELLO SABIENDO SOLO JAVASCRIPT(y peculiaridades en sus librerias de nodejs)

## Instalación

Distintos paquetes

Existen distintos paquetes o instaladores de NodeJS para los distintos Sistemas Operativos. Ademas en Linux, podemos instalarlo des cualquier fuente de cualquier distribución.

## NVM

NVM = Node Version Manager
Nos permite gestionar distintas versiones de NodeJS en un mismo ordenador.

**.nvmrc**
Por cada proyecto, nos permite definir que version de nodejs queremos utilizar, lo que es bastante util a la hora de desarrollar.

http://www.nodenica.com/como-instalar-nvm/

Comandos

nvm ls-remote: Nos muestra todas las versiones de NodeJS que estan publicadas, incluso cuales son las versiones LTS. 
nvm ls: Nos muestra las versiones de NodeJS que tenemos instaladas en el sistema. 
nvm install <versión>: Instalar esa versión de node.js o latest para la versión 
nvm uninstall <versión>: Desinstala esa versión de node.js 
nvm use <versión>: Cambiar a esa versión de node.js

## Comunidad y ecosistema

Una de las mas grandes gracias npm

**Creciendo cada vez mas**: A veces, resulta abrumador la cantidad de paquetes que podemos utilizar, lo que convierte nuestros desarrollos en algo facil.

**Todo gracias a JavaScript**: Al ser en lenguaje en el que se desarrolla en NodeJS, es facil que cualquiera con conocimientos, cree y comparta un paquete que soluciona un problema en concreto.

### Algunos de los paquetes mas utilizados
- Express: Nos permite crear nuestro servidor web, ya sea API Rest, o web renderizado nuestro servidor desde back 
- React: Una de las librerias mas utilizadas a la hora crear SPA
- Angular: Un framework de frontend para desarrollar SPA, desarrolla por google y con una gran comunidad
- Vue: Una nueva experiencia a la hora de crear SPA. Va creciendo y utilizada bastante por la comunidad de Laravel
- Polymer: Libreria para desarrollar web components nativos
- Babel: Nos permite transpilar o tranformar nuestro codigo de la ultima version de ECMAScript a una version de JS que entienda el navegador o servidor.
- Lodash: Un conjunto de funciones y helpers que nos ayudan a desarrolar mas rapido y mejor
- Webpack: Gestor de tareas automaticas y genrador de bundles para nuestra aplicación 

### Econsistema

Que necesito
- Javascript
- Sistema Operativo(Hasta arduino)

### Paquetes
+2.760.000.000 descargas por semana

# ECMACSCTRIPT

Nuevo estandar ecmascript

## Constantes y Left

Con ES6:
```
const constante = 10
let variable = 15
```
Equivalente a código javascript legacy:

```
var constante = 10;
var variable = 15;
```
## Template String

Con ES6:
```
const lugar = 'Cádiz'
const nombre = 'José Manuel'
let frase = `Soy ${nombre} y nací en ${lugar}`
```

Equivalente a código javascript legacy:
```
var lugar = 'Cádiz';
var nombre = 'José Manuel';
var frase = 'Soy ' + nombre + ' y nac\xED en ' + lugar;
```

Mejoras en los objetos

Con ES6:
```
const lugar = 'Cádiz'
const datos = {
nombre: 'José Manuel',
  edad: 35,
  lugar,
  random() {
    return 'randomNumber'
  }
}
```

Equivalente a código javascript legacy:
```
var lugar = 'Cádiz';
var datos = {
  nombre: 'José Manuel',
  edad: 35,
  lugar: lugar,
  random: function random() {
    return 'randomNumber';
  }
};
```

## Arrow functions

Con ES6:
```
const fn = (item) => {
  console.log(item)
  return item
}

const otraFn = item => console.log(item)
```

Equivalente a código javascript legacy:
```
var fn = function fn(item) {
  console.log(item);
  return item;
};

var otraFn = function anotherFn(item) {
  return console.log(item);
};
```

## Default parameters

Con ES6:
```
function miFn(x, y, w = 10, h = 10) {
  return x + y + w + h;
}

miFn(1, 2) === 23
```

Equivalente a código javascript legacy:
```
function miFn(x, y) {
  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

  return x + y + w + h;
}

miFn(1, 2) === 23;
```

## Destructuring Array

Con ES6:
```
var [a, , b] = [1, 2, 3];
a === 1;
b === 3;
```

Equivalente a código javascript legacy:
```
var _ref = [1, 2, 3],
 a = _ref[0],
 b = _ref[2];

a === 1;
b === 3;
```

## Destructuring en Funciones

Con ES6:
```
function miFn({ nombre: x }) {
  console.log(x);
}

miFn({ nombre: 5, random: 15 })
```

Equivalente a código javascript legacy:
```
function miFn(_ref2) {
  var x = _ref2.nombre;

  console.log(x);
}

miFn({ nombre: 5, random: 15 });
```

## Default parameters y Destructuring

Con ES6:
```
function miFn({ x, y, w = 10, h = 10 }) {
  return x + y + w + h;
}

miFn({ x: 1, y: 2 }) === 23
```

Equivalente a código javascript legacy:
```
function miFn(_ref) {
  var x = _ref.x,
    y = _ref.y,
    _ref$w = _ref.w,
    w = _ref$w === undefined ? 10 : _ref$w,
    _ref$h = _ref.h,
    h = _ref$h === undefined ? 10 : _ref$h;

  return x + y + w + h;
}

miFn({ x: 1, y: 2 }) === 23;
```
## async/await
Normal con promesas
```
function miFn(){
    return miPromesa
        .then(data => {
            ...
        })
        .catch(data => {
            ...
        })
}
```

Con async/await

```
async function miFn(){
    try {
        const data = await miPromesa;
        return data;
    } catch (error){
        return error;
    }
}
```
# Babel
    
**The compiler for writing next generation JavaScript**

Babel, como lo definen en su propia web, es un compilador de javascript para escribir la próxima generación de Javascript.

https://babeljs.io/

Para utilizar babel lo primero que necesitamos es NodeJS, en una versión superior a la 6.x (preferiblemente)

  > npm install --save babel-core babel-cli

En este caso, necesitaremos tanto el core de babel, como su cli para utilizarlo en nuestro terminal.

Pongamos el ejemplo siguiente, tenemos un código escriot en ES& en un fichero llamado es6-script.js , para transformalo a código legacy, ejecutamos lo siguiente:

  > babel es6-script.js --out-file script.js

## Presets
Babel se basa en presets, o configuraciónes dependiendo de la versión del estandar que queramos utilizar. Los más conocidos son

- env
- es2015
- es2016
- es2017
- latest (deprecado, ahora se utiliza env )
- react
- flow

además, tenemos los presets experimentales en los que podremos probar las nuevas funcionalidades que aún no estan aprobadas del todo por el comite TC39, y por tanto, no han sido añadidas a EcmasScript.

## Configuración
Cuando queremos utilizar un preset, debemos crear un fichero de configuración , donde especificaremos que preset queremos utilizar. Nuetsro fichero de configuración puede venir definido en alguno de estos ficheros:

- .babelrc (La mas aconsejable)
- package.json
- env option

