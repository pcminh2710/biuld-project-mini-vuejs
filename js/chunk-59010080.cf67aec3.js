(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59010080"],{"472d":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a4d3"),n("e01a");var r=n("7a23"),c={class:"container"},o=Object(r["f"])("div",{class:"text-center"},[Object(r["f"])("h1",null,"Form created New")],-1),a={class:"form-group"},l=Object(r["f"])("label",{for:"fullName"}," Full Name ",-1),i={key:0,class:"invalid-feedback"},s={class:"form-group"},u=Object(r["f"])("label",{for:"email"},"Email",-1),d={key:0,class:"invalid-feedback"},b={class:"form-group"},f=Object(r["f"])("label",{for:"phone"},"Phone",-1),p={key:0,class:"invalid-feedback"},m={class:"form-group"},O=Object(r["f"])("label",{for:"description"},"Introduce yourself",-1),j={key:0,class:"invalid-feedback"},h=Object(r["f"])("button",{class:"btn btn-danger"},"Back",-1);function v(e,t,n,v,y,k){var w=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["e"])("div",c,[o,Object(r["f"])("form",{onSubmit:t[9]||(t[9]=Object(r["E"])((function(e){return k.save()}),["prevent"]))},[Object(r["f"])("div",a,[l,Object(r["D"])(Object(r["f"])("input",{type:"text",class:Object(r["n"])(["form-control",{"is-invalid":e.errors.name}]),id:"fullName",placeholder:"Full Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.student.name=t}),onBlur:t[1]||(t[1]=function(){return e.validate&&e.validate.apply(e,arguments)})},null,34),[[r["A"],e.student.name]]),e.errors.name?(Object(r["r"])(),Object(r["e"])("small",i,Object(r["y"])(e.errors.name),1)):Object(r["d"])("",!0)]),Object(r["f"])("div",s,[u,Object(r["D"])(Object(r["f"])("input",{type:"email",class:Object(r["n"])(["form-control",{"is-invalid":e.errors.email}]),id:"email",placeholder:"Email","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.student.email=t}),onBlur:t[3]||(t[3]=function(){return e.validate&&e.validate.apply(e,arguments)})},null,34),[[r["A"],e.student.email]]),e.errors.email?(Object(r["r"])(),Object(r["e"])("small",d,Object(r["y"])(e.errors.email),1)):Object(r["d"])("",!0)]),Object(r["f"])("div",b,[f,Object(r["D"])(Object(r["f"])("input",{type:"text",class:Object(r["n"])(["form-control",{"is-invalid":e.errors.phone}]),id:"phone",placeholder:"Phone","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.student.phone=t}),onBlur:t[5]||(t[5]=function(){return e.validate&&e.validate.apply(e,arguments)})},null,34),[[r["A"],e.student.phone]]),e.errors.phone?(Object(r["r"])(),Object(r["e"])("small",p,Object(r["y"])(e.errors.phone),1)):Object(r["d"])("",!0)]),Object(r["f"])("div",m,[O,Object(r["D"])(Object(r["f"])("textarea",{type:"text",class:Object(r["n"])(["form-control",{"is-invalid":e.errors.description}]),id:"description",placeholder:"Introduce yourself","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.student.description=t}),onBlur:t[7]||(t[7]=function(){return e.validate&&e.validate.apply(e,arguments)})},null,34),[[r["A"],e.student.description]]),e.errors.description?(Object(r["r"])(),Object(r["e"])("small",j,Object(r["y"])(e.errors.description),1)):Object(r["d"])("",!0)]),Object(r["f"])("button",{type:"submit",class:"btn btn-success mr-3",onClick:t[8]||(t[8]=function(e){return y.status=!0})}," Add "),Object(r["h"])(w,{to:"/form-student"},{default:Object(r["C"])((function(){return[h]})),_:1})],32)])}var y=n("7aa6"),k={mixins:[y["a"]],name:"StudentForm",data:function(){return{status:!1}},methods:{save:function(){var e=this;this.validate()&&this.$request.post("https://61ddbc21f60e8f0017668a09.mockapi.io/vue/mini/students",this.student).then((function(){e.$router.push({name:"StudentList"})}))}},beforeRouteLeave:function(e,t,n){1==this.status?n():this.$swal({title:"Dữ liệu của bạn sẽ không được lưu",text:"Nhấn OK để xác nhận hoặc Cancel để tiếp tục nhập",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"OK"}).then((function(e){e.isConfirmed&&n(),n(!1)}))}},w=(n("99df"),n("6b0d")),x=n.n(w);const B=x()(k,[["render",v]]);t["default"]=B},"64c3":function(e,t,n){},"99df":function(e,t,n){"use strict";n("64c3")}}]);
//# sourceMappingURL=chunk-59010080.cf67aec3.js.map