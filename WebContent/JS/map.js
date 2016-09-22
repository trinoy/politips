var map = L.map('map', {
	zoomControl : true
}).setView([ 22.527636, 78.832675 ], 4);

var Poli_Icon;
var markers = [];
var markers_new = [];

var marker;
function zoomto_new() {
	//geojson.clearLayers();
	setTimeout(function() {
		map.setView([22.527636, 78.832675], 5);
	},500);
	setTimeout(function() {
		map.setView([ 22.527636, 78.832675 ], 6);
	},	1000);
//	map.setView([ 22.527636, 78.832675], 5);
	/*setTimeout(function() {
		map.setView([ 23.039568,72.566004], 5);
	},500);
	setTimeout(function() {
		map.setView([ 23.039568,72.566004 ], 6);
	},	1000);
	setTimeout(function() {
		map.setView([ 23.039568,72.566004 ], 7);
	},1500);
	setTimeout(function() {
		map.setView([ 23.039568,72.566004 ], 8);
	},2000);*/
	var markers = new L.MarkerClusterGroup();

	Poli_Icon = L.Icon.extend({
		options : {
			//shadowUrl: '../docs/images/leaf-shadow.png',
			iconSize : [ 40, 40 ],
			//	shadowSize:   [50, 64],
			iconAnchor : [ 22, 94 ],
			//	shadowAnchor: [4, 62],
			popupAnchor : [ -4, -80 ]
		}
	});
	var p_icon = new Poli_Icon({
		iconUrl : 'images/male1.png'
	});
	for ( var i = 0; i < addressPoints.length; i++) {
		var a = addressPoints[i];
		var title = a[2];
		var pic = a[3];
		var party = a[4];
		var party_pic = a[5];
		//{bounceOnAdd: true},

		marker = new L.Marker(new L.LatLng(a[0], a[1]), /*{
			icon : p_icon
		}, */{
			bounceOnAdd : true
		}, {
			title : title
		});
		
		var container = $('<div />');

		
		container.on('click', '#popup', function() {
		   
		    window.location.href = "view/constituentlevel.html";
		    
		});

		container.html("<div id='popup'><div id='img'><img src='" + pic + "'/><div id='title'>" +
				 party + "<br><img class='party' id='img-"+ i  +"' src = '" + party_pic + "'></div></div><div id='name'>" +title+ "</div></div>");

		marker.bindPopup(container[0]);
		//marker.bindPopup("<div id='popup'><div id='img'><img src='" + pic + "'/></div><div id='title'>"
		//		+ title + " - " + party + "</div></div>");
		markers.addLayer(marker);
		
		

	}

	map.addLayer(markers);

}
$('#img').click(function(event) {
	alert("Hi");
});

function zoomto() {
	//geojson.clearLayers();
	map.setView([ 12.99042, 77.68417 ], 14);
	Poli_Icon = L.Icon.extend({
		options : {
			//shadowUrl: '../docs/images/leaf-shadow.png',
			iconSize : [ 58, 85 ],
			//	shadowSize:   [50, 64],
			iconAnchor : [ 22, 94 ],
			//	shadowAnchor: [4, 62],
			popupAnchor : [ -3, -76 ]
		}
	});

	for ( var i = 0; i < icons.length; i++) {
		var p_icon = new Poli_Icon({
			iconUrl : icons[i]
		});
		markers.push(p_icon);

		// map.addLayer(markers[i]);
	}
	setTimeout(function() {
		markers_new.push(L.marker([ 12.99042, 77.68417 ], {
			bounceOnAdd : true
		}, {
			riseOnHover : true
		}));

		markers_new.push(L.marker([ 12.993873, 77.676988 ], {
			bounceOnAdd : true
		}, {
			riseOnHover : true
		}));
		//.bindPopup("POlitician Y").addTo(map);
		markers_new.push(L.marker([ 12.991949, 77.693639 ], {
			bounceOnAdd : true
		}, {
			riseOnHover : true
		}));
		//.bindPopup("POlitician Z").addTo(map);
		plot();

	}, 1000);

}

function plot() {

	markers_new[0].bindPopup("Politician X");
	map.addLayer(markers_new[0]);
	markers_new[1].bindPopup("Politician Y");
	map.addLayer(markers_new[1]);
	markers_new[2].bindPopup("Politician Z");
	map.addLayer(markers_new[2]);

}
function remove_marker() {
	for (i = 0; i < markers_new.length; i++) {
		//markers[i] = null;
		map.removeLayer(markers_new[i]);
	}
	//markers = [];
	//		markers.addTo(map);
}

var cloudmade = L
.tileLayer(
		'http://{s}.tile.cloudmade.com/77b3738c9c724dd88e52815e3a5317da/122037/256/{z}/{x}/{y}.png',
		{

		
			maxZoom : 12,
			key : '77b3738c9c724dd88e52815e3a5317da',
			//styleId : 120982
			styleId: 122037
		}).addTo(map);

// control that shows state info on hover

var info = L.control();

var geojson;
info.onAdd = function(map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info.update = function(props) {
	this._div.innerHTML = '<div id="flag1_div"><img id="flag1" src="  images/india.gif " /></div><span><h3>INDIAN CONSTITUTION </h3></span>'
		+ (props ? '<table ><tr><th>State Name</th><td> '
				+ props.ST_NAME
				+ '</td></tr><tr><th> Constituency Name </th><td> '
				+ props.PC_NAME
				+ '</td></tr> <tr><th>Constituency Type</th><td>'
				+ props.PC_TYPE
				+ '</td></tr> <tr><th>Area</th><td> ' + props.AREA
				+ '</td></tr> <tr><th>Current-Party</th><td>'
				+ props.PARTY + '</td></tr></table>'
				: 'Hover over a state');
};

info.addTo(map);

// get color depending on population density value
function getColor(d) {
	return d > 30000 ? '#800026' : d > 28000 ? '#BD0026'
			: d > 26000 ? '#E31A1C' : d > 24000 ? '#FC4E2A'
					: d > 23000 ? '#FD8D3C' : d > 20000 ? '#FEB24C'
							: d > 10000 ? '#FED976' : '#FFEDA0';
}

function style(feature) {
	return {
		weight : 1,
		opacity : 0.5,
		color : 'white',
		dashArray : '2',
		fillOpacity : 0.8,
		fillColor : feature.properties.color
	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight : 5,
		color : '#ccc',
		dashArray : '',
		fillOpacity : 0.1
	});

	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}

	info.update(layer.feature.properties);
}

function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}

function zoomToFeature(e) {

	map.fitBounds(e.target.getBounds());
	//new L.Control.Zoom({ zoomOutText: "5" }).addTo(map);	
	//map.zoom(10);
	//if(Poli_Icon != undefined ){

	//}

}

function onEachFeature(feature, layer) {
	layer.on({
		mouseover : highlightFeature,
		mouseout : resetHighlight,
		click : zoomToFeature
	});
}

geojson = L.geoJson(statesData, {
	style : style,
	onEachFeature : onEachFeature
}).addTo(map);

//input field
$('section :input').val('').fancyInput()[0].focus();

// Everything below is only for the DEMO
function init(str) {
	var input = $('section input').val('')[0], s = 'Politician Name / VoterId / PrimeMinister Candidate '
		.split('').reverse(), len = s.length - 1, e = $
		.Event('keypress');

	var initInterval = setInterval(
			function() {
				if (s.length) {
					var c = s.pop();
					fancyInput.writer(c, input, len - s.length)
					.setCaret(input);
					input.value += c;
					//e.charCode = c.charCodeAt(0);
					//input.trigger(e);

				} else
					clearInterval(initInterval);
			}, 50);
	$('section :input').click(function(e){

		fancyInput.fillText(' ', e.target);
		$('section :input').val('');

	});
}

init();

toggleEffect();

$("section :input").keypress(function(event) {
	if (event.which == 13) {
		event.preventDefault();
		zoomto_new();
		// $("form").submit();
	}
});
// change effects
function toggleEffect(num) {
	var className = '';
	idx = 4;
	//idx = $(this).index() + 1,
	$fancyInput = $('.fancyInput');

	if (idx > 1)
		className = 'effect' + idx;

	$('#content').prop('class', className);
	$fancyInput.find(':input')[0].focus();

	$(this).addClass('active').siblings().removeClass('active');
}