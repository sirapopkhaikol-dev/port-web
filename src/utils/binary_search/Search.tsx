
// binary search
export const binarySearch = (sortedArray: number[], target: number) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === sortedArray[mid]) {
            return sortedArray[mid]; // Found it!
        }
        else if (target > sortedArray[mid]) {
            // Target is bigger. We don't need the left side anymore.
            // Just move the left wall to the right of 'mid'
            left = mid + 1; 
        }
        else if (target < sortedArray[mid]) {
            // Target is smaller. We don't need the right side anymore.
            // Just move the right wall to the left of 'mid'
            right = mid - 1; 
        }
    }

    return -1; // Target not found
}