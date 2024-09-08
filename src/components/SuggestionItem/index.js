import './index.css'

const SuggestionItem = (props) => {
    const {item} = props
    const {suggestion} = item

    return (
        <li>
            <p>{suggestion}</p>
            <img src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png' className="arrow-img" alt='arrow-img' />
        </li>
    )
}

export default SuggestionItem