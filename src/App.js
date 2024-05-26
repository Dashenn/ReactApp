import React, { useState, useEffect } from "react";
import useAxios from "./useAxios";
import Button from "./components/button";
import TextBlock from "./components/textBlock";

function App() {
  const [jokeList, setJoke] = useState([]);
  const { data, loading, error, AxiosData } = useAxios(
    "https://official-joke-api.appspot.com/random_joke"
  );
  useEffect(() => {
    if (data) {
      setJoke((item) => [...item, data]);
    }
  }, [data]);
  const buttonClick = () => {
    AxiosData();
  };
  return (
    <>
      <Button onClick={buttonClick} />

      {loading && <TextBlock text="Загрузка..." />}
      {error && <TextBlock text={`Ошибка: ${error}`} />}
      <ul>
        {jokeList.map((item, index) => (
          <li key={index}>
            {item.setup} - {item.punchline}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
