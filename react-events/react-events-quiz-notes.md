# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  Event are just event listeners that call functions in response to various events

- What is an "event handler"? Which component declares the handler?
  An event handler in React is a function that is executed in response to a specific event. It is declared where it originates.

- How do you pass an event handler to a React component?
  To pass an event handler to a React component, you provide it as a prop to the child component, and then the child component can attach it to an event

- What is the naming convention for event handlers?
  Prefix the event name with handle

- What is an "event handler prop"? Which component declares the prop?
  In React, an event handler prop refers to a property passed to a component that specifies a function to be executed in response to an event, such as a click, key press, or form submission. The tsx declares the prop.

"props" are attributes on React JSX elements very similar to the ones you use in HTML that store data, add functionality to an element, or attach event listeners to an element.

- What are some custom event handler props a component may wish to define?
  className, id, onClick, onSubmit

- What is the naming convention for custom event handler props?
  It is customary for event handler functions in React to start with a handle prefix followed by an uppercase letter.

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
