import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id}=useParams()
   // console.log('Category id: ',id)

    const [categoryNews,setCategoryNes]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/categories/${id}`)
        .then(res=>res.json())
        .then(data=>setCategoryNes(data))
    },[id])


   // console.log(categoryNews)
    return (
        <div>
            This is Category {categoryNews.length}

            {
                categoryNews.map(news=><NewsCard
                news={news}
                key={news._id}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;