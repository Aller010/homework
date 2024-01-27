class Human {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

class Player extends Human {
    constructor(name, age, sportName, inMainTeam) {
        super(name, age);
        this._sportName = sportName;
        this._inMainTeam = inMainTeam;
    }

    get sportName() {
        return this._sportName;
    }

    get inMainTeam() {
        return this._inMainTeam;
    }
}

class FootballPlayer extends Player {
    constructor(name, age, inMainTeam) {
        super(name, age, 'football', inMainTeam);
    }
}

class Team {
    constructor() {
        this._footballPlayers = [];
    }

    get players() {
        return [...this._footballPlayers];
    }

    addPlayers(...footballPlayers) {
        this._footballPlayers.push(...footballPlayers);
    }

    deletePlayer(footballPlayer) {
        const index = this._footballPlayers.indexOf(footballPlayer);

        if (index !== -1) {
            this._footballPlayers.splice(index, 1);
        }
    }

    getPlayersSortedByName() {
        return [...this._footballPlayers].sort((a, b) => {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();

            if (name1 > name2) return 1;
            if (name1 < name2) return -1;

            return 0;
        });
    }

    getFilteredPlayers(inMainTeam) {
        return this._footballPlayers.filter(player => player.inMainTeam === inMainTeam);
    }
}

const team = new Team();

team.addPlayers(
    new FootballPlayer('Rovshan', 25, false),
    new FootballPlayer('Rauf', 26, true),
    new FootballPlayer('Ibragim', 24, false),
);

team.players[1] = 'HACKED';

const sortedFootballPlayers = team.getPlayersSortedByName();
sortedFootballPlayers[2] = 'HACKED';

for (const footballPlayer of team.players) {
    console.log(footballPlayer);
}