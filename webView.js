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
                "<img class='_akaz' style='width:64px;z-index:5;' src='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAQl0lEQVR4Ac1beYydVRU/35v33nTWzkyn7bQd7FRq2QKhKuJKKgIRi61oIv4BEaKFxASUYGLiEiAxRGOiBo2JoiEmxD9MDFasCCRUCGIhQFnKKqUF2inTffaZzrz3+fude8+3zzxQB3pf33fOvffs99zlu50XyDzlxxN39IehbA5KpY0SyqkgXYlv+zwsqa4AtRBfQhbDCQtLliArIMsE4yQAESGLw8cAB6F0d1iXbUFQ3/qd1i37HEH+abalen48/ruVdanfGkhwTShhE2Cq3yohFAdQSlhYsg40cJB6oA9Pp89wQi0N+HM2OPqa1OXOUql083favjaYpcl5dtv4bzbBobtA2NFoyMx5QpaswVmHlCjxyAXQjaAbSdDl4pcJeFZ/QrSiGfmjQRhc+d3Oa/+SpEsF4Iejv74BbvwMBCUSNQp4RkFSruJZA7P0jfqzAhvRZ/uz/PCnjkG58fsd191ufVEAbhn51aZSKHdjFEuWgtkhYKbbIFGA4T4BTObcsFFE5+Z8Wz25AMMBy0oV4FKqDnsv/0HnNzQTNAC3jP9ipcyWXoKADosiGfIOOgkuObn2pNeALH0+YG69oA4tGYJsfBxR/GwsnzY5u2OuBBYrGJWZ8PRbll4/WGZ3OBPeGkq9Q3FK8CWsO2kKrTEJYVFYr0cac/TaH1tktAoph3EAu0LW/YhFDeaNt4nLIz1USHLD5+mPRlHFg9/51BFUwlvRtCW45cjt/bNBfS8qTU6xhYkchhOy0GJry1ej8HuDcvQRr5f3ToeUco2H5mTssS5Clhx5Wn+tHJYGyifC2mbQwnnKRnRVhzOQTzeL2IuinR5a3Y8Kq2oQNl9nWIE88CenmIQ+oApJDxUYocgBj6cykDZYgb3OJ99mqglRKCeRoJFvXkQTfS/Xw3CjkwIOk21QxcQPZ6AT7FrpgGkFO5x3DnoLTI5BMiUcsOASsmh2eqgNfCR4VT/qcYAsaBF1mh60ZGecWAz3VTQEG8t1qZ1qq35uUTMmZZ/DQN9HQOfrCLktcnl5zmXqqwQVWVdZLadV10hXqVM6S+3S2dQmVanIaH1cRvAdDcflzZm35MWZV+Vg7Siyg0pgdxRfZAuyh6uC6TedrGNwnU2JoCuhf8DOU4NvH/zJKEj1eOtGzzGRxoQRstDw5LZiuBmgRIlHlp7Gr6uskY+3rJcPwPlKoGtwgmNu9HDtmDwz/ZI8PPGETISTSpiTPzd7YQ/sHgtuGvpRlBGFVMlGZjypCVkMNwnz9PeX++Sy9g2ytrra8f6Xz8lwWh4c3yGPTD6BnWw2JSVnDuzh2NmUydkL7uBbb93ml6CUrLdVySkEl7VRAPEmHCo3dXxGPtX64Shu7Ptfy7HaiNw5/CfZhylCPSzZ+LvW+Gm2JenLXLiQ9J4qSxIzOyyrwk0C5yqfrt/ktZYWydVdX5R11YGsoP+53t3UKdd3XyV/GP6r7Jx6XuVl9cfDYS6bpU496bkLoOZXFXXArzReZBxXNuQDELcpQ/ToooE9V8nSck/U9v9GuIZ8tesL0jPaKQ+MPQrxZrv5k9WYtb8uPgM8IZdX3Wu8AMNTk4i0LqLp8Y7jXYZhW7q/vKDOJ137fMeFcmjmqDw19QKM8D6AIOuu2W2QXiADOAUSJbFluHMGEiVFENO6yYOtLy1Bru7eLKdUVsSE7wJ2FXQePHQU2+ag7l5FKrMBoVulGvZtbnP8ajA8JF4LcZfgIfFaHV+DwMnDtiT/BW3nyYdazirSv6BtPFdcu+QKLLrl2B7vG88m/NJXg+Y33oCd40nnzaEcBK22EeLDYBgkzkPMxs4NC+rofMJ7mhbLhvaP6KCpP7DOoLM4/WRfiQ8dWYyk4YRFX9IZjY28QQbmko5PSkepbT4bF7zvsx0XyCIMRdLWIl/MjxJTgnOBX8MJ9ctAEPcBURrgRfTNUHpx5ycW3MFGCrj1Xtz5SdgYj77ZH/ni/aMfJboTERhOyC8JDSoTMiCCwLXPwbNbTpPmoNrIvnel/7zWs+GTt99g0hfzD4NZriOto6LbHuJi2x6YdTNRSBTrKHHfHwBXCsD1rWdEYt5rZHmlV1aUe2X/zEHsYM5GtQlBUNsJfcEakFgYNL1RJ0zicJMfjr5B4jrPALlNntNyusk8KeC5rWeqD261d/6or/BLs8P7reeAyGI/4PCysHDgGTxLEGCgq8vyynJZVGou5HmvGgeq/Tq14adaSTsMJ7Siu0C83TFSyQywTODIu33UoNtTa9JXXioXtJ9n8uaE+6YPy8PDu2R4dnxOmt2TB+Sfwy/IZP3EnDS7xl+XHSMvySy23flKd7lT931mLG1VezH6Brnu0deypTSF6X0AU9oPsbuewh0Ar2p8f12vqQJZ3NQhH2w7S5ZUumVpZf7z/o6Rl+V7e36Pc0NdusvtcsdpN0hvpVNl2uOeI4/LT9+8W6fYKc298hvQtJTSi+pvD9wndw1tV5Zz2tbIz9dukVKg/4VhYiLIdxH6prYzUQsKp7HbBnXU/RwH7lZ6FyGd99bvo7aiskw2dJ4vPeUujWKj9P8rnKPzLMdmx+Qfx5/LmbP18A41mB1vIlueGn01R/Nn0Fh5dnyP7JkasmoOdiEDot0NuhWHwxEEzgzQKcDNTj8k5McYDHetGpiBRf3ysfZzceRs8tMllJl6+mIia82KaneqKVtnZ7KNNz19GZ4sDd8Eeyp6k5+SbZXIUdpOx5POJ/zzi6DPEURElwyFQG2x8HBZZQm2O6yuqsU6BXN2yvQWwqv7LpLR2qS8MrFfNnSdLZ9YfGaO7pv9vJwWOXDimGzu/aic2pJ/mfre6q/IL/ffo7KuWv5pnU45Qb5hoj6pAxn5UEiIUG9+/jp4Ys4wEMRt0hgeShUvG5ctuRCwGu0CjBOXiyXlbrmo670/BSZ93D31utz02m3JJu+X+cQuXQQxN9mmVSyA+HClZzGc8My2tXqTS2K/JqIVmyB4x2sTSn8yPfZM7YOl+PhBcrZ5R9GuBQAnQW5xrqhDqEXjTwQSWppaZG3LgOIhh9xPEYaJJONI7+OzI8KF52Qpr07s1S1P7fEOqjtoIGRhc5mrM0fYNbApvmfX6KFlVXW50miovPOkJx/bCPdNHzipArBj5GldA2gbM6GosK/EI2+06sM5hxMyfdgXagB01CmHAVBI1E0fwjcRgJOlvDSxW4ZOHIZ9zh93uHP+OJxboPNbL0VBprZbtAitEFuK1d/5PPcacWTmuBzGvVxvg0ORyV1I+MehbUj/mjvYIQh2sHM66Ylh/kLERpSjTzzOiDpecSsaDkaOfQaTuEX4ydFdJvs9g/un35JHhp+AeX70PUz6ZDh90AzgC40rHG/ilgGhNOOCYa455JkiwLTjWtDfnN/DI6IFRiZqU3pVV6yGfsHryD+7DzB/3VjHBDqH3KVnscB86+PDz8iy3iVSzZzj85QL07KsiunKbEUxV12NDRhc3cX8gMNvvRGyFObC4HC3SHDkx/D2Rlj4gSL9EHp8RM/68bleLXkXH4vLHXpY4+5Gfwzqokdr0YYe/dJmfRmyOWGvivb6SDg+O6ln/ThI3ll12K0JjLB+fdt+vKQ8Nvz0u+h2WlVftdc56oNg/qXeB/y7Aa7F3Van257HXXwsTnU5NjPsRjr3JA0/RstAEBd5YfxV2TG8U3vT5i18bUXzct2+3YDG9wG0jW1mL33WKzFuGe4a2f1HBzv4NQEvj7/mUhyeuUwgTOKWFRCODjeV6vL82Cvy98MPyfQ8FxwLEY5Vzctgv/s/C4M6TLSN7gM6/2ruddjSW4/F7GR6aKQc/u+JPfp/8Y6do2wfwwmLv/unh2TroQfkjanBhfC1UOaqah/sp5P0w0PimS/91neBaFfIiqNXKFO1aXl9cr+8v+V9ruEdPodnRuW+ww9LX/NSOX/xucKV+r8pY3jp2jp0vzw39rKswCivaenH9xR5f+v7pK2pNRLZv6iP45xb9CMCQ7AL6H2AnfwYEfszGaMxaP9RqkNt2yYDRNwHKsJ9v3UZ+YHpg7L14P16jTYA4/ntqXSZikLIu4bHjz8jDx55VP5x7F+6KNvJzuyl/hUI7tq2AflA6xrpriyObqAi2yg9Yy/9DtY/shHNzgNzPquAir7Ud6ksrfZEMgrkFTowXyMD04zb5F2jL2sgeYxuL7fKKLbSYzMjsnviDdmLr9+1QZ32YD57i/Vmh8TuAzw15z2FErIwQpw3hB1N7bpwUIQZxDMF7wMItaTti7PD9yOO7hxCOhSC+w49JC9ix9B6JgOpl6sNoRYCFeKq89kb0wMz+1Qje7wBwPL3ATSCNCj6x0OoV5uqONlV2KLmmAB1Hq2EUUngbtpAv29TgAch7xG3I605yqaPSPIWl5mnbYQovqqQdR0AKLcBaEhPGeQjMwpxdyfoJTgBiLpXqBQg6sDf7+nWBjz5dq3ZAlqbMs5CeuENplzgeokCXhb2vDV9SB46+pgcmT6qXmT1mV7nIThiD50sk++iA3JzySugIhTKtWnCOqmoP6KGXBcA+zsx9tiwAjWHOpH+PFIOz47KEVxaHsWr75ETx1EfkU4cPc9oXyurW1bhjh4CvHFkd45AJf+hfQiO7xx5QV6beF271RTIjU0y8widKJpkInVK+CnpCDyvymCLUnvoQD6jkgMMiadvvxB/KBn63wFlBFAmCu/9+T8xs+EMakbDHsMDacW12UDrKunFFtcOvIIpM4ntcwJb11GcJPdO7APu/sCRnEXF4pcYcB18C0BCnWNPxwtt2YbYviJ9oB9DBtQGkSbrSOBSxsEkgxnuDEzPOWvjS9OukVeSbDm8oYNu4J0fxm1trBtuMNkG3LkbT4h4xUoykMmVoBQOIgCyGyuPBoApxiOirbq2AhNqMTkeUmFqxqBuMSe9pix4TZ7JJoxKAs3SZ/XbfLY1JzvHI5lzIFn59Vq4G5eitW0w+lLHY+YTstA6a8s7ZLbH0DlrAcsqzDkE2dZGbTisarAIWchvbazblkwYFVOOhmyAMuZHskw+WLcFa7ef31+bLe8Fv/5mIBJcgFBXHA4SpFuyDmdFmLNzBShL/07rjeSnrZVauTw7oEO9+v6P3wFnvp4hyOk355VJe9MteQPiEJE8Kz/Nne/PGtCIPtuf5U/rD377xiWPbtG/V0fi3RyE9SvgQIdbQkiaL9ZqME/BlI63NTfSyZODc9L4TI5BtifxON/oGvvYO588FwLnA+i5nmHlJWThIsw1Cz+LGw2D8s3apj14rLz3w5uCoHQ32PAf7k6hbsC2dCs12imMbSyGewXR/PDdjij5ZAeNcQR5A52xtsjFtORBMVZfVTvMhmKCBJMS8IE1uHT54KU74p/NWdfKez90A2IW/XDS2g2mzS+wB4RmI3kMN3vzAYPElAOmycFG+tLU+VoBP344Gd44eOmTtxs1aVJl+b3rN+G8qT+dzQmAJ8mESDGykmNItBX0NyLPRbABg9kWJWha/SjG/sqhy3bqyNMcForMld6t61fikHArfutwDYxoMqoG+kGG+OJDWFzSOZGu0Zg0v8lyc//t9MdZR/1efg3wznA2uPnw5p25a6m5LFX7e/52Tn8QljYH9Tp+WYafzwfBSqRse7QGKNU8D0vvaI2AOmsrYGu8JhQw5ZvG0IQ/GQ9241ZzG377vvXo557dlydzLf8B5Cofzsv/qu0AAAAASUVORK5CYII='/>"
            )



   }
  },200)




 timer = setInterval(() => {
 // console.log("tttttttt")

   if(cfale1){

      clearInterval(timer)

      return
    }



   var div = document.querySelector("#wa-popovers-bucket").parentNode

   if(div.querySelector(".xcnrxux.xvmahel.xdounpk")){

     cfale1 = true




      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38").setAttribute("style",'display:none')
      div.querySelector(".xcnrxux.xvmahel.xdounpk").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
     div.querySelector(".x1hql6x6.x1c3i2sq.xdod15v.x1iymm2a").setAttribute("style",'display:none')
          div.querySelector(".x1lliihq").querySelector(".x12peec7.xui2vq6").setAttribute("style",'border:none;padding: 0;width: 100%;')
     div.querySelector(".x1lliihq").querySelector(".x1tfhste").setAttribute("style",'display:none')
     div.querySelector(".x1lliihq").querySelector(".x1sy10c2").setAttribute("style",'display:none')
     div.querySelector(".x6s0dn4.x11fxgd9").setAttribute("style",'display:none')

     div.querySelector(".x1lliihq").querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").setAttribute("style",'font-size:32px;margin-top:20px;')
     div.querySelector(".x1lliihq").querySelector(".x579bpy.xo1l8bm.xggjnk3.x1hql6x6.xyorhqc").innerHTML='Use WARM on your computer'




     div.querySelector(".x1lliihq").querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
      div.querySelector(".x1lliihq").querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


   var pp = div.querySelector(".x1lliihq").querySelector("#link-device-phone-number-code-screen-instructions").querySelector(".x1c3i2sq.x1hql6x6")
      pp.innerHTML = pp.innerHTML.replace("WhatsApp", "WARM")




     div.querySelector(".x1lliihq").querySelector(".x1ism021.x1w450gt").setAttribute("style",'flex-grow: 1;flex-shrink: 2;width:320px;')


     div.querySelector(".x1lliihq").querySelector(".x1dnwe82.x8vdgqj").setAttribute("style",'flex-grow: 0;padding: 0;margin: 0;')

     div.querySelector(".x1lliihq").parentNode.setAttribute("style",'flex-grow: 0;')

         div.querySelector(".x1lliihq").querySelector(".x1dnwe82.x8vdgqj").insertAdjacentHTML("afterbegin",
                  '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 闈炲畼鏂瑰簲鐢� -</div></div>'
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
           window.webkit.messageHandlers.nativeBridge.postMessage('scanQrCode');
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
