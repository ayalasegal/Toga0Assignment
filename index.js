function findPeakElementRecursive(arr, low, high) {
    if (low === high) {
      // Only one element in the array, and it is a peak
      return low;
    }
  
    let mid = Math.floor((low + high) / 2);
  
    if (arr[mid] > arr[mid + 1]) {
      // Peak element is in the left half
      return findPeakElementRecursive(arr, low, mid);
    } else {
      // Peak element is in the right half
      return findPeakElementRecursive(arr, mid + 1, high);
    }
  }
  
  function findPeakElement(arr) {
    return findPeakElementRecursive(arr, 0, arr.length - 1);
  }
  
  // Example usage:
  const array = [1, 2, 3, 1];
  const peakIndex = findPeakElement(array);
  const peakElement = array[peakIndex];
  
  console.log(`Peak element is ${peakElement} at index ${peakIndex}`);
  