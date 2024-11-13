# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  Used to make a dialog box or window, like a pop-up or modal.

- How do you show and hide a modal dialog?
  showModal() and close().

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  By passing them as Props. Because dialog is a native HTML element with built-in methods.

- How do you call the dialog element's functions in React?
  By using useRef.

- How can you render nested components or JSX elements in React?
  By using the children Prop.

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
