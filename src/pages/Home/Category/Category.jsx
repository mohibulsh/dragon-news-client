import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {id} =useParams();
    console.log(id)
    return (
        <div>
             <h2>this is category {id}</h2>
        </div>
    );
};

export default Category;