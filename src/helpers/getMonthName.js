export const getMonthName = (date) => {
    const monthNumber = date.getMonth();
    let monthNames = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]

    return monthNames[monthNumber]
}