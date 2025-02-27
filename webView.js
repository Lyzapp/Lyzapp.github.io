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
