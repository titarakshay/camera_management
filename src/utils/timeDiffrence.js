export function getTimeDiff(datetime) {
  datetime = new Date(datetime).getTime();
  var now = new Date().getTime();
  if (datetime < now) {
    var milisecDiff = now - datetime;
  } else {
    milisecDiff = datetime - now;
  }

  var days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));

  var dateDiff = new Date(milisecDiff);
  var Hours = dateDiff.getHours();
  var Minutes = dateDiff.getMinutes();
  var Seconds = dateDiff.getMinutes();

  if (days) {
    return `${days} Days ago`;
  } else if (Hours) {
    return `${Hours} Hours ago`;
  } else if (Minutes) {
    return `${Minutes} Minutes ago`;
  } else if (Seconds) {
    return "Just Now";
  }
}
