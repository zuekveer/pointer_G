# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the files needed for npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code into the container
COPY . .

# Expose the port your app runs on (optional if using a web server)
EXPOSE 8080

# Define the command to run your game
CMD ["npx", "http-server", "-p", "8080"]
