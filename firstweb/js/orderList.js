var root = document.getElementById('root');

function generateHtml() {
  return root.innerHTML;
}

var html = '';
for (var i = 0; i < 5; i++) {
  html += generateHtml();
}

root.innerHTML = html;
