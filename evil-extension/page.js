const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See lab spec for details.

  if (node.nodeName === "script" || node.nodeName === "style") {

  } else if (node.nodeName === "#text") {
  const nodeTextArray = node.textContent.split(' ');
    for (let i = 0; i < nodeTextArray.length; i++) {
      if (MATCH_LIST[nodeTextArray[i]] != undefined) {
        nodeTextArray[i] = MATCH_LIST[nodeTextArray[i].trim()];
      }
    }
    node.textContent = nodeTextArray.join(' ');
  }

  for (const childNode of node.childNodes) {
    transformTextNodes(childNode);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('extension updated');
