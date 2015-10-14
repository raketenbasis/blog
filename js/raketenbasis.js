jQuery(document).ready(function() {
    var button = jQuery('button.toggle_comments');
    button.attr('href', 'javascript:void(0);');
    button.click(function(e) {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//raketenbasis.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    });
});