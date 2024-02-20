import { useEffect } from "react"

const Form = ({ inputText, setInputText, search, setSearch }) => {

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(inputText)
        setInputText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={handleInput} required />
            <button type="submit">Search</button>
        </form>

    )
}

export default Form