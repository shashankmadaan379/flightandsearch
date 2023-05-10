function compareTime(timeString1, timeString2) {
  let Datetime1 = new Date(timeString1);
  let Datetime2 = new Date(timeString2);
  return Datetime1 > Datetime2;
}

module.exports = compareTime;
