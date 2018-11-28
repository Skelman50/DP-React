import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';
import {fullCounties,asiaChange,europeChange,africaChange,
		southAmericaChange,northAmericaChange,oceaniaChange,flagsRecordsAllCountries,
		flagsRecordsAsia,flagsRecordsEurope,flagsRecordsAfrica,flagsRecordsSouthAmerica,flagsRecordsNorthAmerica,
		flagsRecordsOceania} from './countries';

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
				all: [fullCounties.concat(),asiaChange.concat(),europeChange.concat(),africaChange.concat(),southAmericaChange.concat(),
				northAmericaChange.concat(),oceaniaChange.concat()],
				copy: [fullCounties.concat(),asiaChange.concat(),europeChange.concat(),africaChange.concat(),southAmericaChange.concat(),
					northAmericaChange.concat(),oceaniaChange.concat()],
			},
			display: {
				wrap:"none",
				wrapStart:"block",
				endGame:"none"
			},
			counts:{
				win:0,
				lose:0
			},
			recordes:{
				flags:[flagsRecordsAllCountries.concat(),
						flagsRecordsAsia.concat(),flagsRecordsEurope.concat(),flagsRecordsAfrica.concat(),flagsRecordsSouthAmerica.concat(),
						flagsRecordsNorthAmerica.concat(),flagsRecordsOceania.concat()],
			},
			buttonHint:{
				background:'',
				disabled:false,
			},
			backgrounds:[`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`,`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`,
						`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`,`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`],
			value:[],
			valueCapital:[],
			className:['unblok','unblok','unblok','unblok'],
			checkedChangeGame:[true,false],
			checkedChangeGameName:['Угадай страну по флагу','Угадай столицу страны'],
			checkedContinent:[true,false,false,false,false,false,false],
			checkedContinentName:["Весь мир","Азия","Европа","Африка","Южная Америка","Северная Америка","Океания"],
			positionRight: -100,	
		};
		this.onChange = this.onChange.bind(this)
		this.onStart = this.onStart.bind(this)
		this.onBack = this.onBack.bind(this)
		this.onChangeContinent = this.onChangeContinent.bind(this)
		this.onChangeGame = this.onChangeGame.bind(this)
	}

	

	onChangeGame(index){
			let checked = this.state.checkedChangeGame;
			for(let i = 0; i< checked.length;i++) {
				index === i?checked[index] = true:checked[i]=false
			}
			this.setState({
				checkedChangeGame:checked
			})
	}

	onChangeContinent(index){
		let checked = this.state.checkedContinent;
			for(let i = 0; i< checked.length;i++) {
				index === i?checked[index] = true:checked[i]=false
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
				positionRight:this_.state.positionRight+4
			})
			if (this_.state.positionRight===0) {clearInterval(id)}
		},4)
		}else if(this.state.positionRight===0){
			let id = setInterval(function(){
				this_.setState({
					positionRight:this_.state.positionRight-4
				})
				if (this_.state.positionRight===-100) {clearInterval(id)}
			},4)
		}

	}

	onBack() {
		this.setState({
			display:{
				wrap:"none",
				wrapStart:"block",
				endGame:"none"
			}
		})
	}

	/*onAnimationHints(index) {
		for(let i=0;i<this.state.backgrounds.length;i++){
			this.state.backgrounds[i]=`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
			this.state.backgrounds[index]=`url(${require('./images/buttonDblue.png')}) 50% 50%/cover`;
		}
		this_.setState({
			backgrounds:this.state.backgrounds
		})
	}*/

	onHints(){
		
		this.setState({
			buttonHint:{
				background:`url(${require('./images/BtnRedWhtBkg.png')}) no-repeat 50% 50%/contain`,
				disabled:true,
				
			},
			className:['blok','blok','blok','blok'],
		})
		const this_=this;
		new Promise(function(res,rej){
			
			let count = 0;
			let id = setInterval(function(){
				count = count + 10
				if (count===200) {
					clearInterval(id);
				}
				if (count/10===1||count/10===4||count/10===8||count/10===12||count/10===16||count/10===20) {
					for(let i=0;i<this_.state.backgrounds.length;i++){
						this_.state.backgrounds[i]=`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
						this_.state.backgrounds[0]=`url(${require('./images/buttonDblue.png')}) 50% 50%/cover`;
					}
					this_.setState({
						backgrounds:this_.state.backgrounds
					})
				}else if (count/10===2||count/10===6||count/10===10||count/10===14||count/10===18) {
					for(let i=0;i<this_.state.backgrounds.length;i++){
						this_.state.backgrounds[i]=`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
						this_.state.backgrounds[1]=`url(${require('./images/buttonDblue.png')}) 50% 50%/cover`;
					}
					this_.setState({
						backgrounds:this_.state.backgrounds
					})
				}else if (count/10===3||count/10===7||count/10===11||count/10===15||count/10===19) {
					for(let i=0;i<this_.state.backgrounds.length;i++){
						this_.state.backgrounds[i]=`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
						this_.state.backgrounds[2]=`url(${require('./images/buttonDblue.png')}) 50% 50%/cover`;
					}
					this_.setState({
						backgrounds:this_.state.backgrounds
					})
				}else if (count/10===5||count/10===9||count/10===13||count/10===17) {
					for(let i=0;i<this_.state.backgrounds.length;i++){
						this_.state.backgrounds[i]=`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
						this_.state.backgrounds[3]=`url(${require('./images/buttonDblue.png')}) 50% 50%/cover`;
					}
					this_.setState({
						backgrounds:this_.state.backgrounds
					})
				}
			},100)
		setTimeout(function(){
			this_.state.backgrounds.map((value,index)=>{
				this_.state.backgrounds[index] = `url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
				if(this_.state.checkedChangeGame[0]===true?(this_.state.value[index]===this_.state.countries.all[0].country):
					(this_.state.valueCapital[index]===this_.state.countries.all[0].capital)){
						this_.state.backgrounds[index] = `url(${require('./images/BtnDgreen.png')}) no-repeat 50% 50%/contain`
						
					}	
			})
			res(this_.setState({
				backgrounds:this_.state.backgrounds
			}))
		},2000)
		}).then((res)=> new Promise(function(res,rej){
			setTimeout(function(){
					let arr = this_.state.countries.all.concat()
					let arrCopy = this_.state.countries.copy.concat()
					arr.splice(0,1)
					function compareRandom(a, b) {
						return Math.random()-0.5
					  }
					  arr.sort(compareRandom)
					 let arrSort = [arr[0],arr[1],arr[2],arr[3]];
					  arrSort.sort(compareRandom)
					this_.setState({
						countries:{
							all:arr,
							copy:arrCopy 
						},
						value:[arrSort[0].country,arrSort[1].country,
						arrSort[2].country,arrSort[3].country],
						valueCapital:[arrSort[0].capital,arrSort[1].capital,
						arr[2].capital,arrSort[3].capital],
						backgrounds:[`url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`,`url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`,
									 `url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`,`url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`],
						
						buttonHint:{
							background:'',
							disabled:false,
						},
						counts:{
							lose:this_.state.counts.lose,
							win:this_.state.counts.win+1
						},
						className:['unblok','unblok','unblok','unblok'],
					})	

					if(this_.state.counts.lose>2 || this_.state.counts.win>50) {
						this_.setState({
							display:{
								wrap:"none",
								endGame:"block",
								wrapStart:"none"
							},
						})
					}
		},2000)
	
		}))
	}

	/*componentDidUpdate(){
		let local = JSON.stringify(this.state)
		localStorage.setItem('saveGame', local)
	}

	componentDidMount(){
		let getLocal = JSON.parse(localStorage.getItem("saveGame"))
		this.setState({
			...getLocal
		})
	}*/

	onStart(){
	let arr = this.state.countries.copy.concat()

		function compareRandom(a, b) {
			return Math.random() - 0.5;
		  }
		for(let i = 0; i<this.state.checkedContinent.length;i++) {
			if(this.state.checkedContinent[i]===true){
			this.setState({
				countries:{
					all:arr[i].sort(compareRandom),
					copy:this.state.countries.copy		
				},
				value:[arr[i][0].country,arr[i][1].country,
				arr[i][2].country,arr[i][3].country].sort(compareRandom),
				valueCapital:[arr[i][0].capital,arr[i][1].capital,
				arr[i][2].capital,arr[i][3].capital].sort(compareRandom),
				display:{
					wrap:"block",
					wrapStart:"none",
					endGame:"none"
				},
				counts:{
					win:0,
					lose:0
				}
			})
		}
	}
}

	onChange(index){
		console.log(this.state.className)
		let className = this.state.className
		if(className[index] != "blok") {
			this.setState({
				className:['blok','blok','blok','blok']
			})
		let bcg = this.state.backgrounds;
		bcg[index] = `url(${require('./images/buttonDblue.png')}) no-repeat 50% 50%/contain`;
		const this_=this;
		this.setState({
			backgrounds:bcg
		})
		new Promise(function(res,rej){
			setTimeout(function(){
						for(let i=0;i<this_.state.value.length;i++) {
							if(this_.state.checkedChangeGame[0]===true?(this_.state.value[i]===this_.state.countries.all[0].country):
							(this_.state.valueCapital[i]===this_.state.countries.all[0].capital)){
								if(index===i) {
									this_.setState({
										counts:{
											win:this_.state.counts.win+1,
											lose:this_.state.counts.lose
										}
									})
								}else{
									this_.setState({
										counts:{
											win:this_.state.counts.win,
											lose:this_.state.counts.lose+1
										}
									})		
								}
								const bcg = this_.state.backgrounds
								bcg[index] = `url(${require('./images/BtnRedWhtBkg.png')}) no-repeat 50% 50%/contain`;
								bcg[i] = `url(${require('./images/BtnDgreen.png')}) no-repeat 50% 50%/contain`;
								this_.setState({
								backgrounds:bcg
								})
							}
						}
				res(this_.state.countries)
		},2000)
			
	})
			.then((res)=> new Promise(function(res,rej){
				setTimeout(function(){
					let arr = this_.state.countries.all.concat()
					let arrCopy = this_.state.countries.copy.concat()
					arr.splice(0,1)
					function compareRandom(a, b) {
						return Math.random()-0.5
					  }
					  arr.sort(compareRandom)
					 let arrSort = [arr[0],arr[1],arr[2],arr[3]];
					  arrSort.sort(compareRandom)
					this_.setState({
						countries:{
							all:arr,
							copy:arrCopy 
						},
						value:[arrSort[0].country,arrSort[1].country,
						arrSort[2].country,arrSort[3].country],
						valueCapital:[arrSort[0].capital,arrSort[1].capital,
						arr[2].capital,arrSort[3].capital],
						backgrounds:[`url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`,`url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`,
									 `url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`,`url("${require("./images/BtnBlkWhtBrdr.png")}") 50% 50% /cover`],
						className:['unblok','unblok','unblok','unblok'],
					})	

					if(this_.state.counts.lose>2 || this_.state.counts.win>50) {
						this_.setState({
							display:{
								wrap:"none",
								endGame:"block",
								wrapStart:"none"
							}
						})
					}
			},2000)
		
		}))
	}
}

	render(){
		return(
			<div>
	<div id="wrap" style={{display:this.state.display.wrap}}>
	<div id="blokHealh">

		<div id="health_1"style=
		{{background:this.state.counts.lose<3?`url(${require('./images/heartGreen.png')}) 50% 50% / 100% 100% no-repeat`:'transparent'}} 
		/>

		<div id="health_2"style=
		{{background:this.state.counts.lose<2?`url(${require('./images/heartYellow.png')}) 50% 50% / 100% 100% no-repeat`:'transparent'}} 
		/>

		<div id="health_3"style=
		{{background:this.state.counts.lose===0?`url(${require('./images/heartRed.png')}) 50% 50% / 100% 100% no-repeat`:'transparent'}} 
		/>

		<span id="textLose">Loses {this.state.counts.lose}/3</span>
	</div>
	<div id="bonuses">
		<div id="biscuit"></div>
		<span id="textBonus">Wins {this.state.counts.win}/0</span>
	</div>
	
	
	{this.state.checkedChangeGame[0]===true?
	this.state.checkedContinent.map((value,index)=>{
		if(value===true){
		return(	<h5 id="record" key={index}>Ваш рекорд: {+JSON.parse(localStorage.getItem(`Флаги(${this.state.recordes.flags[index]})`))}	
			</h5>)
		}
	}):console.log('sadjhasjdbajskdb')
	}


	{this.state.checkedContinent.map((checked,index)=>{
		if(checked===true){
			return(<h3 id="continentName" key={index}>{this.state.checkedContinentName[index]}</h3>)
		}
	})}

	{this.state.checkedChangeGame.map((checked,index) => {
		if(checked===true) {
			return(<h2 id="nameGame" key={index}>{this.state.checkedChangeGameName[index]}</h2>)
		}
	})}

	
	<div id="flag" style={{background:this.state.countries.all[0].flags}}></div>
	<div id="countryName" style={{display:this.state.checkedChangeGame[1]===true?'block':'none'}}>

	{this.state.countries.all[0].country}</div>

	<button id="hint" style={{background:this.state.buttonHint.background}}disabled={this.state.buttonHint.disabled}
		onClick={(e)=>this.onHints()}
	>
	Подсказка</button>

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

<div id ="end" style={{display:this.state.display.endGame}}>

	
	{this.state.counts.win>50?<div id="endText">OMG!!! <br /> You are GENIUS</div>:null}

	{this.state.counts.lose>2?
	<div>

	<div id="endText">GAME OVER</div>
	<div id="loose">ВАШ РЕЗУЛЬТАТ {
		this.state.counts.win
	} {(this.state.counts.win>9&&this.state.counts.win<21)||
		(this.state.counts.win>109&&this.state.counts.win<121)?"БАЛЛОВ":
		this.state.counts.win%10===1?"БАЛЛ":(this.state.counts.win%10 > 1 && this.state.counts.win%10 < 5)?"БАЛЛA":
		'БАЛЛОВ'}</div>

	</div>:null}


	<button id="afterEnd" onClick={(e)=>this.onStart()}>Начать Заново</button>
	<button id="endMenu" onClick={(e)=>this.onBack()}>В меню</button>
</div>

<div id="wrapStart"  style={{display:this.state.display.wrapStart}}>
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