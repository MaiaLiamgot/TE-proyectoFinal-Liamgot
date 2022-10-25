	class Cliente {
		constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		}
		}
		
		const listaCliente = [];
		
		const guardarCliente = () => {
		const nombre = document.getElementById("nombre").value;
		const apellido = document.getElementById("apellido").value;
		
		let nuevoCliente = new Cliente (nombre, apellido);
		listaCliente.push(nuevoCliente);
		console.log(listaCliente)
		}


	const hamburguesa = document.getElementById("hamburguesa")
	const bebida = document.getElementById("bebida")

	function Pedido() {
	const parrafo2 = document.getElementById("parrafo2");
	parrafo2.innerHTML = (`Tu pedido es ${hamburguesa.value} con ${bebida.value}`)
	}


	localStorage.setItem("pedido", Pedido);
	

	let hamburguesaStock = ["Mcfiesta", "Mcnifica", "Big Mac"];
   
    let stock = hamburguesaStock.includes("Mcpollo");
    const parrafo2 = document.getElementById("parrafo2");
    console.log(stock);
    const texto = document.getElementById("texto");
	if (stock === false) {
		parrafo2.innerHTML = `no contamos con stock de esa hamburguesa`;
	} else parrafo2.innerHTML = `Tu pedido es ${hamburguesa.value} con ${bebida.value}`;
	

    




 

 
