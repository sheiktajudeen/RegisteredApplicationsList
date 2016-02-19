This API gets the list of registered applications from Eureka

Commands:
HomeBrew install command:
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"


Install node:
brew install node

Installing node packages:(to be run from modules/connector(where package.json is defined))
npm install


Start the node server:(to be run from modules/connector path)
node app.js


To see the API response:
curl -v "http://localhost:3000/getRegisteredApplications"