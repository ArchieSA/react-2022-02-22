export const getAge = (birthday, onDate) => {
    const years = onDate.getFullYear() - birthday.getFullYear();
    const gtMonth = onDate.getMonth() > birthday.getMonth();
    const gtDay = onDate.getMonth() === birthday.getMonth() && onDate.getDate() >= birthday.getDate();

    if ( gtMonth || gtDay ) {
        return years;
    }
    return years - 1;
}