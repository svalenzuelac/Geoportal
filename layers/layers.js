var wms_layers = [];

var format_rios_princ_0 = new ol.format.GeoJSON();
var features_rios_princ_0 = format_rios_princ_0.readFeatures(json_rios_princ_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_princ_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_princ_0.addFeatures(features_rios_princ_0);
var lyr_rios_princ_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_princ_0, 
                style: style_rios_princ_0,
                popuplayertitle: "rios_princ",
                interactive: true,
                title: '<img src="styles/legend/rios_princ_0.png" /> rios_princ'
            });
var format_pozos_1 = new ol.format.GeoJSON();
var features_pozos_1 = format_pozos_1.readFeatures(json_pozos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pozos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pozos_1.addFeatures(features_pozos_1);
var lyr_pozos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pozos_1, 
                style: style_pozos_1,
                popuplayertitle: "pozos",
                interactive: true,
                title: '<img src="styles/legend/pozos_1.png" /> pozos'
            });
var format_mun_2 = new ol.format.GeoJSON();
var features_mun_2 = format_mun_2.readFeatures(json_mun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mun_2.addFeatures(features_mun_2);
var lyr_mun_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mun_2, 
                style: style_mun_2,
                popuplayertitle: "mun",
                interactive: true,
                title: '<img src="styles/legend/mun_2.png" /> mun'
            });
var format_LineasSismicas_3 = new ol.format.GeoJSON();
var features_LineasSismicas_3 = format_LineasSismicas_3.readFeatures(json_LineasSismicas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineasSismicas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineasSismicas_3.addFeatures(features_LineasSismicas_3);
var lyr_LineasSismicas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineasSismicas_3, 
                style: style_LineasSismicas_3,
                popuplayertitle: "LineasSismicas",
                interactive: true,
                title: '<img src="styles/legend/LineasSismicas_3.png" /> LineasSismicas'
            });
var format_Bloques_4 = new ol.format.GeoJSON();
var features_Bloques_4 = format_Bloques_4.readFeatures(json_Bloques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bloques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bloques_4.addFeatures(features_Bloques_4);
var lyr_Bloques_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bloques_4, 
                style: style_Bloques_4,
                popuplayertitle: "Bloques",
                interactive: true,
                title: '<img src="styles/legend/Bloques_4.png" /> Bloques'
            });

lyr_rios_princ_0.setVisible(true);lyr_pozos_1.setVisible(true);lyr_mun_2.setVisible(true);lyr_LineasSismicas_3.setVisible(true);lyr_Bloques_4.setVisible(true);
var layersList = [lyr_rios_princ_0,lyr_pozos_1,lyr_mun_2,lyr_LineasSismicas_3,lyr_Bloques_4];
lyr_rios_princ_0.set('fieldAliases', {'qc_id': 'qc_id', 'id_st': 'id_st', 'nombre': 'nombre', 'shape_len': 'shape_len', });
lyr_pozos_1.set('fieldAliases', {'qc_id': 'qc_id', 'object_key': 'object_key', 'uwi': 'uwi', 'well_name': 'well_name', 'well_count': 'well_count', 'departamen': 'departamen', 'well_cou_1': 'well_cou_1', 'well_tvd': 'well_tvd', 'well_kb_el': 'well_kb_el', 'rotary_ele': 'rotary_ele', 'well_drill': 'well_drill', 'well_groun': 'well_groun', 'field_abre': 'field_abre', 'geologic_p': 'geologic_p', 'contract_k': 'contract_k', 'contrato': 'contrato', 'well_longi': 'well_longi', 'well_latit': 'well_latit', 'well_x_coo': 'well_x_coo', 'well_y_coo': 'well_y_coo', 'well_x_dep': 'well_x_dep', 'well_y_dep': 'well_y_dep', 'datum_key': 'datum_key', 'datum': 'datum', 'well_sist_': 'well_sist_', 'well_x_c_1': 'well_x_c_1', 'well_y_c_1': 'well_y_c_1', 'well_x_d_1': 'well_x_d_1', 'well_y_d_1': 'well_y_d_1', 'operator_k': 'operator_k', 'operator': 'operator', 'well_spud_': 'well_spud_', 'quality_co': 'quality_co', 'coord_qual': 'coord_qual', 'document_k': 'document_k', 'documento': 'documento', 'creation_d': 'creation_d', 'shape_anh': 'shape_anh', 'comment': 'comment', 'certificac': 'certificac', 'certified_': 'certified_', 'well_compl': 'well_compl', 'well_class': 'well_class', 'well_cla_1': 'well_cla_1', 'well_statu': 'well_statu', 'well_sta_1': 'well_sta_1', 'well_type_': 'well_type_', 'welltype': 'welltype', 'deviation_': 'deviation_', 'welldeviat': 'welldeviat', 'fecha_actu': 'fecha_actu', 'inserted_b': 'inserted_b', 'entitlemen': 'entitlemen', 'epis_loade': 'epis_loade', 'kedit_last': 'kedit_last', 'kedit_loca': 'kedit_loca', 'actualizad': 'actualizad', 'update_dat': 'update_dat', });
lyr_mun_2.set('fieldAliases', {'qc_id': 'qc_id', 'id_espacia': 'id_espacia', 'area_ofici': 'area_ofici', 'entidad_te': 'entidad_te', 'nom_depart': 'nom_depart', 'nom_munici': 'nom_munici', 'cod_depto': 'cod_depto', });
lyr_LineasSismicas_3.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'object_key': 'object_key', 'survey_nam': 'survey_nam', 'line_name': 'line_name', 'company_ke': 'company_ke', 'company_na': 'company_na', 'operator_k': 'operator_k', 'operator_n': 'operator_n', 'channel_nu': 'channel_nu', 'fold': 'fold', 'line_lengt': 'line_lengt', 'arrang_typ': 'arrang_typ', 'reg_time': 'reg_time', 'sample_rat': 'sample_rat', 'max_offset': 'max_offset', 'azimut': 'azimut', 'ano_adq': 'ano_adq', 'datum_key': 'datum_key', 'recept_dis': 'recept_dis', 'shot_dis': 'shot_dis', 'datum': 'datum', 'comment': 'comment', 'tramo_line': 'tramo_line', 'punto_inic': 'punto_inic', 'punto_fina': 'punto_fina', 'update_dat': 'update_dat', 'shape_leng': 'shape_leng', 'miniatura': 'miniatura', });
lyr_Bloques_4.set('fieldAliases', {'qc_id': 'qc_id', 'contrat_id': 'contrat_id', 'contrato_n': 'contrato_n', 'area_nombr': 'area_nombr', 'fecha_firm': 'fecha_firm', 'clasificac': 'clasificac', 'tipo_contr': 'tipo_contr', 'estad_area': 'estad_area', 'subtipo': 'subtipo', 'operador': 'operador', 'opr_abr': 'opr_abr', 'area_ha': 'area_ha', 'cuenca_sed': 'cuenca_sed', 'superficie': 'superficie', 'yacimiento': 'yacimiento', 'proceso': 'proceso', 'leyenda': 'leyenda', 'url_minuta': 'url_minuta', });
lyr_rios_princ_0.set('fieldImages', {'qc_id': '', 'id_st': '', 'nombre': '', 'shape_len': '', });
lyr_pozos_1.set('fieldImages', {'qc_id': '', 'object_key': '', 'uwi': '', 'well_name': '', 'well_count': '', 'departamen': '', 'well_cou_1': '', 'well_tvd': '', 'well_kb_el': '', 'rotary_ele': '', 'well_drill': '', 'well_groun': '', 'field_abre': '', 'geologic_p': '', 'contract_k': '', 'contrato': '', 'well_longi': '', 'well_latit': '', 'well_x_coo': '', 'well_y_coo': '', 'well_x_dep': '', 'well_y_dep': '', 'datum_key': '', 'datum': '', 'well_sist_': '', 'well_x_c_1': '', 'well_y_c_1': '', 'well_x_d_1': '', 'well_y_d_1': '', 'operator_k': '', 'operator': '', 'well_spud_': '', 'quality_co': '', 'coord_qual': '', 'document_k': '', 'documento': '', 'creation_d': '', 'shape_anh': '', 'comment': '', 'certificac': '', 'certified_': '', 'well_compl': '', 'well_class': '', 'well_cla_1': '', 'well_statu': '', 'well_sta_1': '', 'well_type_': '', 'welltype': '', 'deviation_': '', 'welldeviat': '', 'fecha_actu': '', 'inserted_b': '', 'entitlemen': '', 'epis_loade': '', 'kedit_last': '', 'kedit_loca': '', 'actualizad': '', 'update_dat': '', });
lyr_mun_2.set('fieldImages', {'qc_id': '', 'id_espacia': '', 'area_ofici': '', 'entidad_te': '', 'nom_depart': '', 'nom_munici': '', 'cod_depto': '', });
lyr_LineasSismicas_3.set('fieldImages', {'qc_id': '', 'objectid': '', 'object_key': '', 'survey_nam': '', 'line_name': '', 'company_ke': '', 'company_na': '', 'operator_k': '', 'operator_n': '', 'channel_nu': '', 'fold': '', 'line_lengt': '', 'arrang_typ': '', 'reg_time': '', 'sample_rat': '', 'max_offset': '', 'azimut': '', 'ano_adq': '', 'datum_key': '', 'recept_dis': '', 'shot_dis': '', 'datum': '', 'comment': '', 'tramo_line': '', 'punto_inic': '', 'punto_fina': '', 'update_dat': '', 'shape_leng': '', 'miniatura': '', });
lyr_Bloques_4.set('fieldImages', {'qc_id': '', 'contrat_id': '', 'contrato_n': '', 'area_nombr': '', 'fecha_firm': '', 'clasificac': '', 'tipo_contr': '', 'estad_area': '', 'subtipo': '', 'operador': '', 'opr_abr': '', 'area_ha': '', 'cuenca_sed': '', 'superficie': '', 'yacimiento': '', 'proceso': '', 'leyenda': '', 'url_minuta': '', });
lyr_rios_princ_0.set('fieldLabels', {'qc_id': 'no label', 'id_st': 'no label', 'nombre': 'no label', 'shape_len': 'no label', });
lyr_pozos_1.set('fieldLabels', {'qc_id': 'no label', 'object_key': 'no label', 'uwi': 'no label', 'well_name': 'no label', 'well_count': 'no label', 'departamen': 'no label', 'well_cou_1': 'no label', 'well_tvd': 'no label', 'well_kb_el': 'no label', 'rotary_ele': 'no label', 'well_drill': 'no label', 'well_groun': 'no label', 'field_abre': 'no label', 'geologic_p': 'no label', 'contract_k': 'no label', 'contrato': 'no label', 'well_longi': 'no label', 'well_latit': 'no label', 'well_x_coo': 'no label', 'well_y_coo': 'no label', 'well_x_dep': 'no label', 'well_y_dep': 'no label', 'datum_key': 'no label', 'datum': 'no label', 'well_sist_': 'no label', 'well_x_c_1': 'no label', 'well_y_c_1': 'no label', 'well_x_d_1': 'no label', 'well_y_d_1': 'no label', 'operator_k': 'no label', 'operator': 'no label', 'well_spud_': 'no label', 'quality_co': 'no label', 'coord_qual': 'no label', 'document_k': 'no label', 'documento': 'no label', 'creation_d': 'no label', 'shape_anh': 'no label', 'comment': 'no label', 'certificac': 'no label', 'certified_': 'no label', 'well_compl': 'no label', 'well_class': 'no label', 'well_cla_1': 'no label', 'well_statu': 'no label', 'well_sta_1': 'no label', 'well_type_': 'no label', 'welltype': 'no label', 'deviation_': 'no label', 'welldeviat': 'no label', 'fecha_actu': 'no label', 'inserted_b': 'no label', 'entitlemen': 'no label', 'epis_loade': 'no label', 'kedit_last': 'no label', 'kedit_loca': 'no label', 'actualizad': 'no label', 'update_dat': 'no label', });
lyr_mun_2.set('fieldLabels', {'qc_id': 'no label', 'id_espacia': 'no label', 'area_ofici': 'no label', 'entidad_te': 'no label', 'nom_depart': 'no label', 'nom_munici': 'no label', 'cod_depto': 'no label', });
lyr_LineasSismicas_3.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'object_key': 'no label', 'survey_nam': 'no label', 'line_name': 'no label', 'company_ke': 'no label', 'company_na': 'no label', 'operator_k': 'no label', 'operator_n': 'no label', 'channel_nu': 'no label', 'fold': 'no label', 'line_lengt': 'no label', 'arrang_typ': 'no label', 'reg_time': 'no label', 'sample_rat': 'no label', 'max_offset': 'no label', 'azimut': 'no label', 'ano_adq': 'no label', 'datum_key': 'no label', 'recept_dis': 'no label', 'shot_dis': 'no label', 'datum': 'no label', 'comment': 'no label', 'tramo_line': 'no label', 'punto_inic': 'no label', 'punto_fina': 'no label', 'update_dat': 'no label', 'shape_leng': 'no label', 'miniatura': 'no label', });
lyr_Bloques_4.set('fieldLabels', {'qc_id': 'no label', 'contrat_id': 'no label', 'contrato_n': 'no label', 'area_nombr': 'no label', 'fecha_firm': 'no label', 'clasificac': 'no label', 'tipo_contr': 'no label', 'estad_area': 'no label', 'subtipo': 'no label', 'operador': 'no label', 'opr_abr': 'no label', 'area_ha': 'no label', 'cuenca_sed': 'no label', 'superficie': 'no label', 'yacimiento': 'no label', 'proceso': 'no label', 'leyenda': 'no label', 'url_minuta': 'no label', });
lyr_Bloques_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});