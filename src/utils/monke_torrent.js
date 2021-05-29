const WebTorrent = require('webtorrent');

class MonkeTorrent
{
	constructor()
	{
		this.torrent = new WebTorrent();
	}

	async add(torrent_info, path, callback)
	{
		return await this.torrent.add(torrent_info, { path: path }, t => {
			return t;
		});
	}

	getProgress(torrent)
	{
		return torrent.progress;
	}
}

module.exports = MonkeTorrent;