import React from 'react';

export default function Person({name, age, occupation, image_url}){
  return(
    <div>
      <h2>{name}</h2>
      <p><b>Age: </b>{age}</p>
      <p><b>Occupation: </b>{occupation}</p>
      <img src={image_url} alt="Too ugly..." height="100" width="100"/>
    </div>
  );
}


