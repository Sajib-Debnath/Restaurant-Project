import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: '15px' }}>
                <CardBody>
                    <CardImg width='100%' alt={props.dish.name} src={props.dish.image} style={{ opacity: '0.8' }} />
                    <CardImgOverlay>
                        <CardTitle onClick={() => props.onDishSelect(props.dish)} style={{cursor: 'pointer'}}> {props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>

            </Card>
        </div>
    );
};

export default MenuItem;