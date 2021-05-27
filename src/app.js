const PeerClient = require('./utils/peer_client.js');

const id_input = document.querySelector("#conn_id");
const connect_button = document.querySelector('#connect');

let peer_client = new PeerClient();
peer_client.init();

connect_button.addEventListener('click', () => {
	peer_client.connect(id_input.value)
})

peer_client.onIncoming(data => {
	console.log("Got message", data)
})

function sendMessage()
{
	peer_client.sendMessage("Hello there!");
}