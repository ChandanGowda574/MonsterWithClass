import React from 'react';
import './searchbox.styles.css';

export const Searchbox = ({placeholder, handleChange}) => (
    <input type='search' 
    className="search"
    placeholder= {placeholder}
    onChange={handleChange} />
)