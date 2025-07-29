# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
