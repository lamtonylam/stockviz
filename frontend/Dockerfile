# Use the latest Node.js image based on Alpine Linux from the official Docker Hub repository
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/app

# Copy the package.json file to the working directory
COPY package.json ./

# Install the dependencies specified in package.json
RUN npm i

# Copy all files from the current directory to the working directory
COPY . .

# Expose port 5173 to allow external access
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "start"]