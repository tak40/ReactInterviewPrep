/**
 * What's Prop-Drilling and how do we deal with it?
 * -------------------------------------------------
 *
 * Let's chat about "Prop-Drilling". Imagine trying to send a message to a friend by passing it through a bunch of people. That's kinda like prop-drilling in React.
 *
 * - **Understanding Prop-Drilling**:
 *   It's about passing data from one component to another through intermediaries. Like passing a message between friends.
 *
 */  
Example:

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  return <GrandChild data={data} />;
}

function GrandChild({ data }) {
  return <p>{data}</p>;
}

 /*   Here, the `Child` just passes the `data`, even though it doesn't use it.
 *
 * - **Why Care About It?**:
 *   1. **Cleaner Code**: Avoiding unnecessary prop-passing makes your app more straightforward.
 *   2. **Easier Changes**: Reducing prop-drilling simplifies restructures in your app.
 *   3. **Better Scaling**: It works for small apps, but for big apps, you need better solutions.
 *
 * - **Solutions to Prop-Drilling**:
 *   Some tools let you manage and pass data more directly:
 *   1. **Context API**: A built-in React tool that shares data without passing props deeply.
 *   2. **Redux**: An external library that offers a central store for your app's data.
 *   3. **Others**: There are other solutions like MobX or Recoil that can also help.
 *
 * Remember, while prop-drilling can work, there are often cleaner ways to share data in React!
 */
