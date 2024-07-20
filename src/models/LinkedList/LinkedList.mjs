import Node from "./Node.mjs";

export default class ListaEnlazada {
  #count;
  #head;
  #tail;

  iteracionesBurbuja = 0;
  iteracionesMerge = 0;
  iteracionesRadix = 0;

  constructor() {
    this.#count = 0;
    this.#head = undefined;
    this.#tail = undefined;
  }

  push(value) {
    const node = new Node(value);
    if (this.#head == null) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
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

  // Método para obtener el valor máximo
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

    while (current != null) {
      let index = Math.floor(current.value.review_count / exp) % 10;
      count[index]++;
      current = current.next;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    current = this.#head;
    while (current != null) {
      this.iteracionesRadix++;
      let index = Math.floor(current.value.review_count / exp) % 10;
      output[count[index] - 1] = current;
      count[index]--;
      current = current.next;
    }

    for (let i = output.length - 1; i > 0; i--) {
      output[i].next = output[i - 1];
    }
    output[0].next = null; 
    this.#head = output[output.length - 1]; 
  }

  radixSort() {
    this.iteracionesRadix = 0;
    let max = this.getMax();
    let exp = 1;
    while (Math.floor(max / exp) > 0) {
      this.countSort(exp);
      exp *= 10;
    }
  }

  // Burbuja
  burbbleSort() {
    this.iteracionesBurbuja = 0;
    let bandera;
    let current;
    do {
      bandera = false;
      current = this.#head;
      while (current != null && current.next != null) {
        this.iteracionesBurbuja++;
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
    this.iteracionesMerge = 0;
    if (this.#head == null || this.#head.next == null) {
        return this; // La lista ya está ordenada
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
    if (head == null) return head;

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
    let current = null;

    if (left == null) return right;
    if (right == null) return left;

    if (left.value.review_count <= right.value.review_count) {
        result = left;
        left = left.next;
    } else {
        result = right;
        right = right.next;
    }
    current = result;

    while (left != null && right != null) {
        this.iteracionesMerge++;
        if (left.value.review_count <= right.value.review_count) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    if (left != null) {
        current.next = left;
    } else {
        current.next = right;
    }

    return result;
  }

}
