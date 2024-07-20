import { useState } from 'react';
import './App.css';
import LinkedListBussines from './models/LinkedListBussines.mjs';
import ArrayBussines from './models/Array/ArrayBussines.mjs';
import TimeChart from './components/TimeChart';

function App() {
  let listaEnlazadaNegocios = new LinkedListBussines();
  let arrayNegocios = new ArrayBussines();

  const [times, setTimes] = useState({
    insertion: [],
    search: [],
    bubbleSort: [],
    mergeSort: [],
    radixSort: []
  });

  const getSortingTimes = () => {
    return [
      { name: 'Bubble Sort en Array', data: [times.bubbleSort[0]] },
      { name: 'Bubble Sort en Linked List', data: [times.bubbleSort[1]] },
      { name: 'Merge Sort en Array', data: [times.mergeSort[0]] },
      { name: 'Merge Sort en Linked List', data: [times.mergeSort[1]] },
      { name: 'Radix Sort en Array', data: [times.radixSort[0]] },
      { name: 'Radix Sort en Linked List', data: [times.radixSort[1]] }
    ];
  };

  const handleInsertion = () => {
    console.log("Iniciando inserción en array");
    const start1 = performance.now();
    arrayNegocios.insercionDelDataset();
    const end1 = performance.now();
    const time1 = (end1 - start1) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución en array fue ${time1} nanosegundos`);

    console.log("Iniciando inserción en linked list");
    const start2 = performance.now();
    listaEnlazadaNegocios.insercionDelDataset();
    const end2 = performance.now();
    const time2 = (end2 - start2) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución en linked list fue ${time2} nanosegundos`);

    setTimes(prevTimes => ({
      ...prevTimes,
      insertion: [time1, time2]
    }));
  };

  const handleSearch = () => {
    let objetoBusqueda = document.getElementById("inputClaveABuscar").value;
    console.log("Iniciando búsqueda en array");
    const start = performance.now();
    arrayNegocios.busquedaEnElDataset(objetoBusqueda);
    const end = performance.now();
    const time = (end - start) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución en array fue ${time} nanosegundos`);

    console.log("Iniciando búsqueda en linked list");
    const start1 = performance.now();
    listaEnlazadaNegocios.busquedaEnElDataset(objetoBusqueda);
    const end1 = performance.now();
    const time1 = (end1 - start1) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución en linked list fue ${time1} nanosegundos`);

    setTimes(prevTimes => ({
      ...prevTimes,
      search: [time, time1]
    }));
  };

  const handleBubbleSort = () => {
    console.log("Iniciando ordenamiento burbuja en array");
    const start = performance.now();
    arrayNegocios.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    const time = (end - start) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución de burbuja en array fue ${time} nanosegundos`);

    console.log("Iniciando ordenamiento burbuja en linked list");
    const start1 = performance.now();
    listaEnlazadaNegocios.ejecutarAlgoritmoBurbuja();
    const end1 = performance.now();
    const time1 = (end1 - start1) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución de burbuja en linked list fue ${time1} nanosegundos`);

    setTimes(prevTimes => ({
      ...prevTimes,
      bubbleSort: [time, time1]
    }));

    handleMergeSort();
    handleRadixSort();
  };

  const handleMergeSort = () => {
    console.log("Iniciando ordenamiento merge en array");
    const start = performance.now();
    arrayNegocios.ejecutarAlgoritmoMerge();
    const end = performance.now();
    const time = (end - start) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución de merge en array fue ${time} nanosegundos`);

    console.log("Iniciando ordenamiento merge en linked list");
    const start1 = performance.now();
    listaEnlazadaNegocios.ejecutarAlgoritmoMerge();
    const end1 = performance.now();
    const time1 = (end1 - start1) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución de merge en linked list fue ${time1} nanosegundos`);

    setTimes(prevTimes => ({
      ...prevTimes,
      mergeSort: [time, time1]
    }));
  };

  const handleRadixSort = () => {
    console.log("Iniciando ordenamiento radix en array");
    const start = performance.now();
    arrayNegocios.ejecutarAlgoritmoRadix();
    const end = performance.now();
    const time = (end - start) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución de radix en array fue ${time} nanosegundos`);

    console.log("Iniciando ordenamiento radix en linked list");
    const start1 = performance.now();
    listaEnlazadaNegocios.ejecutarAlgoritmoRadix();
    const end1 = performance.now();
    const time1 = (end1 - start1) * 1000000; // Convertimos a nanosegundos
    console.log(`El tiempo de ejecución de radix en linked list fue ${time1} nanosegundos`);

    setTimes(prevTimes => ({
      ...prevTimes,
      radixSort: [time, time1]
    }));
  };

  return (
    <>
      <h1>Análisis de complejidad</h1>
      
      <h2>Gráfica de Tiempos de Inserción</h2>
      <div>
        <button onClick={handleInsertion}>Ejecutar inserción</button>
      </div>
      <TimeChart title="Tiempos de Inserción" categories={['Array', 'Linked list']} series={[{ name: 'Tiempo de Inserción (ns)', data: times.insertion }]} />

      <h2>Gráfica de Tiempos de Búsqueda</h2>
      <div>
        <input id='inputClaveABuscar' placeholder='Clave a buscar' type='text'/>
        <button onClick={handleSearch}>Ejecutar búsqueda en array</button>
      </div>
      <TimeChart title="Tiempos de Búsqueda" categories={['Array', 'Linked list']} series={[{ name: 'Tiempo de Búsqueda (ns)', data: times.search }]} />

      <h2>Gráfica de Tiempos de Ordenamiento</h2>
      <div>
        <button onClick={handleBubbleSort}>Ejecutar algoritmos de burbuja</button>
        <button onClick={}>Ejecutar algoritmos de Merge</button>
        <button>Ejecutar algoritmos de Radix</button>
      </div>
      <TimeChart title="Tiempos de Ordenamiento" categories={['Bubble Sort en Array', 'Bubble Sort en Linked List', 'Merge Sort en Array', 'Merge Sort en Linked List', 'Radix Sort en Array', 'Radix Sort en Linked List']} series={getSortingTimes()} />
    </>
  );
}

export default App;
