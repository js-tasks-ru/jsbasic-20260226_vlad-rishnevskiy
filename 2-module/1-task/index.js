function sumSalary(salaries) {
  return Object.values(salaries)
    .filter(v => typeof v === 'number' && Number.isFinite(v))
    .reduce((sum, v) => sum + v, 0);
    
}
