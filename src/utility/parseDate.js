const parseDate = (value, type) => {
    const date = new Date(value);
    
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    if(type === 'day') {
        return days[date.getDay()];
    }
    if(type === 'date') {
        return date.getDate().toString();
    }
    if(type === 'month') {
        return months[date.getMonth()];
    }
    if(type === 'year') {
        return date.getFullYear().toString();
    }
};

export default parseDate;