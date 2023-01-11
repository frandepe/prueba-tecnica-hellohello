import axios from "axios";

const BASE_URL = "https://api-demo-hh.vercel.app/api";

export const getOptionList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/options`);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const sendFormData = async (email: string, option: string) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/send?email=${email}&option=${option}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
