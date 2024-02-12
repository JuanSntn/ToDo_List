
export const getNameDay = (date) => {
    const numberDay = date.getDay();
    const weeksDays =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    return weeksDays[numberDay]
}