export function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var doc = document.documentElement;
  var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  var clientTop = doc.clientTop || body.clientTop || 0;
  var clientLeft = doc.clientLeft || body.clientLeft || 0;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft,
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}
//# sourceMappingURL=offset.js.map