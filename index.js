function findPeakElementRecursive(arr, low, high) {
    if (low === high) {
      return low;
    }
  
    let mid = Math.floor((low + high) / 2);
  
    if (arr[mid] > arr[mid + 1]) {
      return findPeakElementRecursive(arr, low, mid);
    } else {
      return findPeakElementRecursive(arr, mid + 1, high);
    }
  }
  
  function findPeakElement(arr) {
    return findPeakElementRecursive(arr, 0, arr.length - 1);
  }
  
  