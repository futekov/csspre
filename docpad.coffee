# DocPad Configuration File
# http://docpad.org/docs/config

moment = require('moment')

# Define the DocPad Configuration
docpadConfig = {
    templateData:
        # SETTINGS
        site:
            title: "CSS PREprocessors"

            description: "CSS Preprocessors - guides, tutorials, reference"

            keywords: "css, preprocessors, preprocessor, less, sass, scss, stylus"

        # FUNCTIONS
        getPreparedTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title

        getPreparedDescription:->
            # if document description exists use it, otherwise use the site's description
            @site.description

        getPreparedKeywords: ->
            # merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or []).join(', ')

        # Post meta
        postDatetime: (date, format="YYYY-MM-DD") -> return moment(date).format(format)
        postDate: (date, format="MMMM DD, YYYY") -> return moment(date).format(format)


    collections:
        pages: (database) ->
            database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1])

        posts: (database) ->
            database.findAllLive({layout:'post'}, [date:-1])

    plugins:
        stylus:
            stylusLibraries:
                nib: false
            stylusOptions:
                compress: true
                'include css': true
}

# Export the DocPad Configuration
module.exports = docpadConfig
