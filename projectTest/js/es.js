//function ajax_submit(){
//    $.ajax({
//            url:'',
//            type:'POST',
////            data:$('#form').serialize(),
//            data:{
//                "bridge_name ":$(qm).val(),
//                "bridge_type ":$(lx).val(),
//                "parts":$(bw).val(),
//                "check_time":$(sel).val(),
//                "goujian":$(gj).val(),
//                "number":$(s1).val(),
//                "captioon":$(biao).val(),
//                "section":$(erbiao).val(),
//                "cys":$(xh).val()
//                "defect_goujian":$(qsgj).val(),
//                "defect_type":$(qslx1).val(),
//
//
//            },
////
//            tradtional: true,
//            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//            async:false,
//            dataType: "json",
//            success:function(obj){
//                console.log(obj)
//            }
//        });
//		    }
$.each([{name:"limeng",email:"xfjylimeng"},{name:"hehe",email:"xfjylimeng"}],function(i,n)
{
alert("索引:"+i+"对应值为："+n.name);
});


var arr1 = [ "one", "two", "three", "four", "five" ];
$.each(arr1, function(){
alert(this);
});


var arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
$.each(arr2, function(i, item){
alert(item[0]);
});


var obj = { one:1, two:2, three:3, four:4, five:5 };
$.each(obj, function(key, val) {
alert(obj[key]);
});
