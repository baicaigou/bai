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
// console.log(header);
var dada = document.getElementById("dada");
console.log(dada);

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
// 跳转页面代码
var rl=document.getElementsByClassName("iconfont");
for(var i=0;i<rl.length;i++){
rl[i].onclick=function(){
  window.location.href="operate.html";
}
}



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


// 获取 颜色
// var dada = document.getElementById("dada");
// for(let i=0;i<dada.length;i++){
//   one[i].onclick=function(){
//     console.log(1);
//     dada.style.background="yellow";
// }

// }
 
  
   }







