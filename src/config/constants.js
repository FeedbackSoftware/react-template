import axios                           from 'axios';
import { toast }                       from 'react-toastify';
import { ENDPOINTS, ENV, API_VERSION } from './env';

import logo from '../resources/images/auth/feedback.png';

// Se usa para manejar una version, del estado de la aplicación,
// cuando se cambia, setea el storage del cliente por el estado por defecto.
export const STATE_VERSION = 0.1;

// Constante para definir la edad minima del usuario para usar la app
// export const MAX_AGE = 18;

// Colores base de la aplicación
export const COLORS = {};

// Imagenes de toda la aplicacion separadas por categorias
export const IMG = {
  logo
};

export const TOAST_CONFIG = {
  SUCCESS: {
    type: toast.TYPE.SUCCESS,
    autoClose: 10000,
    position: toast.POSITION.TOP_CENTER
  },
  INFO: {
    type: toast.TYPE.INFO,
    autoClose: 10000,
    position: toast.POSITION.TOP_CENTER
  },
  ERROR: {
    type: toast.TYPE.ERROR,
    autoClose: 10000,
    position: toast.POSITION.TOP_CENTER
  },
  WARNING: {
    type: toast.TYPE.WARNING,
    autoClose: 10000,
    position: toast.POSITION.TOP_CENTER
  }
};

// Se genera la URL base de acuerdo a los endpoints del entorno
// Opcionalmente se puede usar versionamiento de la API
const { API } = ENDPOINTS;

const API_URL = `${API[ENV]}/${API_VERSION}/`;

// En dado caso que se use axios
axios.defaults.baseURL = API_URL;
