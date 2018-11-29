import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';


function Options(props){
	return(
		<div id="options" style={{right:`${props.positionRight}%`}}>
	<div>
		<input type="radio" id="changeFlags" name="changeGame" defaultChecked={props.checkedChangeGame[0]} onChange={(e)=>props.onChangeGame(0)}
		/><span>Флаги</span>
		<input type="radio" id="changeCapitals" name="changeGame" defaultChecked={props.checkedChangeGame[1]} onChange={(e)=>props.onChangeGame(1)}
		/><span>Столицы</span> 
		{/*
		<label className="FlagGameBtn" htmlFor="changeFlags">УГАДАТЬ СТРАНУ</label>
		<label className="CapitalGameBtn" htmlFor="changeCapitals">УГАДАТЬ СТОЛИЦУ</label>*/}
	</div>

	<div>
		<input type="radio" id="changeAllContinents" name="continent" data-id="Весь мир" defaultChecked={props.checkedContinent[0]}
		onChange={(e)=>props.onChangeContinent(0)}/> <span>Весь мир</span>
		<input type="radio" id="changeAsia" name="continent" data-id="Азия" defaultChecked={props.checkedContinent[1]}
		onChange={(e)=>props.onChangeContinent(1)}/> <span>Азия</span>
		<input type="radio" id="changeEurope" name="continent" data-id="Европа" defaultChecked={props.checkedContinent[2]}
		onChange={(e)=>props.onChangeContinent(2)}/> <span>Европа</span>
		<input type="radio" id="changeAfrica" name="continent" data-id="Африка" defaultChecked={props.checkedContinent[3]}
		onChange={(e)=>props.onChangeContinent(3)}/> <span>Африка</span>
		<input type="radio" id="changeSouthAmerica" name="continent" data-id="Южная Америка" defaultChecked={props.checkedContinent[4]}
		onChange={(e)=>props.onChangeContinent(4)}/> <span>Южная Америка</span>
		<input type="radio" id="changeNorthAmerica" name="continent" data-id="Северная Америка" defaultChecked={props.checkedContinent[5]}
		onChange={(e)=>props.onChangeContinent(5)}/> <span>Северная Америка</span>
		<input type="radio" id="changeOceania" name="continent" data-id="Океания" defaultChecked={props.checkedContinent[6]}
		onChange={(e)=>props.onChangeContinent(6)}/> <span>Океания</span>
		{/*<label className="AllWorld"  htmlFor="changeAllContinents">ВЕСЬ МИР</label>
		<label htmlFor="changeAsia"><img className="asia" src={require("./images/asia.png")} alt="asia.png" /></label>
		<label htmlFor="changeEurope"><img className="europe" src={require("./images/europe.png")} alt="europe.png" /></label>
		<label htmlFor="changeAfrica"><img className="africa" src={require("./images/africa.png")} alt="africa.png" /></label>
		<label htmlFor="changeSouthAmerica"><img className="southAmerica" src={require("./images/south_america.png")} alt="south america.png" /></label>
		<label htmlFor="changeNorthAmerica"><img className="northAmerica" src={require("./images/north_america.png")} alt="north america.png" /></label>
		<label htmlFor="changeOceania"><img className="oceania" src={require("./images/australia.png")} alt="australia.png" /></label>*/}
		</div>
	<button id="apply" onClick={(e)=>props.onOptions()}>Применить</button>
</div>	
	)
}

function Table(props){
	for(let i=0; i <props.recordes.flagsRecordsName.length; i++){
			if(props.recordes.flagsRecordsName[i]!=null||props.recordes.capitalsRecordsName[i]!=null){
				return(
					<div id="recordsTable" style={{right:`${props.positionRightTable}%`}}>
					
					<table id="records">
						<tbody>
					{	props.recordes.flagsRecordsName.map((value,index)=>{
						if(value!=null){
							return(
							<tr>
								<td>{props.recordes.flagsRecordsName[index]}</td>
								<td>{props.recordes.flagsRecordsPoint[index]}</td>
							</tr>
							)
						}
					})}
					{props.recordes.capitalsRecordsName.map((value,index)=>{
						if(value!=null){
							return(
							<tr>
								<td>{props.recordes.capitalsRecordsName[index]}</td>
								<td>{props.recordes.capitalsRecordsPoint[index]}</td>
							</tr>
							)
						}
					})}
					</tbody>
					</table>
					<button id="backFromTable" onClick={(e)=>props.onRecordsTable()}>В меню</button>
					</div>
				)
			}else{
				return(
					<div id="recordsTable" style={{right:`${props.positionRightTable}%`}}>
					<h1 id="noRecords">У вас нет рекордов</h1>
					<button id="backFromTable" onClick={(e)=>props.onRecordsTable()}>В меню</button>
					</div>
				)
			}
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

	<button id="start" onClick={(e)=>props.onStart()}>

	 ИГРА </button>
	
	<div>
		<button id="rules" onClick={(e)=>props.onRules()}>ПРАВИЛА</button>
		<button id="yourRecords" onClick={(e)=>props.onRecordsTable()}>ТАБЛИЦА<br></br>РЕКОРДОВ</button>
	</div>
	<button id="settings" onClick={(e)=>props.onOptions()}>РЕЖИМЫ ИГРЫ</button>
	<button id="back">ПРОДОЛЖИТЬ</button>
<Options {...props} />
<Table {...props}/>	
<Rules {...props} />
	</div>
	)
}

	
