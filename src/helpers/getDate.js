export const getDate = (date) => {
    const options ={
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return date.toLocaleDateString('es-ES', options)

}