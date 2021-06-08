import GENRES from '../constants/genres'

export default function GameForm() {
    return (
        <form>
            <label>
                Name
                <input type='text' />
            </label>
            <label>
                Rating
                <input type='text' />
            </label>
            <label>
                Image URL
                <input type='text' />
            </label>
            <label>
                <select>
                    <option></option>
                    {GENRES.map(genre => <option value={genre.toLowerCase()}>{genre}</option>)}
                </select>
            </label>
            <input type="submit" value='Add'/>
        </form>
    )
}