document.addEventListener("DOMContentLoaded", hidefilter);
function hidefilter(){
    document.getElementById("filterContent").style.display = "none";
}

function showFilter(){
    document.getElementById("filterContent").style.display = "block";
}

function showAddNew(){
    document.getElementById("newContent").style.display = "flex";
}

function SetDisplay(Class, Display){
        let Articles = document.getElementsByClassName(Class);
        for (let i = 0; i < Articles.length; i++) {
            if (Display){
                Articles[i].style.display = "block";
            } else {
                Articles[i].style.display = "none";
            }
        }
    }

function filterArticles(){
    let ShowOpinion = document.getElementById("opinionCheckbox").checked;
    let ShowRecipe = document.getElementById("recipeCheckbox").checked;
    let ShowUpdate = document.getElementById("updateCheckbox").checked;

    SetDisplay("opinion", ShowOpinion);
    SetDisplay("recipe", ShowRecipe);
    SetDisplay("update", ShowUpdate);
}

function addNewArticle(){
    let Title = document.getElementById("inputHeader").value;

    let Type = "";
    let Class = "";

    if (document.getElementById("opinionRadio").checked) {
        Type = "Opinion";
        Class = "opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        Type = "Recipe";
        Class = "recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        Type = "Update";
        Class = "update";
    }

    let Text = document.getElementById("inputArticle").value;

    let NewArticle = document.createElement("article");
    NewArticle.className = Class;
    NewArticle.innerHTML = 
        `<span class="marker">${Type}</span>
        <h2>${Title}</h2>
        <p>${Text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>`;

    document.getElementById("articleList").appendChild(NewArticle);
}
