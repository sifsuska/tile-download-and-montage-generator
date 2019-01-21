function long2tile(lon,zoom) {
  return (Math.floor((lon+180)/360*Math.pow(2,zoom))); 
}
function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }
 
 
function tile2lon(x,z) {
  return (x/Math.pow(2,z)*360-180);
}
function tile2lat(y,z) {
	var n=Math.PI-2*Math.PI*y/Math.pow(2,z);
	return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
}

var BoundingBox = function(x,y,z){
    this.north = tile2lat(y, z);
    this.south = tile2lat(y + 1, z);
    this.west = tile2lon(x, z);
    this.east = tile2lon(x + 1, z);
}