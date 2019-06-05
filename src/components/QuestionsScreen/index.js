import React, { useEffect, useState } from "react";
import axios from "axios";
import Quiz from "./Quiz";

const Page = () => {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await axios(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    setData(result.data);
  }, []);

  return (
    <React.Fragment>
      <Quiz data={data} />
    </React.Fragment>
  );
};

export default Page;
