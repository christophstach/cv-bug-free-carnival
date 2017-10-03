export const environment = {
  production: process.argv[2] === 'production' || process.argv[2] === 'prod',
  development: process.argv[2] === 'development' || process.argv[2] === 'dev',
  testing: process.argv[2] === 'testing' || process.argv[2] === 'test'
};
