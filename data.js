var APP_DATA = {
  "scenes": [
    {
      "id": "0-ponte-inicial",
      "name": "Ponte Inicial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -3.064164483599301,
          "pitch": -0.04236921601649968,
          "rotation": 0.7853981633974483,
          "target": "1-trilha-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3747620488656853,
          "pitch": -0.14894498364230202,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Trilha Inicial</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Após realizar o pagamento, uma trilha é iniciada para as cachoeiras</font></font>"
        },
        {
          "yaw": 1.605637267464111,
          "pitch": 0.24953313893582418,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Poço Bem-Te-Vi</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Ao seguir pela esquerda, você tem acesso ao poço Bem-Te-Vi e a direita segue ruma a cachoeira esmeralda.</font></font>"
        }
      ]
    },
    {
      "id": "1-trilha-2",
      "name": "Trilha 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.6190705584624396,
        "pitch": 0.1517821166537736,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 1.419670771758943,
          "pitch": 0.2630079629855224,
          "rotation": 0,
          "target": "0-ponte-inicial"
        },
        {
          "yaw": -1.766973713204628,
          "pitch": -0.054446505942248535,
          "rotation": 0,
          "target": "2-trilha-3-irmos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-trilha-3-irmos",
      "name": "Trilha 3 irmãos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.7642292837175546,
        "pitch": -0.04510603386984258,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -3.1349455623971405,
          "pitch": 0.019861351242086656,
          "rotation": 5.497787143782138,
          "target": "1-trilha-2"
        },
        {
          "yaw": -1.177888448725966,
          "pitch": -0.08515851379013917,
          "rotation": 0.7853981633974483,
          "target": "3-trilha-escada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2669973116435891,
          "pitch": 0.29615005236820835,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cachoeira 3 Irmãos</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">No caminho para a cachoeira esmeralda, voce terá acesso as demais cachoeiras e poços.</font></font>"
        }
      ]
    },
    {
      "id": "3-trilha-escada",
      "name": "Trilha escada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.2914665152435969,
        "pitch": 0.07813517547697657,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.1870506539816148,
          "pitch": -0.3507698221054092,
          "rotation": 5.497787143782138,
          "target": "2-trilha-3-irmos"
        },
        {
          "yaw": 2.124021148695186,
          "pitch": 0.3854352487387711,
          "rotation": 0,
          "target": "4-cachoeira-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cachoeira-",
      "name": "Cachoeira ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.499641591484373,
        "pitch": -0.31624559612874314,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.9421868121650867,
          "pitch": 0.24339659898796562,
          "rotation": 0,
          "target": "5-principal-viso"
        },
        {
          "yaw": 2.0997276469247357,
          "pitch": 0.023441634547957335,
          "rotation": 0,
          "target": "3-trilha-escada"
        },
        {
          "yaw": -0.8496114457805817,
          "pitch": -0.21377781385718642,
          "rotation": 0,
          "target": "6-viso-do-alto-da-cachoeira"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.713582520053336,
          "pitch": -0.0032875872730784295,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Atenção</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Por se tratar de um poço fundo, existe uma boia a disposiçao dos turistas</font></font>"
        }
      ]
    },
    {
      "id": "5-principal-viso",
      "name": "Principal visão",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.8091036243417857,
        "pitch": 0.0027765751867150357,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -1.4092017863214412,
          "pitch": -0.18258574418752538,
          "rotation": 5.497787143782138,
          "target": "6-viso-do-alto-da-cachoeira"
        },
        {
          "yaw": -0.06484480462050612,
          "pitch": 0.19157453410639214,
          "rotation": 0,
          "target": "4-cachoeira-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.21039717799957458,
          "pitch": -0.0692172119548431,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Trilha</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Possui uma trilha para acessor mais locais a cima.</font></font>"
        }
      ]
    },
    {
      "id": "6-viso-do-alto-da-cachoeira",
      "name": "Visão do alto da cachoeira",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.19779679426991947,
        "pitch": -0.054309019602268194,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.932236519252406,
          "pitch": 0.1723906700553659,
          "rotation": 0.7853981633974483,
          "target": "4-cachoeira-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8961936920636075,
          "pitch": -0.16035131491840815,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Continuar</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Em momentos onde nao tem muito volume de agua, é possível seguir subindo ate encontrar os demais poços.</font></font>"
        }
      ]
    }
  ],
  "name": "Tour Cachoeira Esmeralda",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
