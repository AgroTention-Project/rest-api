
#!/bin/bash

read -p "Enter Docker image version (e.g., 1.0.0): " VERSION
IMAGE_NAME="asia-southeast2-docker.pkg.dev/agrotention-project-441716/agrotention-registry/rest-api:$VERSION"

bun i --production

echo "building app..."
bun run build > /dev/null

# Build the Docker image
docker build -t $IMAGE_NAME .

# Display completion message
echo "Docker image $IMAGE_NAME has been built."
