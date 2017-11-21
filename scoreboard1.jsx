// A component called Application
// Components are Propercase (uppercase first letter)
// All components must return a single DOM element. There are no exceptions to this.
function Application(){
	return(
		<div className="scoreboard">
			<h1>MLS Semi-Final Scoreboard</h1>
		</div>
		<div className='teams'>
			<div className='team'>
				<div className='team-name'>Columbus</div>
			<div className='counter'>
				<button className='minus'>-</button>
				<div className='team-score'>0</div>
				<button className='plus'>+</button>
			</div>
			</div>
		</div>
		<div className='teams'>
			<div className='team'>
				<div className='team-name'>Toronto</div>
			<div className='counter'>
				<button className='minus'>-</button>
				<div className='team-score'>0</div>
				<button className='plus'>+</button>
			</div>
			</div>
		</div>
	)
}

// ReactDOM.render puts a component into the DOM.
// It takes 2 args:
// 1. What
// 2. Where

ReactDOM.render(
	<Application />,
	document.getElementById('root')

)