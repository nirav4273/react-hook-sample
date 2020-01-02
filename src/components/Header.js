import React, { useContext } from 'react';
import { MainContext } from '../App';
function Header(){

	const context = useContext(MainContext);
	const { store: { counter, name }} = context;

	return (
		<div>

			<div>Header {counter}</div>
			<h2>{name}</h2>
		</div>
	);
}

export default Header;