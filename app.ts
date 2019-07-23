import * as express from 'express'
import * as path from 'path';

class App {
  public app

  constructor () {
    this.app = express()
    this.setRoutes();
  }

  setRoutes(){
    this.app.get('/', (req, res) => res.send('Welcome to Node.js and TypeScript!'));
    this.app.get('/file', (req, res) => {
    	res.sendFile('index.html', { root : __dirname });
    })
  }

}

export default new App().app