fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('cardContainer');

    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="card-body">
          <h3>${project.title}</h3>
          <div class="date">${project.date}</div>
          <a href="${project.sheet}" target="_blank">Open Sheet</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Failed to load projects.json:", error);
    document.getElementById('cardContainer').innerText = "Failed to load projects.";
  });
