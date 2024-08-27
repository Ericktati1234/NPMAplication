const log4js = require('log4js')

const logger = log4js.getLogger("app");
logger.level = "debug"; //Define desde que nivel de jerarquia de los log, 
//se van a mostrar, en este caso error, hacia abajo son los unicos que se van a mostrar


logger.debug("Iniciando la aplicaciones en modo de pruebas.");
logger.info("Usuario ha iniciado sesion.");
logger.warn("Falta el archivo config de la app.");
logger.error("NO se puso ejecutar la accion.");
logger.fatal("No se pudo iniciar la aplicacion.")


//Definimos nuestra funcion solamente para que podamos importarla en la prueba
function sumar(x,y){
    return x+y;
}

const prueba_numero_1 = 1;

module.exports = sumar; //Exportamos nuestra libreria