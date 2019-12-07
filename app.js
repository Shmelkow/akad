let breadCrumpsItem = document.querySelector(".ba-breadcrumbs__item");

let baBreadCrumbs = document.querySelector(".ba-breadcrumbs");

baBreadCrumbs.append(breadCrumpsItem.cloneNode(true));

let addBreadCrumps = document.querySelector(".ba-breadcrumbs__item:last-child a");

addBreadCrumps.innerHTML = "company";
