window.addEventListener("load",function(){var r=/\.(gif|jpg|jpeg|tiff|png)$/i,t=/^data:image\/[a-z]+;base64,/,i=Array.prototype.slice.call(document.querySelectorAll("img[data-original]"));i.forEach(function(e){var a=e.parentNode;a.tagName==="A"&&(a.href.match(r)||a.href.match(t))&&(a.href=e.dataset.original)})});
