# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  Navigates without having to reload the page, within the current location

- What NPM package can be used to make navigating a React app behave as users expect?
  npm install react-router-dom

- Which React Router component(s) can be used to set up your app's navigation?
  BrowserRouter, Routes, Route, and Link

- How does React Router match the browser URL to one of your app's React components?
  React Router uses pattern matching to match the current URL to a Route's path.

- What is the purpose of React Router's `Outlet` component?
  The Outlet component is used in layout components to render child routes. It acts as a placeholder for nested routes.

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  useParams

- What React Router hook is used to navigate programmatically?
  useNavigate

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
