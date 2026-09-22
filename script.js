document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio loaded successfully!");


    // =========================
    // CONTACT FORM
    // =========================

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            const formData = new FormData(contactForm);

            try {

                const response = await fetch(
                    "https://formsubmit.co/ajax/garimalamichhane456@gmail.com",
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );

                const result = await response.json();

                console.log(result);

                if (response.ok) {
                         alert(
    "💌 Message sent successfully! Thank you! 😊"
);
                    

                    contactForm.reset();

                } else {

                    alert("Message could not be sent.");

                    console.log(result);

                }

            } catch (error) {

                console.log(error);

                alert("Something went wrong. Please try again.");

            }

        });

    }


    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});const interestCards = document.querySelectorAll(".interest-light");

interestCards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.classList.add("active-light");

        setTimeout(function () {

            card.classList.remove("active-light");

        }, 1000);

    });

});
