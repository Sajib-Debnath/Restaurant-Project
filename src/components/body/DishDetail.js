import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: '15px' }}>
                <CardImg src={props.selectedDish.image} alt={props.selectedDish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.selectedDish.name}</CardTitle>
                    <CardText>
                        <p>{props.selectedDish.description}</p>
                        <p>{props.selectedDish.price}</p>
                    </CardText>
                    <hr />
                    <Comment comment={props.comments} />
                    <CommentForm dishId={props.selectedDish.id} addComment={props.addComment} />
                </CardBody>

            </Card>
        </div>
    );
};

export default DishDetail;