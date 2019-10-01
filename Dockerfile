FROM node:10

WORKDIR /app

# Speeding up by caching node_modules
ADD ./package.json ./package.json
RUN cd ./ && yarn
COPY ./ ./

ENTRYPOINT ["node", "/app"]
