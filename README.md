## git clone https://github.com/debasishpratiher/datame.ai-backend.git

go in the app root directory and open the terminal type below command

#### This command install the app dependencies whats required in the pakage.json file
`$ yarn or npm install` 


#### Run the app in http://localhost:5000/ type the below command 
#### This command Start the app on localhost:5000/

`$ yarn start or npm start`

## Deploy the Node js app on heroku

### First you need to push the latest appication code in your github account do the following commands in the app root directory

## (initilize the app in the git)
`$ git init` 

## (stage all file in the git track)
`$ git add .`

## comment messae for what you change 
`$ git commit -m "message"` 

## add the github repository url
`$ git remote add ` 

## push the code in the github
`$ git push -u origin master `   

## Login the Heroku via Terminal 
`$ Heroku login `

## Create a Blank app via Terminal
`$ heroku create`

## push the github code in the Heroku via Terminal 
`$ git push heroku master`

### Now your Nodejs app is deployed on Heroku Seccessfully :)
