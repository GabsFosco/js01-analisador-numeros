FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN apt-get update && \
    apt-get install -y \
    vim && \
    rm /usr/share/nginx/html/50x.html
COPY public/ /usr/share/nginx/html