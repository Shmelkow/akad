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

//.ba-team .ba-team-list>.ba-col-3>.ba-team-member>.ba-team-member__img

let baTeamMemberImg = document.querySelectorAll(".ba-team-member__img");
for (let i = 0; i < baTeamMemberImg.length; i++) {
    console.log(baTeamMemberImg.length);
    baTeamMemberImg[i].src = "https://i.dailymail.co.uk/i/pix/2017/04/24/10/3189D6E000000578-4439416-image-a-22_1493026439493.jpg";
}
