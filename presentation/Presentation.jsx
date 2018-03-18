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
          <Heading size={6} textColor="textColor" caps>Agenda</Heading>
          <Row>
            <Col md="6">
              <Image src={formImage} height="540px" />
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Uncontrolled inputs</ListItem>
                <ListItem textSize={30} bold>Controlled inputs</ListItem>
                <ListItem textSize={30} bold>React Form</ListItem>
                <ListItem textSize={30} bold>Redux Form</ListItem>
                <ListItem textSize={30} bold>Formik</ListItem>
                <ListItem textSize={30} bold>React Final Form</ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="bgColor"
          notes="
            Uncontrolled inputs hold form data only in DOM elements values.
            You have to get them from form element, or from each specific field.
            It's jQuery'ish solution
            For debugging you have to use form.elements in console
          "
        >
          <Heading size={6} textColor="textColor" caps>React with uncontrolled inputs</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={''} height="auto" />
              <Link
                textSize={18}
                href="https://css-tricks.com/react-forms-using-refs"
              >
                css-tricks.com/react-forms-using-refs
              </Link>
              <Link
                textSize={18}
                href="https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f"
              >
                medium.com/@everdimension
              </Link>
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                    Lightweight
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Allow integration with non React code
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Data is stored in DOM
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      Form data structure is not obvious
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      Clunky debugging (React DevTools are not showing them)
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      No helpers for detecting field state (dirty/touched)
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      No standard components for fields
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>React with controlled inputs</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={''} height="auto" />
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                    Form structure is visible in component state
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Easy debugging with React Devtools
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      Setting form data require handlers
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      No helpers for detecting field state (dirty/touched)
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      No standard components for fields
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>React Form</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={''} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/react-tools/react-form"
              >
                github.com/react-tools/react-form
              </Link>
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                    Provides abstract components for fields
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Has support for nested fields
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Rich API (field state, form lifecycle callbacks)
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      Awkward syntax
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      Not that popular
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>Redux Form</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={''} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/erikras/redux-form"
              >
                github.com/erikras/redux-form
              </Link>
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                    Widely used
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Allow storing data between routes
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                    Good documentation with examples
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      Performance issues
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>Formik</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={''} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/jaredpalmer/formik"
              >
                github.com/jaredpalmer/formik
              </Link>
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      Handles only flat forms
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="bgColor" textColor="textColor">
          <Heading size={6} textColor="textColor" caps>React Final Form</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="textColor" bold>Example</Text>
              <Image src={''} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/final-form/react-final-form"
              >
                github.com/final-form/react-final-form
              </Link>
            </Col>
            <Col md="6">
              <List>
                <ListItem textSize={30} bold>Upsides</ListItem>
                <List>
                  <ListItem textSize={20} bold={false}>
                    No dependencies
                  </ListItem>
                  <ListItem textSize={20} bold={false}>
                  </ListItem>
                </List>

                <ListItem textSize={30} bold>Downsides
                  <List>
                    <ListItem textSize={20} bold={false}>
                      Not enough traction yet
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                      Feature rich with good docs and examples
                    </ListItem>
                    <ListItem textSize={20} bold={false}>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>
      </Deck>
    );
  }
}
