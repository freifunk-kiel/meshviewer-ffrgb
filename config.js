module.exports = function () {
  return {
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://grafana.freifunk.in-kiel.de/dashboard/db/nodeinfo?panelId=1&width=1200&height=600&from=now-7d&to=now&var-node={NODE_ID}',
        'image': 'https://grafana.freifunk.in-kiel.de/render/dashboard-solo/db/nodeinfo?panelId=1&width=600&height=300&from=now-7d&to=now&var-node={NODE_ID}',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      }
    ],
    'globalInfos': [
      {
        'name': 'Statistik',
        'href': 'https://grafana.freifunk.in-kiel.de/dashboard/db/ffki-status',
        'image': 'https://grafana.freifunk.in-kiel.de/render/dashboard-solo/db/ffki-status?editorTab=Metrics&panelId=1&theme=light&width=600&height=300&from=now-14d&to=now',
        'title': 'Verbundene Clients und Knoten in den letzten 14 Tagen'
      }
    ],
    'maxAge': 2,
    // Array of data provider are supported
    'dataPath': [
      'https://map.freifunk.in-kiel.de/yanic/'
      // nodes.json v2: 'https://hopglass.freifunk.in-kiel.de/'
    ],
    'siteName': 'Freifunk Kiel',
    'mapLayers': [
      {
        'name': 'Freifunk Regensburg',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'start': 6
        }
      },
      {
        'name': 'Freifunk Regensburg Night',
        // Please ask Freifunk Regensburg before using its tile server - example with retina and dark tiles
        'url': 'https://{s}.tiles.ffrgb.net/n/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': ' <a href=\'http://www.openmaptiles.org/\' target=\'_blank\'>&copy; OpenMapTiles</a> <a href=\'http://www.openstreetmap.org/about/\' target=\'_blank\'>&copy; OpenStreetMap contributors</a>',
          'mode': 'night',
          'start': 19,
          'end': 7
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a>'
        }
      },
      {
        'name': 'HERE',
        // Please use your own API key - Free plan is on right side after the pay plans
        'url': 'https://{s}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=YOUR_KEY&app_code=YOUR_CODE&lg=deu',
        'config': {
          'attribution': 'Map &copy; 1987-2014 <a href=\'http://developer.here.com\'>HERE</a>',
          'subdomains': '1234',
          'maxZoom': 20
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      },
      {
        'name': 'HERE.hybridDay',
        // Please use your own API key - Free plan is on right side after the pay plans
        'url': 'https://{s}.aerial.maps.api.here.com/maptile/2.1/maptile/newest/{variant}/{z}/{x}/{y}/256/png8?app_id=YOUR_KEY&app_code=YOUR_CODE&lg=deu',
        'config': {
          'attribution': 'Map &copy; 1987-2014 <a href=\'http://developer.here.com\'>HERE</a>',
          'subdomains': '1234',
          'variant': 'hybrid.day',
          'maxZoom': 20
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        54.3777,
        10.0900
      ],
      // Southeast
      [
        54.3107,
        10.2111
      ]
    ],
    'domainNames': [
      {
        'domain': 'ffki',
        'name': 'Kiel',
        'web': 'https://freifunk.in-kiel.de/',
        'map': 'https://mesh.freifunk.in-kiel.de/'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk.in-kiel.de/impressum'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk.in-kiel.de/datenschutzerklaerung'
      }
    ]
  };
};
