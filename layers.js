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
var format_Master_stages_MODIFIED_1 = new ol.format.GeoJSON();
var features_Master_stages_MODIFIED_1 = format_Master_stages_MODIFIED_1.readFeatures(json_Master_stages_MODIFIED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Master_stages_MODIFIED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Master_stages_MODIFIED_1.addFeatures(features_Master_stages_MODIFIED_1);
var lyr_Master_stages_MODIFIED_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Master_stages_MODIFIED_1, 
                style: style_Master_stages_MODIFIED_1,
                popuplayertitle: "Master_stages_MODIFIED",
                interactive: true,
                title: '<img src="styles/legend/Master_stages_MODIFIED_1.png" /> Master_stages_MODIFIED'
            });
var format_Kerala_District_2 = new ol.format.GeoJSON();
var features_Kerala_District_2 = format_Kerala_District_2.readFeatures(json_Kerala_District_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kerala_District_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kerala_District_2.addFeatures(features_Kerala_District_2);
var lyr_Kerala_District_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kerala_District_2, 
                style: style_Kerala_District_2,
                popuplayertitle: "Kerala_District",
                interactive: true,
                title: '<img src="styles/legend/Kerala_District_2.png" /> Kerala_District'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Master_stages_MODIFIED_1.setVisible(true);lyr_Kerala_District_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Master_stages_MODIFIED_1,lyr_Kerala_District_2];
lyr_Master_stages_MODIFIED_1.set('fieldAliases', {'DISOLVE_ID': 'DISOLVE_ID', 'STAGE NAME': 'STAGE NAME', 'NEW SPELLI': 'NEW SPELLI', 'STAGES_FNL': 'STAGES_FNL', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'DISTRICT': 'DISTRICT', 'to change': 'to change', 'tochange2': 'tochange2', });
lyr_Kerala_District_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'Area': 'Area', 'Perimeter': 'Perimeter', });
lyr_Master_stages_MODIFIED_1.set('fieldImages', {'DISOLVE_ID': 'TextEdit', 'STAGE NAME': 'TextEdit', 'NEW SPELLI': 'TextEdit', 'STAGES_FNL': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'DISTRICT': 'TextEdit', 'to change': 'TextEdit', 'tochange2': 'TextEdit', });
lyr_Kerala_District_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'Area': 'TextEdit', 'Perimeter': 'TextEdit', });
lyr_Master_stages_MODIFIED_1.set('fieldLabels', {'DISOLVE_ID': 'no label', 'STAGE NAME': 'no label', 'NEW SPELLI': 'no label', 'STAGES_FNL': 'inline label - always visible', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'DISTRICT': 'no label', 'to change': 'no label', 'tochange2': 'no label', });
lyr_Kerala_District_2.set('fieldLabels', {'DISTRICT': 'inline label - always visible', 'Area': 'no label', 'Perimeter': 'no label', });
lyr_Kerala_District_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});