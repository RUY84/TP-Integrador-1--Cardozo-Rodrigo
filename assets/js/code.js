/*function limpiar(){
    document.getElementById().value = "";
}*/

function calcular(){
    const monto = 200;
    const cantidad = document.getElementById('cant');
    const cate = document.getElementById('categoria');
    const pagoTotal = document.getElementById('total');

    let bonificacion = 0;    
    if(cate=="Estudiante"){
        const valor = cantidad*monto*0.8 - cantidad*monto;
        pagoTotal.textContent = valor;
        
    }
}
