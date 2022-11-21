import PropTypes from 'prop-types'
import {SearchFormStyled} from './SearchForm.styled'

export default function SearchForm({onSubmitSearch}) {

return     <SearchFormStyled onSubmit={onSubmitSearch}>
<input 
type="text"
name="movie"
autoComplete="off"
autoFocus
placeholder="Search movies"
/>
<button type="submit">Search</button>
</SearchFormStyled>

}

SearchForm.propTypes = {
    onSubmitSearch: PropTypes.func.isRequired
}