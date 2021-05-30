const Config = require('../utils/config.js');
const MonkeTorrent = require('../utils/monke_torrent.js')

let torrent_input = document.querySelector("#torrent_input");
let torrent_list_ul = document.querySelector('#torrents');

 let torrent_list = Config.get('torrent_list');

 let monke_torrent = new MonkeTorrent();

 // monke_torrent.seed('cynax120_asd', torrent => {
 // 	setInterval(() => {
	//  	console.log('upload speed', torrent.uploadSpeed);
 // 	}, 1000);
 // })

if(torrent_list)
{
	 torrent_list.forEach((item, index) => {
	 	let li = document.createElement('li')
	 	li.innerText = item;
	 	li.appendChild(getStartDownloadButton('Start download', index))
	 	torrent_list_ul.appendChild(li)
	 })
}

function addTorrent()
{
	let torrent_info = torrent_input.value;
	let index = Config.addItem('torrent_list', torrent_info);

	let li = document.createElement('li')
	li.innerText = torrent_info;
	li.appendChild(getStartDownloadButton("Start download", index));
	torrent_list_ul.appendChild(li);

	let monke_torrent = new MonkeTorrent()

<<<<<<< HEAD
	// let torrent = monke_torrent.add(torrent_info, '.').then(t => {
	// 	setInterval(() => {
	// 		console.log('progress', t.progress)
	// 		console.log('download speed', t.downloadSpeed / 1024)
	// 		console.log('downloaded', t.downloaded)	
	// 	}, 1000);
	// });


=======
	let torrent = monke_torrent.add(torrent_info, '.').then(t => {
		setInterval(() => {
			console.log('progress', t.progress)
			console.log('download speed', t.downloadSpeed)
			console.log('downloaded', t.downloaded)	
		}, 1000);
	});
	
>>>>>>> master
	console.log('torrent', torrent)

	torrent_input.value = '';
}

function getStartDownloadButton(text, index)
{
	let button = document.createElement('button')
	button.innerText = text
	button.id = "start_download_torrent_" + index;
	button.addEventListener('click', e => {
		
	});
	return button;
}

function deleteAllTorrent()
{
	Config.remove('torrent_list');

	torrent_list_ul.innerHTML = "";
}

module.exports.addTorrent = addTorrent;
module.exports.deleteAllTorrent = deleteAllTorrent;