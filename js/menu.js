class hamburguesa {
    constructor(hamburguesa, medallones, precio, queso, verduras) {
        this.hamburguesa = hamburguesa;
        this.medallones = medallones;
        this.precio = precio;
        this.queso = queso;
        this.verduras = verduras;
    }
}
 
const mcfiesta = new hamburguesa ("carne","uno",1200,false,true);
const mcpollo = new hamburguesa("pollo", "uno", 1150, false, true);
const mcnifica = new hamburguesa ("carne", "dos", 1400, true,true);
const bigmac = new hamburguesa("carne", "dos", 2000, true, true)
let listaMenu = JSON.parse(localStorage.getItem("hamburguesas")) || [mcfiesta, mcpollo, mcnifica, bigmac]

function subirHamburguesas(){
    if(JSON.parse(localStorage.getItem("hamburguesas")) === null){
        localStorage.setItem("hamburguesas",JSON.stringify(listaMenu))    //pusheo mi lista de productos a local storage si no hay nada.
    }
}

