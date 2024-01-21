// AboutComponent.js
import React from 'react';

const AboutComponent = () => {
  return (
    <>
    <div style={{height:"800px"}} id="aboutSection">
      <h2>About</h2>
      <p>The next thing to note is that the properties are separated by a comma. This is because what we are passing is an object. Because it is a JavaScript attribute, the attributes are written in camelCase and not separated by a dash.

In the code above, we just added a few properties to the elements we styled. However, imagine we had to add more and more styles to the element. This is where the inline method breaks down because it will not look clean.

There is a way around this, though. We can create object variables and pass them to the elements.</p>
      {/* Your About content */}
    </div>
    <div style={{height:"800px"}} id="contactSection">
      <h2>Contact</h2>
      <p>With styled-components, we can write actual CSS in our JavaScript file. This means you can use all the features of CSS — like media queries, pseudo-selectors, nesting, and more — in JavaScript.

styled-components use ES6’s tagged template literals to style components. With it, the mapping between components and styles is removed. This means that when you’re defining your styles, you’re actually creating a normal React component that has your styles attached to it.

Using styled-components, we can create reusable components with styles. It is quite exciting to create and use.

To get started, we need to install it by running $ npm install --save styled-components in your React app’s directory.</p>
      {/* Your Contact content */}
    </div>
    </>
  );
};

export default AboutComponent;
