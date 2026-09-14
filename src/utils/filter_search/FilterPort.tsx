type FilterPort_Object = {
    name: string,
    category: string,
    status: string,
}

export const getCompletedFrontendProjects = (projects: FilterPort_Object[]) => {

    const result_array = projects.filter(value => {

        return (value.category === 'Frontend' && value.status === 'Completed') 
    })

    /*
        // We "destructure" category and status directly from the object!

        const result_array = projects.filter(({ category, status }) => {
            return category === 'Frontend' && status === 'Completed'; 
        });
    */

    return result_array

}

