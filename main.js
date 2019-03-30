document.addEventListener('DOMContentLoaded', function () {

    let navLink = document.querySelectorAll(".link");

    for (let i = 0; i < navLink.length; i++) {
        const link = navLink[i];
        const prevlink = navLink[i - 1];
        const nextlink = navLink[i + 1];


        link.addEventListener("click", function () {
            let section = document.querySelector("." + link.id);
            // section.classList.add =`"${link.id} active"`;
            // console.log(section);
            if (link.id === "about") {
                // section.nextElementSibling.classList.remove = "active";
                // section.classList.add = "active";

                link.style.color = "dodgerblue";
                link.style.borderBottom = "1.5px solid salmon";
                nextlink.style.color = "black";
                nextlink.style.borderBottom = "";
                section.nextElementSibling.style.opacity = "0";
                section.nextElementSibling.style.transition = "";
                section.style.opacity = "1";
                section.style.transition = "all 1.5s ease-out";
            } else {
                // section.previousElementSibling.classList.remove = "active";
                // section.classList.add="active";
                prevlink.style.color = "black";
                prevlink.style.borderBottom = "";
                link.style.color = "dodgerblue";
                link.style.borderBottom = "1.5px solid salmon";
                section.previousElementSibling.style.opacity = "0";
                section.previousElementSibling.style.transition = "";
                section.style.opacity = "1";
                section.style.transition = "all 1.5s ease-out";

            }
        })



    }



})