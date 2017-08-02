$(".user-avatar").on('click',function(){
	$.ajax({
	    url: "/checkpermisson",
	    type:"post",
	    dataType: "json",
	    success: function(data) {
	        var d = data.data;
	    	if(data.code==0){
	    		location.href='./admin/write';
	    	}else{
	    		
	    	}
	    },
	    error:function(){
	
	    }
	})
});