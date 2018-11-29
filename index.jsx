import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';
import {fullCounties,asiaChange,europeChange,africaChange,
		southAmericaChange,northAmericaChange,oceaniaChange} from './countries';
import Game from './game';
import EndGame from './endGame';
import StartPage from './startGame';




class Start extends React.Component {

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
				flagsRecordsPoint:[null,null,null,null,null,null,null], 
				flagsRecordsName:[null,null,null,null,null,null,null],
				capitalsRecordsPoint:[null,null,null,null,null,null,null],
				capitalsRecordsName:[null,null,null,null,null,null,null],
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
			positionRightTable: -100,
			positionLeftRules: -100,	
		};
		this.onChange = this.onChange.bind(this)
		this.onStart = this.onStart.bind(this)
		this.onBack = this.onBack.bind(this)
		this.onChangeContinent = this.onChangeContinent.bind(this)
		this.onChangeGame = this.onChangeGame.bind(this)
		this.onHints=this.onHints.bind(this)
		this.onOptions = this.onOptions.bind(this)
		this.onRecordsTable = this.onRecordsTable.bind(this)
		this.onRules = this.onRules.bind(this)
	}

	componentDidUpdate(){
		
		let local = JSON.stringify(this.state)
		localStorage.setItem('saveGame', local)
}

	componentDidMount(){
		let getRecords = JSON.parse(localStorage.getItem("recordes"))
		if(getRecords!=null){
		this.setState({
			recordes:{
				...getRecords
			}
		})
	}

		let getLocal = JSON.parse(localStorage.getItem("saveGame"))
		this.setState({
			...getLocal
		})
	}

	onAfterCheck(){
		let arr = this.state.countries.all.concat()
		let arrCopy = this.state.countries.copy.concat()
		arr.splice(0,1)
		function compareRandom(a, b) {
			return Math.random()-0.5
		  }
		  arr.sort(compareRandom)
		 let arrSort = [arr[0],arr[1],arr[2],arr[3]];
		  arrSort.sort(compareRandom)
		this.setState({
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
			buttonHint:{
				background:`url(${require('./images/button1.png')}) no-repeat 50% 50%/contain`,
				disabled:false,
			},
		})	

		if(this.state.counts.lose>2 || this.state.counts.win>50) {
			this.setState({
				display:{
					wrap:"none",
					endGame:"block",
					wrapStart:"none"
				}
			})
		}
	}

	onAnimationHints(index) {
		for(let i=0;i<this.state.backgrounds.length;i++){
			this.state.backgrounds[i]=`url(${require('./images/BtnBlkWhtBrdr.png')}) 50% 50%/cover`
			this.state.backgrounds[index]=`url(${require('./images/buttonDblue.png')}) 50% 50%/cover`;
		}
		this.setState({
			backgrounds:this.state.backgrounds
		})
	}

	saveRecords(){
		if(this.state.checkedChangeGame[0]===true){
			for(let i = 0; i<this.state.checkedContinent.length; i++) {
				if(this.state.checkedContinent[i]===true){
					if(+JSON.parse(localStorage.getItem(`Флаги(${this.state.checkedContinentName[i]})`))<this.state.counts.win){
						let recordesFlag = JSON.stringify(this.state.counts.win);
						this.state.recordes.flagsRecordsPoint[i] = this.state.counts.win
						localStorage.setItem(`Флаги(${this.state.checkedContinentName[i]})`,recordesFlag)
						this.state.recordes.flagsRecordsName[i] = `Флаги(${this.state.checkedContinentName[i]})`
					}
				
				}
			}
		}else{for(let i = 0; i<this.state.checkedContinent.length; i++) {
			if(this.state.checkedContinent[i]===true){
				if(+JSON.parse(localStorage.getItem(`Cтолицы(${this.state.checkedContinentName[i]})`))<this.state.counts.win){
					let recordesFlag = JSON.stringify(this.state.counts.win)
					this.state.recordes.capitalsRecordsPoint[i] = this.state.counts.win
					localStorage.setItem(`Столицы(${this.state.checkedContinentName[i]})`,recordesFlag)
					this.state.recordes.capitalsRecordsName[i] = `Столицы(${this.state.checkedContinentName[i]})`
				}
			
			}
		}

	}
	this.setState({
		recordes:{
			...this.state.recordes
		}
	})
	localStorage.setItem(`recordes`,JSON.stringify(this.state.recordes))
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

	onRecordsTable(){
		const this_=this;
		if(this.state.positionRightTable===-100){
		let id = setInterval(function(){
			this_.setState({
				positionRightTable:this_.state.positionRightTable+10
			})
			if (this_.state.positionRightTable===0) {clearInterval(id)}
		},4)
		}else if(this.state.positionRightTable===0){
			let id = setInterval(function(){
				this_.setState({
					positionRightTable:this_.state.positionRightTable-10
				})
				if (this_.state.positionRightTable===-100) {clearInterval(id)}
			},4)
		}

	}

	onRules(){
		const this_=this;
		if(this.state.positionLeftRules===-100){
		let id = setInterval(function(){
			this_.setState({
				positionLeftRules:this_.state.positionLeftRules+10
			})
			if (this_.state.positionLeftRules===0) {clearInterval(id)}
		},4)
		}else if(this.state.positionLeftRules===0){
			let id = setInterval(function(){
				this_.setState({
					positionLeftRules:this_.state.positionLeftRules-10
				})
				if (this_.state.positionLeftRules===-100) {clearInterval(id)}
			},4)
		}

	}

	onOptions() {
		const this_=this;
		if(this.state.positionRight===-100){
		let id = setInterval(function(){
			this_.setState({
				positionRight:this_.state.positionRight+10
			})
			if (this_.state.positionRight===0) {clearInterval(id)}
		},4)
		}else if(this.state.positionRight===0){
			let id = setInterval(function(){
				this_.setState({
					positionRight:this_.state.positionRight-10
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
					this_.onAnimationHints(0)
				}else if (count/10===2||count/10===6||count/10===10||count/10===14||count/10===18) {
					this_.onAnimationHints(1)
				}else if (count/10===3||count/10===7||count/10===11||count/10===15||count/10===19) {
					this_.onAnimationHints(2)
				}else if (count/10===5||count/10===9||count/10===13||count/10===17) {
					this_.onAnimationHints(3)
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
				backgrounds:this_.state.backgrounds,
				counts:{
					...this_.state.counts,
					win:this_.state.counts.win+1
				}
			}))
		},2000)
		}).then((res)=> new Promise(function(res,rej){
			setTimeout(function(){
			this_.onAfterCheck()
			this_.saveRecords()
		},2000)
	
		}))
	}


	onStart(){
		console.log(this.state)
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
									this_.saveRecords()
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
					this_.onAfterCheck()
			},2000)
		
		}))
	}
}

	render(){
		return(
			<div>
<Game {...this.state} onHints={this.onHints} onChange={this.onChange} onBack={this.onBack}/>
<EndGame {...this.state} onStart={this.onStart} onBack={this.onBack} />
<StartPage {...this.state} onOptions={this.onOptions} onChangeContinent={this.onChangeContinent} 
			onChangeGame={this.onChangeGame} onStart={this.onStart} onRecordsTable={this.onRecordsTable} onRules={this.onRules} />


</div>

		)
	}
}

ReactDOM.render(<Start />, document.getElementById('root'));