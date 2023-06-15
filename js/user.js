let userUrl="https://jsonplaceholder.typicode.com/users";

function getUser(){
    const id=new URLSearchParams(window.location.search).get("id"); 
    axios.get(`${userUrl}/${id}`)
  .then((response) => {
    let changeDiv=document.getElementById("content");
    const data=response.data;
    let changeHtml=`<div>
                        <h1>${data.name}</h1>
                        <p>${data.username}</p>
                        <p>${data.email}</p>
                        <br>
                        <p>${data.address.street}</p>
                        <p>${data.address.suite}</p>
                        <p>${data.address.city}</p>
                        <p>${data.address.zipcode}</p>
                        <br>
                        <p>${data.phone}</p>
                        <p>${data.website}</p>
                        <p>${data.company.name}</p>
                        <p>${data.company.catchPhrase}</p>
                    </div>`;
    changeDiv.innerHTML=changeHtml;
  });
}

getUser();
