import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to='/games'>Games List</Link></li>
                <li><Link to='/new-game'>Add a new game</Link></li>
            </ul>
        </div>
    );
}