import React from 'react';

export default function Displayer({caption, url}){
  return(
    <div>
      <h1>{caption}</h1>
      <img src={url} alt="" height="150" width="150"/>
    </div>
  );
}


