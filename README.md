`docker build -t <image_name> <path_to_dockerfile>`

`docker build -t <image_name> .`

`docker build -t node-app:1.0 .`

`docker run --name server-node-app --publish 80:3000 node-app:1.0`

`docker run --name server-node-app -p 80:3000 node-app:1.0`

`docker exec -it server-node-app bash`