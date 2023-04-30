import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import EditorInsight from '../EditorsInsight/EditorInsight';

const News = () => {
    const {id}=useParams()

    const [news,setNews]=useState("");
    useEffect(()=>{
        fetch(`http://localhost:5000/news/${id}`)
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])

    const {_id,title,details,image_url,category_id}=news;

    console.log(news)

    return (
        <div>
            <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                {details}
                </Card.Text>
    
                <Link to={`/category/${category_id}`}>
                <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All News in this Category</Button> 
                </Link>
            
            </Card.Body>
            </Card>

            <div className='mt-4'>
                <h4>Editor Inside</h4>
               <EditorInsight></EditorInsight>
            </div>
       
      </div>
    );
};

export default News;