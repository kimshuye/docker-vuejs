FROM ubuntu:xenial
MAINTAINER Timo Mika Gläßer <github@scale.io>

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# install our dependencies
#RUN echo "deb http://archive.ubuntu.com/ubuntu xenial main universe" > /etc/apt/sources.list
#RUN apt-get update && apt-get -y install git build-essential g++ libc6 libc6-dev libkrb5-dev libcairo2-dev libjpeg62-turbo-dev libpango1.0-dev libgif-dev
RUN apt-get update && apt-get -y install software-properties-common python-software-properties git build-essential gcc cpp g++ libc6 libc6-dev curl wget libkrb5-dev libcairo2-dev libjpeg-dev libjpeg8-dev libjpeg-turbo8-dev libpango1.0-dev libgif-dev libssl-dev

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get update && apt-get install -y nodejs

#RUN npm install -g node-gyp

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies
RUN mkdir -p /vuejs && mkdir -p /vuejs/src
ADD ./ /vuejs
RUN cd /vuejs && npm install

ENV NODE_ENV development

EXPOSE 8080

WORKDIR /vuejs

CMD npm run dev