# DocPad Configuration File
# http://docpad.org/docs/config

moment = require("moment")
yaml = require("yamljs")
DATA = yaml.load("data.yml")
# Define the DocPad Configuration

docpadConfig = {
  templateData:
    # SETTINGS
    site:
      title: "CSS PREprocessors"

      description: "CSS Preprocessors - preprocessor comparisons and reference guide, play around with all code snippets, explore tools for conversion from/to CSS"

      keywords: "css, preprocessors, preprocessor, less, sass, scss, stylus"

      url: "http://csspre.com"

      github: "https://github.com/futekov/csspre"

      author: "https://plus.google.com/+AlexanderFutekov"

    # Meta information
    getPreparedTitle: -> if @document.title then "#{@document.title} ◩ #{@site.title}" else @site.title

    getPreparedDescription:->
      if @document.description then "#{@document.description}" else @site.description

    getPreparedKeywords: ->
      @site.keywords.concat(@document.keywords or []).join(', ')

    postDatetime: (date, format="YYYY-MM-DD") -> return moment(date).format(format)
    postDate: (date, format="MMMM DD, YYYY") -> return moment(date).format(format)

    # Functions
    tableComparison: (title) ->
      cellIcons = '<svg style="display:none"><defs><path id="available" d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"/><path id="unavailable" d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"/></defs></svg>'
      tableOpen = '<table class="table-content"><caption>' + title + '</caption><thead><tr><th></th><th class="narrow">Less</th><th class="narrow">Sass</th><th class="narrow">Stylus</th></tr></thead><tbody>'
      tableClose = '</tbody></table>'
      setCell = (arg) ->
        if !arg
          '<td class="not-available"><svg width="32" height="32" viewBox="0 0 32 32" role="img"><use xlink:href="#available"/></svg></td>'
        else
          vrsn = ""
          note = ""
          cellClass = "available"
          if arg.version then vrsn = '<span class="required-version">' + arg.version + '+</span>'
          if arg.issues then note = '<span class="note">' + arg.issues + '</span>'
          if arg.issues then cellClass = "partial"
          '<td class="' + cellClass + '">' + vrsn + '<svg width="32" height="32" viewBox="0 0 32 32" role="img"><use xlink:href="#unavailable"/></svg>' + note + '</td>'

      featureGroup = []
      for section of DATA
        featureSingle = []
        for feature of DATA[section]
          currentFeature = DATA[section][feature]
          longDecription = ""
          if currentFeature.description then longDecription = "<p>" + currentFeature.description + "</p>"
          featureSingle.push "<tr><td><strong>" + feature + "</strong>" + longDecription + "</td>" + setCell(currentFeature.less) + setCell(currentFeature.scss) + setCell(currentFeature.stylus) + "</tr>"
        featureGroup.push '<tr><th colspan="4">' + section + '</th></tr>' + featureSingle.join("")

      cellIcons + tableOpen + featureGroup.join("") + tableClose

    code: (arg1, arg2) ->
      feature = DATA[arg1][arg2]
      snippets = []
      columnWidth = 6
      snippetCount = 0
      scssCount = 0
      for prop of feature
        if prop isnt "description"
          ++snippetCount
        if prop.substring(0, 4) is "scss"
          ++scssCount
      columnLastWidth = (if (snippetCount - scssCount) % 2 is 1 then 12 else columnWidth)
      for snippetName of feature
        if snippetName isnt "description"
          vrsn = ""
          lng = ""
          local = ""
          currentSnippet = feature[snippetName]
          columnSize = (if snippetName is "css" then columnLastWidth else columnWidth)
          snippetNameClean = snippetName.replace("-alt", "")
          id = arg1 + "-" + arg2 + "-" + snippetName
          sanitizedId = id.replace(" ", "-").replace /-(.)/g, (g) ->
            g[1].toUpperCase()
          if currentSnippet.local is true
            local = " data-local"
          if snippetName isnt "css"
            lng = "data-csspre='" + snippetNameClean + "'" or ""
            vrsn = " data-version='" + currentSnippet.version + "'" or "" if currentSnippet.version
          sanitizedCode = currentSnippet.code.replace(/\*/g, "&#42;").replace(/\`/g, "&#96;")
          snippets.push(
            '<div class="col-' + columnSize + ' ' + snippetNameClean + '">' +
              '<pre name="' + snippetNameClean + '" id="' + sanitizedId + '" ' + lng + vrsn + ' data-type="css" ' + local + '><code>' +
              sanitizedCode +
              '</code></pre>' +
            '</div>'
          )
      '<div class="grid">' + snippets.join("") + '</div>'

  collections:
    pages: (database) ->
      database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1,standalone:true])

    posts: (database) ->
      database.findAllLive({layout:'post'}, [date:-1,standalone:true])

  plugins:
    ghpages:
      deployRemote: "target"
      deployBranch: "master"
    rss:
      default:
        collection: "posts"
    stylus:
      stylusLibraries:
        nib: false
      stylusOptions:
        compress: true
        "include css": true
    feedr:
      feeds:
        githubRepo:
          url: "https://api.github.com/repos/futekov/csspre"
        githubContributors:
          url: "https://api.github.com/repos/futekov/csspre/contributors"
}

# Export the DocPad Configuration
module.exports = docpadConfig
