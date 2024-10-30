# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When it has finished rendering for the first time.

- What is a React Effect?
  React effect lets you specify side effects that are caused by rendering itself, rather than by a particular event.

- When should you use an Effect and when should you not use an Effect?
  You should use effects when you are trying to "step out" of the code. Should not use it when you don't need it.

- When do Effects run?
  After every commit

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  Effect dependencies in React are variables or values that, when changed, cause the useEffect hook to re-run its effect function. Dependencies are declared as the second argument to the useEffect().

- Why would you want to clean up from an Effect?
  Cleaning up from an effect is crucial to prevent potential issues such as memory leaks, unwanted side effects, and performance problems.

- How do you clean up from an Effect?
  You return a cleanup function from the useEffect()

- When does the cleanup function run?
  When the component mounts/appears on the screen for the first time

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
