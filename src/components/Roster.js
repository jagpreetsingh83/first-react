import React from 'react';
import {Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const PlayerAPI = {
    players: [
        {
            number: 1,
            name: "Ben Blocker",
            position: "G"
        }, {
            number: 2,
            name: "Dave Defender",
            position: "D"
        }, {
            number: 3,
            name: "Sam Sweeper",
            position: "D"
        }, {
            number: 4,
            name: "Matt Midfielder",
            position: "M"
        }, {
            number: 5,
            name: "William Winger",
            position: "M"
        }, {
            number: 6,
            name: "Fillipe Forward",
            position: "F"
        }
    ],
    all: function () {
        return this.players
    },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this
            .players
            .find(isPlayer)
    }
}

const Empty = () => {
    return <i/>;
}

const FullRoster = (props) => {
    return (
        <div>
            <ul>
                {PlayerAPI
                    .all()
                    .map(p => (
                        <li key={p.number}>
                            <Link to={`/roster/${p.number}`}>{p.name}</Link>
                            <Route
                                exact
                                path="/roster/:pid"
                                component={parseInt(props.location.pathname.slice(-1), 10) === p.number
                                ? Player
                                : Empty}/>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

const Player = (props) => {
    const player = PlayerAPI.get(parseInt(props.match.params.pid, 10));
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name}
                (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to="/roster">Back</Link>
        </div>
    )
}

const Roster = () => {
    return (
        <div
            style={{
            backgroundColor: "yellow",
            height: "100%"
        }}>
            <Route path='/roster' component={FullRoster}/>
        </div>
    );
};

export default Roster;