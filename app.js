const autos = require('./autos');

const concesionaria = {
   autos: autos,

   buscarAuto:function(patente){
        for (let i= 0; i<autos.length; i++){
            if (autos[i].patente === patente){
                return autos[i];
            }
        }
   },
   venderAuto: function(patente) {
       let venta = (this.buscarAuto(patente));
       return (venta.vendido = true);
    },
    autosParaLaVenta: function(){
    let resultado = autos.filter(auto => !auto.vendido);
    return resultado;
    },
    autosNuevos : function(){
        let listaAutosVenta = this.autosParaLaVenta();
        let resultado = listaAutosVenta.filter(auto => auto.km<100);
        return resultado;
    },
    listaDeVentas : function(){
      let lista = [];
      let filtro = autos.filter(v => v.vendido===true);
      filtro.forEach(function(auto){
        lista.push(auto.precio)
        return lista;
      });
      return lista;

    },
    totalDeVentas : function(){
        let total = concesionaria.listaDeVentas()
        let final = total.reduce(function(acumulador,number){         
                return acumulador + number }, 0
                );
            return final;
        
    },
    persona: [{
        nombre: "Juan",
        capacidadDePagoEnCuotas: 100,
        capacidadDePagoTotal: 100000000
        }],
    buscarPersona: function(nombre){
        for (let i= 0; i<concesionaria.persona.length; i++){
            if (concesionaria.persona[i].nombre === nombre){
                return concesionaria.persona[i];
                }else{
                console.log("No existe tal persona")
                }
            }
        },
    puedeComprar: function(auto,persona){
        if ((auto.precio <= persona.capacidadDePagoTotal) && (persona.capacidadDePagoEnCuotas>=(auto.precio/auto.cuotas))){
            return true;
        }else{
            return false;
        }
    },
    autosQuePuedeComprar: function(persona){
        let listaAutosVenta = concesionaria.autosParaLaVenta()
        let autosParaComprar = []
        listaAutosVenta.forEach(function(auto){
            if (concesionaria.puedeComprar(auto,persona)==true){
                autosParaComprar.push(auto);
            }
        });
        return autosParaComprar
        
    },     
};