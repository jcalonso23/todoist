# todoist
QA Challenge

## Pre-requisites

- Go to https://nodejs.org/en/download/ and download the Node.js source code for your platform.

- Go to https://www.postman.com/downloads/ and download the Postman app for your platform.

- Create the following file structure:

```bash
todoist/
  | backend/
     | collection/
     | environment/
     | reports/
  | frontend/
```

- Install newman
```bash
$ cd todoist/
$ npm install -g newman
```

- Install Playwright
```bash
$ cd todoist/frontend/
$ npm init playwright@latest
```

- Install ESLint
```bash
$ cd todoist/
$ npm install eslint --save-dev
$ npm init @eslint/config
```

- Install htmlextra
```bash
$ cd todoist/
$ npm install -g newman-reporter-htmlextra
```

## Configuration

Initialize the package
```bash
$ cd todoist/
$ npm init
```
- Several questions will be prompted
- A ```package.json``` will be created with a dummy test

## Execute tests

### Backend Tests

- From Todoist app get the Authorization Token
- Create endpoints for projects and tasks
- Define environment variables
- Export collections and save it in ```todoist/collection/```
- Export enviroment and save it in ```todoist/enviroment/```

To execute tests:
```bash
$ cd todoist/
$ npm run testBackend
```

### Frontend Tests

To execute tests:
```bash
$ cd todoist/
$ npm tun testFrontend01
$ npm tun testFrontend02
$ npm tun testFrontend03
$ npm tun testFrontend04
```
