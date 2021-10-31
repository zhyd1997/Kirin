# Create image based on the official Node image from dockerhub
FROM node:lts-buster-slim

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Install dependecies
RUN yarn install --frozen-lockfile

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 8080

# Serve the app
CMD ["yarn", "start"]
