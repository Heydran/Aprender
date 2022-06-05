fetch("https://store.steampowered.com/api/appdetails?appids=105600&key=CDD51DAFA10A6B45939EB4EF42952371format=json", {
        mode: 'no-cors'
    })
    .then(jsonString => (JSON.stringify(jsonString)))
    .then(jsonObject => {
        console.log(jsonObject)

    })