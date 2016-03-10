/*TMODJS:{"version":1,"md5":"77fa93a526a36b3d400d69436fcef19d"}*/
template('echart/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$string=$utils.$string,dataAlert=$data.dataAlert,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="row"> <div class="col-md-6"> <div class="card"> <div class="card-header"> <h2>接警数量统计</h2> </div> <div class="card-body"> <div class="chart-edge m-0"> <div id="statAlert" style="height:300px"></div> </div> </div> </div> </div> <div class="col-md-6"> <div class="card"> <div class="card-header"> <h2>工单处理情况统计</h2> </div> <div class="card-body"> <div class="chart-edge m-0"> <div id="statOrder" style="height:300px"></div> </div> </div> </div> </div> </div> </div> <script> $(function () { var optAlert = { "tooltip": { "trigger": "item", "formatter": "{a} <br/>{b} : {c} ({d}%)" }, "legend": { "orient": "vertical", "x": "left", "data": [ "未完工", "已完工", "误报" ] }, "series": [ { "name": "接警数量", "type": "pie", "radius": "55%", "center": [ "50%", "60%" ], "data":';
$out+=$string(dataAlert);
$out+=' } ] }; mycatui.echart.createByOp(\'pie\', \'statAlert\', optAlert); mycatui.echart.createByOpName(\'bar\', \'statOrder\', \'optOrder\'); }); </script>';
return new String($out);
});