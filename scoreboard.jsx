// A component called Application
// Components are Propercase (uppercase first letter)
// All components must return a single DOM element. There are no exceptions to this.

// Application
// -- header
// -- team
// 	-- counter
// -- team
// 	--counter

function Header(props){
	return( 
		<div className='header'>
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className='team'>
			<div className='team-name'>{props.name}</div>
			<div className='counter'>
				<button className='minus'>-</button>
				<div className='team-score'>0</div>
				<button className='plus'>+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title}/>
			<div className='teams'>
				<Team name='Columbus' score='0' />
				<Team name='Toronto' score='0' />
			</div>
		</div>
	)
}

// ReactDOM.render puts a component into the DOM.
// It takes 2 args:
// 1. What
// 2. Where

ReactDOM.render(
	<Application title='MLS Semi-Final Scoreboard'/>,
	document.getElementById('root')

)