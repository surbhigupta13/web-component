# Otis Digital’s design Custom Components

## What is this?

Design system for OTIS with Custom Elements.

Otis Digital’s design system provides a starting point for user interface design and
development for product teams across Otis businesses. Otis DS contains an evolving
set of design guidelines that, along with a corresponding component library for developers,
accelerate product development efforts, improve team focus, reduce costs and improve user
experience quality and consistency.

## Installation

To install all dependencies and build the site:

```bash
# Install all the things!
npm install

# create new or edit exiting elements
To create new element we can follow this :
  - ng g lib componentname -p ui
  - ng build componentname
  - In Elements/app/app.module.ts Import the module and component from lib
  ``` 
    const cName = createCustomElement(ComponentName, { injector: this.injector })
    customElements.define("component-identifier", cName);
  ```
  - Create Script in package.json for build and pack eg:
   ```
    "build_pack_ComponentName": "ng build && cd dist/ComponentName && npm pack",
   ```
All elemets exits in projects folder
```
```
├── button
│   ├──src
│   ├────lib
│   ├────── --- Components Files ---
├── alert-bar
│   ├──src
│   ├────lib
│   ├────── --- Components Files ---
├── elements
│   ├── src
│   ├──── app
│   ├────── app.module.ts
```
    -npm run build_pack:elements

#### package.json

Your `package.json` should contain `build` npm scripts.

Example:
```
"scripts": {
  "build_pack_componentname": "ng build componentname && cd dist/button && npm pack
},

To publish as npm package
```
- go to dist/elements
- npm publish

# StoryBook!
```
├── stories
│   ├──component
│   ├────component-types

```
To run storybook in local
  - npm run storybook
To push stories in DSM(Invision)
  - npm run build-storybook
  - npm run dsm-storybook:publish

# Preview the site.
npm start
```

## Current List of [Libraries/Frameworks]
- [Angular](https://github.com/webcomponents/custom-elements-everywhere/tree/master/libraries/angular)
- [How to build a lib ](https://indepth.dev/posts/1041/how-to-build-a-component-library-with-angular-and-storybook)
- [How to create web component wrapper] (https://medium.com/swlh/angular-elements-create-a-component-library-for-angular-and-the-web-8f7986a82999)

## Testing the custom element 
-Write component identifier in test.html


#### karma.conf.js

Your [Karma](https://karma-runner.github.io/1.0/index.html) configuration.
Ideally you shouldn't need to change much in here. The config file uses
[karma-webpack](https://github.com/webpack-contrib/karma-webpack), so there is
a `webpack` property where you can essentially write your `webpack.config.js`.
You'll need to change this property to tell it how to bundle your library.


## How does the site get deployed/maintained?

Coming soon

## License

Coming soon