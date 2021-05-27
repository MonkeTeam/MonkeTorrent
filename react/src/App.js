import React, {useState} from 'react';

const App = () => {
	const [num, setNum] = useState(0);
	return (
		<>
			<div>Helloo</div>
			<h2>Counter: {num}</h2>
			<button onClick={ () => setNum(num + 1) }>Increase</button>
		</>
	);
}

export default App;