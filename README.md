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

# esperar unos 30 segundos hasta que el contenedor de base de datos termine de iniciar

# comprobar que el contenedor esta corriendo sobre el puerto 3306
docker-compose -f docker-compose.demo.yml ps
```
<img width="943" alt="Captura de Pantalla 2023-06-16 a la(s) 6 56 33 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/06c4ba09-325e-4c27-93f4-5d0f13782f63">


```bash
# contenedor de la api
docker-compose -f docker-compose.demo.yml up api

# esperar unos 30 segundos hasta que el contenedor de la API termine de crear y popular las tablas
```
<img width="1348" alt="Captura de Pantalla 2023-06-14 a la(s) 8 19 57 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/a4bda670-4bc6-490a-9f09-0ac73d6b8547">


## Comprobar API

```bash
# estado del api
curl http://localhost:3000
```

```bash
# recurso de sucursales
curl http://localhost:3000/branch-office
```

## Probar API

1. La API esta documentada con Swagger. Puede probar los servicios desde ahí.
```sh
http://localhost:3000/apidoc#/
```
<img width="1392" alt="Captura de Pantalla 2023-06-14 a la(s) 7 52 20 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/43d08de5-a880-4a0c-97af-c367dd30eac0">

2. 2020-12-18 es la fecha de las ventas registradas por defecto en base de datos.
<img width="1392" alt="Captura de Pantalla 2023-06-14 a la(s) 7 52 57 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/f29f35fd-f8b9-4adf-8e7b-0f617e872e24">

3. Para registrar una venta necesita asignar los ID de Cliente, Venededor, Sucursal y Producto.
<img width="1392" alt="Captura de Pantalla 2023-06-14 a la(s) 7 56 51 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/101f9c10-9522-48b7-8331-819ceaefdec4">

4. El repositorio tambien incluye un colección de POSTMAN que puede usar para sus pruebas
<img width="1392" alt="Captura de Pantalla 2023-06-14 a la(s) 8 24 45 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/278aecef-0e84-454f-ad1d-410196114daa">

5. Registro de ventas. Si el registro es exitoso recibira un HTTP 201. Si algunos de los ID no existe recibira un HTTP 400.
<img width="858" alt="Captura de Pantalla 2023-06-14 a la(s) 8 36 28 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/fd625583-3a0f-43da-9c08-9ed6cee82470">

6. Consulta de ventas por la fecha utilizada anteriormente (2023-06-15).
<img width="852" alt="Captura de Pantalla 2023-06-14 a la(s) 8 36 51 p  m" src="https://github.com/javiier507/norte-digital/assets/8405694/3e2fd8b8-7e6d-4968-ae3b-ae85c385bf00">

## Diagrama Entidad Relacion

![backend_db](https://github.com/javiier507/norte-digital/assets/8405694/fdd55b96-7387-441b-91d0-f0848e0bbce1)

## Finalizar contenedores
```bash
docker-compose -f docker-compose.demo.yml down
```

## Tecnologías Utilizadas

* [Nest.js](https://nestjs.com/): Framework Node.js para desarrollo de aplicaciones (APIS, Webs, Microservicios)
* [Typescript](https://www.typescriptlang.org/): TypeScript es un lenguaje de programación construido a un nivel superior de JavaScript (JS).
* [Nest.js Swagger](https://github.com/nestjs/swagger): Modulo de Nest.js para integración con Swagger. Permite documentar APIS REST de forma más ágil.
* [MySQL 8](https://dev.mysql.com/): Base de datos relacional.
* [TypeORM](https://typeorm.io/): Libreria para integración con diferentes base de datos relacionales como MySQL, PostgreSQL y no relacionales como MongoDB.

## Autor

Carlos Peñalba
