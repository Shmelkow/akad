"use strict";
let breadCrumpsItem = document.querySelector(".ba-breadcrumbs__item");

let baBreadCrumbs = document.querySelector(".ba-breadcrumbs");

baBreadCrumbs.append(breadCrumpsItem.cloneNode(true));

let addBreadCrumps = document.querySelector(".ba-breadcrumbs__item:last-child a");

addBreadCrumps.innerText = "company";


//.ba-section-header + .ba-benefits-list>ba-col-4>.ba-benefit>.ba-benefit__title

let baBenefitTitleRed = document.querySelectorAll(".ba-benefit__title");

for (let i = 0; i < 3; i++) {
    baBenefitTitleRed[i].style.color = "red";
    baBenefitTitleRed[i].innerText += " | some text";
}

//.ba-team .ba-team-list>.ba-col-3>.ba-team-member>.ba-team-member__img

 let baTeamMemberImg = document.querySelectorAll(".ba-team-member__img");
for (let i = 0; i < baTeamMemberImg.length; i++) {
    baTeamMemberImg[i].src = "https://i.dailymail.co.uk/i/pix/2017/04/24/10/3189D6E000000578-4439416-image-a-22_1493026439493.jpg";
}
//===============================// 
//В акад у всех заголовков h2 дописываем к ним номер по счету

let h2List = document.querySelectorAll("h2");
for (let i = 0; i < h2List.length; i++) {
    h2List[i].innerText += " " + i;
}

//===============================// 
//найти параграф внутри секции бенефита. 
//И для его родительского Элемента навесить класс.

//let baBenefits = document.querySelector(".ba-benefits");

let baInfoTextAdd = document.querySelectorAll(".ba-benefits p");

console.log(baInfoTextAdd);

//[0] пропускаем, т.к. он нам не подходит
for (let i = 1; i < baInfoTextAdd.length; i++) {
    baInfoTextAdd[i].parentElement.parentElement.classList.add("ba-benefit_js");
    console.log(baInfoTextAdd[i].parentElement.parentElement);
}


//===============================// Karl
/*Если в блоке team-member указано имя ‘Enriko’, ‘ENRIKO’, ‘EnRiko’ и 
т.д то у team-member добавить класс team-member__active и этот класс 
должен добавлять красную обводку. */

let baTeamMember = document.querySelectorAll(".ba-team-member");

let baTeamMemberName = document.querySelectorAll(".ba-team-memmber__name a");
console.log(baTeamMemberName);

for (let i = 0; i < baTeamMemberName.length; i++) {
    
    if ( baTeamMemberName[i].innerText.toLowerCase() == 'jurgen' ) {
    
        baTeamMemberName[i].closest(".ba-team-member").classList.add("ba-team-member__active");
    }
}
let baTeamMemberActive = document.querySelectorAll(".ba-team-member__active");
for ( let i = 0; i < baTeamMemberActive.length; i++) {
    baTeamMemberActive[i].style.border = "3px solid red";
}

//===============================//
//Создать новый элемент team-member и вставить его на страницу.

let baTeamList = document.querySelector(".ba-team-list");
console.log(baTeamList);

let baCol3 = document.createElement("div");
baCol3.classList.add("ba-col-3");

let baTeamMemberNew = document.createElement("div");
baTeamMemberNew.classList.add("ba-team-member");

let baTeamMemberInfoNew = document.createElement("div");
baTeamMemberInfoNew.classList.add("ba-team-member__info");

let newImg = document.createElement("img");
newImg.classList.add("ba-team-member__img");
    newImg.src = "images/m5.jpg";
newImg.setAttribute("alt", "Work Hard");

let svgDiv = document.createElement("div");


let baTeamMemberNameNew = document.createElement("h3");
baTeamMemberNameNew.classList.add("ba-team-memmber__name");


let baTeamMemberLink = document.createElement("a");
baTeamMemberLink.setAttribute("href", "mailto:Jurgen@akad.com");
baTeamMemberLink.innerText = "Joseph";

let baTeamMemberPositionNew = document.createElement("p");
baTeamMemberPositionNew.classList.add("ba-team-member__position");
baTeamMemberPositionNew.innerText = "frontend developer";

baTeamMemberInfoNew.append(svgDiv);
baTeamMemberInfoNew.append(baTeamMemberNameNew);
baTeamMemberNameNew.append(baTeamMemberLink);
baTeamMemberInfoNew.append(baTeamMemberPositionNew);
baTeamMemberNew.append(newImg);
baTeamMemberNew.append(baTeamMemberInfoNew);
baCol3.append(baTeamMemberNew);
baTeamList.append(baCol3);

//===============================//
/* Если в блоке ba-team-member__position написано:
- frontend developer, то добавить картинку */ 

let baTeamMemberPosition = document.querySelectorAll(".ba-team-member__position");
let baTeamMemberInfo = document.querySelectorAll(".ba-team-member__info");
console.log(baTeamMemberInfo);

let baTeamMemberInfoSVG = document.querySelectorAll(".ba-team-member__info>div");

let frontendIMG = [],
    backendIMG = [],
    managerIMG = [];// frontendIMG - создаем массив изображений

for (let i = 0; i < baTeamMemberPosition.length; i++) {
    frontendIMG[i] = document.createElement("img");
    frontendIMG[i].src = "https://cdn6.aptoide.com/imgs/0/7/a/07a3a07dcae69acc37f4820671ce4638_icon.png?w=240";
    frontendIMG[i].style.width = "60px";
    frontendIMG[i].style.height = "60px";
    frontendIMG[i].style.margin = "0 auto";

    backendIMG[i] = document.createElement("img");
    backendIMG[i].src = "https://toloshny.com/img/js.svg";
    backendIMG[i].style.width = "60px";
    backendIMG[i].style.height = "60px";
    backendIMG[i].style.margin = "0 auto";

    managerIMG[i] = document.createElement("img");
    managerIMG[i].src = "https://cdn2.iconfinder.com/data/icons/weather-vol-2-7/512/pm-512.png";
    managerIMG[i].style.width = "60px";
    managerIMG[i].style.height = "60px";
    managerIMG[i].style.margin = "0 auto";
}

console.log(baTeamMemberInfoSVG);

for (let i = 0; i < baTeamMemberPosition.length; i++) {
    if (baTeamMemberPosition[i].innerText.toLowerCase() == "frontend developer") {
        baTeamMemberInfo[i].replaceChild(frontendIMG[i], baTeamMemberInfoSVG[i]);
    }
    if (baTeamMemberPosition[i].innerText.toLowerCase() == "backend developer") {
        baTeamMemberInfo[i].replaceChild(backendIMG[i], baTeamMemberInfoSVG[i]);
    }
    if (baTeamMemberPosition[i].innerText.toLowerCase() == "manager") {
        baTeamMemberInfo[i].replaceChild(managerIMG[i], baTeamMemberInfoSVG[i]);
    }
}
