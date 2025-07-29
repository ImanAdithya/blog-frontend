FROM node:22 AS builder

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Angular app
RUN npm run build --configuration production

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular files to Nginx folder
COPY --from=builder /app/dist/blog-frontend /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
