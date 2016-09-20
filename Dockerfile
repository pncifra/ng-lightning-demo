# To build and run with Docker:
#
#  $ docker build -t ng-lightning-todo .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ng-lightning-todo
#
FROM node:latest

RUN mkdir -p /quickstart /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /quickstart
COPY package.json typings.json /ng-todo/
RUN npm install --unsafe-perm=true

COPY . /quickstart
RUN chown -R nodejs:nodejs /ng-todo
USER nodejs

CMD npm start
