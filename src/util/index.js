import { MAX_AGE } from '../config/constants';

const evaluateAgeFromDateBirthdate = (date) => {
  console.log(date);
  let fecha = date.format('YYYY-MM-DD')
                  .split('-');
  let dia = fecha[2];
  let mes = fecha[1];
  let ano = fecha[0];
  let fecha_hoy = new Date();
  let ahora_ano = fecha_hoy.getYear();
  let ahora_mes = fecha_hoy.getMonth() + 1;
  let ahora_dia = fecha_hoy.getDate();
  let edad = (
                 ahora_ano + 1900
             ) - ano;
  if (ahora_mes < mes) {
    edad--;
  }
  if ((
          mes == ahora_mes
      ) && (
          ahora_dia < dia
      )) {
    edad--;
  }
  if (edad > 1900) {
    edad -= 1900;
  }
  console.log(edad, MAX_AGE);
  return edad >= MAX_AGE;
};

export {
  evaluateAgeFromDateBirthdate,
};
