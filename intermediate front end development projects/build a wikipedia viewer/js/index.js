    function searchWiki() {
      var searchtxt = $("#searchinput").val();
      
      if (!searchtxt) {
        $("#articles").html("You cannot search with empty input");
        return;
      }
      
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
          action: 'query',
          format: 'json',
          prop: 'extracts',
          exchars: '200',
          exlimit: 'max',
          explaintext: 'true',
          exintro: 'true',
          pilimit: 'max',
          rawcontinue: '',
          generator: 'search',
          gsrsearch: searchtxt,
          gsrnamespace: '0',
          gsrlimit: '10'
        },
        success: function(results) {
          var articles = results.query.pages;
          for (var page in articles) {
            var article = "";
            article += '<h4 class="child">' + articles[page].title + "<br />" + 
            '<a href="https://en.wikipedia.org/wiki/?curid=' + articles[page].pageid + '" target="_blank">' + articles[page].extract + "</a></h4>";
            $("#articles").append(article);
          }
        }
      });
    }