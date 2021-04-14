function Cache() {
  this.cacheMap = new Map();
}

Cache.prototype.getData = function (key) {
  const val = this.cacheMap.get(key);
  if (val == undefined) {
    return "";
  }
  return val;
};

Cache.prototype.setData = function (key, data) {
  if (key != undefined && data != undefined) {
    this.cacheMap.set(key, data);
    return;
  }
  throw "either key or value is missing";
};

Cache.prototype.clear = function () {
  this.cacheMap.clear();
};

const mycache = new Cache();
mycache.setData("vaibhav", "sharma");

console.log(mycache.getData("vaibhav"));
