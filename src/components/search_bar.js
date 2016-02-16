import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="menu">
        <div className="nav-intro">
          <img className="logo" src="img/reacttube-title.png" />
        </div>
        <div className="by">
          <a href="http://mason-fox.com/" className="by">
            <span>Created by</span>
            <div className="chip">
              <img src="img/mason.jpg" alt="Contact Person" />
              Mason Fox
            </div>
          </a>
        </div>
        <nav className="search-nav">
          <div className="nav-wrapper blue">
            <div className="input-field col s12">
              <input id="search" type="search" required
                onChange={event => this.onInputChange(event.target.value)}
                value={this.state.term}
                placeholder="Search Youtube"
              />
              <label htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
