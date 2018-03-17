// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
// import city from '../assets/city.jpg';
//          <Heading size={1} fit caps lineHeight={1} textColor="'secondary'>"

const theme = createTheme({
  primary: '#ffffff',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quarternary: '#CECECE',
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Multiple approaches to creating forms
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" lineHeight={1} textSize={20} bold>
            Arkadiusz Machalica web-developer @ selleo
            <br />
            <a href="https://www.linkedin.com/in/arkadiusz-machalica">linkedin.com/in/arkadiusz-machalica</a>
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="bgColor">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="bgColor" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="bgColor" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}