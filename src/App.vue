<template>
<div id="app">
  <div class="popup" v-show="vshowCalendar" >
   <div class="popup-conatiner container">
     <div class="row calendar-menu-row">
    <div class="col-2 offset-2 menu-bar">
      <button v-on:click="full()"  class="menu-bar-item1">Весь срок</button>
      <button v-on:click="today()"  class="menu-bar-item2" >Сегодня</button>
      <button v-on:click="yesterday()"  class="menu-bar-item3">Вчера</button>
      <button v-on:click="lastSeven()"  class="menu-bar-item4">Последнее 7 дней</button>
      <button v-on:click="thisMonth()"  class="menu-bar-item5">Последний месяц</button>
      <button v-on:click="lastMonth()"  class="menu-bar-item6">Прошлый месяц</button>
    </div>
    <div class="jzdbox1 jzdbasf jzdcal col-3">
      <div class="title-holder">
       <i v-on:click="previous()" class="small material-icons previous">play_circle_outline</i>
      <i v-text="month+' '+'2020'" class="jzdcalt"></i>
      <i v-on:click="next()" class="small material-icons next">play_circle_outline</i>
      </div>
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>

       <div class="calendar-body">
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span v-bind:key="n" v-for="n in 31" v-text="n"   v-bind:class="{'active':activeClass(n)}">
        </span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
        <span class="jzdb"><!--BLANK--></span>
       </div> 
       <!--v-bind:disabled=""-->
       <div class="button-placer d-flex">
      <button v-on:click="showCalendar()" class="button-black button-cancel">Отмена</button>
      <button v-on:click="showCalendar()" v-bind:disabled="buttonActivator" class="button-org button-togler browser-default">Добавить</button>
      </div>
    </div>
    </div>
   </div>  
  </div>   
 <div class="container">
  <div class="row">
   <div class="col-2 toolbar">
    <div v-bind:key="n" v-for="n in 9" class="tool-bar-item">
       <i class="small material-icons toolbarIcon">{{toolbarIcon}}</i>
       <span v-text="toolBarItem(n)"></span>
    </div>
   </div>
   <div class="col-10">
    <nav class="navbar1">
     <div v-on:click="datePicker()" class="nav-calendar">
      <img class="nav-calendar-img" src="https://img.icons8.com/ios-filled/50/000000/calendar.png"/>
      <div class="navbar-item1">
        <span class="day-holder">{{dayPicker}}</span>
        <i v-on:click="showCalendar()" class="material-icons arrow-down">keyboard_arrow_down</i>
      </div>
      <img class="nav-calendar-filter" src="https://img.icons8.com/ios/50/000000/sorting-options--v1.png"/>
      <div class="navbar-item2">
        <span class="day-holder">Фильтр</span>
        <i class="material-icons arrow-down">keyboard_arrow_down</i>
      </div>
     </div> 
     <div class="nav-buttons"> 
      <div class="navbar-item3">
        <button class="button-black">Выгрузить</button>
      </div>
      <div class="navbar-item4">
        <button class="button-org browser-default">Добавить контакты</button>
      </div>
     </div>
    </nav>
    <div class="content-holder">
     <table >
        <thead>
        <tr class="footer">
          <th>
            <div class="f-circle"></div>
          </th>
          <th>Пользователь</th>
          <th>Дата регистрации</th>
          <th>Последняя активность</th>
          <th>Последнее действие</th>
          <th>Продукт</th>
          <!--<th>asdasd</th>-->
          <th>Oтобразить</th>
          <th><a v-text="quantity"></a>
          <i style="margin-top:5px" class="material-icons">expand_more</i></th>
        </tr>
      </thead>
      <tbody v-for="information in informations">
          <tr>
          <td ><div class="f-circle"></div></td>
          <td ><a v-text="information.user"></a></td>
          <td ><a v-text="information.date"></a></td>
          <td ><a v-text="information.lastActivity"></a></td>
          <td ><a v-text="information.lastAction"></a></td>
          <td ><a v-text="information.product"></a></td>
          <!--<td ><a></a></td>-->
          <td class="create"><i class="material-icons">create</i></td>
          <td><i class="material-icons">delete</i></td>
        </tr>
      </tbody>
     </table>
    </div>
   </div> 
  </div>
 </div> 
</div>   

</template>
<script>
import log from '../../todo_app/node_modules – копія/loglevel';
export default {
      data:()=> ({
      vshowCalendar:false,
      toolbarIcon:"",
      dateNow:"",
      week:"",
      period:"",
      dayPicker:"Сегодня",
      buttonActivator:true,
      //buttonActivators:true,
      fullDate:"",
      quantity:"",
      informations:[
        {
        user:"Maks",
        tittle:"",
        lastActivity:"Delete",
        lastAction:"Deletion",
        product:"Computerasdasdasd",
        display:"visible",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
        {
        user:"sdasd",
        tittle:"",
        lastActivity:"last activity",
        lastAction:"last action",
        product:"product",
        display:"display",
        date:new Date().toLocaleDateString(),
        },
      ],
     monthNames : ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
],
      month:"",
    }),
    methods:{
      full(){
      this.period=1;
      this.buttonActivator=false;
      this.dayPicker="Весь период";
      },
      today(){
      this.period=2;
      this.buttonActivator=false;
      this.dayPicker="Сегодня";
      },
      yesterday(){
      this.period=3;
      this.buttonActivator=false;
      this.dayPicker="Вчера";
      },
      lastSeven(){
      this.period=4;
      this.buttonActivator=false;
      this.dayPicker="Последние 7 дней";
      },
      thisMonth(){
      this.period=5;
      this.buttonActivator=false;
      this.dayPicker="Последний месяц";
      },
      lastMonth(){
      this.period=6;
      this.buttonActivator=false;
      this.dayPicker="Прошлый месяц";
      },
      datePicker(){
        var dayNow = new Date()
        this.dateNow = dayNow.getDate();
        this.month = this.monthNames[dayNow.getMonth()] 
        console.log(this.dateNow , this.week)
        this.dateNow = Number(this.dateNow);
        this.week = this.dateNow -7;
      },
      //previous(){
      //  var dayNow = new Date();
      //  this.month = this.monthNames[dayNow.getMonth() - 1] 
      //},
      //next(){
      //   var dayNow = new Date();
      //  this.month = this.monthNames[dayNow.getMonth() + 1] 
      //},
      activeClass(n){
        switch (this.period) {
         case 1:
           
           return true
         break; 
         case 2:
          if(n === this.dateNow){
            
          return true;
          }
          else{
          return false
          }
         break;
         case 3:
           if(n=== this.dateNow -1){
           
           return true
           }
           else
           return false
         break;  
         case 4:
          if(n<= this.dateNow&&n>=this.week){
            
          return true;
          }
          else{
          return false;
          }
         break;
         case 5:
          if (n>0&&n<=this.dateNow){
          
          return true
          }
          else
          return false
        break;
         case 6:
        var dayNow = new Date();
        this.month = this.monthNames[dayNow.getMonth() - 1] 
          return true
         break;
        }
      },
      showCalendar(){
        this.vshowCalendar = this.vshowCalendar ? false : true;
        //передача данних на бек-енд
        this.$store.dispatch("controlPeriod" , this.period) 
      },
      toolBarItem(n){
        switch (n) {
          case 1:
            this.toolbarIcon =  "dashboard"
            return "Продукт"
            break;
          case 2:
            this.toolbarIcon = "face"
            return "Пользователи"
            break;
          case 3:
            this.toolbarIcon = "add_box"
            return "Конструктор сайта"
            break;
          case 4:
            this.toolbarIcon ="wifi"
            return "Трансляции"
            break;   
          case 5:
            this.toolbarIcon = "mail"
            return "Рассылка"
            break;
          case 6:
            this.toolbarIcon ="people_outline"
            return "Маркетинг"
            break;
          case 7:
            this.toolbarIcon = "call_to_action"
            return "Платежи"
            break;
          case 8:
            this.toolbarIcon = "brightness_5"
            return "Настройки"
            break;
          case 9:
            this.toolbarIcon =  "timeline"
            return "Аналитика"
            break;      
        }
      }
    },
    created: function() {
    this.quantity = this.informations.length;
          },

}
</script>

<style>
@font-face {
    font-family: 'Montserrat';
    src: url('D:\\Прога\\Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
  .navbar1{
    border-radius: 10px;
    max-height: 100px;
    margin-top: 5%;
    background: #FFFFFF;
    height: 85px;
    box-shadow: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding-left: 15px;
  }
  .create{
    float: right;
  }
  .f-circle{
    width: 26px;
height: 26px;
    border-radius: 50%;
    border: 2px solid rgba(131, 142, 157, 0.3);
box-sizing: border-box;
  }
  td a{
    font-size: calc(20px+10*(100vw/1280));
    font-family: Monserrat;
  }
  .content-holder{
    padding-left: 15px;
    background: #FFFFFF;
    border-radius: 10px;  
    display: flex;
    margin-top: 1%;
    flex-direction: column;
    text-align: justify;
    height: 712px;
    overflow-y:scroll;
  }
  table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}
thead{
  font-size: 14px;
}
thead th:nth-child(8) {
  width: 6%;
  align-items: flex-end;
  flex-direction: row;
  display: flex;
}
thead th , tbody td{
  cursor: pointer;
}
thead th:nth-child(1) {
  width: 8%;
}
thead th:nth-child(2) {
  width: 13%;
}

thead th:nth-child(3) {
  width: 15%;
}
thead th:nth-child(4) {
  width: 15%;
}
thead th:nth-child(5) {
  width: 15%;
}
thead th:nth-child(6) {
  width: 18%;
  overflow-x: hidden;
}
thead th:nth-child(7) {
  width: 10%;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 130%;
}
  .active{
    background: rgba(255, 116, 57, 0.2);
    /*color: #FFFFFF !important;*/
  }
  .day-holder{
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 130%;
  }
  .nav-calendar-filter{
    transform: rotate(90deg);
    width: 25px;
    height: 25px;
  }
  .nav-calendar-img{
    width: 25px;
    height: 25px;
  }
  .nav-calendar{
    flex-direction: row;
    display: flex;
    align-items:center;
  }
  .navbar-item1 ,.navbar-item2{
    height: 30px;
    display: flex;
    align-self: center;
    align-items: center;
    color: black;
    cursor: pointer;
  }
  .navbar-item1,span{
    padding-left: 5px;
  }
  .navbar-item2,span{
    padding-left: 5px;
  }
  .nav-buttons{
    flex-direction: row;
    display: flex;
    align-self:center;
    position: absolute;
    right: 20px;
  }
  .button-org{
  background: #FF7439;
  border-radius: 7px;
  color: #FFFFFF;
  height: 45px;
  display: flex;
  align-self: center;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  border: none;
  border: 2px solid #FF7439;
  }
  .button-org:hover{
    color: #FF7439;
    background-color: #FFFFFF;
    border: 2px solid  #FF7439;
  }
  .button-org:focus{
     color: #FF7439;
    background-color: #FFFFFF;
    border: 2px solid  #FF7439 !important;
  }
  .button-black{
  background: #ffffff;
  border-radius: 7px;
  color: black;
  border: 2px solid black;
  height: 45px;
  margin-right: 10px;
  display: flex;
  align-self: center;
  align-items: center;
  font-family:Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  }
  .button-black:hover{
    color: white;
    background-color: black;
  }
  .button-black:focus{
    color: white;
    background-color: black;
  }
  .footer{
    font-size: 12px;
  }
  .toolbar{
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /*height: 870px;*/
    margin-top: 4%;
    
  }
  .toolbarIcon{
    margin-top: 10px;
  }
  .tool-bar-item{
    background: #FFFFFF;
    border: 1px solid rgba(128, 158, 191, 0.2);
    box-sizing: border-box;
    border-radius: 6px;
    height: 85px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
  }
    .tool-bar-item:hover{
    color: #FF7439;
    background-color: #FFFFFF;
    border: 0.5px solid  #FF7439;
  }
 .tool-bar-item:nth-child(9){
   margin-bottom: 10px;
  }
  .navbar-item1:hover{
  color: #FF7439;
  }
  .navbar-item2:hover{
  color: #FF7439;
  }
  .arrow-down:hover{
  color: #FF7439;
  transform: rotate(180deg);
  }
  /*calendar  calendar  calendar  calendar */
  body {
  background-color:#282423;
}
.popup{
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: row;
  align-items:center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(240, 246, 252, 0.7);
backdrop-filter: blur(4px);
  z-index: 1111;
  /*filter: blur(1px);*/
}
/*.popup-container{

}*/
.calendar-menu-row{
  height: 332px;
}
.menu-bar{
  height: 289px;
  background-color: white;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
border-radius: 10px;
cursor: pointer;
}
.menu-bar button{
  background-color: white;
  margin-top: 15px;
    border: 2px solid white;
  box-sizing: border-box;
  border-radius: 5px;
}
.menu-bar button:hover{
  border: 2px solid #EBEEF3;
  box-sizing: border-box;
  border-radius: 5px;
}
.menu-bar button:focus{
  background: #F0F3F8;
  /*border: px solid white;*/
}
.button-placer{
margin-top: 10px;
flex-direction: row;
justify-content: center;
}
.button-placer button{
  margin: 0 10 0 10;
}
.title-holder{
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items:center;
  cursor: pointer;
}
.previous{
  transform: rotate(180deg);
}
.jzdbox1 {
  width:288px; 
   height: 350px;
  background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
border-radius: 10px;
  overflow:hidden; 
  display:block; 
  margin-left:10px; 
  /*box-shadow:0 0 10px #201d1c; */
  /*margin:0 auto; */
  /*margin-top:100px;*/
}

/*.jzdcal {
  padding:0 10px 10px 10px; 
  box-sizing:border-box!important; 
  background:#749d9e; 
  background: -webkit-linear-gradient(#749d9e, #b3a68b)!important; 
  background: -o-linear-gradient(#749d9e, #b3a68b)!important; 
  background: -moz-linear-gradient(#749d9e, #b3a68b)!important; 
  background: linear-gradient(#749d9e, #b3a68b)!important;
}*/
.calendar-body{
  background-color: #F0F3F8;
  justify-self: center;
  margin:0px auto;
   width:250px; 
  height:250px;
  border-radius:10px ; 
}
.button-togler{
  width: 150px;
  justify-content: center;
  border: 2px solid  #FF7439 ;
  
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 150%;
}
.button-togler:disabled ,.button-togler[disabled] {
  background: rgba(255, 116, 57, 0.5);
  color: white;
  border: 2px solid white !important;
  pointer-events: none;
}
.button-togler:hover{
  color: white;
    background:#F16E36;;
  border: 2px solid  #F16E36 ;
}
.button-cancel{
  background:white;
  border: 2px solid black;
  color: black;
  width: 150px;
  justify-content: center;
}
.button-cancel:hover{
  background:black;
  border: 2px solid black;
  color: white;
}
.jzdcalt {
  font:18px 'Roboto'; 
  /*font-weight:700; */
  color:black;
  display:block; 
font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
  text-align:center; 
  /*letter-spacing:1px;*/
}

.jzdcal span {
  font:11px 'Roboto'; 
  font-weight:400; 
  color:black;
  text-align:center;
  width:35px; 
  height:35px; 
  display:block; 
  float:right; 
  overflow:hidden; 
  line-height:40px;
  cursor: pointer;
}
.jzdcal span:hover {
 border-radius: 50%;
 background: #DFE9F3;
}
/*.jzdcal span:checked {
 border-radius: 50%;
 background: #DFE9F3;
}*/
.jzdcal .jzdb:before {
  opacity:0.3; 
  content:'o';
}
button:active, button:focus , button:disabled , button:default {
outline: none !important;
}
.circle {
  border:1px solid vlack; 
  box-sizing:border-box!important; 
  border-radius:200px!important;
}

/*span[data-title]:hover:after, 
div[data-title]:hover:after {
  font:11px 'Roboto'; 
  font-weight:400; 
  content:attr(data-title); 
  position:absolute; 
  margin:0 0 100px; 
  background:#282423; 
  border:1px solid #f7f3eb; 
  color:black;
  padding:5px; 
  z-index:9999; 
  min-width:150px; 
  max-width:150px;
}*/
  #app{
    background: #F0F6FC;
    min-height: 100vh;
    width: 100vw;
  }
  body{
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
  /*.row{
    height: 100vh;
  }*/
</style>
