import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/banner/1.jpg'
import image2 from '../../images/banner/2.jpg'
import image3 from '../../images/banner/3.jpg'

const Benar = () => {
        return (
                <Carousel id='home' fade className='container-fluid'>
                        <Carousel.Item>
                                <img
                                        className="d-block img-fluid"
                                        src={image1}
                                        alt="First slide"
                                />
                                <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                        className="d-block img-fluid"
                                        src={image2}
                                        alt="Second slide"
                                />

                                <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                        className="d-block img-fluid"
                                        src={image3}
                                        alt="Third slide"
                                />

                                <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
        );
};

export default Benar;