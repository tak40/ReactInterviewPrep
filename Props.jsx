/**
 * What are Props and how do you pass data with them in React?
 * -----------------------------------------------------------
 *
 * Props, short for properties, are a core mechanism in React that allows data to be passed between components.
 *
 * - **What are Props?**:
 *   Props are a special keyword in React, which stands for properties. 
 *   Components accept arbitrary inputs called "props". They play the same role as function arguments and allow you to pass data from a parent component to a child component.
 *
 * - **From Parent to Child**:
 *   Parent components can send data to child components via props. This is a one-way data flow, from parent to child.
 */

Example:
function ChildComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}

function ParentComponent() {
  return <ChildComponent name="React" />;
}

 /*   In the example above, the ParentComponent is passing the value "React" as a prop named "name" to ChildComponent.
 *
 * - **From Child to Parent**:
 *   Although props are read-only from a child's perspective, it's common to pass a function from a parent to a child component via props. 
 *   The child can then invoke this function, allowing the child to send data back to its parent.
 */
Example:
 
function ChildComponent(props) {
    return <button onClick={() => props.handleClick("Data from child")}>Click Me</button>;
}
 
function ParentComponent() {
    function handleData(data) {
        console.log(data);
    }

    return <ChildComponent handleClick={handleData} />;
}

/*   In this example, when the button in the `ChildComponent` is clicked, it sends the string "Data from child" back to the `ParentComponent` through the `handleClick` function passed down as a prop.
 *
 * Props provide a way to allow components to communicate and share data with each other. They are read-only and ensure a unidirectional data flow, which makes React applications more predictable and easier to debug.
 */
