import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (event) => {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className='ui segment '>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Search Videos</label>
						<input
							onChange={this.onInputChange}
							type='text'
							value={this.state.term}
							placeholder='Search...'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
