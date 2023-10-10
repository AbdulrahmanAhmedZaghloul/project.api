let allget = [];
let recipeDetails = {}
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
async function getend(term) {
    let getpromt = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
    allget = await getpromt.json();
    allget = allget.recipes;
    displayrec();
}


function displayrec() {
    let cartoona = ``
    for (let i = 0; i < allget.length; i++) {
        cartoona += `
           
            <div class="py-1 col-md-4" onclick="getDet(${allget[i].recipe_id})">

                <div class="recipe ">
             <img class="w-100" src="${allget[i].image_url}" alt="">
                 <h3 class="color-mine py-1">${allget[i].title}</h3>
                  <p>${allget[i].publisher}</p>
                </div>
            </div>
                `

    }

    document.getElementById('recipesRow').innerHTML = cartoona;
}

async function getDet(id) {
    // window.alert(id)
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    recipeDetails = await apiResponse.json();
    recipeDetails = recipeDetails.recipe;
    console.log(recipeDetails); 

    getcal()
}
function getcal() {

    let cartoona2 = ``;
    for (let x of recipeDetails.ingredients) {
        cartoona2 += ` <li class="d-flex py-1 align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>
        `;
    }
    let cartoona =
        `<div class="recipeDetails py-3">
<h2 class="color-mine py-1"> ${recipeDetails.title}</h2>
<img src="${recipeDetails.image_url}" class="w-100" alt="">
<ul class="fa-ul py-3">
  ${cartoona2}
</ul>
</div>`


    document.getElementById('recipeDetails').innerHTML = cartoona;
}

searchBtn.addEventListener("click", function () {

    getend(searchInput.value);
})

// let allRecipes = [];
// let recipeDetails = {};
// let searchInput = document.getElementById("searchInput");
// let searchBtn = document.getElementById("searchBtn");


// async function getRecipes(term) {
//     let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
//     allRecipes = await apiResponse.json();
//     allRecipes = allRecipes.recipes;
//     displayRecipes();
// }

// function displayRecipes() {
//     let cartoona = ``;

//     for (let i = 0; i < allRecipes.length; i++) {

//         let myId = "'"+allRecipes[i].recipe_id+"'";
//         cartoona += `
//         <div class="col-md-4">
//         <div class="recipe" onclick="getRecipeDetails(${myId})">
//           <img class="w-100" src="${allRecipes[i].image_url}" alt="">
//             <h3 class="color-mine py-1">${allRecipes[i].title}</h3>
//             <p>${allRecipes[i].publisher}</p>
//         </div>

//       </div>

//         ` ;
//     }

//     document.getElementById('recipesRow').innerHTML = cartoona;
// }


// async function getRecipeDetails(id) {

//     let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
//     recipeDetails = await apiResponse.json();
//     recipeDetails = recipeDetails.recipe;
//     displayRecipeDetails();
// }




// function displayRecipeDetails() {

//     let cartoona2 =``;

//     for (let x of recipeDetails.ingredients) {
//         cartoona2 +=` <li class="d-flex py-1 align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>
//         `;
//     }
//     let cartoona = ` <div class="recipeDetials ">
//     <h2 class="color-mine py-1">${recipeDetails.title}</h2>
//     <img src="${recipeDetails.image_url}" class="w-100" alt="">
//     <ul class="fa-ul py-3">
//     ${cartoona2}
//     </ul>
//   </div>`;

//   document.getElementById('recipeDetails').innerHTML = cartoona;

// }


// searchBtn.addEventListener("click", function () {
//     getRecipes(searchInput.value);
// })