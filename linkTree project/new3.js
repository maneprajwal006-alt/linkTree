// ========================================
// LINKTREE JAVASCRIPT
// ========================================


// Get HTML elements

const year = document.getElementById("year");

const themeBtn = document.getElementById("themeBtn");

const emailBtn = document.getElementById("emailBtn");

const resumeLink = document.getElementById("resumeLink");

const toast = document.getElementById("toast");



// ========================================
// CURRENT YEAR
// ========================================

year.textContent = new Date().getFullYear();



// ========================================
// DARK / LIGHT MODE
// ========================================

themeBtn.addEventListener("click", function () {

    // Add/remove light class

    document.body.classList.toggle("light");


    // Check current mode

    const isLight =
        document.body.classList.contains("light");


    // Change button icon

    if (isLight) {

        themeBtn.textContent = "🌙";

    } else {

        themeBtn.textContent = "☀️";

    }


    // Save theme

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

});



// ========================================
// LOAD SAVED THEME
// ========================================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}



// ========================================
// EMAIL BUTTON
// ========================================

emailBtn.addEventListener("click", async function () {

    // CHANGE THIS TO YOUR REAL EMAIL

    const email = "maneprajwal006@gmail.com";


    try {

        // Copy email

        await navigator.clipboard.writeText(email);


        // Show notification

        showToast(
            "Email copied: " + email
        );


    } catch (error) {

        // Open email application

        window.location.href =
            "mailto:" + email;

    }

});



// ========================================
// RESUME BUTTON
// ========================================

resumeLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


       alert ("Resume is underprocess ......")

        //const resumeFile = "resume.pdf";


        // Create download link

       // const link =
          //  document.createElement("a");


        //link.href = resumeFile;

        //link.download = resumeFile;


        // Start download

        //link.click();


        // Notification

       // showToast(
           // "Opening your resume..."
       // );

    }
);



// ========================================
// BUTTON CLICK EFFECT
// ========================================

document
    .querySelectorAll(".link-card")
    .forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                card.style.transform =
                    "scale(0.98)";


                setTimeout(function () {

                    card.style.transform = "";

                }, 120);

            }
        );

    });



// ========================================
// TOAST FUNCTION
// ========================================

function showToast(message) {

    toast.textContent = message;


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}