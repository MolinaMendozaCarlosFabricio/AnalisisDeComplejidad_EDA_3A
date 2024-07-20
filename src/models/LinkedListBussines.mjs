import ListaEnlazada from "./LinkedList/LinkedList.mjs";

export default class LinkedListBussines {
    listaEnlazada = new ListaEnlazada();
    ordenarBurbuja = new ListaEnlazada();
    ordenarMerge = new ListaEnlazada();
    ordenarRadix = new ListaEnlazada();

    insercionDelDataset (){
        console.log("Ejecutando lectura de bussines por array");
        fetch("./src/models/bussines.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(dataReceive => {
                //console.log("Datos recibidos:", dataReceive);
                for(let i = 0; i < 50000/*dataReceive.length*/; i++){
                    //console.log("Insertando: " + dataReceive[i]);
                    this.listaEnlazada.push(dataReceive[i]);
                    //console.log(this.listaEnlazada.getElementAt(i).value)
                    //this.impresionDelDataset();
                }

                for (let i = 0; i < 50000/*dataReceive.length*/; i++){
                    this.ordenarBurbuja.push(dataReceive[i]);
                    this.ordenarMerge.push(dataReceive[i]);
                    this.ordenarRadix.push(dataReceive[i]);
                }

                //this.impresionDelDataset(this.ordenarRadix)
            })
            .catch(error => console.error("Error al extraer datos:", error));
    }

    impresionDelDataset (listaEnlazadaAAnalizar){
        console.log("Imprimiendo dataset");
        for(let i = 0; i < listaEnlazadaAAnalizar.size(); i++){
            const element = listaEnlazadaAAnalizar.getElementAt(i);
            //console.log(`Elemento en la posición ${i}:`, element);
            console.log("Imprimiendo: " + element.value.review_count);
            //console.log(this.listaEnlazada.getElementAt(i).value);
        }
    }

    busquedaEnElDataset (parametroBusqueda){
        //console.log(parametroBusqueda)
        let bandera = false;
        for(let i = 0; i < this.listaEnlazada.size(); i++){
            console.log(i)
            const element = this.listaEnlazada.getElementAt(i);
            //console.log("Buscando elemento en el nodo " + i)
            if(element.value.business == parametroBusqueda){
                console.log("Elemento encontrado: " + element.value.name);
                //No se si haya que mandar el elemento encontrado
                bandera = true;
                i = this.listaEnlazada.size() + 100;
            }
        }
        if(!bandera){
            console.log("No se encontro el elemento");
        }
    }

    ejecutarAlgoritmoBurbuja(){

        this.ordenarBurbuja.burbbleSort();
        //this.impresionDelDataset(this.ordenarBurbuja);
    }

    ejecutarAlgoritmoMerge (){
        this.ordenarMerge.mergeSort();
        //this.impresionDelDataset(this.ordenarMerge);
    }

    ejecutarAlgoritmoRadix(){
        this.ordenarRadix.radixSort();
        //this.impresionDelDataset(this.ordenarRadix);
    }
}