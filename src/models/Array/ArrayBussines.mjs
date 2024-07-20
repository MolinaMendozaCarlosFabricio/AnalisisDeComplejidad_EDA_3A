export default class ArrayBussines {
    array = [];

    insercionDelDataset() {
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
                for (let i = 0; i < 50000/*dataReceive.length*/; i++) {
                    //console.log("Insertando: " + dataReceive[i]);
                    this.array.push(dataReceive[i]);
                    //console.log(this.array[i].value);
                }
            })
            .catch(error => console.error("Error al extraer datos:", error));
    }

    impresionDelDataset(arrayRecibido) {
        console.log("Array actual:", this.array);
        for(let i = 0; i < arrayRecibido.length; i++){
            console.log("Imprimiendo :" + arrayRecibido[i].review_count)
        }

    }

    busquedaEnElDataset (parametroBusqueda){
        //console.log(parametroBusqueda)
        let bandera = false;
        console.log("Ejecutando busqueda")
        for(let i = 0; i < this.array.length; i++){
            console.log(i)
            //console.log("Buscando elemento en el nodo " + i)
            if(this.array[i].business == parametroBusqueda){
                console.log("Elemento encontrado: " + this.array[i].name);
                //No se si haya que mandar el elemento encontrado
                bandera = true;
                i = this.array.length + 100;
            }
        }
        if(!bandera){
            console.log("No se encontro el elemento");
        }
    }

    // Método de ordenamiento burbuja
    ejecutarAlgoritmoBurbuja() {
        console.log("Ejecutando algoritmo de burbuja");
        let arr = this.array;
        //Se compara los elementos del array
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j].review_count > arr[j + 1].review_count) {
                    //Si el elemento de la izquierda es mayor al de la derecha, los intercambia
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        console.log("Array ordenado con burbuja:");
        //this.impresionDelDataset(arr);
    }

    // Método de ordenamiento merge
    ejecutarAlgoritmoMerge() {
        console.log("Ejecutando algoritmo merge sort");
        let arrayMerge = this.array
        let orderThisArray = this.mergeSort(arrayMerge);
        console.log("Array ordenado con merge sort:");
        //this.impresionDelDataset(orderThisArray);
    }

    mergeSort(arr) {
        if (arr.length <= 1) return arr;

        //Parte el array en 2, y ejecuta esta funcion en cada mitad
        const mid = Math.floor(arr.length / 2);
        const left = this.mergeSort(arr.slice(0, mid));
        const right = this.mergeSort(arr.slice(mid));

        //Ejecuta la funcion que vuelve a unir las particiones ordenadas
        return this.merge(left, right);
    }

    merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        //Se asegura de que ambos indices no superen el indice maximo de las dos particiones
        while (leftIndex < left.length && rightIndex < right.length) {
            //Compara los elementos de los indices de ambas particiones
            if (left[leftIndex].review_count < right[rightIndex].review_count) {
                //Dependiendo de quien es mayor o menor de ambos elementos de ambos array, pushea
                //el menor en el nuevo array
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        //Retorna el array ordenado
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    //Algoritmo de radix
    ejecutarAlgoritmoRadix() {
        console.log("Ejecutando algoritmo radix sort");
        let arrayRadix = this.array
        let arrayAOrdenar = this.radixSort(arrayRadix);
        console.log("Array ordenado con radix sort:");
        //this.impresionDelDataset(arrayAOrdenar);
    }

    radixSort(arr) {
        //Obtiene el valor maximo dentro del array
        const max = Math.max(...arr.map(item => item.review_count));
        let digit = 1;

        //Ejecuta el ciclo mientras que la division del valor maximo entre el digito sea mayor a 0
        while (Math.floor(max / digit) > 0) {
            console.log(`Ordenando por el dígito ${digit}`);

            arr = this.countingSortByDigit(arr, digit);
            digit *= 10;
        }

        return arr;
    }

    countingSortByDigit(arr, digit) {
        //Particiona el array en buckets, y los almacena en otro array
        let buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            //guarda el reciduo del valor del indice del arreglo original y el digito dado
            let digitValue = Math.floor((arr[i].review_count / digit) % 10);
            //Con el resultado anterior, se dirige al indice en el array de buckeds, y se almacena
            //El indice del array original
            buckets[digitValue].push(arr[i]);
        }

        // Depuración: Ver el contenido de los buckets después de llenarlos
        console.log(`Buckets para el dígito ${digit}:`, buckets);
        
        return [].concat(...buckets);
    }

    
}
