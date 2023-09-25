/**
 * Question:
 * What is the difference between the Virtual DOM and the "real" DOM?
 *
 * Explanation:
 * 
 * The Document Object Model (DOM) is a programming interface for web documents. 
 * It represents the structure of a document as a tree of objects. 
 * Each object corresponds to a part of the document, such as an element or attribute.
 *
 * 1. **Real DOM**:
 *    - Updates slow and expensive.
 *    - Direct manipulation is more resource-intensive.
 *    - Can cause full page refreshes.
 *    - Writing to the real DOM is often the bottleneck for web applications.
 *  
 * 2. **Virtual DOM**:
 *    - React's abstraction of the real DOM.
 *    - Updates are faster because they're done in JavaScript memory, not in the actual DOM.
 *    - Uses a "diffing" algorithm to find changes and then updates only those changes in the real DOM.
 *    - Avoids expensive DOM operations.
 * 
 * Essentially, the Virtual DOM is a lightweight copy of the real DOM elements. 
 * The rendering engine can quickly make changes to the Virtual DOM and subsequently update the real DOM in a more efficient and performant manner.
 * 
 * Example:
 *
 * Let's consider a list where one item changes:
 * 
 * Real DOM: Might rebuild the entire list.
 * Virtual DOM: Only updates the changed item, leaving the rest untouched.
 * 
 * Notes:
 * 
 * The idea behind the Virtual DOM is to make updates in a virtual space that’s fast, and then take the minimum necessary changes to reflect those updates in the real DOM to ensure optimal performance.
 * 
 * Additional Resources:
 * 
 * - [React Docs](https://legacy.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)
 * - [Scrimba's explanation on Virtual DOM](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-the-virtual-dom-and-the-real-dom) 
 */
