import React, {useState} from 'react';

const App = () => {
	const [num, setNum] = useState(0);
	return (
		<>
			<input type="text" id="conn_id" />
			<button id="connect">Connect</button>
			<button onClick="{sendMessage}">Send</button>
		</>
	);
}

export default App;