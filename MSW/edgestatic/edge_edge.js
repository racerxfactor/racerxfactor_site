/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'background',
                type: 'image',
                rect: ['0px', '0px','1280px','868px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
            },
            {
                id: 'red_arrow',
                type: 'image',
                rect: ['-65px', '-254px','14px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red_arrow.png",'0px','0px'],
                transform: [[],['-18']]
            },
            {
                id: 'black_arrow',
                type: 'image',
                rect: ['689px', '-280px','14px','271px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black_arrow.png",'0px','0px'],
                transform: [[],['10']]
            },
            {
                id: 'black_arrow3',
                type: 'image',
                rect: ['656px', '-602px','43px','830px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black_arrow.png",'0px','0px'],
                transform: [[],['-14'],[],['0.44772','0.44772']]
            },
            {
                id: 'red_arrow4',
                type: 'image',
                rect: ['1228px', '-620px','49px','809px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red_arrow.png",'0px','0px'],
                transform: [[],['12'],[],['0.48979','0.48979']]
            },
            {
                id: 'gold_arrow2',
                type: 'image',
                rect: ['941px', '-354px','69px','504px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gold_arrow.png",'0px','0px'],
                transform: [[],['55'],[],['0.49277','0.49277']]
            },
            {
                id: 'shutterstock_63638971',
                display: 'none',
                type: 'image',
                rect: ['-216px', '-323px','1600px','800px','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(0,0,0,0)",im+"shutterstock_63638971.png",'0px','0px']
            },
            {
                id: 'red_arrow3',
                type: 'image',
                rect: ['-89px', '-389px','49px','809px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red_arrow.png",'0px','0px'],
                transform: [[],['-17'],[],['0.28687','0.28687']]
            },
            {
                id: 'red_arrow2',
                type: 'image',
                rect: ['1059px', '-448px','24px','397px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red_arrow.png",'0px','0px'],
                transform: [[],['23']]
            },
            {
                id: 'black_arrow2',
                type: 'image',
                rect: ['1475px', '-309px','43px','830px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"black_arrow.png",'0px','0px'],
                transform: [[],['86'],[],['0.32557','0.47831']]
            },
            {
                id: 'cupid2',
                display: 'none',
                type: 'image',
                rect: ['797px', '414px','341px','327px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"cupid.png",'0px','0px']
            },
            {
                id: 'shutterstock_636389712',
                display: 'block',
                type: 'image',
                rect: ['-189px', '-309px','1600px','800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shutterstock_63638971.png",'0px','0px']
            },
            {
                id: 'lightRays',
                display: 'none',
                type: 'image',
                rect: ['-5px', '-3px','1290px','868px','auto', 'auto'],
                opacity: 0.44909171747967,
                fill: ["rgba(0,0,0,0)",im+"lightRays.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_red_arrow3}": [
                ["style", "top", '-389px'],
                ["transform", "scaleY", '0.28687'],
                ["transform", "rotateZ", '-17deg'],
                ["transform", "scaleX", '0.28687'],
                ["style", "left", '-89px']
            ],
            "${_red_arrow4}": [
                ["style", "top", '-620px'],
                ["transform", "scaleY", '0.48979'],
                ["transform", "rotateZ", '12deg'],
                ["transform", "scaleX", '0.48979'],
                ["style", "left", '1228px']
            ],
            "${_cupid2}": [
                ["style", "top", '441px'],
                ["style", "display", 'none'],
                ["style", "height", '327px'],
                ["style", "opacity", '0'],
                ["style", "left", '750px'],
                ["style", "width", '341px']
            ],
            "${_lightRays}": [
                ["style", "top", '-3px'],
                ["style", "display", 'none'],
                ["style", "height", '868px'],
                ["style", "opacity", '0.44909200072288513'],
                ["style", "left", '-5px'],
                ["style", "width", '1290px']
            ],
            "${_background}": [
                ["style", "top", '0px'],
                ["style", "height", '868px'],
                ["style", "left", '0px'],
                ["style", "width", '1280px']
            ],
            "${_shutterstock_636389712}": [
                ["style", "top", '-309px'],
                ["style", "opacity", '0.33387322154472'],
                ["style", "left", '-189px'],
                ["style", "display", 'block']
            ],
            "${_red_arrow2}": [
                ["style", "top", '-448px'],
                ["transform", "rotateZ", '23deg'],
                ["style", "height", '397px'],
                ["style", "left", '1059px'],
                ["style", "width", '24px']
            ],
            "${_black_arrow}": [
                ["style", "top", '-280px'],
                ["transform", "rotateZ", '10deg'],
                ["style", "height", '271px'],
                ["style", "left", '689px'],
                ["style", "width", '14px']
            ],
            "${_gold_arrow2}": [
                ["style", "top", '-354px'],
                ["transform", "scaleY", '0.49277'],
                ["transform", "rotateZ", '55deg'],
                ["transform", "scaleX", '0.49277'],
                ["style", "left", '941px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1280px'],
                ["style", "height", '868px'],
                ["style", "overflow", 'hidden']
            ],
            "${_black_arrow2}": [
                ["style", "top", '-309px'],
                ["transform", "scaleY", '0.47831'],
                ["transform", "rotateZ", '86deg'],
                ["transform", "scaleX", '0.32557'],
                ["style", "left", '1475px']
            ],
            "${_black_arrow3}": [
                ["style", "top", '-602px'],
                ["transform", "scaleY", '0.44772'],
                ["transform", "rotateZ", '-14deg'],
                ["transform", "scaleX", '0.44772'],
                ["style", "left", '656px']
            ],
            "${_red_arrow}": [
                ["style", "top", '-246px'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '240px'],
                ["transform", "rotateZ", '-18deg'],
                ["style", "left", '-51px'],
                ["style", "width", '14px']
            ],
            "${_shutterstock_63638971}": [
                ["style", "top", '-323px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '-216px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid32", tween: [ "style", "${_red_arrow4}", "top", '242px', { fromValue: '-620px'}], position: 1696, duration: 233 },
                { id: "eid57", tween: [ "style", "${_lightRays}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_lightRays}", "display", 'block', { fromValue: 'none'}], position: 4064, duration: 0 },
                { id: "eid27", tween: [ "style", "${_red_arrow3}", "top", '159px', { fromValue: '-389px'}], position: 2301, duration: 199 },
                { id: "eid65", tween: [ "style", "${_cupid2}", "left", '750px', { fromValue: '750px'}], position: 4064, duration: 0 },
                { id: "eid22", tween: [ "style", "${_black_arrow3}", "left", '900px', { fromValue: '656px'}], position: 2000, duration: 230 },
                { id: "eid33", tween: [ "style", "${_red_arrow4}", "left", '1053px', { fromValue: '1228px'}], position: 1696, duration: 233 },
                { id: "eid7", tween: [ "style", "${_red_arrow}", "top", '376px', { fromValue: '-246px'}], position: 151, duration: 266 },
                { id: "eid5", tween: [ "style", "${_red_arrow}", "left", '157px', { fromValue: '-51px'}], position: 151, duration: 266 },
                { id: "eid42", tween: [ "style", "${_gold_arrow2}", "left", '401px', { fromValue: '941px'}], position: 3936, duration: 64 },
                { id: "eid69", tween: [ "style", "${_shutterstock_63638971}", "display", 'block', { fromValue: 'none'}], position: 4064, duration: 0 },
                { id: "eid23", tween: [ "style", "${_black_arrow3}", "top", '197px', { fromValue: '-602px'}], position: 2000, duration: 230 },
                { id: "eid45", tween: [ "style", "${_shutterstock_636389712}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "style", "${_shutterstock_636389712}", "display", 'block', { fromValue: 'none'}], position: 4064, duration: 0 },
                { id: "eid59", tween: [ "style", "${_shutterstock_636389712}", "opacity", '0.33', { fromValue: '0.33387322154472'}], position: 4064, duration: 377 },
                { id: "eid55", tween: [ "style", "${_shutterstock_636389712}", "opacity", '0', { fromValue: '0.33'}], position: 4441, duration: 873 },
                { id: "eid72", tween: [ "style", "${_shutterstock_63638971}", "opacity", '0', { fromValue: '0.5'}], position: 4713, duration: 537 },
                { id: "eid62", tween: [ "style", "${_lightRays}", "opacity", '0', { fromValue: '0.44909200072288513'}], position: 4441, duration: 1559 },
                { id: "eid14", tween: [ "style", "${_red_arrow2}", "left", '794px', { fromValue: '1059px'}], position: 2780, duration: 220 },
                { id: "eid43", tween: [ "style", "${_gold_arrow2}", "top", '-61px', { fromValue: '-354px'}], position: 3936, duration: 64 },
                { id: "eid10", tween: [ "style", "${_black_arrow}", "left", '586px', { fromValue: '689px'}], position: 639, duration: 249 },
                { id: "eid11", tween: [ "style", "${_black_arrow}", "top", '371px', { fromValue: '-280px'}], position: 639, duration: 249 },
                { id: "eid54", tween: [ "style", "${_cupid2}", "opacity", '1', { fromValue: '0'}], position: 4064, duration: 1250 },
                { id: "eid51", tween: [ "style", "${_cupid2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_cupid2}", "display", 'block', { fromValue: 'none'}], position: 4064, duration: 0 },
                { id: "eid15", tween: [ "style", "${_red_arrow2}", "top", '338px', { fromValue: '-448px'}], position: 2780, duration: 220 },
                { id: "eid18", tween: [ "style", "${_black_arrow2}", "left", '-220px', { fromValue: '1475px'}], position: 1206, duration: 196 },
                { id: "eid26", tween: [ "style", "${_red_arrow3}", "left", '85px', { fromValue: '-89px'}], position: 2301, duration: 199 },
                { id: "eid66", tween: [ "style", "${_cupid2}", "top", '441px', { fromValue: '441px'}], position: 4064, duration: 0 },
                { id: "eid19", tween: [ "style", "${_black_arrow2}", "top", '-203px', { fromValue: '-309px'}], position: 1206, duration: 196 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-20734801");
