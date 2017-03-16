var express=require("express");
var app=express();
app.get("/index.html",function(req,res){

	
    res.sendFile(__dirname+"/index.html");
});
app.get("/form",function(req,res){
 if(req.query.username=="admin"&&req.query.password=="123456"){
 	 res.send("恭喜你,登录成功");
 	}else{
 		 res.send("对不起,登录失败");
 	}
 
});
app.listen(8888,function(){
	  console.log("服务器已经启动");
})