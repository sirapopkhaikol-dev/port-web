type RenderPort_Object = {
    name: string,
    category: string,
    status: string,
}


export const renderPort = (projects: RenderPort_Object[]) => {
  
    const result_jsx = projects.map(value => {
        return `<li>${value.name} (${value.category})</li>`
    })

    return result_jsx
}

