let timer,timer1;
 var cfale = false
 var cfale1 = false
 var cfale2 = false


 timer1 = setInterval(() => {
    if(cfale){
      //console.log(1111)

      clearInterval(timer1)

     return

    }

       if(document.querySelector('._akaz')){


         cfale = true


       document.querySelector('._akaz').parentNode.insertAdjacentHTML("afterbegin",
                "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/png;base64,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'/>"
            )



   }
  },200)

function getCount() {
           if (document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn")){
               var nodeList = document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn");
               var count = 0;
               for (const nodeDiv of nodeList) {
                   count = count + parseInt(nodeDiv.innerText);
               }
               return count


           }

      }


 timer = setInterval(() => {
 // console.log("tttttttt")

   if(cfale1){

      clearInterval(timer)

      return
    }



   var div = document.querySelector("#wa-popovers-bucket").parentNode

   if(div.querySelector(".xcnrxux.xcnrxux")){

     cfale1 = true




      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").setAttribute("style",'display:none')
      div.querySelector(".xcnrxux.xcnrxux").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
     div.querySelector(".x1hql6x6.x1c3i2sq.xdod15v.x1iymm2a").setAttribute("style",'display:none')
        div.querySelector(".x1lliihq").querySelector(".x12peec7.xui2vq6").setAttribute("style",'border:none;padding: 0;width: 100%;')
     div.querySelector(".x1lliihq").querySelector(".x1tfhste").setAttribute("style",'display:none')
     div.querySelector(".x1lliihq").querySelector(".x1sy10c2").setAttribute("style",'display:none')
     div.querySelector(".x6s0dn4.x11fxgd9").setAttribute("style",'display:none')

     div.querySelector(".x1lliihq").querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x1lliihq").querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").innerHTML='Use Whats on your computer'




     div.querySelector(".x1lliihq").querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
      div.querySelector(".x1lliihq").querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


   var pp = div.querySelector(".x1lliihq").querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
      pp.innerHTML = pp.innerHTML.replace("WhatsApp", "Whats")




     div.querySelector(".x1lliihq").querySelector(".x1ism021.x1w450gt").setAttribute("style",'flex-grow: 1;flex-shrink: 2;width:320px;')


     div.querySelector(".x1lliihq").querySelector(".x1dnwe82.x8vdgqj").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

     div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')

         div.querySelector(".x1lliihq").querySelector(".x1dnwe82.x8vdgqj").insertAdjacentHTML("afterbegin",
                  '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
              );

   }



   },300)


var time2 = setInterval(() => {
   if (document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38")){
          document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").remove()
      }
   if(!document.getElementsByClassName('_aigw')[1]){
       return
   }

   if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigw')[1]) {

       if(cfale2){

       clearInterval(time2)

      return
    }
      cfale2 = true
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .style.minWidth = 'auto'

       //document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
       //    .getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'

       if (document.querySelector(".xbyj736")){
           document.querySelector(".xbyj736").style.display = "none";
       }
      if (document.querySelector(".x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl")){
          document.querySelector(".x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl").style.width = '0'
       }

       // document.querySelector(".xbyj736").style.display = "none";
       document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                           0]
       .getElementsByClassName('_aigw')[1].style.minWidth = '100%'
       // 灏佽澶嶇敤
       // 鎻愬彇鍏叡鐨勬煡璇㈤€夋嫨鍣ㄥ嚱鏁�
       function querySelectorAllAndHandle(selector, eventType, handler) {
           document.querySelectorAll(selector).forEach(item => {
               item.addEventListener(eventType, handler);
           });
       }

       // 鎻愬彇璁剧疆鏍峰紡鐨勫嚱鏁�
       function setStyle(selector, style) {
           document.querySelectorAll(selector)[1].setAttribute("style", style);
       }

       // 澶勭悊鐐瑰嚮浜嬩欢鐨勬牳蹇冨嚱鏁�
       function handleClickCore(e) {
           setStyle("._aigw.x9f619", 'z-index: 0;position: absolute;width: 100%');
           window.webkit.messageHandlers.nativeBridge.postMessage('chat');

           document.querySelectorAll(".x78zum5.x6s0dn4")[0].addEventListener('click', (e) => {
               setTimeout(() => {
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
                   handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
               }, 300);
           });
           function sendMessage(){
                   //鍙戝姩娑堟伅
                   window.webkit.messageHandlers.nativeBridge.postMessage('sendMessage');
               }
           var time3 = setInterval(() => {

               if (document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")){

                   const button = document.querySelector(".x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf")
                   button.removeEventListener('click', sendMessage);
                   button.addEventListener('click', sendMessage);
           }
           },200)
           if (document.getElementById("backleftid")) {
               document.getElementById("backleftid").remove();
           }
           insertBackLeftDiv();
           document.getElementById("backleftid").addEventListener('click', (e) => {
               setStyle("._aigw.x9f619", 'min-Width: 100%;');
               window.webkit.messageHandlers.nativeBridge.postMessage('list');
           });

           handleFooterClick();
       }

       // 澶勭悊鐗瑰畾 div 鐐瑰嚮鐨勫嚱鏁�
       function handleDivClick(div) {
           div.addEventListener('click', (e) => {
               document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
               var timer = setInterval(() => {
                   if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                       document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                       clearInterval(timer);
                   }
               }, 300);
           });
       }

       // 鎻掑叆鐗瑰畾 div 鐨勫嚱鏁�
       function insertBackLeftDiv() {
           document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
                                                                                      "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
       }

       // 澶勭悊椤佃剼鐐瑰嚮鐨勫嚱鏁�
       function handleFooterClick() {
           var foot = document.getElementsByTagName("footer")[0];
           foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
               setTimeout(() => {
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
                   handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
               }, 300);
           });
       }

       // 澶勭悊鐗瑰畾.bugiwsl0 鍏冪礌鐐瑰嚮鐨勫嚱鏁�
       function handleBugiwsl0Click(item) {
           item.addEventListener('click', (e) => {
               document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
               }
               if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
                   document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
               }

               var timer = setInterval(() => {
                   if (document.querySelectorAll('.HP5-u')[0]) {
                       document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                       if (document.querySelectorAll('.HP5-u')[1]) {
                           document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[2]) {
                           document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                       }
                       if (document.querySelectorAll('.HP5-u')[3]) {
                           document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                       }
                       // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
                   }

                   if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                       clearInterval(timer);
                   }
               }, 300);
           });
       }

       // 灏佽鐨� handleClicks 鍑芥暟
       function handleClicks() {
           querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
       }
       // 鐐瑰嚮璺宠浆
       handleClicks()
       // 涓哄悇绉嶅厓绱犳坊鍔犱簨浠剁洃鍚�
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       });
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 0);
       querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
           setTimeout(handleClicks, 50);
       }, 1);


       document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
           setTimeout(handleClicks, 50);
       });
       document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
                                                                                   (
                                                                                    e) => {
                                                                                        setTimeout(() => {
                                                                                            document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
                                                                                            .addEventListener('click', (e) => {
                                                                                                setTimeout(() => {
                                                                                                    document.querySelector('._3J6wB')
                                                                                                    .setAttribute("style",
                                                                                                                  "width:auto;")
                                                                                                    document.querySelector('._3ev9-')
                                                                                                    .setAttribute("style",
                                                                                                                  "min-width:auto;")

                                                                                                    document.querySelector(
                                                                                                                           'div[data-testid="popup-controls-ok"]'
                                                                                                                           ).addEventListener('click', (
                                                                                                                                                        e) => {
                                                                                                                                                        })
                                                                                                }, 300)
                                                                                            })
                                                                                        }, 300)
                                                                                    })



   }
}, 200)
