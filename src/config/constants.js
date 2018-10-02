import axios from 'axios';
import VAR   from './env';

const STATE_VERSION = 0.1;  // Se usa para manejar una version, del estado de la aplicación,
                            // cuando se cambia, setea el storage del cliente por el estado por defecto.
const MAX_AGE = 18;

axios.defaults.baseURL = VAR.WEB_URL;

const CONST = {
  ...VAR,
  STATE_VERSION,
  MAX_AGE
};

export default CONST;
