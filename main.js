// const fetchWeather = async (city) => {
//     //get weather data from api
//     const headers = {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*', // Required for CORS support to work
//         'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
//       }

//       const managerID = 1101;

//       // FPL API URL to get manager details
//         const url = `https://fantasy.premierleague.com/api/entry/` + managerID + `/history/`

//         // const url = `https://fantasy.premierleague.com/api/bootstrap-static/`
//     // axios.get(``, {
//     //     headers: headers
//     // })
//     let res  = await axios.get(url, {
//         headers: headers
//     })

//     const data = await  res.data;
//     console.log(data);


// }

// fetchWeather('London');


const sideMenu = document.querySelector('aside');
const menuButton = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

menuButton.addEventListener('click', () => {
    sideMenu.style.display = 'block' ;
});

closeButton.addEventListener('click', () => {
    sideMenu.style.display = 'none' ;
});

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
});


const getEmployees = async () => {
    const url = `https://freedom-green.herokuapp.com/api/getEmployersEmployees/5`;
    let res  = await axios.get(url)
    const employees = await  res.data.employees;
    console.log(employees);
    
    employees.forEach(employee => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${employee.department}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.job_title}</td>
            <td class="${employee.verified === false ?  'danger' :  employee.verified === true ? 'primary' : 'warning' }">
            ${employee.verified}</td>
        `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    });
}

getEmployees();