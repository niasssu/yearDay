const now = new Date();
const st = new Date(now.getFullYear(), 0,0);
const dy = 24*3600000;

function yearDay() {
return Math.floor((now-st)/dy);
}
// there is no handling for DST
