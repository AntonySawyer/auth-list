export default () => {
  const ids = []
  document.querySelectorAll('input[type="checkbox"]:checked:not(#mainCheckbox)').forEach(el =>
    ids.push(el.value));
    return ids;
}