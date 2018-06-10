function makeDisabledByClass(a,c) {//修改(父标签ID，下‘class名(全部名字)’)的Disabled
    var oUl=document.getElementById(a);
    var aBox=getByClass(oUl, c);

    for(var i=0;i<aBox.length;i++){

        if(aBox[i].disabled==false )/*或使用.readOnly .disabled*/
        { aBox[i].disabled= true;}
        else
        {aBox[i].disabled=false;}
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
//添加行
function addRow(id){

    switch (id){
        case "sb_tb":

            $("#sb_tb").append(
                "<tr  class='warning'>"
                + "<td><input type='checkbox' name='sb_check'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "</tr>") ;
            break;
        case "ai_tb":

            $("#ai_tb").append(
                "<tr  class='warning'>"
                + "<td><input type='checkbox' name='ai_check'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "</tr>") ;
            break;
        case "di_tb":

            $("#di_tb").append(
                "<tr  class='warning'>"
                + "<td><input type='checkbox' name='di_check'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "</tr>") ;
            break;
        case "do_tb":

            $("#do_tb").append(
                "<tr  class='warning'>"
                + "<td><input type='checkbox' name='do_check'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "</tr>") ;
            break;
        case "znsb_sb_tb":

            $("#znsb_sb_tb").append(
                "<tr  class='warning'>"
                + "<td><input type='checkbox' name='znsb_sb_check'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "</tr>") ;
            break;

        case "znsb_td_tb":

            $("#znsb_td_tb").append(
                "<tr  class='warning'>"
                + "<td><input type='checkbox' name='znsb_td_check'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "<td><input class='checkcontrol' disabled='disabled'></td>"
                + "</tr>") ;

            break;

    }
}