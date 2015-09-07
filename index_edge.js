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
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'main',
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(192,192,192,1)",[270,[['rgba(158,158,158,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'roll',
                                type: 'rect',
                                rect: ['0px', '0px', '960px', '1920px', 'auto', 'auto'],
                                overflow: 'visible',
                                fill: ["rgba(192,192,192,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['0px', '0', '960px', '150px', 'auto', 'auto'],
                            autoOrient: true,
                            overflow: 'hidden'
                        },
                        {
                            id: 'foot',
                            type: 'rect',
                            rect: ['0px', 'auto', '100%', '150px', 'auto', '0px'],
                            fill: ["rgba(192,192,192,1)",[270,[['rgba(1,124,232,1.00)',0],['rgba(100,182,254,1.00)',100]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '1920px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid8",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '960px',
                            '960px'
                        ],
                        [
                            "eid3",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '150px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'head',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            autoOrient: false,
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(100,182,254,1.00)', 0], ['rgba(0,95,180,1.00)', 100]]]]
                        },
                        {
                            rect: ['0%', '32%', '960px', '0px', 'auto', 'auto'],
                            textStyle: ['', '', '50px', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [55, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'center',
                            text: '<p style=\"margin: 0px;\">​标题</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['auto', '27%', 'auto', 'auto', '2.5%', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [55, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'right',
                            text: '<p style=\"margin: 0px;\">​按钮</p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['2.5%', '27%', 'auto', 'auto', 'auto', 'auto'],
                            id: 'left',
                            text: '<p style=\"margin: 0px;\">​&lt;</p>',
                            font: ['Arial, Helvetica, sans-serif', [55, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '100%', '150px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-2385397");
