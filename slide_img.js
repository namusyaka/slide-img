onload = function() {
  var d = document, 
  $ = function(id) {
    return d.getElementById(id);
  },
  config = {
    width : $('img_width'),
    height : $('img_height')
  },
  path = length = filename = "",
  s = false,
  
  zero = function(n) {
    var r = n, l = length - String(r).length;
    while(l--)
      r = '0' + r;
    return r
  },
  increase = function(integer_string) {
    return zero(Number(integer_string) + 1)
  },
  decrease = function(integer_string) {
    return zero(Number(integer_string) - 1)
  },
  setAttr = function(target, attr) {
    for(var key in attr)
      target[key] = attr[key];
  }; 
  $('set').onclick = function() {
    path = $('uri').value;
    filename = path.substring(path.indexOf('[') + 1, path.indexOf(']')),
    length = filename.length;
    if(!$('img_slide')) {
      s = true;
      var img = d.createElement('img');
	  setAttr(img, {
        id : 'img_slide',
        src : path.replace(/(\[|\])/g, ''),
        alt : '画像認識できなかった'
      })
      $('slide').appendChild(img);
      target = $('img_slide')
    }
    for(var key in config)
      target[key] = config[key].value;
    }
  $("prev").onclick = function() {
    if(!s)
      return;
    filename = String(decrease(filename));
    target.src = path.replace(/\[[0-9]+?\]/, filename);
  }
  $("next").onclick = function() {
    if(!s)
      return;
    filename = increase(filename);
    target.src = path.replace(/\[[0-9]+?\]/, filename);
  }
}