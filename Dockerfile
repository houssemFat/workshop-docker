FROM node:argon
COPY src src
COPY bin bin
COPY package.json package.json
RUN npm install
# -P flag to publish all of the exposed ports
#EXPOSE 3000
CMD ["npm", "run", "start"]
