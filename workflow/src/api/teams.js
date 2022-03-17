export async function getTeams() {
    const response = await fetch("http://localhost:3004/teams");
    const data = await response.json();
    return data;
}

export async function addTeam(credentials){
    const response = await fetch("http://localhost:3004/teams/",{
        method : "POST",
        credentials: 'include',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: credentials.name,
            description: credentials.description,
            cover: credentials.cover
        })
    })
    const data = await response.json();
    return data;
}

