'use strict'
(()=> {
    const league = [
        {
        name: "English Premier League",
        region: "England",
        teams: [
            'Manchester City',
            'Liverpool',
            'Chelsea',
            'Manchester United',
            'West Ham'
        ]
        },
        {
        name: 'Bundesliga',
        region: 'Germany',
        teams: [
            'Bayern',
            'Dortmund',
            'Leverkusen',
            'RB Leipzig',
            'SC Freiburg'
        ]
        },
        {
        name: 'Ligue 1',
        region: 'France',
        teams: [
            'PSG',
            'Nice',
            'Marseille',
            'Rennes',
            'Strasbourg'
        ]
        },
        {
            name: 'La Liga',
            region: 'Spain',
            teams: [
                'Real Madrid',
                'Sevilla',
                'Real Betis',
                'Barcelona',
                'Atletico Madrid'
            ]
        },
        {
            name: 'Serie A',
            region: 'Italy',
            teams: [
                'Inter',
                'Napoli',
                'Milan',
                'Juventus',
                'Atalanta'
            ]
        },
        {
            name: 'Liga',
            region: 'Portugal',
            teams: [
                'FC Porto',
                'Benfica',
                'Sporting CP',
                'Braga',
                'Gil Vicente'
            ]
        }
    ];    
    
   //task 1 create array for all teams
   const allTeams = [];
   
   league.forEach(e => {
    e.teams.forEach(team => {
        allTeams.push(team);
    });
   });
   console.log(allTeams);

   //task 2 array of first place teams
   const firstPlace = [];

   league.forEach(e => {
    firstPlace.push(e.teams[0])
   });
   console.log(firstPlace);

   //task 3 array of second place teams
   const secondPlace = [];
   league.forEach(e=>{
    secondPlace.push(e.teams[1]);
   });
   console.log(secondPlace);
   console.log("hello");

   //select the main element where leagues will be placed
    const leaguesContainer = document.querySelector('main')
    //loop through each leahue and build in DOM
    league.forEach(e=> {
        const leagueSection = document.createElement('section')
    leagueSection.classList.add('league');

    const leagueName = document.createElement('h2')
    const region = document.createElement('h3')
    const teamList = document.createElement('ul')

    leagueName.innerText = e.name
    region.innerText = e.region
    

    e.teams.forEach(team => {
        const teamName = document.createElement('li')
        teamName.innerText = team;

        teamList.appendChild(teamName)  
    })
          leagueSection.appendChild(leagueName)
    leagueSection.appendChild(region)
    leagueSection.appendChild(teamList)
    // leaguesContainer.appendChild(leagueSection)
    leaguesContainer.insertAdjacentElement('afterbegin', leagueSection)

    });

    

    // task 4 remove Ligue 1
    const allLeagues = document.querySelectorAll('main section')
    const leaguesArray = Array.from(allLeagues);
    const findLeague = leaguesArray.filter(league => {
        return Array.from(league.children).find(element => element.innerText === 'La Liga')
    })
    const foundLeague = findLeague[0]
    foundLeague.parentElement.removeChild(foundLeague);

    //task 5 add new league to end
    const newLeague = {
        name: 'MLS',
        region: 'North America',
        teams: ['NY Red Bulls', 'DC United', 'Columbus', 'Orlando', 'Philadelphia']

    };

    const newLeagueSection = document.createElement('section');
    newLeagueSection.classList.add('league');

    const newLeagueName = document.createElement('h2');
    const newRegion = document.createElement('h3');
    const newTeamList = document.createElement('ul');

    newLeagueName.innerText = newLeague.name;
    newRegion.innerText = newLeague.region;

    newLeague.teams.forEach(team => {
        const teamName = document.createElement('li');
        teamName.innerText = team;
        newTeamList.appendChild(teamName);
    });

    newLeagueSection.appendChild(newLeagueName);
    newLeagueSection.appendChild(newRegion);
    newLeagueSection.appendChild(newTeamList);
    leaguesContainer.appendChild(newLeagueSection);
    
})()