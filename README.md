# `insite-kit` - External UI Library

[![Build Status](https://github.com/hydroponics-system/insite-ui-library/actions/workflows/build-production.yml/badge.svg)](https://github.com/hydroponics-system/insite-ui-library/actions)
[![npm version](https://badge.fury.io/js/insite-kit.svg)](https://badge.fury.io/js/insite-kit)

This project contains the insite-kit library. The main purpose of this library is to provide external components and services to an angular application. The main application that this was created for was [Hydroponics UI](https://github.com/hydroponics-system/hydro-ui). This application became very complex, therefore abstracting out he common components and putting them in a seperate package to be used and tested individually made the development process easier.

# Main Features

- **AOT/JIT** compatible library build via [Angular Compiler](https://www.npmjs.com/package/@angular/compiler-cli) (ngc).
- **Deployment** with [Heroku](https://devcenter.heroku.com/categories/reference).
- **Testing** with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/).
- **Test coverage** report via [Karma Coverage](<[https://github.com/gotwarlost/istanbul](https://karma-runner.github.io/1.0/index.html)>).
- **Watch modes** for building and testing procedures that makes developing process easier.
- **Linting** with [TSLint](https://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer) for static code analysis.

# Quick Start

```bash
# Clone the repository
git clone https://github.com/trekhleb/insite-kit.git

# Go to repository folder
cd insite-kit

# Install all dependencies
npm install

# Build the library
npm run build
```

# Getting Started

## Dependencies

#### Node/NPM

Install latest Node and NPM following the [instructions](https://nodejs.org/en/download/). Make sure you have Node version ≥ 14.0 and NPM ≥ 7.

#### Angular Application

An application that the library can be installed in is needed for the library to be useful. The main use of this library currently the Hydroponics UI repo.

## Build the library 🚀 (Local)

- `npm run build` for building the library once (both ESM and AOT versions).
- `npm run build:watch` for building the library (both ESM and AOT versions) and watch for file changes.

## Other commands

#### Version Bump

- `npm run version:patch` for fixes or bugs.
- `npm run version:minor` for additions or new features added to the project.
- `npm run version:major` for major changes such as OS update, angular update, or config changes.

#### Test the library

- `npm run test` for running all your `*.spec.ts` tests once. Generated code coverage report may be found in `coverage` folder.
- `npm run test:watch` for running all you `*.spec.ts` and watch for file changes.

# Library development workflow

In order to debug your library in browser you need to have Angular project that will consume your library, build the application and display it. For your convenience all of that should happen automatically in background so once you change library source code you should instantly see the changes in browser.

### Local Development with Hydroponics UI

To test changes made to the library you can link the library changes with the local instance of the hydroponics ui repo (if you have it pulled down). Once they are linked, you can then make changes in the library and those changes will reflect in the local ui instance of the hydroponics system.

To do so you need to:

1. Open two console instances.
2. Launch library build in watch mode in first console instance by running `npm run build:watch` (assuming that you're in `insite-kit` root folder).
3. Launch hydroponics ui project build (JIT version) in watch-mode by running `npm run start`.

As a result once you change library source code it will be automatically re-compiled and the the hydroponics ui will be automatically re-built and you will be able to see that changes in your browser instantly.

### Using `npm link`

In you library root folder:

```bash
# Create symbolic link
npm link

# Build library in watch mode
npm run build:watch
```

In you project folder that should consume the library:

```bash
# Link you library to the project
npm link "insite-kit"

# Build your project. In case of Angular-CLI use the following command.
ng serve --aot
```

# Contributors

- Sam Butler
- Josue Van Dyke
