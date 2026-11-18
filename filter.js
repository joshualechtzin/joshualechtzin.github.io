const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const normalize = (text) => text.trim().toLowerCase();

// Read each card's tags once and store them on the card
cards.forEach((card) => {
  const tags = [...card.querySelectorAll('.tags li')].map((li) => normalize(li.textContent));
  card.dataset.tags = tags.join('|');
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = normalize(button.dataset.filter);

    buttons.forEach((b) => {
      const isActive = b === button;
      b.classList.toggle('is-active', isActive);
      b.setAttribute('aria-pressed', isActive);
    });

    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.tags.split('|').includes(filter);
      card.hidden = !matches;
    });
  });
});