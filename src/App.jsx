import { useState, useRef } from 'react';
import './App.css';
import LinkedListBussines from './models/LinkedListBussines.mjs';
import ArrayBussines from './models/Array/ArrayBussines.mjs';
import TimeChart from './components/TimeChart';
import IterationChart from './components/IterationChart';

function App() {
  const listaEnlazadaNegociosRef = useRef(new LinkedListBussines());
  const arrayNegociosRef = useRef(new ArrayBussines());

  const [times, setTimes] = useState({
    insertion: [null, null],
    search: [null, null],
    bubbleSort: [null, null],
    mergeSort: [null, null],
    radixSort: [null, null],
  });

  const [iterations, setIterations] = useState({
    bubbleSort: [null, null],
    mergeSort: [null, null],
    radixSort: [null, null],
  });

  const getSortingTimes = () => {
    return [
      { name: 'Bubble Sort', data: [times.bubbleSort[0], times.bubbleSort[1], null, null, null, null] },
      { name: 'Merge Sort', data: [null, null, times.mergeSort[0], times.mergeSort[1], null, null] },
      { name: 'Radix Sort', data: [null, null, null, null, times.radixSort[0], times.radixSort[1]] },
    ];
  };

  const getSortingIterations = () => {
    return [
      { name: 'Bubble Sort', data: [iterations.bubbleSort[0], iterations.bubbleSort[1], null, null, null, null] },
      { name: 'Merge Sort', data: [null, null, iterations.mergeSort[0], iterations.mergeSort[1], null, null] },
      { name: 'Radix Sort', data: [null, null, null, null, iterations.radixSort[0], iterations.radixSort[1]] },
    ];
  };


  const compararInsercionListaEnlazada = () => {
    const start = performance.now();
    listaEnlazadaNegociosRef.current.insercionDelDataset();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de inserción en Linked List: ${time} ns`);
    return time;
  };

  const compararInsercionArray = () => {
    const start = performance.now();
    arrayNegociosRef.current.insercionDelDataset();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de inserción en Array: ${time} ns`);
    return time;
  };

  const compararBusquedaListaEnlazada = () => {
    const objetoBusqueda = document.getElementById("inputClaveABuscar").value;
    const start = performance.now();
    listaEnlazadaNegociosRef.current.busquedaEnElDataset(objetoBusqueda);
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de búsqueda en Linked List: ${time} ns`);
    return time;
  };

  const compararBusquedaArray = () => {
    const objetoBusqueda = document.getElementById("inputClaveABuscar").value;
    const start = performance.now();
    arrayNegociosRef.current.busquedaEnElDataset(objetoBusqueda);
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de búsqueda en Array: ${time} ns`);
    return time;
  };

  const compararBurbujaArray = () => {
    const start = performance.now();
    arrayNegociosRef.current.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de Bubble Sort en Array: ${time} ns`);
    return time;
  };

  const compararMergeArray = () => {
    const start = performance.now();
    arrayNegociosRef.current.ejecutarAlgoritmoMerge();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de Merge Sort en Array: ${time} ns`);
    return time;
  };

  const compararRadixArray = () => {
    const start = performance.now();
    arrayNegociosRef.current.ejecutarAlgoritmoRadix();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de Radix Sort en Array: ${time} ns`);
    return time;
  };

  const compararBurbujaListaEnlazada = () => {
    const start = performance.now();
    listaEnlazadaNegociosRef.current.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de Bubble Sort en Linked List: ${time} ns`);
    return time;
  };

  const compararMergeListaEnlazada = () => {
    const start = performance.now();
    listaEnlazadaNegociosRef.current.ejecutarAlgoritmoMerge();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de Merge Sort en Linked List: ${time} ns`);
    return time;
  };

  const compararRadixListaEnlazada = () => {
    const start = performance.now();
    listaEnlazadaNegociosRef.current.ejecutarAlgoritmoRadix();
    const end = performance.now();
    const time = (end - start); // Convertir a nanosegundos
    console.log(`Tiempo de Radix Sort en Linked List: ${time} ns`);
    return time;
  };

  const leerTiempoDeInsercion = () => {
    const time1 = compararInsercionArray();
    const time2 = compararInsercionListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      insertion: [time1, time2],
    }));
  };

  const leerTiempoDeBusqueda = () => {
    const time1 = compararBusquedaArray();
    const time2 = compararBusquedaListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      search: [time1, time2],
    }));
  };

  const leerTiemposDeEjecucionDeBurbuja = () => {
    const time1 = compararBurbujaArray();
    const time2 = compararBurbujaListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      bubbleSort: [time1, time2],
    }));
  };

  const leerTiemposDeEjecucionDeMerge = () => {
    const time1 = compararMergeArray();
    const time2 = compararMergeListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      mergeSort: [time1, time2],
    }));
  };

  const leerTiemposDeEjecucionRadix = () => {
    const time1 = compararRadixArray();
    const time2 = compararRadixListaEnlazada();
    setTimes(prevTimes => ({
      ...prevTimes,
      radixSort: [time1, time2],
    }));
  };

  const leerTiemposDeOrdenamiento = () => {
    leerTiemposDeEjecucionDeBurbuja();
    leerTiemposDeEjecucionDeMerge();
    leerTiemposDeEjecucionRadix();
  };

  const leerIteraciones = () => {
    setIterations(prevTimes => ({
      ...prevTimes,
      bubbleSort: [arrayNegociosRef.current.iteracionesBurbuja, listaEnlazadaNegociosRef.current.iteracionesDeBurbuja],
      mergeSort: [arrayNegociosRef.current.iteracionesMerge, listaEnlazadaNegociosRef.current.iteracionesDeMerge],
      radixSort: [arrayNegociosRef.current.iteracionesRadix, listaEnlazadaNegociosRef.current.iteracionesDeRadix],
    }));
  }

  return (
    <>
      <h1>Análisis de complejidad</h1>
      
      <h2>Gráfica de Tiempos de Inserción</h2>
      <div>
        <button onClick={leerTiempoDeInsercion}>Ejecutar inserción</button>
      </div>
      <TimeChart
        title="Tiempos de Inserción"
        categories={['Array', 'Linked list']}
        series={[{ name: 'Tiempo de Inserción (mls)', data: times.insertion }]}
      />

      <h2>Gráfica de Tiempos de Búsqueda</h2>
      <div>
        <input id="inputClaveABuscar" placeholder="Clave a buscar" type="text" />
        <button onClick={leerTiempoDeBusqueda}>Ejecutar búsqueda</button>
      </div>
      <TimeChart
        title="Tiempos de Búsqueda"
        categories={['Array', 'Linked list']}
        series={[{ name: 'Tiempo de Búsqueda (mls)', data: times.search }]}
      />

      <h2>Gráfica de Tiempos de Ordenamiento</h2>
      <div>
        <button onClick={leerTiemposDeOrdenamiento}>Ejecutar algoritmos de ordenamiento</button>
      </div>
      <TimeChart
        title="Tiempos de Ordenamiento"
        categories={[
          'Bubble Sort en Array',
          'Bubble Sort en Linked List',
          'Merge Sort en Array',
          'Merge Sort en Linked List',
          'Radix Sort en Array',
          'Radix Sort en Linked List'
        ]}
        series={getSortingTimes()}
      />
      <h2>Gráfica de Iteraciones de Ordenamiento</h2>
      <div>
        <button onClick={leerIteraciones}>Ejecutar algoritmos de ordenamiento</button>
      </div>
      <IterationChart
        title="Iteraciones de Ordenamiento"
        categories={[
          'Bubble Sort en Array',
          'Bubble Sort en Linked List',
          'Merge Sort en Array',
          'Merge Sort en Linked List',
          'Radix Sort en Array',
          'Radix Sort en Linked List'
        ]}
        series={getSortingIterations()}
      />
    </>
  );
}

export default App;
