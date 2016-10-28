window.onload=function(){
	var search=document.getElementsByClassName('search-box')[0];
  	if(document.scrollTop=='40px'){
  		search.backgroundColor="red"
  	}
  	var start=$('.search-box .iconfont');
  	start.on('click',function(){
  		$('.mask').addClass('move');
  	})
  	$('.mask p').on('click',function(){
  		$('.mask').removeClass('move');
  	})
} 