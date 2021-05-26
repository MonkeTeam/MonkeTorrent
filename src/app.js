const Peer = require('peerjs-on-node').Peer

let peer = new Peer();
let peer_id;
let connection;

peer.on('open', function(id)
{
	console.log("My peer id: ", id);
	peer_id = id;
})

const id_input = document.querySelector("#conn_id");
const connect_button = document.querySelector('#connect');

connect_button.addEventListener('click', (e) => {
	let conn_request_id = id_input.value;
	connection = peer.connect(conn_request_id)

	peer.on('error', (err) => {
		console.error(err)
	})
	console.log("peer connected!")
})

peer.on('connection', (connection) => {
	console.log("got a connection")
	connection.on('open', () => {
		console.log('connection open!')
	})
	connection.on('data', data => {
		console.log('got this data: ', data)
	})
})

function sendMessage()
{
	console.log('sending message to ', connection);
	connection.send("Yo there")
}