ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32639").setExtent([-111223.320950, 2645815.680660, 1763316.548674, 4547085.960767]);
var wms_layers = [];

var format_IranCities_0 = new ol.format.GeoJSON();
var features_IranCities_0 = format_IranCities_0.readFeatures(json_IranCities_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_IranCities_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IranCities_0.addFeatures(features_IranCities_0);
var lyr_IranCities_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IranCities_0, 
                style: style_IranCities_0,
                popuplayertitle: 'IranCities',
                interactive: true,
                title: '<img src="styles/legend/IranCities_0.png" /> IranCities'
            });
var format_sea_1 = new ol.format.GeoJSON();
var features_sea_1 = format_sea_1.readFeatures(json_sea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_sea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sea_1.addFeatures(features_sea_1);
var lyr_sea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sea_1, 
                style: style_sea_1,
                popuplayertitle: 'sea',
                interactive: true,
                title: '<img src="styles/legend/sea_1.png" /> sea'
            });
var format_states_2 = new ol.format.GeoJSON();
var features_states_2 = format_states_2.readFeatures(json_states_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_states_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_states_2.addFeatures(features_states_2);
var lyr_states_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_states_2, 
                style: style_states_2,
                popuplayertitle: 'states',
                interactive: true,
                title: '<img src="styles/legend/states_2.png" /> states'
            });

lyr_IranCities_0.setVisible(true);lyr_sea_1.setVisible(true);lyr_states_2.setVisible(true);
var layersList = [lyr_IranCities_0,lyr_sea_1,lyr_states_2];
lyr_IranCities_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'area': 'area', });
lyr_sea_1.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_states_2.set('fieldAliases', {'OSTAN': 'OSTAN', 'Area': 'Area', 'Perimeter': 'Perimeter', 'OBGECTID': 'OBGECTID', });
lyr_IranCities_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'area': 'TextEdit', });
lyr_sea_1.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_states_2.set('fieldImages', {'OSTAN': '', 'Area': '', 'Perimeter': '', 'OBGECTID': '', });
lyr_IranCities_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'area': 'no label', });
lyr_sea_1.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', });
lyr_states_2.set('fieldLabels', {'OSTAN': 'no label', 'Area': 'header label - always visible', 'Perimeter': 'no label', 'OBGECTID': 'inline label - always visible', });
lyr_states_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});