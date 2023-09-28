# ReactInterviewPrep

A curated list of React interview questions with explanations, solutions, and valuable resources.

## Table of Contents

1. [Virtual DOM and the "real" DOM](#virtual-dom-and-the-real-dom)
2. [React Limitations](#react-limitations)
3. [What is JSX?](#what-is-jsx)
4. [Elements vs Components](#elements-vs-components)

## Virtual DOM and the "real" DOM

1. [What is the difference between the Virtual DOM and the "real" DOM?](./VirtualVsRealDOM.jsx) - Delve into the distinctions between the Virtual DOM and the actual browser's DOM.

   - [Vitual DOM vs Real DOM](images/VirtualDOM.png)

   - [React Docs](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)

## React Limitations

2. [What are the limitations of React?](./ReactLimitations.jsx) - Explore the "limitations" of React.
    - **It is a library, not a framework**: This provides flexibility and integration in existing projects, but also leaves more architectural decisions to developers.
    - **It is large**: While this can be mitigated by code splitting and best practices, awareness of the library's size is important. Alternatives like Preact are smaller.
    - **Being owned by Facebook**: Ownership by a major corporation ensures stability but brings privacy and transparency concerns, and potential communication challenges with the internal team.
    - **Documentation**: The documentation, while extensive, may not always be as up-to-date as desired.

## What is JSX?

3. [What is JSX?](./JSX.jsx) - Dive into the essence of JSX, understanding its nature, benefits, and its role in React.
    - **Short for JavaScript XML**: A syntax extension for JavaScript that combines JavaScript with an HTML-like template syntax.
    - **Write JavaScript with an HTML-like template syntax**: It looks like HTML, but it's not! It's neither a pure HTML nor a string but a powerful way to define React components.
    - **Produces elements that represent objects**: These are the foundational blocks for React components, which under the hood get transpiled to React.createElement() calls.

## Elements vs Components

4. [What is the difference between elements and components?](./ElementsVsComponents.jsx) - Distinguish between React's core building blocks: elements and components.

    - **React Elements**: Lightweight, immutable descriptions of the UI, representing things like DOM nodes.
    - **React Components**: Reusable UI parts with potential state and lifecycle behaviors, encapsulating multiple elements.

## Resources

- [Scrimba's Frontend Career Path](https://scrimba.com/playlist/pMvNwAD) - Comprehensive course covering a wide range of frontend topics and interview questions.
