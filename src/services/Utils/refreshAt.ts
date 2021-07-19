export function refreshAt(time?: any) {
  if (!time) {
    return;
  }
  var now = new Date();
  var timeout = time._seconds * 1000 + 15000 - now.getTime();
  if (timeout > 0) {
    return setTimeout(function () {
      window.location.reload(true);
    }, timeout);
  }
}
