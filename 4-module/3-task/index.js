function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');

    const age = Number(cells[1].textContent);
    const gender = cells[2].textContent;
    const statusCell = cells[3];

    if (!statusCell.hasAttribute('data-available')) {
      row.hidden = true;
    } else {
      const available = statusCell.dataset.available;

      if (available === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    }

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
