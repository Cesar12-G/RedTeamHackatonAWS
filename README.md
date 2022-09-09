# RedTeamHackatonAWS
AWS Hackaton AI Lab School


### Instrucciones para React -> Build



### Instrucciones para React -> Build
Cuando hacemos el comando run build
```cmd
npm run build
```
Crea un archivo index y una carpeta assets siempre.

Para adaptarlo a Django hay una serie de pasos a seguir
1. Pasar la carpeta /assets de /frontend/dist a backend/core/static
2. En tu template index.html de SiteContent modificar el nombre los archivos .js y .css
3. Modificar el archivo index.hash.js que pasaste de React, busca "/assets/" y agregale "/static" al principio, de esta forma Django sabrá que el archivo está en la carpeta static.