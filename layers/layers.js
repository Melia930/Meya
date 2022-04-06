var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_contourMMM_20210302_geofabrik_1 = new ol.format.GeoJSON();
var features_contourMMM_20210302_geofabrik_1 = format_contourMMM_20210302_geofabrik_1.readFeatures(json_contourMMM_20210302_geofabrik_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contourMMM_20210302_geofabrik_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contourMMM_20210302_geofabrik_1.addFeatures(features_contourMMM_20210302_geofabrik_1);
var lyr_contourMMM_20210302_geofabrik_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contourMMM_20210302_geofabrik_1, 
                style: style_contourMMM_20210302_geofabrik_1,
                interactive: true,
                title: '<img src="styles/legend/contourMMM_20210302_geofabrik_1.png" /> contourMMM_20210302_geofabrik'
            });
var format_31communesMontpellier_20210301_geofabrik_2 = new ol.format.GeoJSON();
var features_31communesMontpellier_20210301_geofabrik_2 = format_31communesMontpellier_20210301_geofabrik_2.readFeatures(json_31communesMontpellier_20210301_geofabrik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31communesMontpellier_20210301_geofabrik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31communesMontpellier_20210301_geofabrik_2.addFeatures(features_31communesMontpellier_20210301_geofabrik_2);
var lyr_31communesMontpellier_20210301_geofabrik_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_31communesMontpellier_20210301_geofabrik_2, 
                style: style_31communesMontpellier_20210301_geofabrik_2,
                interactive: true,
                title: '<img src="styles/legend/31communesMontpellier_20210301_geofabrik_2.png" /> 31communesMontpellier_20210301_geofabrik'
            });
var format_Mask_3 = new ol.format.GeoJSON();
var features_Mask_3 = format_Mask_3.readFeatures(json_Mask_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mask_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mask_3.addFeatures(features_Mask_3);
var lyr_Mask_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mask_3, 
                style: style_Mask_3,
                interactive: true,
                title: 'Mask'
            });
var format_fichier_1_bureau1_4 = new ol.format.GeoJSON();
var features_fichier_1_bureau1_4 = format_fichier_1_bureau1_4.readFeatures(json_fichier_1_bureau1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fichier_1_bureau1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fichier_1_bureau1_4.addFeatures(features_fichier_1_bureau1_4);
var lyr_fichier_1_bureau1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fichier_1_bureau1_4, 
                style: style_fichier_1_bureau1_4,
                interactive: true,
                title: 'fichier_1_bureau1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_contourMMM_20210302_geofabrik_1.setVisible(true);lyr_31communesMontpellier_20210301_geofabrik_2.setVisible(true);lyr_Mask_3.setVisible(true);lyr_fichier_1_bureau1_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_contourMMM_20210302_geofabrik_1,lyr_31communesMontpellier_20210301_geofabrik_2,lyr_Mask_3,lyr_fichier_1_bureau1_4];
lyr_contourMMM_20210302_geofabrik_1.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', });
lyr_31communesMontpellier_20210301_geofabrik_2.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', });
lyr_Mask_3.set('fieldAliases', {'params:(0,0)': 'params:(0,0)', });
lyr_fichier_1_bureau1_4.set('fieldAliases', {'ID_PC': 'ID_PC', 'DENOMINATI': 'DENOMINATI', 'CAT_MOA': 'CAT_MOA', 'ADR_T_F2': 'ADR_T_F2', 'ADR_CP_T2': 'ADR_CP_T2', 'ADR_LOCALI': 'ADR_LOCALI', 'PAYS_T2': 'PAYS_T2', 'Somme de B': 'Somme de B', 'ID parcell': 'ID parcell', 'altitude': 'altitude', 'longitude': 'longitude', 'latitude': 'latitude', 'ID adresse': 'ID adresse', 'precision': 'precision', 'qualite': 'qualite', 'adresse ge': 'adresse ge', 'Position': 'Position', 'POSITION_N': 'POSITION_N', });
lyr_contourMMM_20210302_geofabrik_1.set('fieldImages', {'ID': '', 'NOM_COM': '', 'NOM_COM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'CODE_EPCI': '', });
lyr_31communesMontpellier_20210301_geofabrik_2.set('fieldImages', {'ID': '', 'NOM_COM': '', 'NOM_COM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'CODE_EPCI': '', });
lyr_Mask_3.set('fieldImages', {'params:(0,0)': '', });
lyr_fichier_1_bureau1_4.set('fieldImages', {'ID_PC': 'TextEdit', 'DENOMINATI': 'TextEdit', 'CAT_MOA': 'TextEdit', 'ADR_T_F2': 'TextEdit', 'ADR_CP_T2': 'TextEdit', 'ADR_LOCALI': 'TextEdit', 'PAYS_T2': 'TextEdit', 'Somme de B': 'TextEdit', 'ID parcell': 'TextEdit', 'altitude': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'ID adresse': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'adresse ge': 'TextEdit', 'Position': 'TextEdit', 'POSITION_N': 'TextEdit', });
lyr_contourMMM_20210302_geofabrik_1.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', });
lyr_31communesMontpellier_20210301_geofabrik_2.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', });
lyr_Mask_3.set('fieldLabels', {'params:(0,0)': 'no label', });
lyr_fichier_1_bureau1_4.set('fieldLabels', {'ID_PC': 'header label', 'DENOMINATI': 'inline label', 'CAT_MOA': 'no label', 'ADR_T_F2': 'no label', 'ADR_CP_T2': 'no label', 'ADR_LOCALI': 'no label', 'PAYS_T2': 'no label', 'Somme de B': 'no label', 'ID parcell': 'no label', 'altitude': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'ID adresse': 'no label', 'precision': 'no label', 'qualite': 'no label', 'adresse ge': 'no label', 'Position': 'no label', 'POSITION_N': 'no label', });
lyr_fichier_1_bureau1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});