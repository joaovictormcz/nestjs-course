FROM node:19-slim

WORKDIR /home/node/app-course-nestjs

# Instalação do Docker
RUN apt-get update && \
    apt-get install -y docker.io

CMD ["tail", "-f", "/dev/null"]