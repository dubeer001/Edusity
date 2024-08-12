import React from 'react';
import './title.css'; // Ensure you import the CSS file

function Title({title,subTitle}) {
  return (
    <div className="title-container">
      <p className="title-subtext">{title}</p>
      <h1 className="title-maintext">{subTitle}</h1>
    </div>
  );
}

export default Title;
