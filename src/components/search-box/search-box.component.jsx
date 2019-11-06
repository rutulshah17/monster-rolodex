import React from 'react';

import './search-box.styles.css';

//we are still getting elements as props, 
//but we are using destructuring instead of using props.placeholder and props.handleChange
export const SearchBox = ( {placeholder, handleChange} ) => (
    <input className="search" type="search" placeholder={placeholder}
       onChange= {handleChange}
    />
);