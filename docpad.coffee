# DocPad Configuration File
# http://docpad.org/docs/config

moment = require 'moment'
YAML = require 'yamljs'
# Define the DocPad Configuration

docpadConfig = {
    templateData:
        # SETTINGS
        site:
            title: "CSS PREprocessors"

            description: "CSS Preprocessors - preprocessor comparisons and reference guide, play around with all code snippets, explore tools for conversion from/to CSS"

            keywords: "css, preprocessors, preprocessor, less, sass, scss, stylus"

            url: "http://csspre.com"

            yaml: (YAML.load "src/documents/code-snippets.yml")

        # FUNCTIONS
        getPreparedTitle: -> if @document.title then "#{@document.title} ◩ #{@site.title}" else @site.title

        getPreparedDescription:->
            # if document description exists use it, otherwise use the site's description
            if @document.description then "#{@document.description}" else @site.description

        getPreparedKeywords: ->
            # merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or []).join(', ')

        # Post meta
        postDatetime: (date, format="YYYY-MM-DD") -> return moment(date).format(format)
        postDate: (date, format="MMMM DD, YYYY") -> return moment(date).format(format)

        table: ->
            '<table class="table-content">' +
                '<thead><tr><th></th><th>Less</th><th>Sass</th><th>Stylus</th></tr></thead><tbody>' +
                (for section of @site.yaml
                    '<tr><th colspan="4">' + section + '</th></tr>' + (for feature of @site.yaml[section]
                        object = @site.yaml[section][feature]
                        setCell = (arg) ->
                            if arg == undefined
                                '<td class="not-available"><svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" role="img">><title id="title">Not Available</title><path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"/></svg></td>'
                            else
                                '<td class="available"><svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" role="img">><title id="title">Available</title><path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"/></svg></td>'
                        '<tr><td>' + feature + '</td>' +
                        setCell(object.less) +
                        setCell(object.sass) +
                        setCell(object.stylus) + '</tr>'
                ).join("")
            ).join("") + '</tbody></table>'


        code: (arg1, arg2) ->
            section = @site.yaml[arg1]
            feature = section[arg2]
            snippets = 0
            for prop of feature
                ++snippets if feature.hasOwnProperty(prop)
            snippets
            columnWidth = 6
            columnLastWidth = if snippets % 2 == 1 then 12 else columnWidth
            '<div class="grid">' + (for snippet of feature
                columnSize = if snippet != "css" then columnWidth else columnLastWidth
                snippetClean = snippet.replace("-alt", "")
                lng = if snippet != "css" then "data-csspre='#{snippetClean}'" else ""
                '<div class=\'col-' + columnSize + '\'>' +
                    '<pre name=\'' + snippetClean + '\' ' + lng + ' data-type="css" id=\'' + arg1 + '-' + arg2 + '-' + snippet + '\'><code>' + feature[snippet].code + '</code></pre>' +
                '</div>'
            ).join("") + '</div>'

    collections:
        pages: (database) ->
            database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1,standalone:true])

        posts: (database) ->
            database.findAllLive({layout:'post'}, [date:-1,standalone:true])

    plugins:
        rss:
            collection: "posts"
        stylus:
            stylusLibraries:
                nib: false
            stylusOptions:
                compress: true
                'include css': true
        feedr:
            feeds:
                githubRepo:
                    url: "https://api.github.com/repos/futekov/csspre"
                githubContributors:
                    url: "https://api.github.com/repos/futekov/csspre/contributors"
}

# Export the DocPad Configuration
module.exports = docpadConfig
