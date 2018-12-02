import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';


function Options(props){
	return(
		<div id="options" style={{right:`${props.positionRight}%`}}>
	<div>
		<input type="radio" id="changeFlags" name="changeGame" defaultChecked={props.checkedChangeGame[0]} onChange={(e)=>props.onChangeGame(0)}
		/>
		<input type="radio" id="changeCapitals" name="changeGame" defaultChecked={props.checkedChangeGame[1]} onChange={(e)=>props.onChangeGame(1)}
		/>
	
		<label className="FlagGameBtn" htmlFor="changeFlags">УГАДАТЬ СТРАНУ</label>
		<label className="CapitalGameBtn" htmlFor="changeCapitals">УГАДАТЬ СТОЛИЦУ</label>	{/**/}
	</div>

	<div>
		<input type="radio" id="changeAllContinents" name="continent" defaultChecked={props.checkedContinent[0]}
		onChange={(e)=>props.onChangeContinent(0)}/> 
		<input type="radio" id="changeAsia" name="continent" defaultChecked={props.checkedContinent[1]}
		onChange={(e)=>props.onChangeContinent(1)}/> 
		<input type="radio" id="changeEurope" name="continent" defaultChecked={props.checkedContinent[2]}
		onChange={(e)=>props.onChangeContinent(2)}/> 
		<input type="radio" id="changeAfrica" name="continent"  defaultChecked={props.checkedContinent[3]}
		onChange={(e)=>props.onChangeContinent(3)}/> 
		<input type="radio" id="changeSouthAmerica" name="continent" defaultChecked={props.checkedContinent[4]}
		onChange={(e)=>props.onChangeContinent(4)}/> 
		<input type="radio" id="changeNorthAmerica" name="continent" defaultChecked={props.checkedContinent[5]}
		onChange={(e)=>props.onChangeContinent(5)}/> 
		<input type="radio" id="changeOceania" name="continent" defaultChecked={props.checkedContinent[6]}
		onChange={(e)=>props.onChangeContinent(6)}/> 
		<label id="AllWorld"  htmlFor="changeAllContinents">ВСЕ КОНТИНЕНТЫ</label>
		<label id="asiaInput" htmlFor="changeAsia">АЗИЯ</label>
		<label id="europaInput" htmlFor="changeEurope">ЕВРОПА</label>
		<label id="africaInput" htmlFor="changeAfrica">АФРИКА</label>
		<label id="sAmericaInput" htmlFor="changeSouthAmerica">ЮЖНАЯ АМЕРИКА</label>
		<label id="nAmericaInput" htmlFor="changeNorthAmerica">СЕВЕРНАЯ АМЕРИКА</label>
		<label id="oceaniaInput" htmlFor="changeOceania">ОКЕАНИЯ</label>{/**/}
		</div>
	<button id="apply" onClick={(e)=>props.onOptions()}>Применить</button>
</div>	
	)
}

function Table(props){
	let arr = []
	for(let i =0; i<props.checkedContinent.length; i++){
		if(props.recordes.flagsRecordsName[i]===null&&props.recordes.capitalsRecordsName[i]===null){
			arr.push(props.recordes.flagsRecordsName[i])
			arr.push(props.recordes.capitalsRecordsName[i])
		}
	}
	if(arr.length===14) {
	return(
	<div id="recordsTable" style={{right:`${props.positionRightTable}%`}}>
	<h1 id="noRecords">У вас нет рекордов</h1>
		<button id="backFromTable" onClick={(e)=>props.onRecordsTable()}>В меню</button>
	</div>
	)
} else{
	let arrName = []
	let arrPoint = []
	for(let i = 0; i< props.checkedContinent.length;i++){
	arrName.push(props.recordes.flagsRecordsName[i])
	arrName.push(props.recordes.capitalsRecordsName[i])
	arrPoint.push(props.recordes.flagsRecordsPoint[i])
	arrPoint.push(props.recordes.capitalsRecordsPoint[i])
}
		return (
			<div id="recordsTable" style={{right:`${props.positionRightTable}%`}}>
			<table id="records">
				<tbody>
				{
						arrName.map((value,index)=>{
							if(value!=null) {
								return(
									<tr key={index}><td>{arrName[index]}</td><td>{arrPoint[index]}</td></tr>
								)
							}
						})	
				
					}
				</tbody>
			</table>
			<button id="backFromTable" onClick={(e)=>props.onRecordsTable()}>В меню</button>
		</div>
		)	
	}
}

function Rules(props){
	return(

	
	<div id="rulesSheet" style={{left:`${props.positionLeftRules}%`}}>
		<h2>Правила игры</h2>
		<div>
			Правила игры довольно просты. Существует 2 режима игры: <span>"Угадать страну по флагу"</span> и 
			<span>"Угадать столицу страны".</span>
			Так же есть возможность выбора части мира для игры. Выбор перечисленного ранее осуществляется в <span>"Режимы игры".</span>
		</div>
		<div>
			<span>"Угадать страну по флагу"</span>: отображается флаг страны, Вам необходимо выбрать один из 
			предложенных <span>четырех</span> вариантов.
		</div>
		<div>
			<span>"Угадать столицу страны"</span>: отображается флаг страны с указанием ее названия ниже, 
			Вам необходимо выбрать один из предложенных <span>четырех</span> вариантов. 
		</div>
		<div>
			За каждый правильный ответ вы получаете <span>1 балл</span>. Вам дается <span>3</span> права на ошибку. 
			После 3 ошибки игра прекращается.
		</div>
		<div>
			<span>Примечание:</span>Во всех режимах у вас есть возможность воспользоваться подсказкой, нажав на кнопку с соответсвующим названием
			во время начатой игры. В случае выбора данной опции вам отобразиться и засчитается правильный вариант ответа.
			<br/>
			<span>Удачной игры!</span>
		</div>
		<button id="backFromRules"onClick={(e)=>props.onRules()}>В меню</button>
	</div>
	)
}

export default function StartPage(props){
	return(
		<div id="wrapStart"  style={{display:props.display.wrapStart}}>
	<div id="earth"></div>
<div className="forMedia">
	<button id="start" onClick={(e)=>props.onStart()}> ИГРА </button>
	
	<div>
		
		<button id="rules" onClick={(e)=>props.onRules()}>ПРАВИЛА</button> 
		
		<button id="yourRecords" onClick={(e)=>props.onRecordsTable()}>ТАБЛИЦА<br></br>РЕКОРДОВ</button>
	</div>
	<button id="settings" onClick={(e)=>props.onOptions()}>РЕЖИМЫ ИГРЫ</button>
	<button id="back" style={{display:props.display.btnContinue}} onClick={(e)=>props.onContinue()}>ПРОДОЛЖИТЬ</button>
	</div>
	
<Options {...props} />
<Table {...props}/>	
	<Rules {...props} />
	</div>
	)
}

	
