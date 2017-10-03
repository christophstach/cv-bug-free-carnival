import { setupServer } from './graphql/server';


const app = setupServer();
const server = app.listen(3000);

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

