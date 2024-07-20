export default class ArrayBussines {
    array = [];
    arrayBurbuja = [];
    arrayMerge = [];
    arrayRadix = [];

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
                for (let i = 0; i < dataReceive.length; i++) {
                    this.array.push(dataReceive[i]);
                    this.arrayBurbuja.push(dataReceive[i]);
                    this.arrayMerge.push(dataReceive[i]);
                    this.arrayRadix.push(dataReceive[i]);
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
        let bandera = false;
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i].business === parametroBusqueda){
                console.log("Elemento encontrado: " + this.array[i].name);
                bandera = true;
                i = this.array.length + 100;
            }
        }
        if(!bandera){
            console.log("No se encontro el elemento");
        }
    }

    ejecutarAlgoritmoBurbuja() {
        console.log("Ejecutando algoritmo de burbuja");
        let arr = this.arrayBurbuja;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j].review_count > arr[j + 1].review_count) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        console.log("Array ordenado con burbuja:");
    }

    ejecutarAlgoritmoMerge() {
        console.log("Ejecutando algoritmo merge sort");
        let orderThisArray = this.mergeSort(this.arrayMerge);
        console.log("Array ordenado con merge sort:");
    }

    mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = this.mergeSort(arr.slice(0, mid));
        const right = this.mergeSort(arr.slice(mid));
        return this.merge(left, right);
    }

    merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].review_count < right[rightIndex].review_count) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    ejecutarAlgoritmoRadix() {
        console.log("Ejecutando algoritmo radix sort");
        let arrayAOrdenar = this.radixSort(this.arrayRadix);
        console.log("Array ordenado con radix sort:");
    }

    radixSort(arr) {
        if (!arr || arr.length === 0) {
            console.error("El array está vacío o no está definido");
            return [];
        }

        //console.log("Contenido del array antes de ordenar:", arr);

        const filteredArr = arr.filter(item => typeof item.review_count === 'number' && !isNaN(item.review_count));
        if (filteredArr.length === 0) {
            console.error("Ningún elemento del array tiene un 'review_count' válido");
            return [];
        }

        // Encontrar el valor máximo utilizando una función iterativa
        const max = this.findMaxValue(filteredArr.map(item => item.review_count));
        if (!isFinite(max)) {
            console.error("Valor máximo no encontrado o no es finito");
            return [];
        }

        console.log("Valor máximo:", max);

        let digit = 1;
        while (Math.floor(max / digit) > 0) {
            //console.log(`Ordenando por el dígito ${digit}`);
            arr = this.countingSortByDigit(arr, digit);
            digit *= 10;
        }
        return arr;
    }

    // Función para encontrar el valor máximo en el array
    findMaxValue(arr) {
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    countingSortByDigit(arr, digit) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].review_count !== undefined && arr[i].review_count !== null) {
                let digitValue = Math.floor((arr[i].review_count / digit) % 10);
                buckets[digitValue].push(arr[i]);
            }
        }

        //console.log(`Buckets para el dígito ${digit}:`, buckets);

        // Usar un bucle para concatenar los buckets en lugar de [].concat
        let result = [];
        for (let i = 0; i < buckets.length; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                result.push(buckets[i][j]);
            }
        }

        return result;
    }
}
