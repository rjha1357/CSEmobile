import moment from 'moment';

export const displayDateFormat = (date) => {
    if (date === "") return "";
    return moment(date).format('DD/MM/YYYY');
}

export const dbDateFormat = (date) => {
    if (date === "") return "";
    return moment(date).format('YYYY/MM/DD');
}