/** ALGOLIA SEARCH */
if ( $('#search-box').html() != undefined )
{

    new Vue({
        el: '#search-box',

        data: {
            'query': '',
            'results': []
        },

        mounted: function () {
            this.algoliaClient = algoliasearch(window.SublimeAlgolia.appId, window.SublimeAlgolia.apiKey);
            this.index = this.algoliaClient.initIndex(window.SublimeAlgoliaSearchField.indexName);

            /** TYPEAHEAD for auto-completion */
            $('#search-box input#query')
                .typeahead(null, {
                    source: this.index.ttAdapter(),
                    displayKey: window.SublimeAlgoliaSearchField.displayKey,
                    templates: {
                        suggestion: function (hit) {
                            return (
                                '<div class="search-suggestion">' +
                                    '<h2>' + hit._highlightResult[window.SublimeAlgoliaSearchField.displayKey]['value'] + '</h2>' +
                                    '<p>' + hit.content.substring(0, 200) + '...</p>' +
                                    '<p> Posted by <a href="' + hit.author_posts_url + '">' + hit.author_name + '</a> in ' + 
                                    '<a href="' + hit.channel_url + '">' + hit.channel_name + '</a></p>' +
                                '</div>'
                            );
                        },
                        header: function (query, suggestions) {
                            return (
                                '<h6 class="search-header"> Suggestions for - <em>' + query.query + '</em></h6>'
                            );
                        }
                    }
                })
                .on('typeahead:select', function (e, suggestion) {
                    this.query = suggestion.title;
                }.bind(this));
        },

        methods: {

            searchNow: function () {
                if (this.query.length >= 3) {
                    this.index.search(this.query, function(error, results) {
                        this.results = results.hits;
                    }.bind(this));
                } else {
                    this.results = [];
                    return;
                }
            },

            cursorUp: function (e) {
                // console.log('Up');
            },

            cursorDown: function (e) {
                // console.log('Down');
            }

        }
    });
}
