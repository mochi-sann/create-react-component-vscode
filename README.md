<h2 align="center">
  ⚛️<br>
  <b>Create React Component</b><br>
  <p></p>
  <img src="https://github.com/mochi-sann/create-react-comporent-with-storybook-and-test-file-vscode/blob/master/images/demo.gif">
</h2>

> A simple but powerful vscode extension that removes the hassle of writing annoying boilerplate everytime you want to create component.

### Features

#### Right Click Generate

- Adds the **Create React Component** command when right clicking any folder. Generates a component based on the current [settings](https://github.com/yeet-bix/create-react-component-vscode/blob/master/README.md#Settings 'Settings').

<br>

---

### Settings

| Name                                          | Description                                                                                                                                                                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createReactComponent.language`               | Specifies what language to generate the component <br><br> Options: <br> - `typescript` (_default_) <br> - `javascript`                                                                                                               |
| `createReactComponent.testLibrary`            | Specifies what testing library to import <br><br> Options: <br> - `react-testing-library` (_default_) <br> - `enzyme`                                                                                                                 |
| `createReactComponent.testingLibrary.cleanup` | Specifies whether or not to generate cleanup when using react-testing-library <br><br> Options: <br> - `true` <br> - `false` (_default_)                                                                                              |
| `createReactComponent.fileExtension`          | Specifies the extension type of files: `withX` would create `MyComponent.tsx` or `MyComponent.jsx`. `withoutX` would create `MyComponent.ts` or `MyComponent.js` files <br><br> Options: <br> - `withX` (_default_) <br> - `withoutX` |
| `createReactComponent.module`                 | Specifies whether or not to create a module <br><br> Options: <br> - `true` (_default_) <br> - `false`                                                                                                                                |  |
| `createReactComponent.openFiles`              | Specifies what files to open after generating the component <br><br> File Types: <br> - `component` <br> - `test` <br> - `index` <br><br> Options: <br> - `['component']` (default)                                                   |


This extension is a forked version of https://github.com/yeet-bix/create-react-component-vscode