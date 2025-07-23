
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

    if(div){

     cfale1 = true
  if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2")){
      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')

      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.x1p5oq8j.x15zmtp0.xwxc41k.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xcigqdy.xfqsd3n.x15jxszr.x191sbug").setAttribute("style",'display:none')
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
      div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
      div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
  }
 if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xy296fx.xbl0rts.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.x1rsuxf0.xcgujcq.x1igtfuo.x13up0n2.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x12peec7.x91od0.xvl3i4w.xfqsd3n.xzg3blf.x191sbug").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
      div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").setAttribute("style",'font-size:32px;margin-top:20px;')
      div.querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6").innerHTML='Use Whats on your computer'
  }

    




    div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
  div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


  var pp = div.querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
     pp.innerHTML = pp.innerHTML.replace("WhatsApp", "Whats")



     div.querySelector(".x1lliihq").querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

     div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')
       if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2").insertAdjacentHTML("afterbegin",
                '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
            );
       }
if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v").insertAdjacentHTML("afterbegin",
                '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
            );
       }
      

       div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1na6gtj.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x1y1aw1k").remove()
        div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x78zum5.x1qughib.xkh2ocl.x1cy8zhl.x1q0g3np.xnlzww4.xozqiw3.x198rtga.xxs79tx.xnqmh1m").remove()
        div.querySelector(".x6s0dn4.x1rg5ohu.x16dsc37.xxk0z11").remove()


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
        //  .getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'

        if (document.querySelector(".xbyj736")){
            document.querySelector(".xbyj736").style.display = "none";
        }
       if (document.querySelector(".x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl")){
           document.querySelector(".x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl").style.width = '0'
        }

        // document.querySelector(".xbyj736").style.display = "none";
        document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                                                                                            0]
        .getElementsByClassName('_aigw')[1].style.minWidth = '100%'
        // 封装复用
        // 提取公共的查询选择器函数
        function querySelectorAllAndHandle(selector, eventType, handler) {
            document.querySelectorAll(selector).forEach(item => {
                item.addEventListener(eventType, handler);
            });
        }

        // 提取设置样式的函数
        function setStyle(selector, style) {
            document.querySelectorAll(selector)[1].setAttribute("style", style);
        }

        // 处理点击事件的核心函数
        function handleClickCore(e) {
            setStyle("._aigw.x9f619", 'z-index: 0;position: absolute;width: 100%');
            //window.webkit.messageHandlers.nativeBridge.postMessage('chat');

            document.querySelectorAll(".x78zum5.x6s0dn4")[0].addEventListener('click', (e) => {
                setTimeout(() => {
                    handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
                    handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
                }, 300);
            });
            function sendMessage(){
                    console.log('send');
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
                //window.webkit.messageHandlers.nativeBridge.postMessage('list');
            });

            handleFooterClick();
        }

        // 处理特定 div 点击的函数
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

        // 插入特定 div 的函数
        function insertBackLeftDiv() {
            document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
                                                                                       "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
        }

        // 处理页脚点击的函数
        function handleFooterClick() {
            var foot = document.getElementsByTagName("footer")[0];
            foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
                setTimeout(() => {
                    handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
                    handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
                }, 300);
            });
        }

        // 处理特定.bugiwsl0 元素点击的函数
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

        // 封装的 handleClicks 函数
        function handleClicks() {
            querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
        }
        // 点击跳转
        handleClicks()
        // 为各种元素添加事件监听
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
