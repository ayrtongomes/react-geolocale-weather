import api from "../..";

export const getWeatherByLatLon = async (lat: number, lon: number) => {
  const { data } = await api.get(`?lat=${lat}&lon=${lon}`);

  return data || [];
};
