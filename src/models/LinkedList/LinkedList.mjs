import Node from "./Node.mjs";

export default class ListaEnlazada {
  #count;
  #head;

  constructor() {
    this.#count = 0;
    this.#head = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.#head == null) {
      this.#head = node;
    } else {
      let current = this.#head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.#count++;
  }

  getElementAt(index) {
    if (index >= 0 && index < this.#count) {
      let node = this.#head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count;
  }

  // Método para obtener el valor máximo de postal_code
  
  getMax() {
    if (this.#head == null) return null;
    let max = this.#head.value.review_count;
    let current = this.#head.next;
    while (current != null) {
      if (current.value.review_count > max) {
        max = current.value.review_count;
      }
      current = current.next;
    }
    return max;
  }

  countSort(exp) {
    let output = new Array(this.size()).fill(null);
    let count = new Array(10).fill(0);
    let current = this.#head;

    // Contar ocurrencias de dígitos
    while (current != null) {
      let index = Math.floor(current.value.review_count / exp) % 10;
      count[index]++;
      current = current.next;
    }

    // Cambio en count[i] para que contenga posiciones finales de los dígitos
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Construir output array
    current = this.#head;
    while (current != null) {
      let index = Math.floor(current.value.review_count / exp) % 10;
      output[count[index] - 1] = current;
      count[index]--;
      current = current.next;
    }

    // Reconstruir la lista enlazada con los elementos ordenados
    for (let i = output.length - 1; i > 0; i--) {
      output[i].next = output[i - 1];
    }
    output[0].next = null; // Asegurarse de que el último nodo no apunte a nada
    this.#head = output[output.length - 1]; // El primer elemento del array es ahora el head de la lista enlazada
  }

  radixSort() {
    let max = this.getMax();
    let exp = 1;
    while (Math.floor(max / exp) > 0) {
      this.countSort(exp);
      exp *= 10;
    }
  }

  // Otros métodos de ordenamiento...
  // Burbuja
  burbbleSort() {
    let bandera;
    let current;
    do {
      bandera = false;
      current = this.#head;
      while (current != null && current.next != null) {
        if (current.value.review_count > current.next.value.review_count) {
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
          bandera = true;
        }
        current = current.next;
      }
    } while (bandera);
  }

  // Merge
  mergeSort() {
    if (this.#head == null || this.#head.next == null) {
      return this;
    }

    const middle = this.getMiddle(this.#head);
    const leftHalf = new ListaEnlazada();
    const rightHalf = new ListaEnlazada();

    leftHalf.#head = this.#head;
    rightHalf.#head = middle.next;
    middle.next = null;

    leftHalf.mergeSort();
    rightHalf.mergeSort();

    this.#head = this.merge(leftHalf.#head, rightHalf.#head);
    return this;
  }

  getMiddle(head) {
    if (head == null) {
      return head;
    }

    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  merge(left, right) {
    let result = null;

    if (left == null) {
      return right;
    }

    if (right == null) {
      return left;
    }

    if (left.value.review_count <= right.value.review_count) {
      result = left;
      result.next = this.merge(left.next, right);
    } else {
      result = right;
      result.next = this.merge(left, right.next);
    }

    return result;
  }
}
