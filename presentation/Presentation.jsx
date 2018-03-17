import React, { Component } from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Row, Col } from 'reactstrap';
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Link
} from 'spectacle';

import formImage from '../assets/emoji_registration.png';
import uncontrolledInputImage from '../assets/uncontrolled_input.png';

const theme = createTheme({
  textColor: '#595959',
  primary: '#ecf0f1',
  secondary: '#595959',
  tertiary: '#595959',
  quarternary: '#595959',
  bgColor: '#ecf0f1',
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica',
});

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme} progress="number">
        <Slide transition={['slide']} bgColor="bgColor">
          <Heading size={3} caps lineHeight={1} textColor="textColor">
            Creating forms <br />in React
          </Heading>
          <Text margin="10px 0 0" textColor="textColor" lineHeight={1} textSize={20}>
            Arkadiusz Machalica web-developer @ selleo
            <br />
            <Link href="https://www.linkedin.com/in/arkadiusz-machalica">linkedin.com/in/arkadiusz-machalica</Link>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" notes="Example form">
          <Heading size={6} textColor="textColor" caps>Example form</Heading>
          <Image src={formImage} height="540px" />
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor">
          <Heading size={6} textColor="textColor" caps>Pure React with uncontrolled inputs</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={uncontrolledInputImage} height="auto" />
              <Link
                textSize={18}
                href="https://code.lengstorf.com/get-form-values-as-json/"
              >
                code.lengstorf.com/get-form-values-as-json/
              </Link>
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                    data stored in DOM
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Vanilla JS approach
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      not suited real applications
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      manual validation handling
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      clunky controll over form values
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>Pure React with controlled inputs</Heading>
          <List>
            <ListItem>What are controlled inputs</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Upsides</ListItem>
            <ListItem>Downsides</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>React Form</Heading>
          <List>
            <ListItem>Package solution https://github.com/react-tools/react-form</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Upsides</ListItem>
            <ListItem>Downsides</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>Redux Form</Heading>
          <List>
            <ListItem>Package solution https://github.com/erikras/redux-form</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Upsides</ListItem>
            <ListItem>Downsides</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>Formik</Heading>
          <List>
            <ListItem>Package solution https://github.com/jaredpalmer/formik</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Upsides</ListItem>
            <ListItem>Downsides</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>React Final Form</Heading>
          <List>
            <ListItem>Package solution https://github.com/final-form/react-final-form</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Upsides</ListItem>
            <ListItem>Downsides</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
