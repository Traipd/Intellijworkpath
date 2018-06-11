
/*初始化*/
$(document).ready(function(){
    /*  createApi();*/
    createApi2();/*多个输入框的使用*/

});

var inputValue=["2090","2030","1012","1031","1033","1070","1072","1073",
    "2070","2020","2040","2050","1043","1060","1074","4000","1092","1111",
    "1121","1020","1040","1050","1075","1080","1110","1051","1022","1023",
    "1090","1011","1041","1061","1076","1034","1053","1071","2120","1030",
    "2060","1082","1091","1120","2010"
];
var inputValue1=["动力监控系统" ,"发电机组系统" ,"高压操作电源" ,"移动式发电机组" ,
    "油库/箱" ,"中央空调主机" ,"冷却塔" ,"配电屏" ,"中央空调系统" ,"低压配电系统" ,
    "UPS系统" ,"240V直流系统" ,"UPS配电屏" ,"48V整流设备" ,"水箱" ,"局站名称" ,
    "网络设备" ,"直流列柜" ,"消防安防监测设备" ,"低压配电屏" ,"UPS主机" ,"240V整流设备" ,
    "储冷罐" ,"精密空调" ,"交流列柜" ,"240V蓄电池组" ,"电容补偿柜" ,"谐波滤波器" ,
    "采集设备" ,"变压器" ,"UPS蓄电池组" ,"48V蓄电池组" ,"蝶阀" ,"交流屏" ,"交流屏" ,
    "水泵" ,"机房系统" ,"固定式发电机组" ,"48V直流系统" ,"普通空调" ,"被控设备" ,
    "环境监测设备" ,"高压变配电系统"
];
var inputValue2=["   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,
    "   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,
    "   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,"   " ,
    "   " ,"   " ,"   " ,"   "
];
/*-----------------------------------------需要提示的信息-------------------------------------*/

/*var autoComplete;
/!*-----！注意！ 输入框的 onkeyup="autoComplete.start(event)"------*!/
function createApi(){
    if(!autoComplete){
        autoComplete = new AutoComplete('p_apiName','auto',inputValue);//第一个参数是输入框id，第二个是下拉显示的id，第三个是获取的全部数据
        //autoComplete = new AutoComplete('p_apiName','auto',inputValue);//第一个参数是输入框id，第二个是下拉显示的id，第三个是获取的全部数据
    }
}*/
var autoComplete2;
function createApi2(){
    if(!autoComplete2){
        autoComplete2 = new AutoComplete('b1','b','b2','bb',inputValue1,inputValue,inputValue2);//第一个参数是输入框id，第二个是下拉显示的id，第三个是获取的全部数据。
    }
}
/*------------------------------------------------------------------------------------------------------*/

var Bind = function(object, fun) {
    return function() {
        return fun.apply(object, arguments);
    }
}
function AutoComplete(obj,obj1,obj2,autoObj,arr,arr1,arr2){              //数据类型
    this.obj=document.getElementById(obj);        //输入框id，输入框
    this.obj1=document.getElementById(obj1);
    this.obj2=document.getElementById(obj2);
    this.autoObj=document.getElementById(autoObj);//下拉显示的id,DIV的根节点
    this.value_arr=arr;        //获取的全部数据,不要包含重复值
    this.value_arr1=arr1;
    this.value_arr2=arr2;
    this.index=-1;          //当前选中的DIV的索引
    this.search_value="";   //保存当前搜索的字符
}
AutoComplete.prototype={
    //初始化DIV的位置
    init: function(){
        this.autoObj.style.left = this.obj.offsetLeft + "px";
        this.autoObj.style.top  = this.obj.offsetTop + this.obj.offsetHeight + "px";
        this.autoObj.style.width= this.obj.offsetWidth - 2 + "px";//减去边框的长度2px
    },
    //删除自动完成需要的所有DIV
    deleteDIV: function(){
        while(this.autoObj.hasChildNodes()){
            this.autoObj.removeChild(this.autoObj.firstChild);
        }
        this.autoObj.className="auto_hidden";
    },
    //设置值
    setValue: function(_this){
        return function(){
            _this.obj.value=this.seq;
            _this.obj1.value=this.seq1;
            _this.obj2.value=this.seq2;
            _this.autoObj.className="auto_hidden";
        }
    },
    //模拟鼠标移动至DIV时，DIV高亮
    autoOnmouseover: function(_this,_div_index){
        return function(){
            _this.index=_div_index;
            var length = _this.autoObj.children.length;
            for(var j=0;j<length;j++){
                if(j!=_this.index ){
                    _this.autoObj.childNodes[j].className='auto_onmouseout';
                }else{
                    _this.autoObj.childNodes[j].className='auto_onmouseover';
                    _this.obj.value=this.seq;
                }
            }
        }
    },
    //更改classname
    changeClassname: function(length){
        for(var i=0;i<length;i++){
            if(i!=this.index ){
                this.autoObj.childNodes[i].className='auto_onmouseout';
            }else{
                this.autoObj.childNodes[i].className='auto_onmouseover';
                this.obj.value=this.autoObj.childNodes[i].seq;
            }
        }
    }
    ,
    //响应键盘
    pressKey: function(event){
        var length = this.autoObj.children.length;
        //光标键"↓"
        if(event.keyCode==40){
            ++this.index;
            if(this.index>length){
                this.index=0;
            }else if(this.index==length){
                this.obj.value=this.search_value;
            }
            this.changeClassname(length);
        }
        //光标键"↑"
        else if(event.keyCode==38){
            this.index--;
            if(this.index<-1){
                this.index=length - 1;
            }else if(this.index==-1){
                this.obj.value=this.search_value;
            }
            this.changeClassname(length);
        }
        //回车键
        else if(event.keyCode==13){
            this.autoObj.className="auto_hidden";
            this.index=-1;
        }else{
            this.index=-1;
        }
    },
    //程序入口
    start: function(event){
        if(event.keyCode!=13&&event.keyCode!=38&&event.keyCode!=40){
            this.init();
            this.deleteDIV();
            this.search_value=this.obj.value;
            var valueArr=this.value_arr;
            var valueArr1=this.value_arr1;
            var valueArr2=this.value_arr2;
            /* valueArr.sort();
             valueArr1.sort();
             valueArr2.sort();*/
            if(this.obj.value.replace(/(^\s*)|(\s*$)/g,'')==""){ return; }//值为空，退出
            try{ var reg = new RegExp("(" + this.obj.value + ")","i");}
            catch (e){ return; }
            var div_index=0;//记录创建的DIV的索引
            for(var i=0;i<valueArr.length;i++){
                if(reg.test(valueArr[i])){
                    var div = document.createElement("div");
                    div.className="auto_onmouseout";
                    div.seq=valueArr[i];
                    div.seq1=valueArr1[i];
                    div.seq2=valueArr2[i];
                    div.numi=i;//新增
                    div.onclick=this.setValue(this);
                    div.onmouseover=this.autoOnmouseover(this,div_index);
                    div.innerHTML=valueArr[i].replace(reg,"<strong>$1</strong>");//搜索到的字符粗体显示
                    this.autoObj.appendChild(div);
                    this.autoObj.className="auto_show";
                    div_index++;
                }
            }
        }
        this.pressKey(event);
        window.onresize=Bind(this,function(){this.init();});
    }
}