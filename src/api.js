import api from "./axiosConfig";
import endpoint from "./endpoint";
export const GetRestaurantDataAPI = async () => {
  try {
    const { data } = await api.get(endpoint.restaurant);
    return data;
  } catch (error) {
    throw error;
  }
};
