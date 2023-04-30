import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNAv = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h4>All Categories</h4>
            <div className='mt-4 text-start ps-3'>
                {
                    categories.map(category=> <p key={category.id}>
                        <Link className='fw-bold text-secondary' to={`/category/${category.id}`}> {category.name} </Link>
                        </p>
                        )
                }
            </div>
        </div>
    );
};

export default LeftNAv;