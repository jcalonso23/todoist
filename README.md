# todoist
QA Challenge

## Pre-requisites
Install the following packages

```bash
# Go to https://nodejs.org/en/download/ and download the Node.js source code for your platform.

# Go to https://www.postman.com/downloads/ and download the Postman app for your platform.

# Create the file structure
todoist/
  | backend/
     | collection/
     | environment/
     | reports/
  | frontend/

# Install newman
$ cd todoist/
$ npm install -g newman

# Install Playwright
$ cd todoist/frontend/
$ npm init playwright@latest
```

## Configuration

```bash
# Initialize the package
$ cd todoist/
$ npm init

# Several questions will be prompted
# A package.json will be created with a dummy test
```

## Execute tests

### Backend Tests

- From Todoist app get the Authorization Token
- Create endpoints for projects and tasks
- Define environment variables
- Export collections and save it in ```bash todoist/collection/```
- Export enviroment and save it in ```bash todoist/enviroment/```

```bash
$ cd todoist/

# To execute tests
$ npm run testBackend
```

### Frontend Tests

```bash
$ cd todoist/

# To execute tests
$ npm tun testFrontend01
$ npm tun testFrontend02
$ npm tun testFrontend03
$ npm tun testFrontend04
```
