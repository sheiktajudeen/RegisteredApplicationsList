This API gets the list of registered applications from Eureka. Replace the eureka url config/AppConfig.json
I am leaving the response open ended. You can parse throught the response to get the state of each application that is registered to eureka url.

Commands:
HomeBrew install command:
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


Install node:
brew install node

Installing node packages:(to be run from modules/connector(where package.json is defined))
npm install


Start the node server:(to be run from modules/connector path)
node modules/connector/app.js


To see the API response:
curl -v "http://localhost:3000/getRegisteredApplications"

To use test method:
npm run test-watch
