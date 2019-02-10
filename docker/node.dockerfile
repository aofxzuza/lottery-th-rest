FROM node:alpine
RUN mkdir -p /usr/src/api.lotery-th
WORKDIR /usr/src/api.lotery-th
COPY api.lotery-th/ /usr/src/api.lotery-th
EXPOSE 3000
CMD [ "node", "index.js" ]
