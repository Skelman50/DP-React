import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';

export default function EndGame (props) {
	return(
		<div id ="end" style={{display:props.display.endGame}}>

	
	{props.counts.win>50?<div id="endText">OMG!!! <br /> You are GENIUS</div>:null}

	{props.counts.lose>2?
	<div>

	<div id="endText">GAME OVER</div>
	<div id="loose">ВАШ РЕЗУЛЬТАТ {
		props.counts.win
	} {(props.counts.win>9&&props.counts.win<21)||
		(props.counts.win>109&&props.counts.win<121)?"БАЛЛОВ":
		props.counts.win%10===1?"БАЛЛ":(props.counts.win%10 > 1 && props.counts.win%10 < 5)?"БАЛЛA":
		'БАЛЛОВ'}</div>

	</div>:null}


	<button id="afterEnd" onClick={(e)=>props.onStart()}>Начать Заново</button>
	<button id="endMenu" onClick={(e)=>props.onBack()}>В меню</button>
</div>
	)
}