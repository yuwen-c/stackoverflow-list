# intro

- search data by typing a keyword, the app will show you the trending tags.
- select a trending tag, a question list will display.
- by scrolling to the bottom, the data on the next page will show up.

# goal

- a small comparison between `useState` and `redux`, code is put on the master and the redux branch accordingly.
- **note: master branch (`useState` one) is just a beta version**

## useState version (master branch)

- UI components: `<APP>`, `<Search>`, `<Question>`
- State management: `input`, `tagList` are recorded in `<App>` by `useState`, `questionList` is recorded in `customHook`
- Main logic is putting in `<App>` and pass it to the children
- fetches are controlled by `useEffect` and the dependencies.

## redux version (redux branch)

- a global state which can divide into 3 parts: input search, tags, questions
- fetched are written by `redux-thunk`
- state-related logic is extracted from UI components to actions, UI components only consume data.
- children components can get data directly without props drilling.
- the reducer uses current state data instead of passing it from UI components imperatively.

# from my point of view, using Redux has these advantages:

1. separation: UI components and data are separated, UI components only focus on consuming data and rendering.
2. splitting: logic is split into the related components without just cramming in `<App>`
3. better control of state change: by defining action types, developers can see clearly the order of actions and how the state is changing, dev-tool is also helping.

# API doc

- [tags](https://api.stackexchange.com/docs/tags)
- [questions](https://api.stackexchange.com/docs/questions)
