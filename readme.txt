docker volume create data
docker volume ls
docker run -it -v data:/data node bash
docker run -it -v data:/myapp ubuntu


docker run -it -v C:\Users\1Desh\Desktop:/vandesh ubuntu

%CD% for windows curent foolder
$(pwd) for linux current folder
---------------------------
docker build -t node-image .
docker run --rm -d -p 3000:3000 --name node-container node-image
docker run --rm -d -p 3000:3000 -v C:\Users\1Desh\Desktop\MicroServices\userservice:/app --name node-container node-image

