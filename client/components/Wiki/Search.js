import React from 'react'
import axios from 'axios'
import { Snippets } from './Snippets'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWikis } from '../../actions/index'

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {term: ''}
		this.onInputChange = this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	onInputChange(e) {
		this.setState({term: e.target.value})
	}
	onFormSubmit(e) {
		e.preventDefault()
		this.props.fetchWikis(this.state.term)
		this.setState({ term: ''})
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} action="" method="POST">
				<input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search..." />
				<img className="icon" src={require('./magGlass.png')} onClick={this.onFormSubmit} alt="search" width="20px" height="20px" />
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWikis }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)