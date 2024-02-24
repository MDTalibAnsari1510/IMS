export const DBHOST = process.env.DBHOST ?? 'localhost';
export const DBPORT = process.env.DBPORT ?? 27017;
export const DATABASE = process.env.DATABASE ?? 'item_management_system';
export const PORT = process.env.PORT ?? 9090;
export const PASSWORDSALT = parseInt(process.env.PASSWORDSALT) ?? 10;
export const TOKENEXPIRETIME = process.env.TOKENEXPIRETIME ?? '1h';
export const SECRET = process.env.SECRET ?? 'itemManagementDataSecretKey!@#T@$k@l$o&&%';
export const DEFAULTUSERNAME = process.env.DEFAULTUSERNAME ?? 'ramyabunicsol';
export const DEFAULTUSERPASSWORD = process.env.DEFAULTUSERPASSWORD ?? 'Pass#12@';

