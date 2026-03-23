// BEGIN
export default function buildDefinitionList(definitions) {
  if (definitions.length === 0) {
    return '';
  }

  let html = '<dl>';

  for (const item of definitions) {
    html += `<dt>${item[0]}</dt><dd>${item[1]}</dd>`;
  }

  html += '</dl>';

  return html;
}
// END