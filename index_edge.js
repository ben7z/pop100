/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Image5',
                            type: 'image',
                            rect: ['-638px', '-531px', '1650px', '1650px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['418px', '617px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%975.jpg",'0px','0px']
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['418px', '815px', '198px', '199px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%976.jpg",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['219px', '815px', '198px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%977.jpg",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['418px', '419px', '198px', '199px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%974.jpg",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['418px', '221px', '198px', '199px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%973.jpg",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['418px', '23px', '198px', '198px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%972.jpg",'0px','0px']
                        },
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['21px', '250px', '198px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%B9%E5%9D%971.jpg",'0px','0px']
                        },
                        {
                            id: 'Image3',
                            type: 'image',
                            rect: ['44px', '547px', '342px', '253px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%96%87%E5%AD%97.png",'0px','0px']
                        },
                        {
                            id: '_100',
                            type: 'image',
                            rect: ['54px', '276px', '62px', '97px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1%E5%89%8D.png",'0px','0px']
                        },
                        {
                            id: 'Image4',
                            type: 'image',
                            rect: ['85px', '333px', '283px', '171px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px']
                        },
                        {
                            id: 'pop2',
                            type: 'image',
                            rect: ['21px', '24px', '459px', '260px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pop%E5%90%8E.png",'0px','0px']
                        },
                        {
                            id: 'pop',
                            type: 'image',
                            rect: ['11px', '15px', '415px', '236px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pop%E5%89%8D.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: '_22',
                            type: 'image',
                            rect: ['135px', '239px', '109px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E7%90%83%E5%89%8D.png",'0px','0px'],
                            transform: [[],['360']]
                        },
                        {
                            id: '_22Copy',
                            type: 'image',
                            rect: ['263px', '204px', '109px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E7%90%83%E5%89%8D.png",'0px','0px'],
                            transform: [[],['360']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '1050px', 'auto', 'auto'],
                            sizeRange: ['640px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(232,86,176,1.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            '419px',
                            '419px'
                        ],
                        [
                            "eid47",
                            "top",
                            500,
                            0,
                            "linear",
                            "${_3}",
                            '419px',
                            '617px'
                        ],
                        [
                            "eid48",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_3}",
                            '617px',
                            '815px'
                        ],
                        [
                            "eid73",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${_3}",
                            '815px',
                            '23px'
                        ],
                        [
                            "eid74",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${_3}",
                            '23px',
                            '221px'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid44",
                            "top",
                            500,
                            0,
                            "linear",
                            "${_2}",
                            '221px',
                            '419px'
                        ],
                        [
                            "eid45",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_2}",
                            '419px',
                            '617px'
                        ],
                        [
                            "eid46",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${_2}",
                            '617px',
                            '815px'
                        ],
                        [
                            "eid69",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${_2}",
                            '815px',
                            '23px'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            '815px',
                            '815px'
                        ],
                        [
                            "eid91",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${_7}",
                            '815px',
                            '23px'
                        ],
                        [
                            "eid92",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_7}",
                            '23px',
                            '221px'
                        ],
                        [
                            "eid93",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${_7}",
                            '221px',
                            '419px'
                        ],
                        [
                            "eid94",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${_7}",
                            '419px',
                            '617px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_7}",
                            '417px',
                            '417px'
                        ],
                        [
                            "eid88",
                            "left",
                            500,
                            0,
                            "linear",
                            "${_7}",
                            '417px',
                            '219px'
                        ],
                        [
                            "eid89",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${_7}",
                            '219px',
                            '23px'
                        ],
                        [
                            "eid90",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${_7}",
                            '23px',
                            '418px'
                        ],
                        [
                            "eid70",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${_3}",
                            '418px',
                            '219px'
                        ],
                        [
                            "eid71",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_3}",
                            '219px',
                            '21px'
                        ],
                        [
                            "eid72",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${_3}",
                            '21px',
                            '418px'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${_22}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid137",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${_22}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid39",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid40",
                            "top",
                            500,
                            0,
                            "linear",
                            "${_1}",
                            '23px',
                            '221px'
                        ],
                        [
                            "eid54",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_1}",
                            '221px',
                            '419px'
                        ],
                        [
                            "eid42",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${_1}",
                            '419px',
                            '617px'
                        ],
                        [
                            "eid43",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_1}",
                            '617px',
                            '815px'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_5}",
                            '815px',
                            '815px'
                        ],
                        [
                            "eid51",
                            "top",
                            500,
                            0,
                            "linear",
                            "${_5}",
                            '815px',
                            '23px'
                        ],
                        [
                            "eid53",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_5}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid55",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${_5}",
                            '221px',
                            '419px'
                        ],
                        [
                            "eid56",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_5}",
                            '419px',
                            '617px'
                        ],
                        [
                            "eid57",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${_5}",
                            '617px',
                            '815px'
                        ],
                        [
                            "eid59",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${_5}",
                            '815px',
                            '815px'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${_22Copy}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid136",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${_22Copy}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid34",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_6}",
                            '815px',
                            '815px'
                        ],
                        [
                            "eid83",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_6}",
                            '815px',
                            '23px'
                        ],
                        [
                            "eid84",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${_6}",
                            '23px',
                            '221px'
                        ],
                        [
                            "eid85",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_6}",
                            '221px',
                            '419px'
                        ],
                        [
                            "eid86",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${_6}",
                            '419px',
                            '617px'
                        ],
                        [
                            "eid87",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${_6}",
                            '617px',
                            '815px'
                        ],
                        [
                            "eid75",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${_4}",
                            '418px',
                            '221px'
                        ],
                        [
                            "eid76",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${_4}",
                            '221px',
                            '21px'
                        ],
                        [
                            "eid77",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_4}",
                            '21px',
                            '418px'
                        ],
                        [
                            "eid64",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${_1}",
                            '418px',
                            '219px'
                        ],
                        [
                            "eid65",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${_1}",
                            '219px',
                            '21px'
                        ],
                        [
                            "eid31",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_5}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid50",
                            "left",
                            500,
                            0,
                            "linear",
                            "${_5}",
                            '21px',
                            '418px'
                        ],
                        [
                            "eid58",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${_5}",
                            '418px',
                            '219px'
                        ],
                        [
                            "eid66",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_2}",
                            '418px',
                            '219px'
                        ],
                        [
                            "eid67",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${_2}",
                            '219px',
                            '21px'
                        ],
                        [
                            "eid68",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${_2}",
                            '21px',
                            '418px'
                        ],
                        [
                            "eid111",
                            "filter.invert",
                            0,
                            0,
                            "linear",
                            "${pop}",
                            '0',
                            '0'
                        ],
                        [
                            "eid112",
                            "filter.invert",
                            373,
                            0,
                            "linear",
                            "${pop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "filter.invert",
                            750,
                            0,
                            "linear",
                            "${pop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "filter.invert",
                            1124,
                            0,
                            "linear",
                            "${pop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "filter.invert",
                            1500,
                            0,
                            "linear",
                            "${pop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "filter.invert",
                            1863,
                            0,
                            "linear",
                            "${pop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "filter.invert",
                            2250,
                            0,
                            "linear",
                            "${pop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid134",
                            "filter.invert",
                            2626,
                            0,
                            "linear",
                            "${pop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "filter.invert",
                            3000,
                            0,
                            "linear",
                            "${pop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${Image5}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            '617px',
                            '617px'
                        ],
                        [
                            "eid49",
                            "top",
                            500,
                            0,
                            "linear",
                            "${_4}",
                            '617px',
                            '820px'
                        ],
                        [
                            "eid78",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_4}",
                            '820px',
                            '23px'
                        ],
                        [
                            "eid79",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${_4}",
                            '23px',
                            '221px'
                        ],
                        [
                            "eid80",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${_4}",
                            '221px',
                            '419px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_6}",
                            '219px',
                            '219px'
                        ],
                        [
                            "eid81",
                            "left",
                            500,
                            0,
                            "linear",
                            "${_6}",
                            '219px',
                            '21px'
                        ],
                        [
                            "eid82",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${_6}",
                            '21px',
                            '418px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-182510");
