type RenderPort_Object = {
    title: string,
    tech: string,
    status: string,
}

export const formatProjectDetails = (project: RenderPort_Object) => {

    const result_array = Object.entries(project).map(value => {

        const push = `${value[0]} : ${value[1]}`

        return push
    })

    return result_array
    
}

/*
    export const formatProjectDetailsPro = (project: RenderPort_Object) => {
        // We destructure the array [key, value] directly in the parameter!
        return Object.entries(project).map(([key, val]) => {
            return `${key} : ${val}`;
        });
    }

    // Or as a true one-liner (Implicit Return):
    export const formatPro = (project: RenderPort_Object) => 
        Object.entries(project).map(([key, val]) => `${key} : ${val}`);
*/