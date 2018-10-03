import axios  from 'axios';
import VAR    from './env';
import i_logo from '../resources/images/auth/feedback.png';


const STATE_VERSION = 0.1;  // Se usa para manejar una version, del estado de la aplicación,
                            // cuando se cambia, setea el storage del cliente por el estado por defecto.
const MAX_AGE = 18;

axios.defaults.baseURL = VAR.WEB_URL;

const IMG = {
  logo: i_logo
};

export default {
  ...VAR,
  STATE_VERSION,
  MAX_AGE,
  IMG
};
