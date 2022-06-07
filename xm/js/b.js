window.onload=function(){
// 传数据
let data = null;
$.ajax({
  url: '../json/appointment.json',
  async: false,
  success: function (res) {
    data = res[0];
  }
});

var dada = document.getElementById("dada");
console.log(dada);
// 调用数据 封装
// function  DateTo(){
  for (var i = 0; i <10; i++) {
    dada.innerHTML += 
       `
       <div class="s"> </div>
       <div class="ss"> <input type="checkbox" class="checkboxOne"> </div>
       <div class="ss1">${data.name[i]}</div>
       <div class="ss2">${data.card[i]}</div>
       <div class="ss3">${data.number[i]}</div>
       <div class="ss4">${data.phone[i]}</div>
       <div class="ss5">${data.Registration[i]}</div>
       <div class="ss6">${data.type[i]}</div>
       <div class="ss7">${data.fee[i]}</div>
       <div class="ss8">${data.state[i]}</div>
       <div class="ss9">${data.treatment[i]}</div>
       <div class="ss0">${data.time[i]}</div>
      <div class="ss01">${data.appointment[i]}</div>
      <div class="ssss">
      <span class="iconfont">&#xe633;</span> 
     
      </div>
      
     `
  }
// }
// DateTo();
// // 删除内容
// function delDate(){
//   $('.s').remove();
// }

// 跳转页面代码
var rl=document.getElementsByClassName("iconfont");
for(var i=0;i<rl.length;i++){
rl[i].onclick=function(){
  window.location.href="operate.html";
}
}

// 搜索框删除数据
// 搜索框
//var da=document.getElementsByClassName("da")[0];
// 搜索按钮
// var search=document.getElementsByClassName("search")[0];
// var search=$('.search');
// if($(this).text()==='搜索'){
//   if(search.val()===''||search.val()==='请输入病人姓名/卡号'){
//     alert("请输入搜索关键字")
//   }else{
//     $(this).text("取消");

//     arr=[];
//     for(let i=0;i<data.name.length;i++){
//       if(data.name[i].indexOf(search.val())!==-1){
//         arr.push(i);
//       }
//     }
//     delDate()
//     if(arr.length===0){
//       Headers.innerHTML+=`<h2 class="s" style="text-align:center;color:red;">未查询到[${search.val()}]相关数据</h2>`
    
//     }else{
//       for (var i = 0; i <10; i++) {
//         dada.innerHTML += 
//            `
//            <div class="s"> </div>
//            <div class="ss"> <input type="checkbox" class="checkboxOne"> </div>
//            <div class="ss1">${data.name[arr[i]]}</div>
//            <div class="ss2">${data.card[arr[i]]}</div>
//            <div class="ss3">${data.number[arr[i]]}</div>
//            <div class="ss4">${data.phone[arr[i]]}</div>
//            <div class="ss5">${data.Registration[arr[i]]}</div>
//            <div class="ss6">${data.type[arr[i]]}</div>
//            <div class="ss7">${data.fee[arr[i]]}</div>
//            <div class="ss8">${data.state[arr[i]]}</div>
//            <div class="ss9">${data.treatment[arr[i]]}</div>
//            <div class="ss0">${data.time[arr[i]]}</div>
//           <div class="ss01">${data.appointment[arr[i]]}</div>
//           <div class="ssss">
//           <span class="iconfont">&#xe633;</span> 
         
//           </div>
          
//          `
//       }
//     }

//   }
// }else{
//   $(this).text("搜索");
//   delDate();
//   DateTo()
// }


// 按钮
var all=document.getElementsByClassName("checkboxAll")[0];
var one=document.getElementsByClassName("checkboxOne");
  all.onclick=function(){
    if(all.checked){
      for(let i=0;i<one.length;i++){
        one[i].checked=true;

      }
    }else{
      for(let i=0;i<one.length;i++){
        one[i].checked=false;
      }
    }

  }

 
  
   }







