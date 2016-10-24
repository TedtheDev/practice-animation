
window.onload = function () {
  const s = Snap("#iconDiv");
	Snap.load("./SVGs/icon.svg", onSVGLoaded);
/*
  function(f) {
              whiteRect = f.select("#whiteRect");
              icon = f.select("#icon");
              icon.hover(function() {
			whiteRect.animate({y:960}, 500, mina.elastic);
              },
                         function() {
			whiteRect.animate({y:977.36218}, 500, mina.elastic);
		});
	s.append(f);
	});
};
*/
function onSVGLoaded( data ){
    s.append( data );
}
