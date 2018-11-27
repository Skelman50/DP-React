import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';
import {fullCounties,asiaChange,europeChange,africaChange,
		southAmericaChange,northAmericaChange,oceaniaChange} from './countries';

const countries = {
	fullCounties,
	asiaChange,
	europeChange,
}

class Game extends React.Component {

	constructor(){
		super()
		this.state = {
			countries:{
				all: [[...fullCounties],[...asiaChange],[...europeChange],[...africaChange],[...southAmericaChange],[...northAmericaChange],[...oceaniaChange]],
				copy:[[...fullCounties],[...asiaChange],[...europeChange],[...africaChange],[...southAmericaChange],[...northAmericaChange],[...oceaniaChange]]
			},
			backgrounds:["green","green","green","green"],
			value:[],
			valueCapital:[],
			className:['unblok','unblok','unblok','unblok'],
			display:["none","block"],
			positionRight: -100,
			checkedChangeGame:[true,false],
			checkedContinent:[true,false,false,false,false,false,false]
		}
		this.onChange = this.onChange.bind(this)
		this.onStart = this.onStart.bind(this)
		this.onBack = this.onBack.bind(this)
	}

	onChangeGame(index){
			let checked = this.state.checkedChangeGame;
			for(let i = 0; i< checked.length;i++) {
				index === i?checked[index] = true:checked[i]=false
			}
				
			
			this.setState({
				checkedChangeGame:checked
			})
			console.log(this.state.checkedChangeGame)
	}

	onChangeContinent(index){
	//	let arr = this.state.countries.copy.concat()
		this.setState({
			countries:{
				copy:[...this.state.countries.copy],
				all:this.state.countries.copy,
			}
		})

		let checked = this.state.checkedContinent;
			for(let i = 0; i< checked.length;i++) {
				//index === i?checked[index] = true:checked[i]=false
				if(index===i){
					checked[index] = true;
					this.setState({
						countries:{
							all:[...this.state.countries.copy[i]],
							copy:this.state.countries.copy
						}
					})
					
					
				}else{
					checked[i]=false
				}
					
		}
		this.setState({
			checkedContinent:checked
		})
	}

	onOptions() {
		const this_=this;
		if(this.state.positionRight===-100){
		let id = setInterval(function(){
			this_.setState({
				positionRight:this_.state.positionRight+1
			})
			if (this_.state.positionRight===0) {clearInterval(id)}
		},4)
		}else if(this.state.positionRight===0){
			let id = setInterval(function(){
				this_.setState({
					positionRight:this_.state.positionRight-1
				})
				if (this_.state.positionRight===-100) {clearInterval(id)}
			},4)
		}

	}

	onBack() {
		this.setState({
			display:['none','block']
		})
	}

	onStart(){
		/*let arrCopy = this.state.countries.copy.concat()
		this.setState({
			countries:{
				copy:arrCopy,
				all:[...arrCopy],
			}
		})

			for(let i = 0; i< this.state.checkedContinent.length;i++) {
				//index === i?checked[index] = true:checked[i]=false
				if(this.state.checkedContinent[i]===true){
					let arr = this.state.countries.all[i]
					this.setState({
						countries:{
							all:[...arr],
							copy:arrCopy
						}
					})
				
				}
			}*/
			let arr = this.state.countries.copy.concat()
		function compareRandom(a, b) {
			return Math.random() - 0.5;
		  }
		for(let i = 0; i<this.state.checkedContinent.length;i++) {
			if(this.state.checkedContinent[i]===true){
			this.setState({
				countries:{
					copy:arr,
					all:this.state.countries.all.sort(compareRandom)
				},
				value:[this.state.countries.all[0].country,this.state.countries.all[1].country,
				this.state.countries.all[2].country,this.state.countries.all[3].country].sort(compareRandom),
				valueCapital:[this.state.countries.all[0].capital,this.state.countries.all[1].capital,
				this.state.countries.all[2].capital,this.state.countries.all[3].capital].sort(compareRandom),
				display:['block','none']
			})
		}
	}
}

	onChange(index){
		let className = this.state.className
		if(className[index] != "blok") {
			this.setState({
				className:['blok','blok','blok','blok']
			})
		let bcg = this.state.backgrounds;
		bcg[index] = "white";
		const this_=this;
		this.setState({
			backgrounds:bcg
		})
		new Promise(function(res,rej){
			setTimeout(function(){
				for(let i = 0; i < this_.state.countries.all.length;i++){
						for(let i=0;i<this_.state.value.length;i++) {
							if(this_.state.checkedChangeGame[0]===true?(this_.state.value[i]===this_.state.countries.all[0].country):
							(this_.state.valueCapital[i]===this_.state.countries.all[0].capital)){
								const bcg = this_.state.backgrounds
								bcg[index] = "red";
								bcg[i] = "blue";
								this_.setState({
								backgrounds:bcg
								})
							}
						}
				}
				res(this_.state.countries)
			},2000)
			
			}).then((res)=> new Promise(function(res,rej){
				setTimeout(function(){
					function compareRandom(a, b) {
						return Math.random() - 0.5;
					  }
					let arr = this_.state.countries.all
					let arrCopy = this_.state.countries.copy.concat()
					arr.splice(0,1)
					this_.setState({
						countries:{
							copy:arrCopy,
							all:arr.sort(compareRandom),
						},
						value:[this_.state.countries.all[0].country,this_.state.countries.all[1].country,
						this_.state.countries.all[2].country,this_.state.countries.all[3].country].sort(compareRandom),
						valueCapital:[this_.state.countries.all[0].capital,this_.state.countries.all[1].capital,
						this_.state.countries.all[2].capital,this_.state.countries.all[3].capital].sort(compareRandom),
						backgrounds:["green","green","green","green"],
						className:['unblok','unblok','unblok','unblok']
					})	
					console.log(this_.state.countries.all)
			},4000)
		
		}))
	}
}

	render(){
		return(
			<div>
	<div id="wrap" style={{display:this.state.display[0]}}>
	<div id="blokHealh">
		<div id="health_1"></div>
		<div id="health_2"></div>
		<div id="health_3"></div>
		<span id="textLose">Loses 0/3</span>
	</div>
	<div id="bonuses">
		<div id="biscuit"></div>
		<span id="textBonus">Wins 0/0</span>
	</div>
	
	<h5 id="record">Ваш рекорд:</h5>
	<h3 id="continentName"></h3>
	<h2 id="nameGame"></h2>
	<div id="flag" style={{background:this.state.countries.all[0].flags}}></div>
	<div id="countryName" style={{display:this.state.checkedChangeGame[1]===true?'block':'none'}}>

	{this.state.countries.all[0].country}</div>

	<button id="hint">Подсказка</button>

	<div className={this.state.className} style={{background:this.state.backgrounds[0]}} id="firstChange" onClick={(e)=>this.onChange(0)}>
	{this.state.checkedChangeGame[0]===true?this.state.value[0]:this.state.valueCapital[0]}
	</div>
	<div className={this.state.className} style={{background:this.state.backgrounds[1]}} id="secondChange" onClick={(e)=>this.onChange(1)}>
	{this.state.checkedChangeGame[0]===true?this.state.value[1]:this.state.valueCapital[1]}
	</div>
	<div className={this.state.className} style={{background:this.state.backgrounds[2]}} id="thirdChange" onClick={(e)=>this.onChange(2)}>
	{this.state.checkedChangeGame[0]===true?this.state.value[2]:this.state.valueCapital[2]}
	</div>
	<div className={this.state.className} style={{background:this.state.backgrounds[3]}} id="fourthChange" onClick={(e)=>this.onChange(3)}>
	{this.state.checkedChangeGame[0]===true?this.state.value[3]:this.state.valueCapital[3]}
	</div>

	<button id="goBackFlags" onClick={(e)=>this.onBack()}>Назад</button>
</div>

<div id="wrapStart"  style={{display:this.state.display[1]}}>
	<div id="earth"></div>
	<button id="start" onClick={(e)=>this.onStart()}>ИГРА</button>
	<div>
		<button id="rules">ПРАВИЛА</button>
		<button id="yourRecords">ТАБЛИЦА<br></br>РЕКОРДОВ</button>
	</div>
	<button id="settings" onClick={(e)=>this.onOptions()}>РЕЖИМЫ ИГРЫ</button>
	<button id="back">ПРОДОЛЖИТЬ</button>
	<div id="options" style={{right:`${this.state.positionRight}%`}}>
	<div>
		<input type="radio" id="changeFlags" name="changeGame" defaultChecked={this.state.checkedChangeGame[0]} onChange={(e)=>this.onChangeGame(0)}
		/><span>Флаги</span>
		<input type="radio" id="changeCapitals" name="changeGame" defaultChecked={this.state.checkedChangeGame[1]} onChange={(e)=>this.onChangeGame(1)}
		/><span>Столицы</span> 
		{/*
		<label className="FlagGameBtn" htmlFor="changeFlags">УГАДАТЬ СТРАНУ</label>
		<label className="CapitalGameBtn" htmlFor="changeCapitals">УГАДАТЬ СТОЛИЦУ</label>*/}
	</div>

	<div>
		<input type="radio" id="changeAllContinents" name="continent" data-id="Весь мир" defaultChecked={this.state.checkedContinent[0]}
		onChange={(e)=>this.onChangeContinent(0)}/> <span>Весь мир</span>
		<input type="radio" id="changeAsia" name="continent" data-id="Азия" defaultChecked={this.state.checkedContinent[1]}
		onChange={(e)=>this.onChangeContinent(1)}/> <span>Азия</span>
		<input type="radio" id="changeEurope" name="continent" data-id="Европа" defaultChecked={this.state.checkedContinent[2]}
		onChange={(e)=>this.onChangeContinent(2)}/> <span>Весь мир</span>
		<input type="radio" id="changeAfrica" name="continent" data-id="Африка" defaultChecked={this.state.checkedContinent[3]}
		onChange={(e)=>this.onChangeContinent(3)}/> <span>Африка</span>
		<input type="radio" id="changeSouthAmerica" name="continent" data-id="Южная Америка" defaultChecked={this.state.checkedContinent[4]}
		onChange={(e)=>this.onChangeContinent(4)}/> <span>Южная Америка</span>
		<input type="radio" id="changeNorthAmerica" name="continent" data-id="Северная Америка" defaultChecked={this.state.checkedContinent[5]}
		onChange={(e)=>this.onChangeContinent(5)}/> <span>Северная Америка</span>
		<input type="radio" id="changeOceania" name="continent" data-id="Океания" defaultChecked={this.state.checkedContinent[6]}
		onChange={(e)=>this.onChangeContinent(6)}/> <span>Океания</span>
		{/*<label className="AllWorld"  htmlFor="changeAllContinents">ВЕСЬ МИР</label>
		<label htmlFor="changeAsia"><img className="asia" src={require("./images/asia.png")} alt="asia.png" /></label>
		<label htmlFor="changeEurope"><img className="europe" src={require("./images/europe.png")} alt="europe.png" /></label>
		<label htmlFor="changeAfrica"><img className="africa" src={require("./images/africa.png")} alt="africa.png" /></label>
		<label htmlFor="changeSouthAmerica"><img className="southAmerica" src={require("./images/south_america.png")} alt="south america.png" /></label>
		<label htmlFor="changeNorthAmerica"><img className="northAmerica" src={require("./images/north_america.png")} alt="north america.png" /></label>
		<label htmlFor="changeOceania"><img className="oceania" src={require("./images/australia.png")} alt="australia.png" /></label>*/}
		</div>
	<button id="apply" onClick={(e)=>this.onOptions()}>Применить</button>
</div>
</div>
</div>

		)
	}
}

ReactDOM.render(<Game />, document.getElementById('root'));