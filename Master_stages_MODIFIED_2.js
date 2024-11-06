var wms_layers = [];

var lyr_GoogleMaps_0 = new ol.layer.Tile({
    'title': 'Google Maps',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    })
});

var format_Master_stages_MODIFIED = new ol.format.GeoJSON();
var features_Master_stages_MODIFIED = format_Master_stages_MODIFIED.readFeatures(json_Master_stages_MODIFIED, 
        {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});

var jsonSource_Master_stages_MODIFIED = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Master_stages_MODIFIED.addFeatures(features_Master_stages_MODIFIED);

var lyr_Master_stages_MODIFIED = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Master_stages_MODIFIED, 
    style: style_Master_stages_MODIFIED,
    popuplayertitle: "Master_stages_MODIFIED",
    interactive: true,
    title: '<img src="styles/legend/Master_stages_MODIFIED_1.png" /> Master_stages_MODIFIED'
});

lyr_GoogleMaps_0.setVisible(true);
lyr_Master_stages_MODIFIED.setVisible(true);

var layersList = [lyr_GoogleMaps_0, lyr_Master_stages_MODIFIED];

lyr_Master_stages_MODIFIED.set('fieldAliases', {
    'DISOLVE_ID': 'DISOLVE_ID',
    'STAGE NAME': 'STAGE NAME',
    'NEW SPELLI': 'NEW SPELLI',
    'STAGES_FNL': 'STAGES_FNL',
    'LATITUDE': 'LATITUDE',
    'LONGITUDE': 'LONGITUDE',
    'DISTRICT': 'DISTRICT'
});
lyr_Master_stages_MODIFIED.set('fieldImages', {
    'DISOLVE_ID': 'TextEdit',
    'STAGE NAME': 'TextEdit',
    'NEW SPELLI': 'TextEdit',
    'STAGES_FNL': 'TextEdit',
    'LATITUDE': 'TextEdit',
    'LONGITUDE': 'TextEdit',
    'DISTRICT': 'TextEdit'
});
lyr_Master_stages_MODIFIED.set('fieldLabels', {
    'DISOLVE_ID': 'no label',
    'STAGE NAME': 'inline label - always visible',
    'NEW SPELLI': 'no label',
    'STAGES_FNL': 'inline label - always visible',
    'LATITUDE': 'no label',
    'LONGITUDE': 'no label',
    'DISTRICT': 'no label'
});
lyr_Master_stages_MODIFIED.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

// ------ QUERY FUNCTION START ------

// Function to query and highlight layer features based on attribute and value
function queryLayer(attribute, value) {
    lyr_Master_stages_MODIFIED.getSource().getFeatures().forEach(function(feature) {
        // Reset all features' style before applying highlight
        feature.setStyle(style_Master_stages_MODIFIED);
        if (feature.get(attribute) === value) {
            // Apply highlight style if attribute matches
            feature.setStyle(new ol.style.Style({
                stroke: new ol.style.Stroke({ color: 'red', width: 3 })
            }));
            // Zoom to the matching feature
            map.getView().fit(feature.getGeometry().getExtent(), { duration: 1000, maxZoom: 16 });
        }
    });
}

// Function to capture user input and initiate the query
function searchFeature() {
    const value = document.getElementById("searchInput").value;
    const attribute = "STAGE NAME"; // Attribute to search (using 'STAGE NAME' as an example)
    queryLayer(attribute, value);
}

// ------ QUERY FUNCTION END ------
