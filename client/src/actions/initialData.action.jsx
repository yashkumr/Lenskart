import { categoryConstansts } from "./constants";
import axios from "../helpers/axios";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post(`/initialData`);
    if (res.status === 200) {
      const { categories, products, orders } = res.data;
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
    }
    console.log(res);
  };
};
