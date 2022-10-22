import React, { useCallback, useEffect, useState } from "react";

import { fetchImages } from "../api";

import Button from "./Button";

import classes from "./Corousel.module.css";

const Corousel = ({ slides, infinite = false }) => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const data = await fetchImages(slides);
    setData(data);
    setIsLoading(false);
  }, [slides]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const backButtonHandler = () => {
    setIndex((current) => {
      if (current === 0) {
        if (infinite === true) {
          return data.length - 1;
        }
        return 0;
      }

      return current - 1;
    });
  };

  const nextButtonHandler = () => {
    setIndex((current) => {
      if (current === data.length - 1) {
        if (infinite === true) {
          return 0;
        }
        return data.length - 1;
      }

      return current + 1;
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const backButtonDisabled = infinite === false && index === 0;
  const nextButtonDisabled = infinite === false && index === data.length - 1;
  const showButton = data.length > 1;

  return (
    <div className={classes.corousel}>
      <img src={data[index].image} alt='' />
      <div className={classes.overlay}>
        {showButton && <Button direction='back' clickHandler={backButtonHandler} disabled={backButtonDisabled} />}
        <div className={classes.content}>
          <div className={classes.title}>{data[index].title}</div>
          <div className={classes.sub_title}>{data[index].subTitle}</div>
        </div>
        {showButton && <Button clickHandler={nextButtonHandler} disabled={nextButtonDisabled} />}
      </div>
    </div>
  );
};

export default Corousel;
