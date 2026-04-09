# Sistema de Gestión de Inventario (SvelteKit + MVC)

Este proyecto es una aplicación web para la gestión de productos, desarrollada para la asignatura de Ingeniería Web. Implementa un sistema completo de autenticación y un CRUD protegido utilizando el patrón de diseño **MVC**.

## 🚀 Características

- **Autenticación Segura:** Registro e inicio de sesión con contraseñas encriptadas mediante `bcrypt`.
- **Patrón MVC:** Separación clara entre Modelos (lógica de datos), Vistas (componentes Svelte) y Controladores (Server Actions).
- **CRUD Completo:** Gestión de productos (Nombre, Precio, Categoría y Stock).
- **Protección de Rutas:** Middleware que impide el acceso a la sección de inventario sin una sesión activa.

## 🛠️ Tecnologías Utilizadas

- **Framework:** SvelteKit (Svelte 5)
- **Base de Datos:** MySQL
- **Estilos:** CSS3 Nativo
- **Seguridad:** Bcrypt & Hooks Middleware

## 📁 Estructura del Proyecto (MVC)

- `src/lib/server/models/`: Contiene la lógica de conexión y consultas SQL (**Modelo**).
- `src/routes/`: Contiene las vistas (`+page.svelte`) y los controladores (`+page.server.js`) (**Vista y Controlador**).
- `src/hooks.server.js`: Controlador global para la protección de rutas (**Middleware**).

## 🗄️ Script de la Base de Datos (SQL)

Debe crear una base de datos llamada `ingenieria_web_tarea` y ejecutar el siguiente script para que el sistema funcione correctamente:

```sql
CREATE DATABASE IF NOT EXISTS ingenieria_web_tarea;
USE ingenieria_web_tarea;

-- Tabla de Usuarios (Modelo de Usuario)
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Tabla de Productos (Modelo de Producto)
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    stock INT NOT NULL
);