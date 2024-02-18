# project

## Set up project

# ***************** Set up Project *****************

### Install Vue CLI
npm install -g @vue/cli

### Create Project "project" with the settings below
vue create project

#### Settings:
1) Please pick a preset:
- Manually select features
2) Check the features needed for your procject:
- Babel
- Router
- Vuex
- CSS Pre-processors
- Linter / Formatter
- Unit Testing
- E2E Testing
3) Choose a version of Vue.js that you want to start the project with:
- 3.x
4) Use history mode for router?
- Y
5)  Pick a CSS pre-processor:
- Sass/SCSS (with dart-sass)
6) Pick a linter / formatter config:
- ESLint with error prevention only
7) Pick additional lint features:
- Lint on save
8) Pick a unit testing solution:
- Jest
9)  Pick an E2E testing solution:
-  Cypress
10)  Where do you prefer placing config for Babel, ESLint, etc.?
- In dedicated config files
11)  Save this as a preset for future projects?
- N

### Navigate to new project
cd lms

### Install Bulma
npm install --save bulma
npm install --save bulma-toast
npm install --save bulma-steps-component

#### create my_styles.scss and add the following at the end of the my_styles.scss file: @import "node_modules/bulma-steps-component/bulma-steps.sass";

### Install Icon Library
npm install --save @fortawesome/fontawesome-free
npm install --save @fortawesome/vue-fontawesome@latest-3

### Install Axios
npm install --save axios

### Install Vue Click Away
npm install --save vue3-click-away

### Install vuedraggable
npm install --save vuedraggable@next


### Make some changes in main.js

### Make some changes in App.vue

### Run vue app auf default port 8080
npm run serve






## General Commands
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
