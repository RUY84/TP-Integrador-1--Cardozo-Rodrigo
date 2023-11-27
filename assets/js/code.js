
    //REFERENCIAS AL DOM (Primero referenciar y luego asignar a variable)
    const monto = 200;
    const cant = document.getElementById('cant');
    const categoria = document.getElementById('categoria'); //apunto al elemento del DOM
    const total = document.getElementById('total');
    const calcular = document.getElementById("resumen");
    
    
    
    //BOTON RESUMEN
    
    calcular.addEventListener('click', () => {
        const cantidad = parseInt(cant.value);
        const cate = parseInt(categoria.value);
        let valor=0;  
    
        console.log(cate);
        console.log(cantidad);

        if(cate === 1){
            valor = (cantidad*monto*0.2); //Descuento del 80%
        }else if(cate === 2){
            valor = (cantidad*monto*0.5); //Descuento del 50%
        }else if(cate === 3){
            valor = (cantidad*monto*0.85); //Descuento del 15%
        }

    const pagoTotal = valor;
    total.textContent = valor;
    });


    //BORRAR

    const borrarDatos = document.getElementById("borrar");
    borrarDatos.addEventListener("click", () => {
        const borrarForm = document.querySelector("form");
        borrarForm.reset();
    })