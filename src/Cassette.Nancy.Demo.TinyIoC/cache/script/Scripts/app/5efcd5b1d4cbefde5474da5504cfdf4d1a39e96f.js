(function(){var n,i,t,r,f,u;window.app=(f=window.app)!=null?f:{},window.app.layout=(u=window.app.layout)!=null?u:{},t=null,n=null,i=null,r=function(){var f,u,r;return r=$(window).width()-(t.outerWidth(!0)-t.width()),t.css({position:"absolute",display:"block",left:0,top:0,width:r}),u=t.outerHeight(!0),f=$(window).height()-u-i.outerHeight(!0)-(n.outerHeight(!0)-n.height()),r=$(window).width()-(n.outerWidth(!0)-n.width()),n.css({position:"absolute",display:"block",left:0,top:u,width:r,height:f}),u+=n.outerHeight(!0),r=$(window).width()-(i.outerWidth(!0)-i.width()),i.css({position:"absolute",display:"block",left:0,top:u,width:r}),n.trigger("resize",[])},window.app.layout.init=function(u,f,e){return t=$(u),n=$(f),i=$(e),r(),$(window).bind("resize",_.debounce(r,25))}}).call(this)