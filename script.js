

const linkfetch = "https://whatyearisit-backend-indol-omega.vercel.app/users/year"


fetch(linkfetch)
.then(response => response.json())
.then(data => {
    document.querySelector('#year').innerHTML+=`
    <p> What's the date to day? hummm... the ${data.Date}</p>
    `
})