# Sistema CRUD y Login MVC con Svelte y MySQL

Este proyecto es una aplicación web básica desarrollada para la asignatura de Ingeniería Web. Implementa el patrón de arquitectura MVC, operaciones CRUD y un sistema de autenticación de rutas protegidas.

## Tecnologías Utilizadas 
* **Framework:** SvelteKit (Proporciona la estructura MVC mediante rutas, server actions y hooks).
* **Base de Datos:** MySQL (con la librería `mysql2`).
* **Estilos:** CSS básico en línea.

## Arquitectura MVC en SvelteKit
* **Modelo:** Se gestiona en el archivo `src/lib/server/db.js` y mediante las consultas directas a la base de datos.
* **Vista:** Archivos `+page.svelte` que renderizan el HTML y la interfaz de usuario.
* **Controlador:** Archivos `+page.server.js` (procesan formularios y conectan Modelo con Vista) y `hooks.server.js` (middleware que evalúa la sesión).

## Instalación y Ejecución
1. Clonar el repositorio.
2. Ejecutar el script SQL incluido en tu gestor de base de datos MySQL local para crear las tablas y el usuario de prueba.
3. Instalar dependencias con `npm install`.
4. Ejecutar el servidor de desarrollo con `npm run dev`.

## Credenciales de prueba
* **Usuario:** admin
* **Contraseña:** 123
* **Usuario** Jorge
* **Contraseña** 1234

## Script MySQL
 
* CREATE DATABASE ingenieria_web_tarea;
* USE ingenieria_web_tarea;

* CREATE TABLE usuarios (
   * id INT AUTO_INCREMENT PRIMARY KEY,
   * usuario VARCHAR(50) NOT NULL UNIQUE,
   * password VARCHAR(50) NOT NULL
* );

* CREATE TABLE productos (
   * id INT AUTO_INCREMENT PRIMARY KEY,
   * nombre VARCHAR(100) NOT NULL,
   * precio DECIMAL(10, 2) NOT NULL,
   * categoria VARCHAR(100) NOT NULL
* );

* INSERT INTO usuarios (usuario, password) VALUES ('admin', '123');
* INSERT INTO usuarios (usuario, password) VALUES ('Jorge', '1234');