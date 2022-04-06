var wms_layers = [];

var format_ZE_OCCITANIE_0 = new ol.format.GeoJSON();
var features_ZE_OCCITANIE_0 = format_ZE_OCCITANIE_0.readFeatures(json_ZE_OCCITANIE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZE_OCCITANIE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZE_OCCITANIE_0.addFeatures(features_ZE_OCCITANIE_0);
var lyr_ZE_OCCITANIE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZE_OCCITANIE_0, 
                style: style_ZE_OCCITANIE_0,
                interactive: true,
                title: '<img src="styles/legend/ZE_OCCITANIE_0.png" /> ZE_OCCITANIE'
            });

lyr_ZE_OCCITANIE_0.setVisible(true);
var layersList = [lyr_ZE_OCCITANIE_0];
lyr_ZE_OCCITANIE_0.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'LIBGEO': 'LIBGEO', 'ZE2020': 'ZE2020', 'LIBZE2020': 'LIBZE2020', 'ZE2020_PAR': 'ZE2020_PAR', 'DEP': 'DEP', 'REG': 'REG', 'BE2021': 'BE2021', 'LIBBE2021': 'LIBBE2021', });
lyr_ZE_OCCITANIE_0.set('fieldImages', {'ID': '', 'NOM_COM': '', 'NOM_COM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'CODE_EPCI': '', 'LIBGEO': '', 'ZE2020': '', 'LIBZE2020': '', 'ZE2020_PAR': '', 'DEP': '', 'REG': '', 'BE2021': '', 'LIBBE2021': '', });
lyr_ZE_OCCITANIE_0.set('fieldLabels', {'ID': 'inline label', 'NOM_COM': 'inline label', 'NOM_COM_M': 'inline label', 'INSEE_COM': 'inline label', 'STATUT': 'inline label', 'POPULATION': 'inline label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'inline label', 'LIBGEO': 'no label', 'ZE2020': 'header label', 'LIBZE2020': 'inline label', 'ZE2020_PAR': 'no label', 'DEP': 'inline label', 'REG': 'no label', 'BE2021': 'no label', 'LIBBE2021': 'no label', });
lyr_ZE_OCCITANIE_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});