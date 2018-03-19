var time = 5;
var wolk1 = document.getElementById("wolk1");
var wolk2 = document.getElementById("wolk2");
var wolk3 = document.getElementById("wolk3");
var maan = document.getElementById("maan");
var planeetRood = document.getElementById("planeetrood");
var planeetPaars = document.getElementById("planeetpaars");


var tl = new TimelineMax({repeat:-1});
    tl.from(wolk1, time, {css: {left: "-1000px"}, ease:Linear.easeNone})
    .to(wolk1, time, {css: {left: "5000px"}, ease:Linear.easeNone});

time = 4;

var tl = new TimelineMax({repeat:-1});
    tl.from(wolk2, time, {css: {left: "-1000px"}, ease:Linear.easeNone})
    .to(wolk2, time, {css: {left: "5000px"}, ease:Linear.easeNone});


time = 3;

var tl = new TimelineMax({repeat:-1});
    tl.from(wolk3, time, {css: {left: "-1000px"}, ease:Linear.easeNone})
    .to(wolk3, time, {css: {left: "5000px"}, ease:Linear.easeNone});

//nacht 

var tl = new TimelineMax({repeat:-1});
    tl.from(maan, time, {css: {left: "-1000px"}, ease:Linear.easeNone})
    .to(maan, time, {css: {left: "5000px"}, ease:Linear.easeNone});

time = 4;

var tl = new TimelineMax({repeat:-1});
    tl.from(planeetRood, time, {css: {left: "-1000px"}, ease:Linear.easeNone})
    .to(planeetRood, time, {css: {left: "5000px"}, ease:Linear.easeNone});


time = 3;

var tl = new TimelineMax({repeat:-1});
    tl.from(planeetPaars, time, {css: {left: "-1000px"}, ease:Linear.easeNone})
    .to(planeetPaars, time, {css: {left: "5000px"}, ease:Linear.easeNone});