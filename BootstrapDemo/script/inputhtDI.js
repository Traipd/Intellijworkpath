
/*初始化*/
$(document).ready(function(){
    /*  createApi();*/
    createApidi2();/*多个输入框的使用*/

});

var inputValuedi=["51","52","53","54","55","56","57","58","59","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95"
];
var inputValuedi1=["关闭","关闭","门磁","红外","水浸","空调","","","111","","","","","","","","","","","","","","","",""
];
var inputValuedi2=["1","1","1","1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"
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
var autoCompletedi2;
function createApidi2(){
    if(!autoCompletedi2){
        autoCompletedi2 = new AutoComplete('b','b1','b2','bb',inputValuedi,inputValuedi1,inputValuedi2);//第一个参数是输入框id，第二个是下拉显示的id，第三个是获取的全部数据。
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