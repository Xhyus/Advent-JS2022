function countHours(year, holidays) {
    let hours = 0
    holidays.forEach(holiday => {
        let date = new Date(year + '-' + holiday).getDay()
        if (date !== 0 && date !== 6) {
            hours += 2
        }
    })
    return hours
}
