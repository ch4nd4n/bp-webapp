# Boilerplate web app

Express + React + webpack + Yarn

Other Goodies

editorconfig
gitignore

### Quick command lines

yarn # installs dependencies
yarn dev # starts server in dev mode
yarn dist # generates distribution assets
yarn dist:clean # cleans up ./public/dist folder
yarn webpack # starts webpack in watch mode
yarn webpack:production

# For dev

In one tab `yarn dev` in another `yarn webpack`

To run in prod mode `yarn dist` and `yarn start`. Note that before running yarn dist, you need to change cache key in sw.js