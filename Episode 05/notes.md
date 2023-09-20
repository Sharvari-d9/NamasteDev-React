### Why is React Fast 
(React Fibre)
- Reconcilation when the state of the variable changes
- Virtual DOM is representaion of the actual DOM
- if we console our react component it prints object and not HTML code 
- what happens in background when the state of the variable changes, the difference between the old and new virtual DOM is gathered and if there is a difference reconcilation happens, which leads to re-rendering of components
- to do this React uses React fibre algorithm 
- This is what React algorithm is all about in its core
- it has efficient DOM manipulation algorithm that is why it is fast