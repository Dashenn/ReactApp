import axios from "axios";
import { useState } from "react";

interface AxiosReturnType<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  AxiosData: () => void;
}

function UseAxios<T>(url : string) : AxiosReturnType<T>{
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const AxiosData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios<T>(url);
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