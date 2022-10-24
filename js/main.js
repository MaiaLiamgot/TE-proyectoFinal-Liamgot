class Cliente {
	constructor(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
	}
	}
	
	const listaCliente = [];
	
	const guardarCliente = () => {
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	
	nombre.addEventListener("change", ()=>{
		if (nombre.value == '') {
		nombre.style.bakcground = 'red';
		} else{
		console.log = nombre.value;
		}
		})

		nombre.onchange = (Cliente) = {}

	let nuevoCliente = new Cliente (nombre, apellido);
	listaCliente.push(nuevoCliente);
	console.log(listaCliente)
	}

	const hamburguesa = document.getElementById("hamburguesa")
	const bebida = document.getElementById("bebida")

	function Pedido() {
	const parrafo = document.getElementById("parrafo");
	parrafo.innerHTML = (`Tu pedido es ${hamburguesa.value} con ${bebida.value}`)
	}

	
		

	let hamburguesaStock = ["Mcfiesta", "Mcnifica", "Big Mac"];
   
    let stock = hamburguesaStock.includes("Mcpollo");
    const parrafo2 = document.getElementById("parrafo2");
    console.log(stock);
    const texto = document.getElementById("texto");
    if (stock === 'false') {
        parrafo2.innerHTML = (`no contamos con stock de esa hamburguesa`);
    } else (`Tu pedido es ${hamburguesa.value} con ${bebida.value}`)
	

    




 

 
