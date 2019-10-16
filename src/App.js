import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table, Column, Cell} from 'fixed-data-table';


// LAST PAGE - 104

const DEFAULT_QUERY = "redux";
const DEFAULT_HPP = '100';

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  fetchSearchTopStories (searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}
          &${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);

  }

  setSearchTopStories(result) {
    const {hits, pages } = result;
    
    const oldHits = results && results[searchKey]
    ? results[searchkey].hits
    : [] ; 

    const updateHits = [
      ...oldHits,
      ...hits
    ];
    
    this.setState({ 
      results: { 
        ...results,
        [searchKey]: { hits: updatedhits, page}
       } 
    });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState( { searchKey: searchTerm });
    this.fetchSearchtopStories(searchterm);
  }

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectId !== id;
    const updatedHits = this.state.result.hits.filter(isNotid);
    
    this.setState({  
      resultd: { 
        ...results, 
        [searchKey]: { hits: updatedHits, page }
      }
      });
  }

  onSearchSubmit() {
    const { searchTerm } = this.state;
    this.setState( { searchKey: searchTerm});
    this.fetchSearchtopStories(searchTerm);
    event.preventDefault();
  }


  render() {
    const { searchTerm, result } = this.state;
    const page = (result && result.page) || 0;

    // if (!result) {
    //   return null;
    // }

    return (
      <div className="page">
        <div className="interactions">
          <Search 
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
          > Search </Search>
                  {/* If result is true, show table. Else show null. */}
        { result ? 
              <Table
              list={list}
              onDismiss={this.onDismiss}
            /> : null } 
        }
      
            <button onClick={ () => this.fetchSearchTopStories(searchTerm, page + 1)} > 
            More
            </button>
        </div>
      </div>

    );
  }
}

const Search = ({  value, onChange, onSubmit, children }) => 
  (<form onSubmit={onSubmit}> 
  <input type="text" value={value} onChange={onChange} />
  <button type="submit">
    {children} 
  </button>
  </form>)

// COME BACK TO THIS
// const Table = ({ list, onDismiss }) => 
// <div className="table">
//   {list.map(item => ... 
//     )}
// </div>



export default App;
