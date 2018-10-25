/*
 Constante para definir el entorno en el que se encuentra la app
 Posibles valores:
 - production
 - stage
 - qa
 - dev
 - local
 */

export const ENV = 'local';

// Constante para definir la version de la API
export const API_VERSION = 'v1';

// ENDPOINTS de la aplicacion en los diferentes entornos
// Nota: las claves de este objeto deben coincidir con el (o los) valores de la constante ENV
export const ENDPOINTS = {
  API: {
    production: '',
    stage: '',
    qa: '',
    dev: '',
    local: '',
  },
};
