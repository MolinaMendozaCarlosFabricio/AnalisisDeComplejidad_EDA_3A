import { useState } from 'react';
import './App.css';
import LinkedListBussines from './models/LinkedListBussines.mjs';
import ArrayBussines from './models/Array/ArrayBussines.mjs';

function App() {
  let listaEnlazadaNegocios = new LinkedListBussines();
  let arrayNegocios = new ArrayBussines();

  const compararInsercionListaEnlazada = () => {
    console.log("Iniciando inserción en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegocios.insercionDelDataset();
    const end = performance.now();
    console.log(`El tiempo de ejecución en lista enlazada fue ${end - start} milisegundos`);
  }

  const compararInsercionArray = () => {
    console.log("Iniciando inserción en array");
    const start = performance.now();
    arrayNegocios.insercionDelDataset();
    const end = performance.now();
    console.log(`El tiempo de ejecución en array fue ${end - start} milisegundos`);
  }

  const compararBusquedaListaEnlazada = () => {
    let objetoBusqueda = document.getElementById("inputClaveABuscar").value;

    const start = performance.now();
    listaEnlazadaNegocios.busquedaEnElDataset(objetoBusqueda);
    const end = performance.now();
    console.log(`El tiempo de ejecución en lista enlazada fue ${end - start} milisegundos`);
  }

  const compararBusquedaArray = () => {
    let objetoBusqueda = document.getElementById("inputClaveABuscar").value;

    const start = performance.now();
    arrayNegocios.busquedaEnElDataset(objetoBusqueda); // Asumiendo que el método existe
    const end = performance.now();
    console.log(`El tiempo de ejecución en array fue ${end - start} milisegundos`);
  }

  const compararBurbujaArray = () => {
    console.log("Iniciando ordenamiento burbuja en array");
    const start = performance.now();
    arrayNegocios.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    console.log(`El tiempo de ejecución de burbuja en array fue ${end - start} milisegundos`);
  }

  const compararMergeArray = () => {
    console.log("Iniciando ordenamiento merge en array");
    const start = performance.now();
    arrayNegocios.ejecutarAlgoritmoMerge();
    const end = performance.now();
    console.log(`El tiempo de ejecución de merge en array fue ${end - start} milisegundos`);
  }

  const compararRadixArray = () => {
    console.log("Iniciando ordenamiento radix en array");
    const start = performance.now();
    arrayNegocios.ejecutarAlgoritmoRadix();
    const end = performance.now();
    console.log(`El tiempo de ejecución de radix en array fue ${end - start} milisegundos`);
  }

  const compararBurbujaListaEnlazada = () => {
    console.log("Iniciando ordenamiento burbuja en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegocios.ejecutarAlgoritmoBurbuja();
    const end = performance.now();
    console.log(`El tiempo de ejecución de burbuja en lista enlazada fue ${end - start} milisegundos`);
  }

  const compararMergeListaEnlazada = () => {
    console.log("Iniciando ordenamiento merge en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegocios.ejecutarAlgoritmoMerge();
    const end = performance.now();
    console.log(`El tiempo de ejecución de merge en lista enlazada fue ${end - start} milisegundos`);
  }

  const compararRadixListaEnlazada = () => {
    console.log("Iniciando ordenamiento radix en lista enlazada");
    const start = performance.now();
    listaEnlazadaNegocios.ejecutarAlgoritmoRadix();
    const end = performance.now();
    console.log(`El tiempo de ejecución de radix en lista enlazada fue ${end - start} milisegundos`);
  }

  return (
    <>
      <h1>Análisis de complejidad</h1>
      <div>
        <button onClick={compararInsercionListaEnlazada}>Ejecutar inserción en lista enlazada</button>
        
      </div>
      
      <div>
        <input id='inputClaveABuscar' placeholder='Clave a buscar' type='text'/>
        <button onClick={compararBusquedaListaEnlazada}>Ejecutar búsqueda en lista enlazada</button>
        <button onClick={compararBusquedaArray}>Ejecutar búsqueda en array</button>
      </div>
      
      <div>
        <button onClick={compararBurbujaListaEnlazada}>Ejecutar burbuja en lista enlazada</button>
        <button onClick={compararMergeListaEnlazada}>Ejecutar merge en lista enlazada</button>
        <button onClick={compararRadixListaEnlazada}>Ejecutar radix en lista enlazada</button>
      </div>

     

      <h1>Array</h1>
      <div>
        <button onClick={compararInsercionArray}>Ejecutar inserción en array</button>
      </div>
      <div>
        <button onClick={compararBurbujaArray}>Ejecutar burbuja en array</button>
        <button onClick={compararMergeArray}>Ejecutar merge en array</button>
        <button onClick={compararRadixArray}>Ejecutar radix en array</button>
      </div>
    </>
  )
}

export default App;
