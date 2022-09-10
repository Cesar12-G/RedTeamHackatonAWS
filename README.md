# RedTeamHackatonAWS
AWS Hackaton AI Lab School

# Uso de la API

## Crear un usuario
usar el siguiente endpoint, usa el metodo POST
```cmd
POST /api/account/register/
```
la estructura del json a utilizar es la siguiente
```json
{
  "username":"lobo",
  "email":"email@test.com",
  "password":"Passw0rd"
}
```
## Login de usuario para obtener tokens
usar el siguiente endpoint para obtener un Access Token y Refresh token, usa el metodo POST
```cmd
POST /api/token/
```
la estructura del json a utilizar es la siguiente
```json
{
  "email":    "email@test.com",
  "password": "Passw0rd"
}
```
## Refresh de token
usar el siguiente endpoint para actualizar el Access token, usa el metodo POST
```cmd
POST /api/token/refresh/
```
la estructura del json a utilizar es la siguiente
```json
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2MjgyNjQyMCwiaWF0IjoxNjYyNzk3NjIwLCJqdGkiOiI0NmMyMTE0YWI2YjI0M2Q5YjhiODMxNjdkYjhlYmY5MSIsInVzZXJfaWQiOjJ9.UmnoZ_KKEdcauJoO4jRiNnpuSbTjiSICY_9ctv5DEWc"
}
```
## Obtener datos de usuario
usar el siguiente endpoint para obtener los datos esenciales del usuario, usa el metodo GET
```cmd
GET /api/account/user/
```
Enviar la siguiente cabecera
```cmd
Authorization Bearer access_token_aqui
```

# Instrucciones para React -> Build
Cuando hacemos el comando run build
```cmd
npm run build
```
Crea un archivo index y una carpeta assets siempre.

Para adaptarlo a Django hay una serie de pasos a seguir
1. Pasar la carpeta /assets de /frontend/dist a backend/core/static
2. En tu template index.html de SiteContent modificar el nombre los archivos .js y .css
3. Modificar el archivo index.hash.js que pasaste de React, busca "/assets/" y agregale "/static" al principio, de esta forma Django sabrá que el archivo está en la carpeta static.