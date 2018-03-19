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
  Link,
} from 'spectacle';

import * as images from '../assets';

const theme = createTheme({
  primary: '#e8e8e8',
  secondary: '#00add0',
  tertiary: '#ee5c1a',
  quarternary: '#5b6266',
}, {
  primary: 'Mentone',
  secondary: 'Helvetica',
});
/*
*  simplest case is to use uncontrolled inputs which is closest to VanillaJS
*  You can achieve some nice features when utilizing HTML5
*
*  Drawbacks: data structure is not obvious, vanilla js debugging,
*  storing data between routes, no helpers for dirty/touched
*
*  First two can be solved by controlled inputs, so you store form data in state and pass value to the proper inputs
*  You have to create your custom buggy solution for tracking field state (d/t), or store form data
*
*  In that case we have wide array of packages to use
*
*  React Form - total solution for form handling, do not require manual setting field data in state,
*  provides info about field state, extensible, not used all that much
*
*  Formik - simple api, only flat forms
*
*  Redux Form - allow persisting data between routes, performance issues on bigger applications
*  React Final Form - total solution for form handling
* */

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme} progress="number">
        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="
            Hello! With these 3 easy tricks you will create any form in React in less than an hour!...
            I am Arkadiusz Machalica webdev at Selleo
          "
        >
          <Heading size={3} textColor="secondary" caps lineHeight={1}>
            Creating forms <br />in React
          </Heading>
          <Text margin="10px 0 0" textColor="textColor" lineHeight={1} textSize={26}>
            Arkadiusz Machalica web-developer @ Selleo
            <br />
            <Link href="https://www.linkedin.com/in/arkadiusz-machalica">linkedin.com/in/arkadiusz-machalica</Link>
          </Text>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="and the reality is not that simple. Quite the opposite."
        >
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">1. Challenges</Text>
              <List>
                <ListItem textColor="tertiary" textSize={24} bold={false}>
                  Form data and field state management
                </ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Field and submit validations</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Dynamic fields</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Async select (search)</ListItem>
              </List>
              <Text textSize={30} textColor="quarternary" textAlign="left">2. Solutions without dependencies</Text>
              <List>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Uncontrolled inputs</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Controlled inputs</ListItem>
              </List>
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">3. Form wrapper packages</Text>
              <List>
                <ListItem textColor="tertiary" textSize={24} bold={false}>React Form</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Redux Form</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Formik</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>React Final Form</ListItem>
              </List>
              <Text textSize={30} textColor="quarternary" textAlign="left">4. Supporting packages</Text>
              <List>
                <ListItem textColor="tertiary" textSize={24} bold={false}>React Typeahead</ListItem>
                <ListItem textColor="tertiary" textSize={24} bold={false}>Yup.js</ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes=""
        >
          <Heading size={6} textColor="secondary" caps>Form data and field state management</Heading>
          <Row>
            <Col md="6">
              <Text textSize={30} textColor="quarternary">Form data</Text>
              <Image src={images.formData} />
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary">Field state</Text>
              <Image src={images.fieldMetadata} />
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes=""
        >
          <Heading size={6} textColor="secondary" caps>Field and submit validations</Heading>
          <Row>
            <Col md="6">
              <Image src={images.submitValidations} />
            </Col>
            <Col md="6">
              <Image src={images.fieldValidation} />
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes=""
        >
          <Heading size={6} textColor="secondary" caps>Dynamic fields</Heading>
          <Image src={images.dynamicFields} />
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes=""
        >
          <Heading size={6} textColor="secondary" caps>Async select (search)</Heading>
          <Image src={images.search} />
          <Link
            href="http://ericgio.github.io/react-bootstrap-typeahead/">ericgio.github.io/react-bootstrap-typeahead</Link>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes=""
        >
          <Heading size={6} textColor="secondary" caps>2. Solutions without dependencies</Heading>
          <Image src={images.independent} height="500px" />
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes=""
        >
          <Heading size={6} textColor="secondary" caps>React with uncontrolled inputs</Heading>
          <Row>
            <Col md="6">
              <Image src={images.uncontrolledInput} height="auto" />
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">Upsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Lightweight
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Allow integration with non React code
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Data is stored in DOM
                </ListItem>
              </List>

              <Text textSize={30} textColor="quarternary" textAlign="left">Downsides</Text>

              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Form data structure is not obvious
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Clunky debugging (React DevTools are not showing them)
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  No helpers for detecting field state (dirty/touched)
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  No standard components for fields
                </ListItem>
              </List>
            </Col>
          </Row>
          <Link
            textSize={18}
            href="https://css-tricks.com/react-forms-using-refs"
          >
            css-tricks.com/react-forms-using-refs
          </Link>
          <br />
          <Link
            textSize={18}
            href="https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f"
          >
            medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
          </Link>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="textColor">
          <Heading size={6} textColor="secondary" caps>React with controlled inputs</Heading>
          <Row>
            <Col md="6">
              <Image src={images.controlledInput} height="auto" />
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">Upsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Form structure is visible in component state
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Easy debugging with React Devtools
                </ListItem>
              </List>

              <Text textSize={30} textColor="quarternary" textAlign="left">Downsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Setting form data require handlers
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  No helpers for detecting field state (dirty/touched)
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  No standard components for fields
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="
            Unfortunately these packages do not contain cute cats... rather bugs...
            but even despite of that they are useful, so let's check few of them
          "
        >
          <Heading size={6} textColor="secondary" caps>3. Form wrapper packages</Heading>
          <Image src={images.catPackage} height="500px" />
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="textColor"
          notes="
            Allows setting validation per field
            ~40k downloads in a month
          "
        >
          <Heading size={6} textColor="secondary" caps>React Form</Heading>
          <Row>
            <Col md="6">
              <Image src={images.reactForm} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/react-tools/react-form"
              >
                github.com/react-tools/react-form
              </Link>
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">Upsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Provides abstract components for fields
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Has support for nested fields
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Rich API (field state, form lifecycle callbacks)
                </ListItem>
              </List>

              <Text textSize={30} textColor="quarternary" textAlign="left">Downsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Not that popular
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" textColor="textColor">
          <Heading size={6} textColor="secondary" caps>Redux Form</Heading>
          <Row>
            <Col md="6">
              <Image src={images.reduxForm} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/erikras/redux-form"
              >
                github.com/erikras/redux-form
              </Link>
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">Upsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Widely used
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Allow storing data between routes
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Good documentation with examples
                </ListItem>
              </List>

              <Text textSize={30} textColor="quarternary" textAlign="left">Downsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Performance issues
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Package size
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="textColor"
          notes="
            raising star from the creator of Redux Form
            very lightweight and performant in comparison to the Redux Form

          "
        >
          <Heading size={6} textColor="secondary" caps>React Final Form</Heading>
          <Row>
            <Col md="6">
              <Image src={''} height="auto" />
              <Link
                textSize={18}
                href="https://github.com/final-form/react-final-form"
              >
                github.com/final-form/react-final-form
              </Link>
            </Col>
            <Col md="6">
              <Text textSize={30} textColor="quarternary" textAlign="left">Upsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  No dependencies
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Lightweight
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Feature rich with good docs and examples
                </ListItem>
              </List>

              <Text textSize={30} textColor="quarternary" textAlign="left">Upsides</Text>
              <List>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                  Not enough traction yet
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                </ListItem>
                <ListItem textColor="tertiary" textSize={20} bold={false}>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="

          "
        >
          <Heading size={6} textColor="secondary" caps>4. Supporting Packages</Heading>
          <Image src={images.supplyDrop} height="500px" />
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="textColor"
          notes="
            Lots of fields with typeahead support, async, chips
          "
        >
          <Heading size={6} textColor="secondary" caps>React Bootstrap Typeahead</Heading>
          <Image src={images.search} height="auto" />
          <Link
            textSize={18}
            href="https://github.com/ericgio/react-bootstrap-typeahead"
          >
            github.com/ericgio/react-bootstrap-typeahead
          </Link>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="textColor"
          notes="
            Go-to validation solution
          "
        >
          <Heading size={6} textColor="secondary" caps>Yup.js</Heading>
          <Image src={images.yup} height="auto" />
          <Link
            textSize={18}
            href="https://github.com/jquense/yup"
          >
            github.com/jquense/yup
          </Link>
        </Slide>

        <Slide
          transition={['slide']}
          bgColor="primary"
          notes="
          "
        >
          <Heading size={3} textColor="secondary" caps lineHeight={1}>
            Creating forms <br />in React
          </Heading>
          <Heading size={5} textColor="tertiary" caps lineHeight={1}>
            Thank you for your attention
          </Heading>
          <Text margin="10px 0 0" textColor="textColor" lineHeight={1} textSize={26}>
            Arkadiusz Machalica web-developer @ Selleo
            <br />
            <Link href="https://www.linkedin.com/in/arkadiusz-machalica">linkedin.com/in/arkadiusz-machalica</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
