function getClosest(el, tag) {
  do {
    if (el.nodeName === tag.toUpperCase()) {
      return el;
    }
  } while (el = el.parentNode);
  return null;
}

function getContainerElement() {
  var containerElement = null;
  var sel = window.getSelection();

  if (typeof sel && sel.toString().length > 0) {
    var node = sel.getRangeAt(0).commonAncestorContainer;
    var containerElement = node.nodeType == 1 ? node : node.parentNode;
    var container = getClosest(containerElement, "pre") || null;
    if (sel.toString().trim().length > 0 && container != null) {
      ga('send', 'event', 'snippet', 'selection', '' + container.getAttribute("id") + '');
    }
  }
}


// find all code snippets for preprocessors on the page and iterate through them
var codeSnippets = document.querySelectorAll("[data-csspre]:not([data-local])");
for(var i = 0; i < codeSnippets.length; i++){
  // set all variables that CodePen needs
  var el          = codeSnippets[i]
    , snippetID   = el.getAttribute("id")
    , cssPre      = el.getAttribute("data-csspre")
    , cssCode     = el.getElementsByTagName("code")[0].innerHTML
    , codeData = {
        title              : ""
      , description        : ""
      , html               : "<style>head,head style:first-of-type{display:block;white-space:pre;font:1.2em monospace;}</style>"
      , html_pre_processor : "none"
      , css                : cssCode
      , css_pre_processor  : cssPre
      , css_starter        : "neither"
      , css_prefix_free    : false
      , js                 : ""
      , js_pre_processor   : "none"
      , js_modernizr       : false
      , js_library         : ""
      , html_classes       : ""
      , css_external       : ""
      , js_external        : ""
      }
    , codepenData = JSON.stringify(codeData).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    , jsbinData = cssCode.replace(/%/g, "%25")
    ;

  // build the buttons that will open new tabs in either CodePen.io or jsbin.com with our snippet loaded
  var formCodePen =
    '<form action="http://codepen.io/pen/define" method="POST" target="_blank" name=\'' + snippetID + '\'>' +
      '<input type="hidden" name="data" value=\'' + codepenData + '\'>' +
      '<input type="image" src="/images/codepen.svg" class="codepen-button" title="Edit this snippet on CodePen" onclick="ga(\'send\', \'event\', \'snippet\', \'click-cdpn\', \'' + snippetID + '\')">' +
    '</form>';
  var formJsBin =
    '<form action="http://jsbin.com/?css,output" method="POST" target="_blank" name=\'' + snippetID + '\'>' +
      '<input type="hidden" name=\'' + cssPre + '\' value=\'' + jsbinData + '\'>' +
      '<input type="image" src="/images/jsbin.svg" class="jsbin-button" title="Edit this snippet on JS Bin" onclick="ga(\'send\', \'event\', \'snippet\', \'click-jsbin\', \'' + snippetID + '\')">' +
    '</form>';
  // append the forms
  el.innerHTML = el.innerHTML + formJsBin + formCodePen;
};

window.addEventListener("mouseup", getContainerElement);
