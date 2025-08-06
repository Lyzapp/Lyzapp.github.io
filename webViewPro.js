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
                "<img class='_akaz' style='data:image/png;base64,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'/>"
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
        if(div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank")){
      div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank").setAttribute("style",'padding:0;background:#fff;min-width:100%;min-height: auto;')
     div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xprzwq4.xv2v0i9.x4i7bpe.x15zmtp0.x1sgudl8.x1oiqv2n.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.xk802ri.xc3s5z1.x1iymnnd.x1k33i3r.x7p6r09.x1t5mxou").setAttribute("style",'border:none;padding: 0;width: 100%;margin-top: 20px;')
             div.querySelector(".xo1l8bm.x1hql6x6.x13veyf8.x1t8osef.x6k6lpk").setAttribute("style",'font-size:32px;margin-top:20px;')
      div.querySelector(".xo1l8bm.x1hql6x6.x13veyf8.x1t8osef.x6k6lpk").innerHTML='Use Whats on your computer'

  }






    div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[0].style.color = "#06A884";
  div.querySelectorAll(".x1rg5ohu.xk50ysn.x1o2sk6j")[1].style.color = "#06A884";


  var pp = div.querySelector("#link-device-instructions-list").querySelector(".x1c3i2sq.x1hql6x6")
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
        if ( div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank")){
           div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank").insertAdjacentHTML("afterbegin",
                '<div id="feiguanfangmm" style="font-size:13px;color: #DEDEDE;margin-top: 12px;text-align: center;margin-bottom:20px;">- 非官方应用 -</div></div>'
            );
       }


       if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xvi7dlg.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.x849l0f.x1miatn0.xsfy40s.x1gan7if.x1mfogq2.x11z87zs")){
         div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xvi7dlg.xhljqa5.x3pxw9o.x1j3jrzg.xnlk5jr.x12rqkrw.xpczpig.x1xmk5b6.xvwxvxt.x1pfm09h.xwfnofu.xh3vrvw.x1p8uj1.x1b9mug8.x1cw6tvp.xdbi8hp.x7mugv4.x849l0f.x1miatn0.xsfy40s.x1gan7if.x1mfogq2.x11z87zs").setAttribute("style",'display:none')
       }
        if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xp1r0qw.xtqikln.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xoky9hv.x2wavl4")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xp1r0qw.xtqikln.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x6s0dn4.xoky9hv.x2wavl4").remove()
        }
        if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4").remove()
        }

        if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d").remove()
        }

      if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl").remove()
        }
        if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x1cy8zhl.x1dzhors.x1yagfhi.x6mdjeo.x1y6sahi")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.xl56j7k.x1q0g3np.x1cy8zhl.x1dzhors.x1yagfhi.x6mdjeo.x1y6sahi").remove()
        }
        if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1s85apg.x12k5gve.x1dcwb0m.xob9gl2.x9alx9r.x1m51ek7")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1s85apg.x12k5gve.x1dcwb0m.xob9gl2.x9alx9r.x1m51ek7").remove()
        }
        if (div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d")){
            div.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xv54qhq.xsag5q8.xf7dkkf.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1n2onr6.x120xd9q.x1k4ovr2.xdfaw6k.xefzod.x1pzju5d").remove()
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
