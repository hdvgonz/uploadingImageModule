/* eslint-disable prettier/prettier */
export const renameImage = (req, file, callback) => {
  const name = file.originalname.split('.')[0]; //seoaramos el archivo en donde haya un punto y tomaremos la primera posicion
  const fileName = file.originalname;
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

  console.log(randomName);
  console.log(name);

  console.log(`${name}-${randomName}-${fileName}`);

  callback(null, `${name}-${randomName}-${fileName}`);
};

export const fileFilter = (req, file, callback) => {

  if (!file.originalname.match(/\.(jpg|jpeg|gif)$/)) {
    return callback( new Error('formato invalido'), false)
  }
  
  callback(null,true) //null para indicar que no hay error
};
