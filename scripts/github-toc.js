(function ($) {
    
    $('#wiki-body .markdown-body').prepend("<div id='toc'><div>");
    $('#wiki-body .markdown-body').addClass('toc-mian-body')
    
    $('article.markdown-body').prepend("<div id='toc'><div>");
    $('article.markdown-body').addClass('toc-mian-body')

    $('#toc').toc({
      'selectors': 'h1,h2,h3,h4,h5,h6', //elements to use as headings
      'container': '.markdown-body.toc-mian-body', //element to find all selectors in
      'smoothScrolling': true, //enable or disable smooth scrolling on click
      'prefix': 'toc', //prefix for anchor tags and class names
      'onHighlight': function(el) {}, //called when a new section is highlighted 
      'highlightOnScroll': true, //add class to heading that is currently in focus
      'highlightOffset': 500, //offset to trigger the next headline
      
      'headerText': function(i, heading, $heading) { //custom function building the header-item text
          var rank = $heading.prop("tagName").substr(1)
          return "¡ñ"/* chinese huge dot */ + $heading.text(); 
      },
    });

    $('.markdown-body.toc-mian-body').prepend("<h2>Table of Contents</h2>");

})(jQuery);

