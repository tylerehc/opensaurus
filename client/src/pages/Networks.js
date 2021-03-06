// React & Redux
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button } from 'reactstrap';
import brphero from '../img/brp.jpg';

// Components


class About extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
          <Col xs="6">
            <Card>
              <CardImg top width="100%" src={brphero} alt="Card image cap" />
              <CardBody>
                <CardTitle>Big Red Planet</CardTitle>
                <CardSubtitle>Investing in US STEM Education</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <div className="network-buttons">
                <Button color="dark" className="network-button" href="/networks/brp/about/">More Info</Button>
                <Button color="dark" className="network-button" href="/networks/brp/tasks/">Tasks</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default About;
