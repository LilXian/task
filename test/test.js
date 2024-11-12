//新增数据函数
function addRow(){
    var table=document.getElementById('table');
    //console.log(table);
    //获取插入的位置
    var length=table.rows.length;
    //console.log(length);
    //插入行节点
    var newRow=table.insertRow(length);//长度显示2但实际是012
    //console.log(newRow);
    //插入列节点对象
    var nameCol =newRow.insertCell(0);
    var phoneCol =newRow.insertCell(1);
    var actionCol =newRow.insertCell(2);

    //修改节点文本内容
    nameCol.innerHTML='未命名';
    phoneCol.innerHTML='无联系方式';
    actionCol.innerHTML='<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
    console.log(newRow);

}

    //删除数据函数
    function deleteRow(button){
        //console.log(button);
        var row=button.parentNode.parentNode;
        console.log(row);
        //删除这一行
        row.parentNode.removeChild(row);
    }

    //编辑函数
    function editRow(button){
        //获取当前行节点
        var row=button.parentNode.parentNode;
        //获取列节点
        var name=row.cells[0];
        var phone=row.cells[1];

        //弹窗提示语
        var inputName=prompt("请输入名字：");
        var inputPhone=prompt("请输入联系方式：");

        name.innerHTML=inputName;
        phone.innerHTML=inputPhone;
    }