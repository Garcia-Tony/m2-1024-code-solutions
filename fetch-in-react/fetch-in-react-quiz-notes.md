# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  You can use Fetch.

- What two things need to be done to properly handle HTTP request errors? Why?
  You need to check the response status and handle errors because they ensure the application gracefully handles errors such as network failures or server-side issues without crashing the app.

- How can `useEffect` be used to load data for a component?
  useEffect is used in React to run side effects like fetching data when a component renders or when certain dependencies change.

- How do you use `useEffect` to load component data just once when the component mounts?
  You use an empty array [].

- How do you use `useEffect` to load component data every time the data key changes?
  You can include the data key in the dependency array (empty array).

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query

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
