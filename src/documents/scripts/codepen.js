$(function() {
  $("[data-csspre]").each(function() {
    var el = $(this),
        id = el.attr('id'),
        ccid = id.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }),
        type = el.data("type"),
        cssPre = el.data("csspre"),
        codeInside = el.find("code"),
        isCodeInside = codeInside.length,
        HTML = "",
        CSS = "",
        JS = "";

    if (type == "css" && codeInside) {
      CSS = codeInside.html();
    }

    var data = {
      title              : "",
      description        : "",
      html               : HTML,
      html_pre_processor : "none",
      css                : CSS,
      css_pre_processor  : cssPre,
      css_starter        : "neither",
      css_prefix_free    : false,
      js                 : JS,
      js_pre_processor   : "none",
      js_modernizr       : false,
      js_library         : "",
      html_classes       : "",
      css_external       : "",
      js_external        : ""
    };

    var JSONstring = 
      JSON.stringify(data)
      // Quotes will screw up the JSON
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    var form = 
      '<form action="http://codepen.io/pen/define" method="POST" target="_blank" name=\'' + ccid + '\'>' + 
        '<input type="hidden" name="data" value=\'' + JSONstring + '\'>' + 
        '<input type="image" src="http://s.cdpn.io/3/cp-arrow-right.svg" width="33" height="33" class="codepen-button" onclick="ga(\'send\', \'event\', \'snippet\', \'click\', \'' + ccid + '\')">' +
      '</form>';

    el.append(form);
  });
});