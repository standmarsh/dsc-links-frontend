import React, { lazy } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Divider = lazy(() => import('../../components/Divider/Divider'));

const Login = ({ signUpActive, setSignUpActive }) => {
    return (
        <Container
            id="login-form"
            className={`dark-bg-2 h-100 d-flex flex-column justify-content-around align-items-center border-radius-15 ${
                !signUpActive ? 'active' : ''
            }`}
        >
            <Row className="heading-text white-fg">WELCOME BACK</Row>
            <Row className="w-100 justify-content-center">
                <Col xs={12} lg={9}>
                    <Form className="w-100">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                className="dark-fg-2 white-bg"
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className="dark-fg-2 white-bg"
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="w-25">
                <Button className="anim-btn-1 dark-bg-2 w-100">LOGIN</Button>
            </Row>
            <Row className="grey-fg-2 w-100 d-flex justify-content-center">
                <Divider />
                Don't Have an Account?{' '}
                <span
                    className="ml-1 accent-2-fg"
                    onClick={() => setSignUpActive(true)}
                    style={{ cursor: 'pointer' }}
                >
                    Join Now!
                </span>
            </Row>
        </Container>
    );
};

export default Login;
