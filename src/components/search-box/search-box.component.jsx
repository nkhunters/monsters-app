import React from 'react';

export const SearchBox = props => (

    <input
        type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
    />
)