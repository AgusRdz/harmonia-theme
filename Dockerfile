FROM node:20-alpine
RUN apk add --no-cache git bash
WORKDIR /app
RUN npm install -g @vscode/vsce
COPY . .

CMD ["/bin/sh"]
