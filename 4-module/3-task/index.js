function highlight(table) {
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length === 0) return;

    const age = Number(cells[1].textContent);
    const gender = cells[2].textContent;
    const statusCell = cells[3];

    const availableAttr = statusCell.getAttribute('data-available');

    if (availableAttr === null) {
      row.hidden = true;
    } else if (availableAttr === 'true') {
      row.classList.add('available');
    } else if (availableAttr === 'false') {
      row.classList.add('unavailable');
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
