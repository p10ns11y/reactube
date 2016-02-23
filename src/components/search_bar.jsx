import React, { Component } from 'react'
import ReactDOM  from 'react-dom'

// const SearchBar = () => {
//   return <input/>  // === React.createElement
// }

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {'term': ''};  // plain js object
  }
  render() {  // single root element with childrens
    return (
      // BAD: this.state.term = event.target.value ! use setState
      // (event) => {this.setState({term: event.target.value})} , single statement can omit {}
      // onChange={this.onInputChange} will pass the event to the function onInputChange
      <div className="search-bar">
        <input

        onChange={event => this.onInputChange(event.target.value)} />
        value of input is : {this.state.term}
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);  // App's state `term` is prop for child SearchBar
  }


}

export default SearchBar;
