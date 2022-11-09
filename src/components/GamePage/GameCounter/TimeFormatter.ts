export default function timeFormatter(time: number): string {
  if (time >= 3600) {
    let hours = Math.floor(time / 3600).toString();
    let minutes = Math.floor((time - 3600 * +hours) / 60).toString();
    let seconds = (time % 60).toString().slice(0, 2);

    minutes = +minutes < 10 ? "0" + minutes : minutes;
    seconds = +seconds < 10 ? ("0" + seconds).slice(0, 2) : seconds;

    return `${hours}:${minutes}:${seconds}`;
  } else {
    let minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString().slice(0, 2);

    minutes = +minutes < 10 ? "0" + minutes : minutes;
    seconds = +seconds < 10 ? ("0" + seconds).slice(0, 2) : seconds;
    return `${minutes}:${seconds}`;
  }
}
