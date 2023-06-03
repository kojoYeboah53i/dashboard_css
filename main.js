const fetchWeather = async (city) => {
    //get weather data from api
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
      }

      const managerID = 1101;

      // FPL API URL to get manager details
        const url = `https://fantasy.premierleague.com/api/entry/` + managerID + `/history/`

        // const url = `https://fantasy.premierleague.com/api/bootstrap-static/`
    // axios.get(``, {
    //     headers: headers
    // })
    let res  = await axios.get(url, {
        headers: headers
    })

    const data = await  res.data;
    console.log(data);


}

// fetchWeather('London');