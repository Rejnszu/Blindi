export default function timeFormatter(time: number): string {
  if (time >= 3600) {
    let hours = Math.floor(time / 3600).toString();
    let minutes = Math.floor((time - 3600 * +hours) / 60).toString();
    let seconds = (time % 60).toString().slice(0, 2);
    if (+minutes < 10) {
      minutes = "0" + minutes;
    }
    if (+seconds < 10) {
      seconds = ("0" + seconds).slice(0, 2);
    }
    return `${hours}:${minutes}:${seconds}`;
  } else {
    let minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString().slice(0, 2);
    if (+minutes < 10) {
      minutes = "0" + minutes;
    }
    if (+seconds < 10) {
      seconds = ("0" + seconds).slice(0, 2);
    }
    return `${minutes}:${seconds}`;
  }
}
