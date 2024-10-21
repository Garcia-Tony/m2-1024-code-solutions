# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?
We programmatically create a list of React components when we have dynamic data that can change over time, allowing us to render components based on that data, such as lists of items, users, or products.

- Why is it important for React components to be data-driven?
Data-driven components ensure that the UI reflects the current state of the application, making it easier to manage updates and maintain consistency across the application.

- What `Array` method is commonly used to create a list of React components?
The map() method

- Why do components in a list need to have unique keys?
Unique keys help React identify which items have changed, are added, or are removed, improving the performance of the rendering process and ensuring that the correct component state is maintained during updates.

- What is the best value to use as a "key" prop when rendering lists?
The best value for a "key" prop is a unique identifier for each item in the list, such as an ID from a database. This ensures that keys remain stable across renders.

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
