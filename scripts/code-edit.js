function getClosest(el, tag) {
  do {
    if (el.nodeName === tag.toUpperCase()) {
      return el;
    }
  } while (el = el.parentNode);
  return null;
}

function getContainerElement() {
  setTimeout(function(){
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
  }, 1);
}

function addonAdd(element, pre, code) {
  if (cssPre == "postcss") {
    addonArray = [];
    list = element.querySelectorAll(".addon a");
    for(var i=0, item; item = list[i]; i++) {
      addonArray.push(
        "@use postcss-" + item.innerText + ";\n"
      );
    };
    return addonArray.join("") + "\n" + cssCode;
  } else {
    return cssCode;
  }
};

// find all code snippets for preprocessors on the page and iterate through them
var codeSnippets = document.querySelectorAll("[data-csspre]:not([data-local])");
for(var i = 0; i < codeSnippets.length; i++){
  // set all variables that CodePen and jsbin need
  var el          = codeSnippets[i]
    , snippetID   = el.getAttribute("id")
    , cssPre      = el.getAttribute("data-csspre")
    , cssAddon    = el.getAttribute("data-addon-name")
    , cssCode     = el.getElementsByTagName("code")[0].innerHTML
    , codePenData = {
        editors            : "0100"
      , html               : "<style>head,head style:first-of-type{display:block;white-space:pre;font:1.2em monospace;padding:0 10px}</style>"
      , css                : addonAdd(el, cssPre, cssCode)
      , css_pre_processor  : cssPre
      }
    , jsFiddleData = {
        panel_html         :  "0"
      , html               :  "<style>head {display:block} head style:first-of-type{display:block;white-space:pre;font:1.2emmonospace}</style>"
      , panel_js           :  "0"
      , js                 :  ""
      , panel_css          :  "1"
      , css                :  cssCode
      , title              :  ""
      , description        :  ""
      , resources          :  ""
      , dtd                :  "html 5"
      , wrap               :  "l"
      }
    , codepenSanitizedData = JSON.stringify(codePenData).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    , stylusSanitizedData = encodeURI(cssCode).replace(/&amp;/g, "%26").replace(/\$/g, "%24").replace(/\=/g, "%3D").replace(/\*/g, "\%2A").replace(/\?/g, "\%3F")
    , jsbinSanitizedData = cssCode.replace(/%/g, "%25")
    ;
  var jsFiddleSanitizedData = "";
  for (var item in jsFiddleData) {
    jsFiddleSanitizedData += "  <input type='hidden' name='" + item + "' value='" + jsFiddleData[item] + "'> \n";
  }
  // build the buttons that will open new tabs in either CodePen.io or jsbin.com with our snippet loaded
  var formCodePen =
    '<form action="https://codepen.io/pen/define" method="post" target="_blank" name=\'' + snippetID + '\'>' +
      '<input type="hidden" name="data" value=\'' + codepenSanitizedData + '\'>' +
      '<input type="image" src="/images/codepen.svg" class="codepen-button" title="Edit this snippet on CodePen" onclick="ga(\'send\', \'event\', \'snippet\', \'click-cdpn\', \'' + snippetID + '\')">' +
    '</form>';
  var formJsBin =
    '<form action="https://jsbin.com/?css,output" method="post" target="_blank" name=\'' + snippetID + '\'>' +
      '<input type="hidden" name=\'' + cssPre + '\' value=\'' + jsbinSanitizedData + '\'>' +
      '<input type="image" src="/images/jsbin.svg" class="jsbin-button" title="Edit this snippet on JS Bin" onclick="ga(\'send\', \'event\', \'snippet\', \'click-jsbin\', \'' + snippetID + '\')">' +
    '</form>';
  var formJsFiddle =
    '<form action="https://jsfiddle.net/api/post/library/pure/" method="post" target="check">' +
      '<input type="image" src="/images/jsfiddle.svg" class="jsfiddle-button" title="Edit this snippet on JSFiddle" onclick="ga(\'send\', \'event\', \'snippet\', \'click-jsfiddle\', \'' + snippetID + '\')">' +
      jsFiddleSanitizedData +
    '</form>';
  var formStylus =
    '<a href="http://stylus-lang.com/try.html#?code=' + stylusSanitizedData + '" target="_blank" onclick="ga(\'send\', \'event\', \'snippet\', \'click-stylus\', \'' + snippetID + '\')">' +
      '<img src="/images/stylus.svg" class="stylus-button" title="Edit this snippet on stylus-lang.com" />' +
    '</a>';

  // append the forms
  el.querySelector(".forms").innerHTML = el.querySelector(".forms").innerHTML + (cssPre == "scss" ? formJsFiddle : "") + (cssPre == "postcss" ? "" : formJsBin) + formCodePen + (cssPre == "stylus" ? formStylus : "");
};

window.addEventListener("mouseup", getContainerElement);
