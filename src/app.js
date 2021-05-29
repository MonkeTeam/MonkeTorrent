const Store = require('electron-store');
const WebTorrent = require('webtorrent');
const fs = require('fs')

let torrent_client = new WebTorrent();

let magnet = '5b945fa004eb7ba4a2378be99335952c8802ac4a';
let files = document.querySelector('#files');

const store = new Store();

// store.set('asd', '12312asdasd123');
console.log(store.get('asd'));


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