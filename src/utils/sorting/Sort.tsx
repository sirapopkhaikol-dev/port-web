// Bubble Sort
export const Bubble_Sort = (num_array:number[]) => {

    for (let i = 0; i < num_array.length; i++) {

        for (let index = 0; index < num_array.length - 1 - i; index++) {

            if (num_array[index] > num_array[index + 1]) {

                let temp = num_array[index + 1]
                num_array[index + 1] = num_array[index]
                num_array[index] = temp

            }

        }
    }

    // num_array after ascending sort = [2, 5, 7, 8, 10]

    return num_array[0] // minimum

}

// The Comparison
export const Comparison = (num_array:number[]) => {

    let min = num_array[0];

    for (let index = 1; index < num_array.length; index++) {

        if (num_array[index] < min) min = num_array[index]

    }

    return min
}

// Selection Sort
export const Selection_Sort = (num_array:number[]) => {

    for (let i = 0; i < num_array.length; i++) {

        let minIndex = i;

        for (let j = i + 1; j < num_array.length; j++) {

            if (num_array[j] < num_array[minIndex]) minIndex = j
        
        }

        let temp = num_array[minIndex]
        num_array[minIndex] = num_array[i]
        num_array[i] = temp 

    }

    return num_array

}
