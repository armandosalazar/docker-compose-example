FROM debian:bookworm-slim

RUN apt-get update
RUN apt-get install nodejs npm -y

# RUN apt-get install wget curl -y
# RUN wget https://security.debian.org/debian-security/pool/updates/main/o/openssl/libssl1.1_1.1.1n-0+deb11u5_amd64.deb
# RUN dpkg -i libssl1.1_1.1.1n-0+deb11u5_amd64.deb
# RUN curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
#     gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg
# RUN echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0 main" | \
#     tee /etc/apt/sources.list.d/mongodb-org-6.0.list
# RUN apt-get update
# RUN apt-get install mongodb-org -y
# # Cheack if mongod is running version 6.0
# RUN mongod --version

# EXPOSE 27017

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "." ] # Descomentar en caso de que no se use docker-compose

