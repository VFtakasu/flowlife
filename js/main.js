/* =====================================
   株式会社フローライフ
   main.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       スムーズスクロール
    =============================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                window.scrollTo({

                    top: target.offsetTop - 70,

                    behavior: "smooth"

                });

            }

        });

    });

    /* ===============================
       スクロール時フェードイン
    =============================== */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    sections.forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

});
