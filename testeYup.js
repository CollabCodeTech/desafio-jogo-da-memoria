/* function f1 (valor) {
  console.log(`gg f1 ${valor}`);
  return text => console.log(`texto ${text}`);
};

const f2 = () => {
  console.log("gg f2");
  let f3 = f1(2);
  f3('f3');
};*/

/* const reg1 = /abc/;
const s1 = "Você conhece o a5bc";
console.log(reg1.test(s1));
console.log(s1.search(reg1))
*/
//console.log(
//`booo`.search(/bo*/),
//`Scoobdoo`.search(/bo*/),
//`abcd`.search(/bo*/),
//`A bird`.search(/bo*/))

/* const email1 = "marco.bruno.br@gmail.com"
const reg = /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/
const f=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regplaca = /^[A-Z]{3}\d{4}$/
console.log(reg.test(email1))
console.log(regplaca.test("AAA1234")) */

let yup = require("yup");

yup.setLocale({
  mixed: {
    default: "Não é válido"
  },
  number: {
    min: "Deve ser maior que ${min}"
  }
});

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function() {
    return new Date();
  })
});

// check validity
schema
  .isValid({
    name: "jimmy",
    age: 24,
    email: "hotm.com"
  })
  .then(function(valid) {
    console.log(valid); // => true
  });

// you can try and type cast objects to the defined schema
console.log(
  schema.cast({
    name: "jimmy",
    email: "hotm.com"
  })
);
// => { name: 'jimmy', age: 24, createdOn: Date }

schema
  .validate({
    name: "jimmy",
  })
  .catch(err => {
    console.log(err.name, err.errors);
  });
