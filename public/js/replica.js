jQuery(function() {

  var socket = new io.Socket();
  socket.connect();
  socket.on("message", function(data) {

    eval(data);

    var $li = $("<li>");
    $li.html(data);
    $li.bind("click", function() {
      eval(data);
    });
    $li.css( { display: "none", cursor: "pointer" } );
    $("div ul").append($li);
    $li.fadeIn();
  });

  $("#command input[type='submit']").bind("click", function() {
    var $input = $("#command input[type='text']");
    socket.send($input.val());
    $input.val("");
  });

  $("h1 a").attr("href", "javascript:" + bookmarklet.toString().split("\n").slice(1, -1).join("\n").replace(/##host##/g, socket.host).replace(/##port##/g, socket.options.port));

  function bookmarklet() {
    (function() {
      var script = document.createElement('script'),
          head = document.getElementsByTagName('head')[0];

      script.type = 'text/javascript';
      script.src = "http://##host##:##port##/socket.io/socket.io.js";

      script.onload = script.onreadystatechange = function() {
        var state = script.readyState;
        if (!state || state === 'loaded' || state === 'complete') {
          script.onload = script.onreadystatechange = null;

          var socket = new io.Socket("##host##", { port: "##port##" });
          socket.connect();
          socket.on("message", function(data) {
            var result = eval(data);
            socket.send(result);
          });

          head.removeChild(script);
        }
      };
      head.appendChild(script);
    })();
  }

});
