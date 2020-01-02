import React, { useContext } from 'react';
import { MainContext } from '../App';

function Footer(){

	const context = useContext(MainContext);
	const { store: {counter }} = context;
	
	return (
		<div>
			<h1>Footer {counter}</h1>
			<button onClick={()=>context.dispatch({type:"INCREMENT"})}>CLICK</button>
		</div>
	);
}

export default Footer;