#dockerfile - list of comands that produce an image
FROM node:18.2.0
#base image - we will create our image on top of this one
#similar concept to inheritance

#creates a directory called <> and moves us into that directory
#performs the mkdir and cd commands implicitly
WORKDIR /app

#every instruction in dockerfile is a step or a layer
#docker caches layers is nothing is changed
COPY package*.json ./

RUN npm install

COPY . .

#setting and exposing the port
ENV PORT=3000

EXPOSE 3000

#CMD tells docker engine what command I want to run inside the container
#json array format
CMD ["npm", "start"]