/**
 * What is the difference between Elements and Components in React?
 * --------------------------------------------------------------
 *
 * React offers two main concepts for building user interfaces: Elements and Components.
 *
 * - **React Elements**:
 *   These represent the smallest building blocks of your UI. When you use JSX, you're essentially creating React elements. 
 *   Elements are lightweight descriptions of what the UI should look like.
 */

Example:
const element = <h1>Hello, world!</h1>
 /*   In the example above, 'element' is a React element.
 *
 * - **React Components**:
 *   Think of components as factories that produce React elements. They bundle up the logic, data handling, and often the state associated with specific parts of your UI.
 *   Components can be written as class-based or function-based structures. With the introduction of hooks, function components can now also manage state and side effects.
 */
Example:
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
 }
 
 /*   Here, 'Welcome' is a React component.
 *
 * In essence, an element describes what you want to see on the screen, whereas a component is a function or class that optionally accepts input and returns a React element.
 */


 /*
    * Additional Resources:
        - [React Elements vs React Components](https://youtube.com/shorts/6b7yQ2bed0o?feature=shared)
 */