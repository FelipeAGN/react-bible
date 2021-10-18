/* Arrow Functions */

// Example: En JS las funciones tambien son clases JS y estas estan basadas en prototipos.

function Hi(){
    this.prop = 'asd property' //
    return 'asd hola'
}

const resp = new Hi();
//console.log(resp);
//console.log(resp.prop);

/* Fat arrow function */

// No pueden ser llamadas con la palabra reservada 'new'.
// No tienen contexto de 'this'
// Poseen un return implicito 
// Ejemplo (Se omite el return sacando las llaves {}) :const fatArrowFunc = () => 2 


console.log(fatArrowFunc())