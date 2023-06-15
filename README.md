# Prueba tecnica para Backend Developer

## Requisitos
1. [Docker](https://www.docker.com/)

## Clonar repositorio

```bash
git clone https://github.com/javiier507/norte-digital.git
```

## Iniciar contenedores

```bash
# contenedor de base de datos
docker-compose -f docker-compose.demo.yml up -d database

# esperar unos 10 segundos a que el contenedor de base de datos termine de iniciar

# contenedor de la api
docker-compose -f docker-compose.demo.yml up api

# esperar unos 20 segundos hasta que el contenedor de la API termine de cargar los registros en base de datos
```

## Probar API

```bash
# estado del api
curl http://localhost:3000
```
Deve devolver
```bash
Hello World!%
```

```bash
# recurso de sucursales
curl http://localhost:3000/branch-office
```

```bash
# fecha de ventas
2020-12-18
```

## Finalizar contenedores
```bash
docker-compose -f docker-compose.demo.yml down
```

## Autor

Carlos Peñalba
