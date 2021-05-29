const fs = require('fs')
const Config = require('./utils/config.js');

let { addTorrent, deleteAllTorrent } = require('./ui/torrent_list_handlers.js');


// let magnet = '5b945fa004eb7ba4a2378be99335952c8802ac4a';
// let files = document.querySelector('#files');



// torrent_client.add(magnet, {path: './'}, (torrent) => {
// 	console.log('downloading: ', torrent);

// 	torrent.files.forEach(file => {
// 		console.log('file: ', file)
// 		file.appendTo(files)

// 		file.getBlobURL((error, url) => {
// 			console.log('error', error);
// 			console.log('download link: ', url);
// 		})
// 	})
// });