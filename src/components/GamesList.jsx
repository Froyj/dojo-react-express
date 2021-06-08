import Game from './Game'
import { useEffect, useState } from "react"
import { getAllGames } from '../utils/api'


export default function GamesList({ games = [] }) {
    const [gamesInfos, setGamesInfos] = useState([])
    useEffect(() => {
        setGamesInfos(getAllGames())
    }, [])

    return (
        <div>
            {games.map(game => <Game gameInfos={game} />)}
        </div>
    );
}