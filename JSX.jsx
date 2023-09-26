/**
 * What is JSX?
 * ------------
 * JSX stands for JavaScript XML and plays a central role in React.
 *
 * - **Short for JavaScript XML**:
 *   JSX is more than just HTML in JavaScript. It’s a syntax extension for JavaScript, letting developers lay out their UI in a way that's similar to HTML. 
 *   This makes it simpler and more natural to describe and structure components.
 *
 * - **Write JavaScript with an HTML-like template syntax**:
 *   JSX feels a lot like you're directly writing your UI because it looks so much like HTML. 
 *   But it's not just HTML or a string. Behind the scenes, it's all JavaScript, giving you the power to easily define and update your UI components. 
 *   This means you tell React what you want, and React takes care of the details, without the need to directly touch the DOM or use functions like `getElementById()`.
 *
 * - **Produces elements that represent objects**:
 *   When we define UI components using JSX, what we're actually doing is creating React elements. 
 *   These elements, in turn, represent objects that describe the component's structure. 
 *   Tools like Babel will transpile our JSX code into React.createElement() calls, which React uses to construct the Virtual DOM.
 *
 *
 * Best Way to Answer in an Interview:
 * JSX stands for JavaScript XML. It allows us to write UI components in a syntax that looks like HTML but is actually JavaScript. 
 * Through JSX, we create React elements—essentially UI blueprints. 
 * These elements then get converted into `React.createElement()` calls, which React uses to construct the Virtual DOM, allowing it to efficiently manage and update the actual DOM."
*/
