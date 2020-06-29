/* Pour faire fonctionner mon CSS avec webpack */
import "./style.css"

const reponse = fetch("https://jsonplaceholder.typicode.com/users");

reponse
    .then(async res =>{
        console.log(res);
        try{
            const users = await res.json();
            console.log(users);
        } catch(e){
            console.log(e)
        }
    })
    .catch(err => console.log(err));