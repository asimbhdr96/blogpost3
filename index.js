const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
const sectionCard = document.querySelector("section");

fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
        const section = data.map(elem => {
            const titleColor = elem.id % 2 === 0 ? 'card-category' : 'card-category2';

            return `<article class="card">
            <div class="card-content">
              <h3 class=${titleColor}>World</h3>
              <h2>${elem.title}</h2>
              <p class="card-date">Nov 12</p>
              <p>${elem.body}</p>
            </div>
            <a href="#">Continue reading</a>
          </article>`
        }).join("");

        sectionCard.innerHTML = section;
    })






