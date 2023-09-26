### Why is React Fast 
(React Fibre)
- Reconcilation when the state of the variable changes
- Virtual DOM is representaion of the actual DOM
- if we console our react component it prints object and not HTML code 
- what happens in background when the state of the variable changes, the difference between the old and new virtual DOM is gathered and if there is a difference reconcilation happens, which leads to re-rendering of components
- to do this React uses React fibre algorithm 
- This is what React algorithm is all about in its core
- it has efficient DOM manipulation algorithm that is why it is fast

### Monolith Vs Microservices

-  single responsbility process
- 

### two approach to fetch data 

- loads UI -> make API call to fetch -> Render
- Loads -> render whatever we can -> API call -> Re-Render
- 2nd approach gives better UX
- React has best render approach