# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  Scope in JavaScript is determined during the lexical phase, which occurs when the code is compiled, before execution. This means the scope of variables is defined by their position in the code and not by where functions are called.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure.

- What values does a closure contain?
  Variables declared outside the function but within its enclosing scope.

- When is a closure created?
  A closure is created whenever a function is defined inside another function.

- How can you tell if a function will be created with a closure?
  If it references variables outside its own scope.

- In React, what is one important case where you need to know if a closure was created?
  It’s important to be aware of closures when using hooks such as useEffect or useCallback because closures can "capture" outdated values of state or props.

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
