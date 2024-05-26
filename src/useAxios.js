import axios from "axios";
import { useState } from "react";

function UseAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const AxiosData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios(url);
      if (response.status !== 200) {
        throw new Error("not ok");
      }
      const data = await response.data;
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    };
  };
  return { data, loading, error, AxiosData };
}
export default UseAxios;
