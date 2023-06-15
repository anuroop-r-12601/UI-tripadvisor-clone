function addGradItems(jsonFile, className){
fetch(`../js/${jsonFile}`).then(async (resp) => {
    const gridList = await resp.json();
    let changeDiv=document.getElementsByClassName(className)[0];
    let changeHtml=``;
    // console.log(gridList.data)
    for(let item of gridList.data){
        changeHtml+=   `<div class="grad-grid-item">
                        <img src="../assets/${item.imgPath}">
                        <p class="grad-grid-title">${item.text}</p>
                    </div>`;
    }
    changeDiv.innerHTML=changeHtml;

  });
}

addGradItems("cats.json","categories-grid");
addGradItems("getaways.json","getaways-grid");
addGradItems("destinations.json","destinations-grid");

function addRatingItems(jsonFile, className){
    fetch(`../js/${jsonFile}`).then(async (resp) => {
        const gridList = await resp.json();
        let changeDiv=document.getElementsByClassName(className)[0];
        let changeHtml="";
        let rating="";
        // console.log(gridList.data)
        for(let item of gridList.data){
            rating='<span class="material-icons">circle</span>'.repeat(Math.trunc(item.rating));
            if((item.rating%1) !=0)
                rating+='<span class="material-icons">nightlight</span>';
            changeHtml+=   `<div class="rating-grid-item">
                                <div class="rating-grid-img">
                                    <img src="../assets/${item.imgPath}">
                                </div>
                                <a href="#" class="rating-grid-title">${item.text}</a><br>
                                ${rating}
                                <span class="review-amt">${item.reviews}</span><br>
                                <p class="rating-grid-cost">from &#x20B9 ${item.cost} per adult</p>
                            </div>`;
        }
        changeDiv.innerHTML=changeHtml;
    
      });
    }
addRatingItems("travel.json","tour-grid");


// AXIOS CALLS

let userUrl="https://jsonplaceholder.typicode.com/users";

function getUsers(){
    axios.get(userUrl)
  .then((response) => {
    let changeDiv=document.getElementsByClassName("user-grid")[0];
    let changeHtml="";
    for(let item of response.data){
        changeHtml+=   `
        <button class="user-grid-item" data-id=${item.id}>${item.name}</button>`;
    }
    changeDiv.innerHTML=changeHtml;
    const userItems = document.querySelectorAll('.user-grid-item');
console.log(userItems)
userItems.forEach(user => {
    user.addEventListener('click', () => {
        const id = user.getAttribute('data-id');
        window.open(`user.html?id=${id}`)
    });
});
  });
}

getUsers();

