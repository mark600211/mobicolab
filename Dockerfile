# base image
FROM node:latest

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]
