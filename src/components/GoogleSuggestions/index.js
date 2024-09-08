import { Component } from "react";
import SuggestionItem from '../SuggestionItem/index.js'
import './index.css'

class GoogleSuggestions extends Component {
    state = {input:''}

    filterList = (suggestionsList,input) => {
        if (input === '') {
            return suggestionsList;
        }
        const filterList = suggestionsList.filter(each => each.suggestion.includes(input));
        return filterList;
    }

    changeInput = (event) => {        
        this.setState({input:event.target.value})
    }
    

    render() {
        const {input} = this.state
    const {suggestionsList} = this.props
        const list = this.filterList(suggestionsList,input)

        return (
             <div className="bg">
                <img src='https://assets.ccbp.in/frontend/react-js/google-logo.png ' alt="google logo" className="img"/>
                <div className="input-cart">
                <div className="input-container">
                    <img src='https://assets.ccbp.in/frontend/react-js/google-search-icon.png' className="search-img" alt=" search icon"/>
                    <input onChange={this.changeInput} placeholder="Search Google" className="input" type='search' value={input}/>
                </div>
                <ul className="ul">
                    {
                        list.map((each=><SuggestionItem item={each} key={each.id}/>))
                    }
                </ul>
                </div>
             </div>
        )

    }

} 

export default GoogleSuggestions
