# HOW TO INSTALL by using Yarn on Linux:
## Ensure yarn and node.js are installed on your computer
1. Open terminal and type : `cd /your/project/path`
2. Run `yarn add cypress --dev` to install cypress
3. Run `yarn add mochawesome` to install mochawesome reporters
4. Ensure these package already on package.json; `cypress`, `mochawesome`, `mochawesome-merge`, `mochawesome-report-generator`
5. Run `yarn run cypress open` on terminal to run cypress test cases
6. Run `cypress run --browser chrome` to run all cases on `integrations` directory

# HOW TO INSTALL by using NPM on Linux:
## Ensure npm and node.js are installed on your computer
1. Open terminal and type : `cd /your/project/path`
2. Run `npm install cypress --save-dev` to install cypress
3. Run `npm install --save-dev mochawesome` to install mochawesome reporters
4. Ensure these package already on package.json; `cypress`, `mochawesome`, `mochawesome-merge`, `mochawesome-report-generator`
5. Run `npm cy:open` on terminal to run cypress test cases
5. Run `npm run cy:run --browser chrome` to run all cases on `integrations` directory

