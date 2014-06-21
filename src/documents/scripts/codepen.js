document.addEventListener('DOMContentLoaded', function() {
  // find all code snippets for preprocessors on the page and iterate through them
  var codeSnippets = document.querySelectorAll("[data-csspre]");
  for(var i = 0; i < codeSnippets.length; i++){
    // set all variables that CodePen needs
    var  el          = codeSnippets[i]
        ,snippetID   = el.getAttribute('id').replace(/-([a-z])/g, function(g){return g[1].toUpperCase();})
        ,cssPre      = el.getAttribute("data-csspre")
        ,cssCode     = el.getElementsByTagName("code")[0].innerHTML
        ,codepenData = {
           title              : ""
          ,description        : ""
          ,html               : ""
          ,html_pre_processor : "none"
          ,css                : cssCode
          ,css_pre_processor  : cssPre
          ,css_starter        : "neither"
          ,css_prefix_free    : false
          ,js                 : ""
          ,js_pre_processor   : "none"
          ,js_modernizr       : false
          ,js_library         : ""
          ,html_classes       : ""
          ,css_external       : ""
          ,js_external        : ""
        }
        ,JSONstring = JSON.stringify(codepenData).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        ;

    // build the button template that will open a new tab with CodePen.io and our snippet
    var form =
      '<form action="http://codepen.io/pen/define" method="POST" target="_blank" name=\'' + snippetID + '\'>' + 
        '<input type="hidden" name="data" value=\'' + JSONstring + '\'>' + 
        '<input type="image" src="//csspre.com/images/codepen-arrow-right.svg" class="codepen-button" onclick="ga(\'send\', \'event\', \'snippet\', \'click\', \'' + snippetID + '\')">' +
      '</form>';

    // append the form
    el.innerHTML = el.innerHTML + form;
  };
});
