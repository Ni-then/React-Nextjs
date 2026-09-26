useRef : hook that provides a way to create a refernce to a value or a DOM ele that presists across renders but does not trigger a re-render when the value changes

Key Characteristics of useRef :

Persistent Across Renders: The value stored in useRef persists between component re-renders. This means the value of a ref does not get reset when the component re-renders, unlike regular variables.

No Re-Renders on Change: Changing the value of a ref ( ref.current ) does not cause a component to re-render. This is different from state ( useState ), which triggers a re-render when updated.