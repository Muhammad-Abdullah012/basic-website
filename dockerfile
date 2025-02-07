# Use a smaller base image
FROM node:23-alpine3.20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js project
RUN npm run build

# Use a minimal runtime image
FROM node:23-alpine3.20 AS runner

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV production

# Use a more efficient command
CMD ["node", "server.js"]
