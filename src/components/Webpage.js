import React from 'react';
import ReactDOM from 'react-dom';
// import Tweet from './Tweet';
// import FillerText from './src/components/FillerText.js'
// import FillerText from './src/components/FillerText'
import FillerText from './FillerText'
// In the components/Webpage.js file, create a React component called Webpage.
// This component should contain a title with the text The world's coolest webpage.
// This component should also contain two instances of the FillerText component.

// export class RegistrationForm extends React.Component {
export class Webpage extends React.Component {
  render(){
    return (
      // <title>The world's coolest webpage</title>
      <div className="webPage">
        <title>The world's coolest webpage</title>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
