import { Link } from 'gatsby';
import React from 'react';
import Links from '../../atoms/Links/Links';

const Languages = ({ languages }) => {
  return (
    <>
      {
        Object.keys(languages).map(key => 
            <Links linkTo={languages[key]} message={key} key={key} />
        )
      }
    </>
  );
};

export default Languages;