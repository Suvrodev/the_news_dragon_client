import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import moment from "moment";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  // console.log(news)
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image className="author_image" src={author?.img} roundedCircle />
          <div className="ps-3 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              {" "}
              <small>
                {moment(author?.published_date).format("YYYY-MM-D")}{" "}
              </small>{" "}
            </p>
          </div>

          <div className="">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <span> {details} </span>
            ) : (
              <span>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </span>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 d-flex align-items-center">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <span> {rating?.number} </span>
          </div>

          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
