var moment, yaml, DATA, docpadConfig;

moment = require("moment");
yaml = require("yamljs");
DATA = yaml.load("data.yml");

docpadConfig = {
  templateData: {
    site: {
      title: "CSS PREprocessors",
      description: "CSS Preprocessors - preprocessor comparisons and reference guide, play around with all code snippets, explore tools for conversion from/to CSS",
      keywords: "css, preprocessors, preprocessor, less, sass, scss, stylus",
      url: "http://csspre.com",
      github: "https://github.com/futekov/csspre",
      author: "https://plus.google.com/+AlexanderFutekov"
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
      var cellIcons, currentFeature, feature, featureGroup, featureSingle, longDecription, section, setCell, tableClose, tableOpen;
      cellIcons = '<svg style="display:none"><defs><path id="available" d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"/><path id="unavailable" d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"/></defs></svg>';
      tableOpen = '<table class="table-content"><caption>' + title + '</caption><thead><tr><th></th><th class="narrow">Less</th><th class="narrow">Sass</th><th class="narrow">Stylus</th></tr></thead><tbody>';
      tableClose = '</tbody></table>';
      setCell = function(arg) {
        var cellClass, note, vrsn;
        if (!arg) {
          return '<td class="not-available"><svg width="32" height="32" viewBox="0 0 32 32" role="img"><use xlink:href="#available"/></svg></td>';
        } else {
          vrsn = "";
          note = "";
          cellClass = "available";
          if (arg.version) {
            vrsn = '<span class="required-version">' + arg.version + '+</span>';
          }
          if (arg.issues) {
            note = '<span class="note">' + arg.issues + '</span>';
          }
          if (arg.issues) {
            cellClass = "partial";
          }
          return '<td class="' + cellClass + '">' + vrsn + '<svg width="32" height="32" viewBox="0 0 32 32" role="img"><use xlink:href="#unavailable"/></svg>' + note + '</td>';
        }
      };
      featureGroup = [];
      for (section in DATA) {
        featureSingle = [];
        for (feature in DATA[section]) {
          currentFeature = DATA[section][feature];
          longDecription = "";
          if (currentFeature.description) {
            longDecription = "<p>" + currentFeature.description + "</p>";
          }
          featureSingle.push("<tr><td><strong>" + feature + "</strong>" + longDecription + "</td>" + setCell(currentFeature.less) + setCell(currentFeature.scss) + setCell(currentFeature.stylus) + "</tr>");
        }
        featureGroup.push('<tr><th colspan="4">' + section + '</th></tr>' + featureSingle.join(""));
      }
      return cellIcons + tableOpen + featureGroup.join("") + tableClose;
    },
    code: function(arg1, arg2) {
      var columnLastWidth, columnSize, columnWidth, currentSnippet, feature, id, lng, local, prop, sanitizedCode, sanitizedId, scssCount, snippetCount, snippetName, snippetNameClean, snippets, vrsn;
      feature = DATA[arg1][arg2];
      snippets = [];
      columnWidth = 6;
      snippetCount = 0;
      scssCount = 0;
      for (prop in feature) {
        if (prop !== "description") {
          ++snippetCount;
        }
        if (prop.substring(0, 4) === "scss") {
          ++scssCount;
        }
      }
      columnLastWidth = ((snippetCount - scssCount) % 2 === 1 ? 12 : columnWidth);
      for (snippetName in feature) {
        if (snippetName !== "description") {
          vrsn = "";
          lng = "";
          local = "";
          currentSnippet = feature[snippetName];
          columnSize = (snippetName === "css" ? columnLastWidth : columnWidth);
          snippetNameClean = snippetName.replace("-alt", "");
          id = arg1 + "-" + arg2 + "-" + snippetName;
          sanitizedId = id.replace(" ", "-").replace(/-(.)/g, function(g) {
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
          }
          sanitizedCode = currentSnippet.code.replace(/\*/g, "&#42;").replace(/\`/g, "&#96;");
          snippets.push('<div class="col-' + columnSize + ' ' + snippetNameClean + '">' + '<pre name="' + snippetNameClean + '" id="' + sanitizedId + '" ' + lng + vrsn + ' data-type="css" ' + local + '><code>' + sanitizedCode + '</code></pre>' + '</div>');
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
