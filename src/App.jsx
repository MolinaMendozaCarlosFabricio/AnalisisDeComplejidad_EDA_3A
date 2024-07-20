import { useState, useRef } from 'react';
import './App.css';
import LinkedListBussines from './models/LinkedListBussines.mjs';
import ArrayBussines from './models/Array/ArrayBussines.mjs';
import TimeChart from './components/TimeChart';

function App() {
  const listaEnlazadaNegociosRef = useRef(new LinkedListBussines());
  const arrayNegociosRef = useRef(new ArrayBussines());
  
  const [times, setTimes] = useState({
    insertion: [],
    search: [],
    bubbleSort: [],
    mergeSort: [],
    radixSort: []
  });

  const getSortingTimes = () => {
    return [
      { name: 'Bubble Sort en Array', data: times.bubbleSort.length > 0 ? [times.bubbleSort[0]] : [0] },
      { name: 'Bubble Sort en Linked List', data: times.bubbleSort.length > 1 ? [times.bubbleSort[1]] : [0] },
      { name: 'Merge Sort en Array', data: times.mergeSort.length > 0 ? [times.mergeSort[0]] : [0] },
      { name: 'Merge Sort en Linked List', data: times.mergeSort.length > 1 ? [times.mergeSort[1]] : [0] },
      { name: 'Radix Sort en Array', data: times.radixSort.length > 0 ? [times.radixSort[0]] : [0] },
      { name: 'Radix Sort en Linked List', data: times.radixSort.length > 1 ? [times.radixSort[1]] : [0] }
    ];
  };

  const compararInsercionListaEnlazada = () => {
    console.log("Iniciando inserción en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegociosRef.current.insercionDelDataset();
    const end = performance.now();
    console.log(`El tiempo de ejecución en lista enlazada fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararInsercionArray = () => {
    console.log("Iniciando inserción en array");
    const start = performance.now();
    arrayNegociosRef.current.insercionDelDataset();
    const end = performance.now();
    console.log(`El tiempo de ejecución en array fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararBusquedaListaEnlazada = () => {
    let objetoBusqueda = document.getElementById("inputClaveABuscar").value;

    const start = performance.now();
    listaEnlazadaNegociosRef.current.busquedaEnElDataset(objetoBusqueda);
    const end = performance.now();
    console.log(`El tiempo de ejecución en lista enlazada fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararBusquedaArray = () => {
    let objetoBusqueda = document.getElementById("inputClaveABuscar").value;

    const start = performance.now();
    arrayNegociosRef.current.busquedaEnElDataset(objetoBusqueda); // Asumiendo que el método existe
    const end = performance.now();
    console.log(`El tiempo de ejecución en array fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararBurbujaArray = () => {
    console.log("Iniciando ordenamiento burbuja en array");
    const start = performance.now();
    arrayNegociosRef.current.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    console.log(`El tiempo de ejecución de burbuja en array fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararMergeArray = () => {
    console.log("Iniciando ordenamiento merge en array");
    const start = performance.now();
    arrayNegociosRef.current.ejecutarAlgoritmoMerge();
    const end = performance.now();
    console.log(`El tiempo de ejecución de merge en array fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararRadixArray = () => {
    console.log("Iniciando ordenamiento radix en array");
    const start = performance.now();
    arrayNegociosRef.current.ejecutarAlgoritmoRadix();
    const end = performance.now();
    console.log(`El tiempo de ejecución de radix en array fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararBurbujaListaEnlazada = () => {
    console.log("Iniciando ordenamiento burbuja en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegociosRef.current.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    console.log(`El tiempo de ejecución de burbuja en lista enlazada fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararMergeListaEnlazada = () => {
    console.log("Iniciando ordenamiento merge en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegociosRef.current.ejecutarAlgoritmoMerge();
    const end = performance.now();
    console.log(`El tiempo de ejecución de merge en lista enlazada fue ${end - start} milisegundos`);
    return end - start;
  }

  const compararRadixListaEnlazada = () => {
    console.log("Iniciando ordenamiento radix en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegociosRef.current.ejecutarAlgoritmoRadix();
    const end = performance.now();
    console.log(`El tiempo de ejecución de radix en lista enlazada fue ${end - start} milisegundos`);
    return end - start;
  }

  const leerTiempoDeInsercion = () => {
    const time1 = compararInsercionArray();
    const time2 = compararInsercionListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      insertion: [time1, time2]
    }));
  }

  const leerTiempoDeBusqueda = () => {
    const time = compararBusquedaArray();
    const time1 = compararBusquedaListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      search: [time, time1]
    }));
  }

  const leerTiemposDeEjecucionDeBurbuja = () => {
    const time = compararBurbujaArray();
    const time1 = compararBurbujaListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      bubbleSort: [time, time1]
    }));
  }

  const leerTiemposDeEjecucionDeMerge = () => {
    const time = compararMergeArray();
    const time1 = compararMergeListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      mergeSort: [time, time1]
    }));
  }

  const leerTiemposDeEjecucionRadix = () => {
    const time = compararRadixArray();
    const time1 = compararRadixListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      radixSort: [time, time1]
    }));
  }

  const leerTiemposDeOrdenamiento = () => {
    leerTiemposDeEjecucionDeBurbuja();
    leerTiemposDeEjecucionDeMerge();
    leerTiemposDeEjecucionRadix();
  }

  return (
    <>
      <h1>Análisis de complejidad</h1>
      
      <h2>Gráfica de Tiempos de Inserción</h2>
      <div>
        <button onClick={leerTiempoDeInsercion}>Ejecutar inserción</button>
      </div>
      <TimeChart title="Tiempos de Inserción" categories={['Array', 'Linked list']} series={[{ name: 'Tiempo de Inserción (ns)', data: times.insertion }]} />

      <h2>Gráfica de Tiempos de Búsqueda</h2>
      <div>
        <input id='inputClaveABuscar' placeholder='Clave a buscar' type='text'/>
        <button onClick={leerTiempoDeBusqueda}>Ejecutar búsqueda en array</button>
      </div>
      <TimeChart title="Tiempos de Búsqueda" categories={['Array', 'Linked list']} series={[{ name: 'Tiempo de Búsqueda (ns)', data: times.search }]} />

      <h2>Gráfica de Tiempos de Ordenamiento</h2>
      <div>
        <button onClick={leerTiemposDeOrdenamiento}>Ejecutar algoritmos de ordenamiento</button>
      </div>
      <TimeChart title="Tiempos de Ordenamiento" categories={['Bubble Sort', 'Merge Sort', 'Radix Sort']} series={getSortingTimes()} />
    </>
  );
}

export default App;
