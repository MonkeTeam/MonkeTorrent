const Store = require('electron-store');

class Config
{
	constructor()
	{}

	getInstance()
	{
		return Config.instance;
	}

	static get(name)
	{
		return Config.store.get(name)
	}

	static set(name, value)
	{
		Config.store.set(name, value);
	}

	static addItem(name, item)
	{
		let store = Config.store;

		let data = store.get(name)
		if(!data) { data = [] }

		data.push(item);

		store.set(name, data);
		return data.length - 1;
	}

	static removeItem(name, index)
	{
		let store = Config.store;
		let data = store.get(name)
		if(!data) return false;

		data.splice(index, 1);

		store.set(name, data);
	}

	static remove(name)
	{
		Config.store.delete(name)
	}
}

Config.store = new Store();

module.exports = Config;