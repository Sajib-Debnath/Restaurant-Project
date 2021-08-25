import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(val)


class Contact extends Component {
    submitHandaler = values => {
        console.log(values)
    }

    render() {
        document.title = 'Contact'
        return (
            <div className='container'>
                <div className="row row-content" style={{ textAlign: 'left', paddingLeft: '20px' }}>
                    <div className="col-12"><h3> Send us your feedback</h3></div>
                    <br />
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.submitHandaler(values)}>
                            <FormGroup row>
                                <Label htmlFor='firstName' md={3} > First Name :</Label>
                                <br />
                                <Col md={9}>
                                    <Control.text
                                        model=".firstName"
                                        name='firstName'
                                        placeholder='Your First Name'
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        } />
                                </Col>
                                <br />
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='lastName' md={3} > Last Name :</Label>
                                <Col md={9}>
                                    <Control.text
                                        model='.lastName'
                                        placeholder='Your Last Name'
                                        name='lastName'
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='telnum' md={3} > Number :</Label>
                                <Col md={9}>
                                    <Control.text
                                        model='.telnum'
                                        name='telnum'
                                        placeholder='Your Phone Number'
                                        className='form-control'
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                                isNumber: "Invalid Phone Number"
                                            }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='email' md={3}> Email :</Label>
                                <Col md={9}>
                                    <Control.text
                                        model='.email'
                                        name='email'
                                        placeholder='Your Email Id'
                                        className='form-control'
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                                validEmail: "Invalid Email"
                                            }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 5, offset: 3 }}>
                                    <Label>
                                        <Control.checkbox
                                            model='.agree'
                                            name='agree'
                                        /> <strong> May we contact you</strong>
                                    </Label>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model='.contactType'
                                        name='contactType'
                                    >
                                        <option> Tele. </option>
                                        <option> Email </option>
                                    </Control.select>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={3} htmlFor='message'> Your Feedback:</Label>
                                <Col md={9}>
                                    <Control.textarea
                                        className='form-control'
                                        name='message'
                                        model='.message'
                                        rows={12}
                                        validators={{
                                            required
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 4, offset: 3 }}>
                                    <Button type='submit' color='primary'> Send Feedback </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div >
            </div >
        );
    }
}

export default Contact;