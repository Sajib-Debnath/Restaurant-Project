import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handaleInputChange = this.handaleInputChange.bind(this);
        this.handaleSubmit = this.handaleSubmit.bind(this)
    }

    handaleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handaleSubmit = event => {
        this.props.addComment(this.props.dishId,this.state.rating,this.state.author, this.state.comment)
        this.setState({
            author: '',
            rating: '',
            comment: ''
        });

        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handaleSubmit}>
                    <Input type='text' name='author' value={this.state.author} placeholder="Your Name" onChange={this.handaleInputChange} required />
                    <br />
                    <Input type="select" name="rating" value={this.state.rating} onChange={this.handaleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="textarea" name="comment" value={this.state.comment} placeholder="Your Comment" onChange={this.handaleInputChange} required />
                    <br />
                    <Button type="submit"> Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default CommentForm;