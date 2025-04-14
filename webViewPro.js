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
                "<img class='_akaz' style='width:64px;z-index:5;' src='data:data:image/jpeg;base64,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'/>"
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
