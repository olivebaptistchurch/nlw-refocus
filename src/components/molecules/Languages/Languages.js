import { Link } from 'gatsby';
import React from 'react';

const Languages = ({ languages }) => {
  return (
    <>
      {
        Object.keys(languages).map(key => 
            <a href={languages[key]} key={key}>{key}</a>
        )
      }
    </>
  );
};

export default Languages;