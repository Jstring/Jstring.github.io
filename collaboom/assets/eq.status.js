$( "nav .right .me p.notifications" ).click(function() { $( "nav .right .me .layer-notifications" ).toggleClass( "active" ); $( "nav .right .me .layer-profile" ).removeClass( "active" ); });

$( "nav .right .me p.profile" ).click(function() { $( "nav .right .me .layer-profile" ).toggleClass( "active" ); $( "nav .right .me .layer-notifications" ).removeClass( "active" ); });

$( ".mask-review" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.review" ).addClass( "active" ); });
$( "#overlay.review .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.review" ).removeClass( "active" ); });
$( "#overlay.review .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.review" ).removeClass( "active" ); });

$( ".mask-moreabout" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.about" ).addClass( "active" ); });
$( "#overlay.about .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.about" ).removeClass( "active" ); });
$( "#overlay.about .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.about" ).removeClass( "active" ); });

$( "#project #slider .slides li img" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.sliderzoom" ).addClass( "active" ); });
$( "#overlay.sliderzoom .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.sliderzoom" ).removeClass( "active" ); });
$( "#overlay.sliderzoom img" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.sliderzoom" ).removeClass( "active" ); });

$( "#project .header .right .button a" ).click(function() { $( this ).toggleClass( "selected" ); });

$( "#upload .used a.add" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.scraps" ).addClass( "active" ); });
$( "#overlay.scraps .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.scraps" ).removeClass( "active" ); });
$( "#overlay.scraps .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.scraps" ).removeClass( "active" ); });


$( "#overlay.scraps li" ).click(function() { $( this ).toggleClass( "selected" ); });

$( "#upload .files .browse" ).click(function() { $( this ).toggleClass( "uploading" ); });

$( "#upload .preview ul li.pic" ).click(function() { $( this ).toggleClass( "selected" ); });

$( "nav a.create" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.create" ).addClass( "active" ); });
$( "#overlay.create .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.create" ).removeClass( "active" ); });
$( "#overlay.create .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.create" ).removeClass( "active" ); });
$( "#overlay.create ul li a.a" ).click(function() { $( this ).toggleClass( "selected" ); $( "#overlay.create ul li a.b"  ).removeClass( "selected" ); });
$( "#overlay.create ul li a.b" ).click(function() { $( this ).toggleClass( "selected" ); $( "#overlay.create ul li a.a"  ).removeClass( "selected" ); });

$( "#project .header a.branch" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.branch" ).addClass( "active" ); });
$( "#overlay.branch .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.branch" ).removeClass( "active" ); });
$( "#overlay.branch .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.branch" ).removeClass( "active" ); });

$( "#upload-confirm .confirm" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.rate" ).addClass( "active" ); });
$( "#overlay.rate .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.rate" ).removeClass( "active" ); });
$( "#overlay.rate .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.rate" ).removeClass( "active" ); });

$( ".secret-popover" ).click(function() { $( "body" ).addClass( "noscroll" ); $( "#overlay.secret" ).addClass( "active" ); });
$( "#overlay.secret .close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.secret" ).removeClass( "active" ); });
$( "#overlay.secret .overlay-close" ).click(function() { $( "body" ).removeClass( "noscroll" ); $( "#overlay.secret" ).removeClass( "active" ); });

$( "#overlay.rate li.a" ).mouseover(function() { $( "#overlay.rate li.a" ).addClass( "selected" ); });

$( "#lobby a.change" ).click(function() { $( "div.change" ).addClass( "active" ); });

$( "#project-sidebar .title a" ).click(function() { $( "#project-sidebar" ).addClass( "hide" ); });
$( "#project-sidebar .title a" ).click(function() { $( "#project" ).addClass( "hide" ); });
$( "#project .show-sidebar" ).click(function() { $( "#project-sidebar" ).removeClass( "hide" ); });
$( "#project .show-sidebar" ).click(function() { $( "#project" ).removeClass( "hide" ); });