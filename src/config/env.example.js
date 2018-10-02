/*
 * Estas url solo están de referencia, deben ir en un archivo env.js en la misma
 * carpeta para su importacion. Se puede borrar la extension .example de este archivo.
 * El archivo env.js está agregado en el gitignore
 * */

/*
 Constante para definir el entorno en el que se encuentra la app
 Posibles valores:
 - production
 - stage
 - qa
 - dev
 - local
 */

const ENV = 'local';

// Constante para definir la version de la API
const API_VERSION = 'v2';

// ENDPOINTS de la aplicacion en los diferentes entornos
// Nota: las claves de este objeto deben coincidir con el (o los) valores de la constante ENV
const ENDPOINTS = {
  production: {
    API: 'http://theproductionurlapi',
    WEB: 'http://theproductionurl'
  },
  stage: {
    API: 'http://thestageurlapi',
    WEB: 'http://thestageurl'
  },
  qa: {
    API: 'http://theqaurlapi',
    WEB: 'http://theqaurl'
  },
  dev: {
    API: 'http://thedevelopmenturlapi',
    WEB: 'http://thedevelopmenturl'
  },
  local: {
    API: 'http://localhost:80/api',
    WEB: 'http://localhost:80'
  }
};

const { API, WEB } = ENDPOINTS[ENV];

const API_URL = `${API}/${API_VERSION}/`;
const WEB_URL = `${WEB}/`;

export default {
  ENDPOINTS,
  ENV,
  API_VERSION,
  API_URL,
  WEB_URL
};
