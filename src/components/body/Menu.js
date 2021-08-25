import React, { Component } from 'react';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../redux/4_ActionCreator';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => {
            return dispatch(addComment(dishId, rating, author, comment))
        }
    }
}


class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false,
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    modalHadaler = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        document.title = 'Menu'
        const menu = this.props.dishes.map(item => <MenuItem dish={item} key={item.id} onDishSelect={this.onDishSelect} />)

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id
            })
            dishDetail = <DishDetail
                selectedDish={this.state.selectedDish}
                comments={comments}
                addComment={this.props.addComment} />
        }
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <CardColumns>{menu}</CardColumns>

                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody> {dishDetail} </ModalBody>
                            <ModalFooter><Button onClick={this.modalHadaler} color='secondary'>Close</Button></ModalFooter>
                        </Modal>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);