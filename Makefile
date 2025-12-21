install: set-executable
	./abin/install.sh

set-executable:
	chmod 755 ./abin/*.sh

npm:
	docker-compose exec harmonia npm $(CMD)

npx:
	docker-compose exec harmonia npx $(CMD)

package:
	docker-compose exec harmonia npx vsce package

build:
	docker-compose exec harmonia npm run build

format:
	docker-compose exec harmonia npm run format