document.querySelectorAll("#toggleBtn").forEach((item) =>
        item.addEventListener("click", () => {
          console.log("Hello");
          let navMenu = document.querySelector(".navbar-items");
          navMenu.classList.toggle("navbar-items-responsive");
        })
      );