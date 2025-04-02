[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/CBIH3_Lj)

# Julian Romero 325312
## Link: https://parcial-ii-juliban27.vercel.app/

## Documentación: 
### 1. Instalación:

```
# Clonar el repositorio
git clone https://github.com/tu-usuario/api-productos-express.git
cd api-productos-express

# Instalar dependencias
npm install

#  Iniciar el servidor
npm start
"""
```

### Estructura del proyecto:

api-productos-express/
├── app.js           # Punto de entrada de la aplicación
├── package.json     # Dependencias y scripts
└── README.md        # Documentación

### Productos: 

{
  "id": Number,      // Identificador único del producto
  "name": String,    // Nombre del producto
  "price": Number    // Precio del producto
}


### Endpoints de la API:

#### Lista de todos productos:

   https://parcial-ii-juliban27.vercel.app/products 
   ```GET /products```

   ![alt text](image.png)

#### Obtener producto por id:
   https://parcial-ii-juliban27.vercel.app/products/(id)
   ```GET /products/:id```

   Parámetros de ruta:
      id: ID numérico del producto a buscar

   ![alt text](image-1.png)

#### Crear un nuevo producto:
   ```POST /products```

   Para probarlo se debe enviar el producto en el endpoint products: 
   https://parcial-ii-juliban27.vercel.app/products


# Web Development Exam - Backend with Express.js

## Overview
Este examen evalúa tu capacidad para construir un backend básico usando Express.js. Crearás una API sencilla para gestionar información de productos.

## Instrucciones
- Tienes **1:30 horas** para completar el examen.
- Escribe **código limpio y bien documentado**.
- Asegúrate de que tu aplicación se ejecute sin errores antes de enviarla.
- Usa solo **JavaScript vanilla** y **Express.js**.
- No utilices bases de datos externas; almacena los datos en memoria.
- El enlace del repositorio desplegado debe agregarse al README para poder calificar el examen. Todo repositorio sin marcar no será calificado.

## Requerimientos

1. **Crea un servidor en Express.js** que escuche en el puerto `3000`. (10 puntos)
2. **Define un arreglo en memoria** con al menos 3 productos, cada uno con:
   - `id` (numérico, único)
   - `name` (cadena de texto)
   - `price` (numérico)
   
   (10 puntos)
3. **Crea los siguientes endpoints:**
   - `GET /products` → Devuelve la lista de productos en formato JSON. (10 puntos)
   - `GET /products/:id` → Devuelve un solo producto por `id`. Si no se encuentra, retorna un error `404`. (10 puntos)
   - `POST /products` → Agrega un nuevo producto. Los datos del producto deben enviarse en el cuerpo de la solicitud en formato JSON. No olvide que el ID es único, así que si se trata de crear un producto con un ID ya existente se debe devolver un error **400 Bad Request** (10 puntos)
4. **Usa `express.json()` como middleware** para manejar solicitudes JSON. (10 puntos)

## Rúbrica de Evaluación (Total: 50 puntos)

| Criterio                                  | Puntos |
|-------------------------------------------|--------|
| Servidor escucha en el puerto 3000       | 10     |
| Lista de productos en memoria definida correctamente | 10     |
| `GET /products` devuelve todos los productos | 10     |
| `GET /products/:id` maneja IDs válidos e inválidos | 10     |
| `POST /products` agrega un nuevo producto correctamente | 10     |
| **Despliegue (Obligatorio, sin puntaje)** | **Si no se despliega el repositorio, no se califica el examen.** |

## Entrega
- Sube tu código a un **repositorio en GitHub** y despliéguelo en **vercel**.
- Agregue el enlace del repositorio desplegado al README.

¡Buena suerte!
