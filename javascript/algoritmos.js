function saludar(){
    console.log("Hola Mundo");
    alert("Hello World");
}

//Algoritmo que realice una suma entre dos valores ingresados por el usuario 

function sumar(){
    //Declarar las variables necesarias para la ejecucuion del algoritmo
    let n1 = 0;
    let n2 = 0;
    let suma = 0;
    //Solicitar y capturar los valores ingresados por el usuario
    n1 = parseInt(prompt('Porfavor ingrese el primer valor a sumar'))
    n2 = parseInt(prompt('Porfavor ingrese el segundo valor a sumar'))
    //Realizar el procedimiento
    suma = n1+n2
    //Imprimir el resultado en pantalla 
    console.log('El resultado de la suma es ' + suma)
    alert('El resultado de la suma es ' + suma)
}

//Algoritmo que realice una suma, resta, multiplicacion y division entre dos valores ingresados por el usuario

function operacionesBasicas(){
    //Declarar las variables para la ejecucion
    let n1=0;
    let n2=0;
    let suma=0;
    let resta=0;
    let multiplicacion=0;
    let division=0;
    //solicitar y capturar valores
    n1 = parseInt(prompt('Porfavor ingrese el primer valor '))
    n2 = parseInt(prompt('Porfavor ingrese el segundo valor '))
    //Realizar las operaciones
    division = n1/n2;
    multiplicacion = n1*n2;
    resta = n1-n2;
    suma = n1+n2
    //Imprimir en pantalla el resultado de las operaciones
    console.log('El resultado de la division es ' + division)
    alert('El resultado de la division es ' + division)

    console.log('El resultado de la multiplicacion es ' + multiplicacion)
    alert('El resultado de la multiplicacion es ' + multiplicacion)

    console.log('El resultado de la resta es ' + resta)
    alert('El resultado de la resta es ' + resta)

    console.log('El resultado de la suma es ' + suma)
    alert('El resultado de la suma es ' + suma)
}

//Algoritmo que determine el cuadrado de un número que ingrese el usuario

function cuadrado(){
    let n1=0;
    let cuad=0;

    n1 = parseInt(prompt('Ingrese el número al que le quiere determinar el cuadrado '))

    cuad=n1*n1;

    console.log('El cuadrado de ' + n1 + ' es: ' + cuad);
    alert('El cuadrado de ' + n1 + ' es: ' + cuad);
}

//Algoritmo que determine el area de un triangulo a partir de su base y altura ingresadas por el usuario

function baseTrian(){
    let b = 0;
    let h = 0;
    let area=0;
    //a=b*h/2
    b = parseInt(prompt('Ingrese la base del triangulo '))
    h = parseInt(prompt('Ingrese la altura del triangulo '))

    area = (b*h)/2

    console.log('El area del triangulo es ' + area)
    alert('El area del triangulo es ' + area)
}

//Algoritmo que determine la medida en Km, M y cm de un valor dado en pulgadas 

function conversion(){
    let n1 = 0;
    let operacion = 0;

    n1 = parseInt(prompt('Ingrese el número que quiere convertir '));

    operacion = n1 * 0.0000254;
    alert('La conversión a kilometros es ' + operacion);

    operacion = n1 * 0.0254;
    alert('La conversión a metros es ' + operacion);

    operacion = n1 * 2.54;
    alert('La conversión a centimetros es ' + operacion);
}

//Realizar un algoritmo que pregunte al usuario a que moneda quiere convertir el COP entre dolar, euro y yenes 

function converCOP(){
    let cop = 0;
    let moneda = '';
    let operacion = 0;
    const dol = 0.00023;
    const eur = 0.00021;
    const yen = 0.035;

    cop = parseInt(prompt('Ingrese la cantidad de COP a convertir: '));
    moneda = prompt('Ingrese el tipo de moneda que quiere convertir entre dolar, euro o yenes ');
    
    switch(moneda){
        case 'dolar':
                operacion = cop*dol
                console.log('En dolares es: ' + operacion)
                alert ('En dolares es: ' + operacion) 
            break;
        case 'euro':
                operacion = cop*eur
                console.log('En euros es: ' + operacion)
                alert ('En euros es: ' + operacion)
            break;
        case 'yenes':
                operacion = cop*yen
                console.log('En yenes es: ' + operacion)
                alert ('En yenes es: ' + operacion)
            break;
    }
}

//Algoritmo que determine si un número es par o impar 

function parImpar(){
    let num = 0;

    num = parseInt(prompt('Ingrese el número para identificar si es par o impar '));

    if (num % 2 == 0){
        alert('El número ingresado es par');
    }
    else{
        alert('El número ingresado es impar')
        }
    }

//Algoritmo que determine el mayor entre dos números ingresados por el usuario 

function mayor2(){
    let num0 = 0;
    let num1 = 0;

    num0 = parseInt(prompt('Ingrese el número primer número para saber cual es mayor'));
    num1 = parseInt(prompt('Ingrese el número segundo número para saber cual es mayor'));

    if (num0 == num1){
        alert('Los números ingresados son iguales');
    }
    else if (num1 > num0){
        alert('El segundo número ingresado es el mayor');
    }
    else if (num0 > num1){
            alert('El primer número ingresado es el mayor');
    }
 }

//Algoritmo que determine el menor de tres números ingresados por el usuario

function menor3(){
    let num0 = 0;
    let num1 = 0;
    let num2 = 0;

    num0 = parseInt(prompt('Ingrese el primer número para saber cual es menor'));
    num1 = parseInt(prompt('Ingrese el segundo número para saber cual es menor'));
    num2 = parseInt(prompt('Ingrese el tercer número para saber cual es menor'));

    if ((num0==num1) && (num0==num2)){
        alert('No hay número menor, son iguales');
    }
    else if ((num1>num0) && (num2>num0)){
        alert('El primer número ingresado es el menor');
    }
    else if ((num0>num1) && (num2>num1)){
        alert('El segundo número ingresado es el menor');
    }
    else if ((num0>num2) && (num1>num2)){
        alert('El tercer número ingresado es el menor');
    }
}

//El colegio ABC requiere un sistema que le permita validar a x estudiante si aprobo o reprobo x materia teniendo en cuanta que son 9 notas del 1 al 10 y se aprueba con una nota de  6.1 

function notas(){
    let nombre = '';
    let materia = '';
    let n0, n1, n2, n3, n4, n5, n6, n7, n8 = 0;
    let promedio = 0;

    nombre = prompt('Ingrese el nombre del estudiante ');
    materia = prompt('Ingrese la materia a la que le quiere sacar el promedio ');
    alert('Recuerde antes de ingresar las notas que son del 1 al 10');
    n0 = parseInt(prompt('Ingrese la primer nota del estudiante para saber el promedio'));
    n1 = parseInt(prompt('Ingrese la segunda nota del estudiante para saber el promedio'));
    n2 = parseInt(prompt('Ingrese la tercer nota del estudiante para saber el promedio'));
    n3 = parseInt(prompt('Ingrese la cuarta nota del estudiante para saber el promedio'));
    n4 = parseInt(prompt('Ingrese la quinta nota del estudiante para saber el promedio'));
    n5 = parseInt(prompt('Ingrese la sexta nota del estudiante para saber el promedio'));
    n6 = parseInt(prompt('Ingrese la septima nota del estudiante para saber el promedio'));
    n7 = parseInt(prompt('Ingrese la octava nota del estudiante para saber el promedio'));
    n8 = parseInt(prompt('Ingrese la novena nota del estudiante para saber el promedio'));

    promedio = (n0+n1+n2+n3+n4+n5+n6+n7+n8)/9
    if (promedio>=6.1){
        alert('La nota del estudiante ' + nombre + ' es ' + promedio + ' por ende aprobó ' + materia)
    }
    else if (promedio<=6.0)
        alert('La nota del estudiante ' + nombre + ' es ' + promedio + ' por ende reprobó ' + materia)
}

//Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganará despues de N número de años teniendo en cuenta que el banco paga un interes mensual del    0,7% 

function capital(){
    let capital = 0;
    let años= 0;
    let ganancia = 0;
    let total = 0;

    capital = parseInt(prompt('Ingrese el capital que quiere invertir'));
    años = parseInt(prompt('Ingrese la cantidad de años de la inversión'));

    ganancia = (capital * 0.084) * años  //el 0.084 salio de multiplicar el interes 0.7 * 12 lo cual da el interes de un año 
    total = (capital + ganancia)
    alert('Los intereses que ganará en ' + años + ' años, será de: ' + ganancia + ' y el total con la inversión inicial es de ' + total);
}

