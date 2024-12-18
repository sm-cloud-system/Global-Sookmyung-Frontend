class DateFormatter {
  static formatMonthDayKR(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  }

  static formatDotNotation(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
  }
}

export default DateFormatter;
