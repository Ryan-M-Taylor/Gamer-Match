// can be used to search for specific games and get game information or box art
let clientId = "0zrqm2yzzd044a5bg3wm760e93yy0s";
let clientSecret = "8x3xsvw1hmvfo0vcfo4kctoefjjtp8";

function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

    return fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

async function getGames() {
    const endpoint = "https://api.twitch.tv/helix/search/categories?query=world";

    let authorizationObject = await getTwitchAuthorization();
    let { access_token, expires_in, token_type } = authorizationObject;
    console.log(authorizationObject)

    //token_type first letter must be uppercase    
    token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

    let authorization = `${token_type} ${access_token}`;

    let headers = {
    authorization,
    "Client-Id": clientId,
    };

    fetch(endpoint, {
    headers,
    })
    .then((res) => res.json())
    .then((data) => renderGames(data));
}

function renderGames(data) {
    console.log(data)
    document.body.innerHTML = `
${JSON.stringify(data)}
`;
}

getGames();

