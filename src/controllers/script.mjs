import LinkedListBussines from "../models/LinkedListBussines.mjs"
let listaEnlazadaNegocios = new LinkedListBussines();

console.log("Conectado con el script")

const compararInsercion = () => {
    console.log("Iniciando insercion")
    const start1 = performance.now();
    listaEnlazadaNegocios.insercionDelDataset();
    const end1 = performance.now();
    console.log(`El tiempo de ejecución fue ${end1 - start1} milisegundos`);
}
