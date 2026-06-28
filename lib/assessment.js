export const categories = [
  { id: 'people', label: 'People' },
  { id: 'product', label: 'Product' },
  { id: 'profit', label: 'Profit' },
  { id: 'planning', label: 'Planning' },
  { id: 'processes', label: 'Processes' },
  { id: 'performance', label: 'Performance' }
];

export const questions = [
  { id: 'people_1', category: 'people', text: 'People understand their roles and what they are accountable for.' },
  { id: 'people_2', category: 'people', text: 'Managers coach employees before problems become recurring issues.' },
  { id: 'people_3', category: 'people', text: 'The business is not overly dependent on a few key people to function.' },
  { id: 'product_1', category: 'product', text: 'Customers receive a consistent experience regardless of who serves them.' },
  { id: 'product_2', category: 'product', text: 'Sales, marketing, delivery, and customer experience are aligned around the same customer promise.' },
  { id: 'product_3', category: 'product', text: 'The business has a clear understanding of its ideal customer and value proposition.' },
  { id: 'profit_1', category: 'profit', text: 'Financial performance is reviewed regularly and connected to operational decisions.' },
  { id: 'profit_2', category: 'profit', text: 'Growth is improving business value rather than simply adding complexity.' },
  { id: 'profit_3', category: 'profit', text: 'The business understands which activities most directly drive margin and cash flow.' },
  { id: 'planning_1', category: 'planning', text: 'The team understands the company purpose, vision, mission, values, and goals.' },
  { id: 'planning_2', category: 'planning', text: 'Priorities are clear enough for people to make better day-to-day decisions.' },
  { id: 'planning_3', category: 'planning', text: 'Leaders have a practical operating rhythm for reviewing progress and adjusting plans.' },
  { id: 'processes_1', category: 'processes', text: 'Important work is documented clearly enough that it can be repeated consistently.' },
  { id: 'processes_2', category: 'processes', text: 'Technology and tools support the way the business should operate.' },
  { id: 'processes_3', category: 'processes', text: 'Knowledge is captured and shared rather than trapped in people’s heads.' },
  { id: 'performance_1', category: 'performance', text: 'The business tracks meaningful indicators, not just activity.' },
  { id: 'performance_2', category: 'performance', text: 'Performance issues are visible early enough to take corrective action.' },
  { id: 'performance_3', category: 'performance', text: 'Managers can connect employee activity to customer and business outcomes.' }
];

export function scoreAssessment(answers) {
  const categoryScores = {};
  for (const category of categories) {
    const categoryQuestions = questions.filter((q) => q.category === category.id);
    const total = categoryQuestions.reduce((sum, question) => sum + Number(answers[question.id] || 0), 0);
    categoryScores[category.id] = Math.round((total / (categoryQuestions.length * 5)) * 100);
  }
  const overall = Math.round(Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / categories.length);
  const lowestCategory = categories.reduce((lowest, category) => {
    if (!lowest) return category;
    return categoryScores[category.id] < categoryScores[lowest.id] ? category : lowest;
  }, null);
  return { overall, categoryScores, lowestCategory, band: getBand(overall) };
}

export function getBand(score) {
  if (score >= 85) return 'High Performing';
  if (score >= 70) return 'Developing Strength';
  if (score >= 55) return 'Vulnerable';
  return 'At Risk';
}
