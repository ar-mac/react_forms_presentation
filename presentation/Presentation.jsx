import React, { Component } from 'react';
import createTheme from 'spectacle/lib/themes/default';

import {
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

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
          <Heading size={1} fit caps lineHeight={1} textColor="textColor">
            Multiple approaches to creating forms
          </Heading>
          <Text margin="10px 0 0" textColor="textColor" lineHeight={1} textSize={20} bold>
            Arkadiusz Machalica web-developer @ selleo
            <br />
            <a href="https://www.linkedin.com/in/arkadiusz-machalica">linkedin.com/in/arkadiusz-machalica</a>
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="bgColor">
          <Heading size={6} textColor="textColor" caps>Pure React with uncontrolled inputs</Heading>
          <List>
            <ListItem>What are uncontrolled inputs</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Upsides</ListItem>
            <ListItem>Downsides</ListItem>
          </List>
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
