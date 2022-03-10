import axios from "axios";

const url = "https://disease.sh/v3/covid-19/all";
const globalChartUrl = "https://covid19.mathdro.id/api/daily";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `https://disease.sh/v3/covid-19/countries/${country}`;
  }

  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(changeableUrl);

    return { cases, recovered, deaths, updated };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${globalChartUrl}`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/countries`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
