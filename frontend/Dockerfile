FROM node:9.6.1
RUN mkdir /frontend
COPY . /frontend
WORKDIR /frontend
RUN npm install --production 
RUN npm install -g serve