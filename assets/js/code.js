/*function limpiar(){
    document.getElementById().value = "";
}*/

function calcular(){
    const monto = 200;
    const cantidad = document.getElementById('cant').value;
    const categoria = document.querySelector('input[name="categoria"]:checked').value;

    let bonificacion = 0;    
    if(categoria=="Estudiante"){
        const valor = cantidad*monto*0.8 - cantidad*monto;

        const totalAPagar = document.querySelector("#total");
        totalAPagar.value = `Total a pagar: $${valor}`;
        
        
    }
}
