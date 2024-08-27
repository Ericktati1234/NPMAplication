// import sumar from '../index'; //Son exactamente lo mismo
// import assert, { AssertionError } from 'assert';
const sumar = require('../index'); //Son exactamente lo mismo
const assert = require('assert');

//Vamos a definir los casos correctos e incorrectos0
describe("Probar la suma de 2 numeros",()=>{
    //Afirmar que 5 + 5 son 10
    it("5 + 5 = 10 ",()=>{
        assert.equal(10,sumar(5,5)); //A la (izquierda esta el valor evaluado y a la derecha el valor que resivio
    })
    //Afirmar que 5 + 5 no son 55
    it("5 + 5 != 55",()=>{
        assert.notEqual(55,sumar(5,5));
    })

})