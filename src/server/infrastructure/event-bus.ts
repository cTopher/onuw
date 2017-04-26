import {Server} from 'http'
import * as io from 'socket.io'
import {EventType} from '../../common/event/event'

export class EventBus {

  private socket: SocketIO.Server

  init(server: Server) {
    this.socket = io(server)
    this.socket.on('connection', (client) => this.onConnection(client))
  }

  emit(type: EventType, event: Event) {
    this.socket.emit(type, event)
  }

  private onConnection(client: SocketIO.Socket) {
    console.log('[Socket] connection: ', client.handshake.address)
    client.on('disconnect', () => this.onDisconnect(client))
  }

  private onDisconnect(client: SocketIO.Socket) {
    console.log('[Socket] disconnect: ', client.handshake.address)
  }

}

export const eventBus = new EventBus()
