$(function() {

  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = 1,
      loadNewPostsThreshold = $('.blog__list__wrap').height();

  // Load the JSON file containing all URLs
  $.getJSON('/assets/js/data/all_blog.json', function(data) {


    Array.prototype.groupBy = function(prop) {
      return this.reduce(function(groups, item) {
        var valOb = item[prop];
        groups[valOb] = groups[valOb] || [];
        groups[valOb].push(item);
        return groups;
      }, {});
    };

    if($('.blog__list__wrap').attr('data-category-posts')) {
        var filteredArray = [];
        filteredArray = data["posts"].groupBy('group');
        var catfilter = $('.blog__list__wrap').attr('data-category-posts');

        postURLs = filteredArray[catfilter];
    }else{
      postURLs = data["posts"];
    }

    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad) {
      disableFetching();
    }

    if(postURLs.length > 4) {
      $('#more-post').show();
    }

  });


  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;

  //click more post to load blog
  $('#more-post').click(function(e){
     e.preventDefault();

      if (!shouldFetchPosts || isFetchingPosts) return;

      fetchPosts();

  })

  // Are we close to the end of the page? If we are, load more posts
  // $(window).scroll(function(e){
  //
  //   if (!shouldFetchPosts || isFetchingPosts) return;
  //
  //   var windowHeight = $(window).height(),
  //       windowScrollPosition = $(window).scrollTop(),
  //       bottomScrollPosition = windowHeight + windowScrollPosition,
  //       documentHeight = (($(window).width() > 768) ? ($(document).height() - 100) : ($('#main').height() + 300));
  //
  //   // If we've scrolled past the loadNewPostsThreshold, fetch posts
  //  if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
  //    //console.log(documentHeight - loadNewPostsThreshold +' sdad'+ bottomScrollPosition);
  //     fetchPosts();
  //  }
  // });

  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;

    isFetchingPosts = true;


    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".blog__item").length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;

          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }

          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };

    fetchPostWithIndex(postCount + loadedPosts, callback);
  }

  function fetchPostWithIndex(index, callback) {
    var postURL = postURLs[index];

    $(".infinite-spinner").fadeIn();

    //$.get(postURL, function(data) {

      var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
      var postdate = new Date(postURL.date);
      //var cleantext =  $(postURL.post_content).text();
      var post = '<div class="blog__item">'+
      '<a href="/blog/'+ postURL.url +'/" title="'+ postURL.title +'"><figure class="blog__image"><img src="'+ postURL.image.url_medium +'" alt="'+ postURL.image.alt +'"></figure></a>'+
      '  <div class="blog__heading"><a href="/blog/'+ postURL.url +'/">'+ postURL.title +'</a></div>'+
      '  <div class="blog__info"><span class="blog__date">  <time> '+ month[postdate.getMonth()]+' '+postdate.getDate()+', '+postdate.getFullYear()+' </time> </span> | <a class="blog__category" href="/blog/category/'+ postURL.category.url_friendly_name +'/"> '+postURL.category.title+'</a> </div>'+
    //  '<p>'+ shorten(cleantext, 250, "...", false) +'</p>'+
      '<p>' + postURL.post_content +'</p>'+
      '<div class="btn-holder"><a class="button button--gold" href="/blog/'+ postURL.url +'/">Read More</a></div>'+
      '</div></div>';
     $(post).appendTo(".blog__list__wrap");
     $(".infinite-spinner").fadeOut();
     if ((postURLs.length -1) == index) {
       $('#more-post').hide();
     }
      callback();
  //  });
  }

  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
  }

  function shorten(text, maxLength, delimiter, overflow) {
    delimiter = delimiter || "&hellip;";
    overflow = overflow || false;
    var ret = text;
    if (ret.length > maxLength) {
      var breakpoint = overflow ? maxLength + ret.substr(maxLength).indexOf(" ") : ret.substr(0, maxLength).lastIndexOf(" ");
      ret = ret.substr(0, breakpoint) + delimiter;
    }
    return ret;
  }

});
