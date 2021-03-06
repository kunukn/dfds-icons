var _DFDS_ = _DFDS_ || {};
_DFDS_.icons = (function () {

  function load(props) {
    var path = props && props.path;
    var callback = props && props.callback;

    var ajax = new XMLHttpRequest();
    ajax.onload = function (e) {
      if (ajax.status === 200) {
        var div = document.createElement("div");
        div.style.display = 'none';
        div.className = 'svg-in-the-dom';
        div.innerHTML = ajax.responseText;
        document
          .body
          .insertBefore(div, document.body.childNodes[0]);
      }
      callback && callback(ajax);
    }
    ajax.open("GET", path || "https://unpkg.com/@kunukn/dfds-icons/files/main/icons.svg", true);
    ajax.send();
  };

  try {
    var css = 'dfds-main-icons-manual-load';
    if (!document.body.classList.contains(css) && !document.documentElement.classList.contains(css)) {
      load();
    }
  } catch(err) {}

  function icons(){}

  icons = load;
  icons.load = icons;

  return icons;

})();
