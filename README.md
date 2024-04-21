# k6 typescript template

This is a template for writing k6 tests in TypeScript with the help of [Bun](https://bun.sh/). The project use webpack to bundle the TypeScript files, and minify the output. Are also already configured the github actions to run the tests in the CI and report the results to artifacts.

## Usage

### Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [Bun](https://bun.sh/) (optional, but recommended)
-   [k6](https://k6.io/)

### Getting started

1. Clone this repository and go to the project folder

    ```bash
    git clone git@github.com:ViniciosLugli/k6-typescript-template.git'
    cd k6-typescript-template
    ```

2. Install the dependencies

    ```bash
    # If you have Bun installed
    bun install

    # If you don't have Bun installed
    npm install
    ```

3. Bundle the TypeScript files

    ```bash
    # If you have Bun installed
    bun bundle

    # If you don't have Bun installed
    npm run bundle
    ```

4. Run the tests

    ```bash
    k6 run dist/index.js
    ```

### Writing tests

You can write your tests in the [src](src/) folder. The entry point is the [index.ts](src/index.ts) file. The tests files are located in the [src/tests](src/tests) folder. You can create as many test files as you want. The tests files must have the `.test.ts` extension for better organization. The [get-200-status.test.ts](src/tests/get-200-status.test.ts) file is an example of a test file. For more information about writing tests, check the [k6 documentation](https://k6.io/docs/).
