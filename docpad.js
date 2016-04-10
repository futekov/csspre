var moment = require("moment");
var yaml = require("yamljs");
var DATA = yaml.load("data.yml");
var fs = require("fs");

function addons(e) {
  if (e) {
    var addonArray = [];
    var addnCount = e.length == 1 ? "an addon" : e.length + " addons";
    for(var i in e) {
      var name = e[i].name;
      var url = e[i].url;
      addonArray.push(
        " <a href='" + url + "' target='_blank'>" + name + "</a>"
      )
    }
    addn = "<div class='addon' title='This code requires " + addnCount + " to work'>" + addonArray + "</div>";
  }
}

(function() {
  fs.readFile("./out/styles/styles.css", "utf8", function (err, data) {GLOBAL.cssContent = data;});
})();

docpadConfig = {
  templateData: {
    site: {
      title: "CSS PREprocessors",
      description: "CSS Preprocessors - preprocessor comparisons and reference guide, play around with all code snippets, explore tools for conversion from/to CSS",
      keywords: "css, preprocessors, preprocessor, less, sass, scss, stylus, postcss",
      url: "http://csspre.com",
      github: "https://github.com/futekov/csspre",
      author: "https://plus.google.com/+AlexanderFutekov"
    },
    cssX: function() {
      return GLOBAL.cssContent;
    },
    getPreparedTitle: function() {
      if (this.document.title) {
        return this.document.title + " ◩ " + this.site.title;
      } else {
        return this.site.title;
      }
    },
    getPreparedDescription: function() {
      if (this.document.description) {
        return this.document.description;
      } else {
        return this.site.description;
      }
    },
    getPreparedKeywords: function() {
      return this.site.keywords.concat(this.document.keywords || []).join(', ');
    },
    postDatetime: function(date, format) {
      if (format == null) {
        format = "YYYY-MM-DD";
      }
      return moment(date).format(format);
    },
    postDate: function(date, format) {
      if (format == null) {
        format = "MMMM DD, YYYY";
      }
      return moment(date).format(format);
    },
    tableComparison: function(title) {
      var cellIcons = '<svg style="display:none"><defs><path id="available" d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"/><path id="unavailable" d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"/></defs></svg>';
      var tableOpen = '<table class="table-content"><caption>' + title + '</caption><thead><tr><th></th><th class="narrow">Less</th><th class="narrow">Sass</th><th class="narrow">Stylus</th><th class="narrow">PostCSS</th></tr></thead><tbody>';
      var tableClose = '</tbody></table>';
      var setCell = function(arg) {
        var cellClass, note, vrsn;
        if (!arg) {
          return '<td class="not-available"><svg width="32" height="32" viewBox="0 0 32 32" role="img"><use xlink:href="#available"/></svg></td>';
        } else {
          addn = "";
          vrsn = "";
          note = "";
          cellClass = "available";
          if (arg.version) {
            vrsn = '<span class="required-version">' + arg.version + '+</span>';
          }
          addons(arg.addons);
          if (arg.issues) {
            note = '<span class="note">' + arg.issues + '</span>';
          }
          if (arg.issues) {
            cellClass = "partial";
          }
          return '<td class="' + cellClass + '">' + vrsn + '<svg width="32" height="32" viewBox="0 0 32 32" role="img"><use xlink:href="#unavailable"/></svg>' + note + addn + '</td>';
        }
      };
      var featureGroup = [];
      for (section in DATA) {
        var featureSingle = [];
        for (feature in DATA[section]) {
          var currentFeature = DATA[section][feature];
          var longDecription = "";
          if (currentFeature.description) {
            longDecription = "<p>" + currentFeature.description + "</p>";
          }
          featureSingle.push("<tr><td><strong>" + feature + "</strong>" + longDecription + "</td>" + setCell(currentFeature.less) + setCell(currentFeature.scss) + setCell(currentFeature.stylus) + setCell(currentFeature.postcss) + "</tr>");
        }
        featureGroup.push('<tr><th colspan="5">' + section + '</th></tr>' + featureSingle.join(""));
      }
      return cellIcons + tableOpen + featureGroup.join("") + tableClose;
    },
    code: function(arg1, arg2) {
      var snippetName;
      var feature = DATA[arg1][arg2];
      var snippets = [];
      for (snippetName in feature) {
        if (snippetName !== "description") {
          addn = "";
          var vrsn = "";
          var lng = "";
          var local = "";
          var currentSnippet = feature[snippetName];
          var snippetNameClean = snippetName.replace("-alt", "");
          var id = arg1 + "-" + arg2.replace(" ", "-") + "-" + snippetName;
          var sanitizedId = id.replace(" ", "-").replace(/-(.)/g, function(g) {
            return g[1].toUpperCase();
          });
          if (currentSnippet.local === true) {
            local = " data-local";
          }
          if (snippetName !== "css") {
            lng = "data-csspre='" + snippetNameClean + "'" || "";
            if (currentSnippet.version) {
              vrsn = " data-version='" + currentSnippet.version + "'" || "";
            }
            addons(currentSnippet.addons);
          }
          var sanitizedCode = currentSnippet.code.replace(/\*/g, "&#42;").replace(/\`/g, "&#96;");
          snippets.push(
            '<div class="col-6 ' + snippetNameClean + '">'
            + '<pre name="' + snippetNameClean + '" id="' + sanitizedId + '" ' + lng + vrsn + ' data-type="css" ' + local + '>'
              + '<code>' + sanitizedCode + '</code><div class="forms"></div>'
              + addn
            + '</pre>'
          + '</div>');
        }
      }
      return '<div class="grid">' + snippets.join("") + '</div>';
    }
  },
  collections: {
    pages: function(database) {
      return database.findAllLive({
        pageOrder: {
          $exists: true
        }
      }, {
          pageOrder: 1,
          title: 1,
          standalone: true
      });
    },
    posts: function(database) {
      return database.findAllLive({
        layout: 'post'
      }, {
        date: -1,
        title: -1,
        standalone: true
      });
    }
  },
  plugins: {
    ghpages: {
      deployRemote: "target",
      deployBranch: "gh-pages"
    },
    rss: {
      "default": {
        collection: "posts"
      }
    },
    stylus: {
      stylusLibraries: {
        nib: false
      },
      stylusOptions: {
        compress: true,
        "include css": true
      }
    }
  }
};

module.exports = docpadConfig;
