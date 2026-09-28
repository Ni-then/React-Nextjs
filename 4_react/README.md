useRef : hook that provides a way to create a refernce to a value or a DOM ele that presists across renders but does not trigger a re-render when the value changes

Key Characteristics of useRef :

Persistent Across Renders: The value stored in useRef persists between component re-renders. This means the value of a ref does not get reset when the component re-renders, unlike regular variables.

No Re-Renders on Change: Changing the value of a ref ( ref.current ) does not cause a component to re-render. This is different from state ( useState ), which triggers a re-render when updated.

props drilling : Prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:

Complexity: You may have to pass props through many intermediate components that don't use the props themselves, just to get them to the component that needs them.
Maintenance: It can make the code harder to maintain, as changes in the props structure require updates in multiple components.


rolling up the state

context api : The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

Jargon

Context: This is created using React.createContext(). It serves as a container for the data you want to share.
Provider: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
Consumer: This component subscribes to context changes. It allows you to access the context value (using useContext hook)
