let breadCrumpsItem = document.querySelector(".ba-breadcrumbs__item");

let baBreadCrumbs = document.querySelector(".ba-breadcrumbs");

baBreadCrumbs.append(breadCrumpsItem.cloneNode(true));

let addBreadCrumps = document.querySelector(".ba-breadcrumbs__item:last-child a");

addBreadCrumps.innerText = "company";


//.ba-section-header + .ba-benefits-list>ba-col-4>.ba-benefit>.ba-benefit__title

let baBenefitTitleRed = document.querySelectorAll(".ba-benefit__title");

for (let i = 0; i < 3; i++) {
    baBenefitTitleRed[i].style.color = "red";
}