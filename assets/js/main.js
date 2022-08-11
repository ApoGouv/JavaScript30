// Add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarDark");
    } else {
        header.classList.remove("navbarDark");
    }
};

const showcase_project_data = [
    {
        title: "JavaScript Drum Kit",
        url: "#",
        img_url: "",
        desc: "",
    },
];

function buildShowcases(projects = []) {
    const showcase_holder = document.getElementById("showcase_holder");

    return projects.map((project) => {
        const render = `<div class="col-lg-4 mt-4">
          <div class="card">
              <a href="${project.url}" class="showcase_url">
                  <img class="card-img-top" src="${project.img_url}" alt="${project.title}" style="width:100%">
                  <div class="card-body">
                      <h4 class="card-title">${project.title}</h4>
                      <p class="card-text">${project.desc}</p>
                  </div>
              </a>
          </div>
      </div>`;

        showcase_holder.insertAdjacentHTML("beforeend", render);
    });
}

window.onload = buildShowcases(showcase_project_data);
