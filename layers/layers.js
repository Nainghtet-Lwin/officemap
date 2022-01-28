var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NPT_TS_1 = new ol.format.GeoJSON();
var features_NPT_TS_1 = format_NPT_TS_1.readFeatures(json_NPT_TS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPT_TS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPT_TS_1.addFeatures(features_NPT_TS_1);
var lyr_NPT_TS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NPT_TS_1, 
                style: style_NPT_TS_1,
                interactive: true,
                title: '<img src="styles/legend/NPT_TS_1.png" /> NPT_TS'
            });
var format_NPT_ECD_Office_2 = new ol.format.GeoJSON();
var features_NPT_ECD_Office_2 = format_NPT_ECD_Office_2.readFeatures(json_NPT_ECD_Office_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPT_ECD_Office_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPT_ECD_Office_2.addFeatures(features_NPT_ECD_Office_2);
var lyr_NPT_ECD_Office_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NPT_ECD_Office_2, 
                style: style_NPT_ECD_Office_2,
                interactive: true,
    title: 'NPT_ECD_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_0.png" /> 52_Sawmill ( Mayankhone)<br />\
    <img src="styles/legend/NPT_ECD_Office_2_1.png" /> Oattarathiri Township Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_2.png" /> Dekkhina_District_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_3.png" /> Dekkhina_Township_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_4.png" /> ECD_DG_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_5.png" /> Naypyitaw Director_office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_6.png" /> ECD_Training_School<br />\
    <img src="styles/legend/NPT_ECD_Office_2_7.png" /> Lewel_Township_Township<br />\
    <img src="styles/legend/NPT_ECD_Office_2_8.png" /> Naypyitaw_Council<br />\
    <img src="styles/legend/NPT_ECD_Office_2_9.png" /> Pokepathiri_Township_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_10.png" /> Pyinmana_Township_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_11.png" /> Takkon_Township_Office<br />\
    <img src="styles/legend/NPT_ECD_Office_2_12.png" /> Oattara District Office<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_NPT_TS_1.setVisible(true);lyr_NPT_ECD_Office_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NPT_TS_1,lyr_NPT_ECD_Office_2];
lyr_NPT_TS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'DT': 'DT', 'DT_PCODE': 'DT_PCODE', 'TS': 'TS', 'TS_PCODE': 'TS_PCODE', 'SELF_ADMIN': 'SELF_ADMIN', 'ST_RG': 'ST_RG', 'TS_MMR4': 'TS_MMR4', 'PCode_V': 'PCode_V', });
lyr_NPT_ECD_Office_2.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', });
lyr_NPT_TS_1.set('fieldImages', {'OBJECTID': 'Hidden', 'ST': 'Hidden', 'ST_PCODE': 'Hidden', 'DT': 'TextEdit', 'DT_PCODE': 'Hidden', 'TS': 'TextEdit', 'TS_PCODE': 'Hidden', 'SELF_ADMIN': 'Hidden', 'ST_RG': 'Hidden', 'TS_MMR4': 'Hidden', 'PCode_V': 'Hidden', });
lyr_NPT_ECD_Office_2.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', });
lyr_NPT_TS_1.set('fieldLabels', {'DT': 'header label', 'TS': 'inline label', });
lyr_NPT_ECD_Office_2.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', });
lyr_NPT_ECD_Office_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});