# Proyecto de prueba para productos de FireBase

## Descripción

Este es un pequeño proyecto de prueba hecho con mapbox

- Para la key de mapbox ve a la pagina de mapbox y ocupa la apiKey https://www.mapbox.com/
- Los .env de keys externas y variables de entorno se utilizo FireBase con Realtime Database, alli administra las keys del proyecto.

### Probando deploys
- Para los hostings que no podemos utilizar .envs en su entorno, se instalo firebase y para traernos datos sensibles ocupamos realtime database como gestor de keys.
- Recuerda, cuando haces un build este te toma el .env.production y por defecto en desarrollo toma el .env.development

#### Firebase (front app)
- Url https://maps-app-f3c08.web.app/ 
- No tiene para configurar .env facilmente
- Deploy de estaticos por excelencia, se ocupo env-cmd para mandar los .env de prod `"build:prod": "env-cmd -f .env.production npm run build"`
- No tiene un panel para configurar .env asique todo es por codigo
- Se guardo la api key de mapbox en realtime storage para simular un entorno de guardado de keys
- Falta poner la apikey de mapbox en las busquedas, esto es solo de prueba.

#### Netlify (front app) (Gratis la subida de estaticos, el uso de .env en consola es pagado)
- Url https://melodious-pothos-2f5de9.netlify.app/
- Tiene un panel para configurar .env facilmente
- Deploy de estaticos (Gratis) + .envs facilmente
- Se guardo la api key de mapbox en realtime storage para simular un entorno de guardado de keys
- Se guardo tambien la api key de mapbox en vercel para los test de busqueda, pero no se puede utilizar por ser de pago (Pagado)

#### Vercel (El mejor front app + .envs)
- Url https://front-mapbox-firebase-app.vercel.app/
- Tiene un panel para configurar .env facilmente
- Deploy de estaticos + .envs facilmente
- Se guardo la api key de mapbox en realtime storage para simular un entorno de guardado de keys
- Se guardo tambien la api key de mapbox en vercel para los test de busqueda

#### Render (Igual a vercel pero con deploy a servicios webs)
- Url https://front-mapbox-firebase-app.onrender.com/
- Tiene un panel para configurar .env facilmente
- Deploy de estaticos + .envs facilmente
- Se guardo la api key de mapbox en realtime storage para simular un entorno de guardado de keys
- Se guardo tambien la api key de mapbox en vercel para los test de busqueda

