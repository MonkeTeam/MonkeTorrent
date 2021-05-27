const Peer = require('peerjs-on-node').Peer

class Peer
{
	constructor()
	{
		this.peer = new Peer();
		this.peer_id;
		this.connection;
	}

	init()
	{
		this.peer.on('open', id => {
			this.peer_id = id;
			console.log('peer open - ', id)
		})
	}

	connect(peer_id)
	{
		this.connection = peer.connect(peer)
	}

	onIncoming(onData)
	{
		this.peer.on('connection', connection => {
			console.log('got a connection', connection)
			connection.on('open', () => {
				console.log("connection open");
			})

			connection.on('data', data => {
				console.log('got this data', data)
				onData(data)
			})
		})
	}

	sendMessage(message)
	{
		if(!this.connection)
		{
			console.log("No connection found to send message");
			return false;
		}
		this.connection.send(message)
	}
}

module.exports = Peer