// tipando usando types annnotations

// tipos primitivos

const nome: string = 'Diego';
const idade: number = 21;
const adulto: boolean = true;

// obs: tambem é possivel usar a inferencias de tipos

const string = 'Uma string qualquer';
const number = 21;
const booleans = true || false;

// arrays
const arrayDeNumeros: number[] = [1, 2, 3, 4];
// const arrayDeNumeros: Array<number> = [1, 2, 3, 4]; com generic

const arrayDeNumerosEStrings: (number | string)[] = [1, '1', 2, '2'];
// const arrayDeNumerosEStrings: Array<number | string> = [
//   1, '1', 2, '2',
// ]; com generic

// objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Diego',
  idade: 21,
  adulto: true,
};

