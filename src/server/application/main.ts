import {config} from '../infrastructure/config'

const app = require('./server').start(config.port)
const server = require('http').createServer(app)
require('../infrastructure/event-bus').eventBus.init(server)

server.on('listening', () => onListening(server.address()))
server.listen(config.port)

function onListening(address: string | { port: string }) {
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port
  console.log('http server listening on ' + bind)
}
