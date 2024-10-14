# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are special functions that allow components to have access to state and other React features. Among other things, hooks are used to add state into a component that will be persisted across component calls and used to schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter

Hooks can only be called by React components and other hooks

All hooks in a component must always be called at the top level of a component, and in the same order

- What is the purpose of state in React?
  In React, the implementation of state comes in the form of the useState() hook, which is used to create both the state variable and the function that is used to update the value of the state variable.

- Why can't we just maintain state in a local variable?
  The values contained in a function's local variables do not persist between function calls, because each time a function is called new local variables are allocated.

- What two actions happen when you call a `state setter` function?
  State updates and component re-renders

- When does the local `state variable` get updated with the new value?
  In React when you update a state value with a setter function, the new value is cached by React, but the value of the state variable itself is not updated. The updated value will not be available until the component is re-rendered.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
