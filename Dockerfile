FROM node:18-alpine

# Instalamos dependencias necesarias para VSCE
RUN apk add --no-cache git bash

# Establecemos el directorio de trabajo
WORKDIR /app

# Instalamos vsce globalmente
RUN npm install -g @vscode/vsce

# Copiamos los archivos del tema
COPY . .

# Comando por defecto: Abre una shell interactiva
CMD ["/bin/sh"]
