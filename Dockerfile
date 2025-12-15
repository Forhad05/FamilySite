# --- STAGE 1: Build the static assets using Node.js/Vite ---
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies first (leverages Docker caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy all other project files (HTML, CSS, JS, vite.config.ts, etc.)
COPY . .

# Run the build command (Vite will compile and optimize the assets)
# This assumes your package.json has a "build" script, e.g., "vite build"
RUN npm run build

# --- STAGE 2: Serve the optimized static files using Nginx ---
FROM nginx:alpine

# Copy the built files from the previous stage into the Nginx web root directory
# Assuming Vite outputs to a folder named 'dist'
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the standard HTTP port (This is documentation for the user)
EXPOSE 80

# The default Nginx CMD starts the web server
# Nginx will automatically serve the files we copied