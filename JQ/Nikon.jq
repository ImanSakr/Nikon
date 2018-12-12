$(function() {
var body = $(knowNikonBodyId);
var backgrounds = new Array(
‘url(introduction_image1.png)’,
‘url(introduction_image.png)’
);
var current = 0;

function nextBackground() {
body.css(
‘background’,
backgrounds[current = ++current % backgrounds.length]
);

setTimeout(nextBackground, 1000);
}
setTimeout(nextBackground, 10000);
body.css(‘background’, backgrounds[0]);
});