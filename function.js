const now = new Date();
const st = new Date(Date.UTC(now.getFullYear(),0,0));
const dy = 24*3600000;

function yearDay(){
  return Math.floor((now-st)/dy);
}
// only works based off of UTC time, not adjusted for timezones.
