//添加一行表行
function zjaddRows(table) {/*table的id*/

    var table = document.getElementById(table);

    var newTr = table.insertRow();
    newTr.setAttribute("class","warning");

    //添加列
    var newTd0 = newTr.insertCell();
    var newTd1 = newTr.insertCell();
    var newTd2 = newTr.insertCell();
    var newTd3 = newTr.insertCell();
    //设置列内容和属性

   /*写入<tr>的具体内容*/
    newTd0.innerHTML ="<input type=\"checkbox\" name=\"sb_check\">";
    newTd1.innerHTML = "<input class=\"checkcontrol\" disabled=\"disabled\">";
    newTd2.innerHTML ="<input class=\"checkcontrol\" disabled=\"disabled\">";
    newTd3.innerHTML = "<input class=\"checkcontrol\" disabled=\"disabled\">";
//            saveTableValue();//保存值


}
//删除勾选复选框的表行
function onDelete(checkboxlistname,fid) { /*checkbox的name（同一表格所有的name请保持一致），父标签的id*/
    var checks = document.getElementsByName(checkboxlistname);

    var tbBody = document.getElementById(fid);
    for (var i=checks.length-1; i>=0; i--) {
        if (checks[i].checked) {
            tbBody.deleteRow(i+1);
        }
    }
}

function changeCheckedlineDisable(fid,checkboxlistname,inputclassname) {/*父标签的id,checkbox的name（同一表格所有的name请保持一致）,input的class名*/
    var checks = document.getElementsByName(checkboxlistname);
    var fBody = document.getElementById(fid);
    var trlist=fBody.getElementsByTagName('tr');


    for (var i=0; i<checks.length; i++) {
        if (checks[i].checked) {
            var aBox=getByClass(trlist[i+1], inputclassname);
            for(var j=0;j<aBox.length;j++) {
                if (aBox[j].disabled == false)/*或使用.readOnly .disabled*/
                {
                    aBox[j].disabled = true;
                }
                else {
                    aBox[j].disabled = false;
                }
            }
        }
    }

}


function getByClass(oParent, sClass){//通过Class获取标签列表(父标签，‘class名’)

    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');

    for(var i=0;i<aEle.length;i++){

        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }

    return aResult;
}
