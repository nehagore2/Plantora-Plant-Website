// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const open =
            navLinks.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            open ? "true" : "false"
        );

        document.body.classList.toggle(
            "menu-open",
            open
        );

    });


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                document.body.classList.remove(
                    "menu-open"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}



// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



// =====================================================
// ADD TO CART
// =====================================================

let cartCount = 0;


document
    .querySelectorAll(".add-cart")
    .forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            button.textContent =
                "Added ✓";


            setTimeout(() => {

                button.textContent =
                    "Add to cart";

            }, 1300);

        });

    });



// =====================================================
// SHOP FILTER
// =====================================================

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const products =
    document.querySelectorAll(
        ".product-card[data-category]"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            products.forEach(card => {

                if (
                    filter === "all" ||
                    card.dataset.category === filter
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

});



// =====================================================
// CONTACT FORM
// =====================================================

const form =
    document.querySelector(
        ".contact-form form"
    );


if (form) {

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const message =
                document.querySelector(
                    ".form-message"
                );


            if (message) {

                message.textContent =
                    "Thank you! Your message has been received.";

                message.style.color =
                    "#c7ff38";

            }


            form.reset();

        }
    );

}