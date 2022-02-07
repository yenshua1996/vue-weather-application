export default function transformStr(arr) {
  return arr.map((str) => str.replaceAll(" ", "+"));
}
