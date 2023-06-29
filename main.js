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

//document get ready
// const site_url = `${window.location}?employerId=28`;
// console.log(site_url);


// const queryParams = new URLSearchParams(site_url.search);
// for (const [key, value] of queryParams.entries()) {
//  console.log(`${key}, ${value}`);
// }



console.log("document is ready let see url ")
const getEmployerDetails =  async (url) => {
console.log("async waiting employer details ")

const searchParams = await new URLSearchParams(url.search);
let userId;

for  (const [key, value] of searchParams.entries()) {
  if (key == 'employer_id') {
    userId = value;
    break;
  }
    console.log("no employer id found");
}

 console.log('userId / employer_id');
 await console.log(userId);

} 



console.log("employer id found")
document.addEventListener("DOMContentLoaded", function() {

    console.log("document is ready now ")
    let app_url = window.location 

    const site_url = `${app_url}?employer_id=28`;
    console.log("site url is ")
    console.log(site_url);

    getEmployerDetails(site_url)
    // get url URLSearchParams
    // var getUrlParameter = function getUrlParameter(sParam) {
    //     var sPageURL = window.location.search.substring(1),
    //         sURLVariables = sPageURL.split('&'),
    //         sParameterName,
    //         i;
    
    //     for (i = 0; i < sURLVariables.length; i++) {
    //         sParameterName = sURLVariables[i].split('=');
    
    //         if (sParameterName[0] === sParam) {
    //             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    //         }
    //     }
    //     return false;
    // };
    let employerId = 28;

  

    
    // for (const [key, value] of queryParams.entries()) {
    //     if (key === 'employerId') {
    //         employerId = +value;
    //         break;
    //     }
    //   }


    //   for (const [key, value] of queryParams.entries()) {
    //     console.log("attempting to get employerId from url")

    //     if (key === 'employerId') {
    //         employerId = +value;
    //         console.log("employer id found")
    //         console.log(employerId)
    //         break;
    //     }
    //   }
     
    //   console.log('type of employerId')
    // console.log(typeof(employerId))
    // console.log('typed cast')
    // console.log(typeof(+employerId))
    // const employer_Id = +employerId;
    // console.log(+employer_Id);
    console.log("this is where the employer actually becomes a number")
    console.log(typeof(employerId))
    const api_url = `https://freedom-green.herokuapp.com/api/getEmployersEmployees/${employerId}`
    // fetch(api_url)

    // .then(res => {
    //     let response = res.data;
    //     console.log(response)
    //     console.log("the employer")
    //     // console.log(response.employer)
    //     // { employer } = response
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    // })




    //    --- end of document ready function-----

  });


const sideMenu = document.querySelector('aside');
const menuButton = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
const addEmployee = document.querySelector('#add_employee');
const employeeModal = document.querySelector('.employee-modal');
const closeEmployeeModal = document.querySelector('#close-employee-modal');
// const inputFirstName = document.querySelector('input#first_name');
// const inputPhone = document.querySelector('input#phone');
// const inputEmail = document.querySelector('input#email');
// let firstNameVal = '';
// let phoneVal = '';
// let emailVal = '';

// inputFirstName.addEventListener('keyup', () => {
// return firstNameVal = inputFirstName.value;
// });



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

// getEmployees();

// add employee
addEmployee.addEventListener('click', () => {
    // alert('add employee');
    employeeModal.style.display = 'block';
});

closeEmployeeModal.addEventListener('click', () => {
    employeeModal.style.display = 'none' ;
 
});

const setOTP = async () => {

    try {


    const url = `https://freedom-green.herokuapp.com/api/setOTP`;
   let res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({ 
          "email": "kojoyeboah@mail.com",
          "zip": 1762,
        
         })
      })

      let data = await res.json();
        console.log(data);
    }catch(err) {
        console.log(err);
    }

    };

    //add style to sendPhone
//     sendPhone.addEventListener('click', () => {
//         alert('send phone');

//     console.log(firstNameVal);
//     // console.log(inputPhone);
//     // console.log(inputEmail);

// // const validateEmail = (email) => {
// //     const re = /\S+@\S+\.\S+/;
// //     return re.test(email);
// // }

// // const validatePhone = (phone) => {
// //     const re = /^[0-9]{10}$/;
// //     return re.test(phone);
// // }
//     });
