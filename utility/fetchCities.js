import transformStr from "./transformStr.js";

export default async function fetchCities(cities) {
  try {
    const query = transformStr(cities);

    const requestArr = query.map((city) => {
      return fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aaf144d6dc8b967a0110a9caa4a5d920`
      ).then((res) => res.json());
    });

    return await Promise.allSettled(requestArr);
  } catch (err) {
    console.log(err);
  }
}
