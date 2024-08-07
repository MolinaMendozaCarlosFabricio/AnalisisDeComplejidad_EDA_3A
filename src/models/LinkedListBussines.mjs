import ListaEnlazada from "./LinkedList/LinkedList.mjs";

export default class LinkedListBussines {
    listaEnlazada = new ListaEnlazada();
    ordenarBurbuja = new ListaEnlazada();
    ordenarMerge = new ListaEnlazada();
    ordenarRadix = new ListaEnlazada();

    iteracionesDeBurbuja = 0;
    iteracionesDeMerge = 0;
    iteracionesDeRadix = 0;

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
                for(let i = 0; i < dataReceive.length && i < 25000; i++){
                    //console.log("Insertando: " + dataReceive[i]);
                    this.listaEnlazada.push(dataReceive[i]);
                    this.ordenarBurbuja.push(dataReceive[i]);
                    this.ordenarMerge.push(dataReceive[i]);
                    this.ordenarRadix.push(dataReceive[i]);
                    //console.log(this.listaEnlazada.getElementAt(i).value)
                    //this.impresionDelDataset();
                }
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
            //console.log(i)
            const element = this.listaEnlazada.getElementAt(i);
            //console.log("Buscando elemento en el nodo " + i)
            if(element.value.business === parametroBusqueda){
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
        console.log("Iteraciones del algoritmo de burbuja en linked list: " + this.ordenarBurbuja.iteracionesBurbuja)
        this.iteracionesDeBurbuja = this.ordenarBurbuja.iteracionesBurbuja;
        //this.impresionDelDataset(this.ordenarBurbuja);
    }

    ejecutarAlgoritmoMerge (){
        this.ordenarMerge.mergeSort();
        console.log("Iteraciones del algoritmo de Merge en linked list: " + this.ordenarMerge.iteracionesMerge)
        this.iteracionesDeMerge = this.ordenarMerge.iteracionesMerge;
        //this.impresionDelDataset(this.ordenarMerge);
    }

    ejecutarAlgoritmoRadix(){
        this.ordenarRadix.radixSort();
        console.log("Iteraciones del algoritmo de Radix en linked list: " + this.ordenarRadix.iteracionesRadix)
        this.iteracionesDeRadix = this.ordenarRadix.iteracionesRadix;
        //this.impresionDelDataset(this.ordenarRadix);
    }
}