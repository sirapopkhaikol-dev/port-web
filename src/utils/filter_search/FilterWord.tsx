
// for loop method with ignore case-sensitive
export const filter_for = (projects: string[], keyword: string) => {

    let result_array = []

    const small_keyword = keyword.toLowerCase()

    for (let index in projects) {

        const prev_propValue = projects[index]
        const small_propValue = projects[index].toLowerCase()

        if (small_propValue.includes(small_keyword)) result_array.push(prev_propValue)

    }

    /*
        - for...in is meant for Objects (to get the keys).

        - for...of is meant for Arrays (to get the values directly).

            for (const project of projects) { 
                if (project.toLowerCase().includes(small_keyword)) {
                    result_array.push(project);
                }
            }

    */

    return result_array

}


// filter method with ignore case-sensitive
export const filter_method = (projects: string[], keyword: string) => {

    const small_keyword = keyword.toLowerCase()


    /* 
        // this in miss understand 

        const result_array = projects.filter(value => {

            const prev_propValue = value
            const small_propValue = value.toLowerCase()

            if (small_propValue.includes(small_keyword)) return prev_propValue

            return 

        })
    /* 


    /* 
        The .filter() method is like a security guard at a club. The guard looks at each person (value) and asks: "Does this person meet the rule?"

        If the rule is true, the guard lets them in (keeps the item).

        If the rule is false, the guard kicks them out (removes the item).

        You do not need to return prev_propValue. You only need to return a Boolean (true or false). Because you returned a string, JavaScript accepted it because strings are considered "Truthy" (มีความเป็นจริง), but it is not best practice.

        Here is the "Senior Dev" way to write it. Notice how concise it is:

    */

    const result_array = projects.filter(value => {
        return value.toLowerCase().includes(small_keyword)
    })

    return result_array
    
}
