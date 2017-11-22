// Dumb component or PRESENTATIONAL or PURE FUNCTION - It doesn't care what the rest of the application is doing
// it will ALWAYS return the same X, given the same Y.
// SMART or STATEFUL component - Cares what's going at an Application level.
// The same X, will return a different Y, based on the state of the application.

// creaceClass is a halper method that allows you to create a 'class' in es5.
// It takes an object, objects have properties.
// The only rule for these properties is it MUST HAVE a render function

// ES5 way, you will hardly see it but you will see it
// it was awesome. in 2015
// var CoinFlip = React.createClass({
// 	render: function(){
// 		return(
// 			<h1>Sanity Check</h1>
// 		)
// 	}
// })





// This is a smart component. Dumb components (we will still make them)
// do NOT need the class syntax
class CoinFlip extends React.Component{
	// FIrst thing that comes in any new class
	constructor(props){
		// this is a child class of the React.Component class
		// we MUST call super to use it
		super();
		// this.test = 'This is a test class property';
		// Nothing special about title, React does not care about it at all
		this.title = props.title;
		this.coin = [
		'twoface-heads.png',
		'twoface-tails.png'
		]
		// State is special. React cares. A lot
		this.state = {
			image: 'twoface-heads.png'
		}
		this.flipCoin = this.flipCoin.bind(this);
	}

	flipCoin(){
		console.log('flip coin ran');
		// we are going to change this.state.
		// Listen.
		// Really, listen
		// WE NEVER CHANGE STATE DIRECTLY.
		// Everytime state changes, React will call render
		var coinSide = (Math.round(Math.random()));
		this.setState({
			image: this.coin[coinSide]
		})
	}

	// The one function we MUST have in a component is...
	render(){
		// render MUST return a single DOM element.
		return(
			<div className='coin-flip'>
				<h1>{this.title}</h1>
				<div>
					<button onClick={this.flipCoin}>Click to Flip the Coin</button>
					<img src={this.state.image} />
				</div>
			</div>


		)
	}
}



ReactDOM.render(
	<CoinFlip title='Flip the Coin...If You Dare...' heads='twoface-heads.png' talis='twoface-tails.png'/>,
	document.getElementById('root')
)	

function sum(a,b){
	return a+b;
}