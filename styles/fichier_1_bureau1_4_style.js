var size = 0;
var placement = 'point';

var style_fichier_1_bureau1_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("DENOMINATI") !== null) {
        labelText = String(feature.get("DENOMINATI"));
    }
    
        function rules_fichier_1_bureau1_4(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_fichier_1_bureau1_4rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,158,23,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_fichier_1_bureau1_4(feature, value);
        ;

    return style;
};
