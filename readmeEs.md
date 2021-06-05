## README

# Movie Challenge

## Índice

- [1. Buscador de Peliculas](#1-Buscador de Peliculas)
- [2. Obtener Peliculas](#2-Obtener Peliculas)
- [3. Buscar y Reemplazar](#3-Buscar y Reemplazar)

---

## 1. Buscador de Peliculas

API creada con la funcion de recolectar informacion de una API (http://www.omdbapi.com/) por Titulo y guardarla en una base de datos, las peliculas son requeridas por el usuario utilizando el metodo GET, usando la Base de Datos de Mongo, adicionalmente puedes buscar por header el año de la pelicula y hacer mas precisa la busqueda.

La informacion recolectada es:

- Titulo
- Año
- Publicacion
- Genero
- Director
- Actores
- Trama
- Ratings.

El sistema esta diseñado para evitar duplicaciones y para devolver la informacion almacenada en la consola.

## 2. Obtener Peliculas

La API tambien permite con el metodo Get devolver todas las peliculas que han sido guardadas en la Base de datos, organizarlas por paginas y limitarlas a 5 por cada una.

Dicho requerimiento puede hacerse por el header.

## 3. Buscar y Reemplazar

El usuario puede reemplazar y modificar la Trama de la pelicula guardada, atraves del Metodo POST, devolviendo asi un String con las modificacones.

Tecnologia: Nodejs
Framework: KOA
ODM: Mongoose
URL de la API: http://www.omdbapi.com/

Pendiente:

- Validar los contratos de entrada y/o headers para los endpoints antes de realizar la lógica.
- Uso de Joi para validación de contratos/headers
- Uso de Docker/Swarm para levantar todos los servicios.
- Uso de middleware para validación de contratos y manejo de errores.
- Uso de Logs para manejo de errores.
- Documentación del ejercicio en swagger.

Variables de Entorno requeridas para correr la aplicacion:

- APIKEY
- URL
- MONGOURI
