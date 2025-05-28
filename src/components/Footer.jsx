import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <footer className="text-center text-white" style={{ backgroundColor: '#3f51b5' }}>
                <div>
                    <section>
                        <Row className="text-center justify-content-center pt-3 mx-0">
                            <div className="d-flex justify-content-center gap-5 flex-wrap text-center">
                                <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
                                <Link to={'/log'} style={{ color: 'white', textDecoration: 'none' }}>LOGIN</Link>
                                <Link to={'/reg'} style={{ color: 'white', textDecoration: 'none' }}>REGISTER</Link>
                            </div>
                        </Row>
                    </section>

                    <hr className="mt-3 mb-4" />

                    <section className="mb-4 mx-4">
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <h3 className="text-center pb-2">Media Player 2025</h3>

                                <p style={{wordSpacing:'1px'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </Col>
                        </Row>
                    </section>
                    <section className="mb-4">
                        <Row className="justify-content-center m-0 p-0">
                            <Col sm={6}>
                                <h3 className="text-center pb-2">FeedBacks</h3>
                                <textarea name="" id="" placeholder='Enter Your Feedbacks' className='form-control my-3' rows={3}></textarea>
                                <button className="btn btn-success shadow-sm text-dark px-5 fw-bold rounded-pill">Send</button></Col>
                        </Row>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2025 Copyright :{' '}
                    <a className="text-white text-decoration-none" href="#">Muhamed Razik</a>
                </div>
            </footer>

        </>
    )
}

export default Footer