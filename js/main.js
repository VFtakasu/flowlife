/* ==========================================
   株式会社フローライフ
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       スクロールフェードイン
    =============================== */

    const targets = document.querySelectorAll(
        ".profile-item, .business-card, .partner-card, .contact-item"
    );

    targets.forEach(target => {
        target.classList.add("hidden");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    targets.forEach(target => observer.observe(target));



    /* ===============================
       スムーズスクロール
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /* ===============================
       ヘッダーメニュー現在位置
    =============================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });



    /* ===============================
       ヘッダー縮小
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("shrink");

        } else {

            header.classList.remove("shrink");

        }

    });

});
