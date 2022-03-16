const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, key, low, high) => {
  let pivot = arr[high][key];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j][key] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
};

const quicksort = (arr, key, low, high) => {
  let newArr = arr;
  if (low < high) {
    let pi = partition(newArr, key, low, high);
    quicksort(newArr, key, low, pi - 1);
    quicksort(newArr, key, pi + 1, high);
  }
  return newArr;
};

export default quicksort;
