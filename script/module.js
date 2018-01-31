const ModuleName = 'frzTable';
const ModuleDefaults =  {
	    count: {
	        // M版時每次點擊往前往後移動幾格儲存格
	        slide: 3, // [number] 
	        // M版時一個畫面show幾格儲存格
	        show: 3 // [number],M版寬最大顯示4筆資料 
	    },
	    // 設定花多久時間移動完成
	    speed: .3, // [number] 
	    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
	    whenClick: function($element) {
	        // console.log($element)
	    }
};
const ModuleReturns = [];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	}



	init () {
		this.changeWindow();

		let slideStar = 0 ;
		let divSlide = ModuleDefaults.count.slide;
		let show = ModuleDefaults.count.show;
		let speed = parseFloat(ModuleDefaults.speed)*1000;
		let td2_content = $( ".td2_content" ) ;
		let slide_right = $(".slide_right") ;
		let slide_left = $(".slide_left") ;
		let srcollWidth = ($('.td2_content').width() + 2 ) ;
		let srcollWidth_2 = ($('.td2_content').width() + 2 ) * 2 ;
		let srcollWidth_3 = ($('.td2_content').width() + 2 ) * 3 ;
		let page = divSlide / show ;
		console.log(page)




		// slide_right.on('click',function(){
		// 	if( page>=1 ){
		// 		Module.prototype.onClickRight();	
		// 	}
			
		// });


		// slide_left.on('click',function(){
		// 	Module.prototype.onClickLeft();
		// });












		// if( show >= divSlide ){
		// 	slide_left.addClass('display_n');
		// };

		slide_left.on('click',function(){
			// if( show+1 >= divSlide ){
			// 	slide_left.addClass('display_n');
			// 	slide_right.removeClass('display_n');
			// }else{
			// 	slide_left.removeClass('display_n');
			// }
			if( divSlide === 3 ){  //show 2 slider 2
				divSlide = divSlide - 1 ;
				console.log(divSlide,'left1');
				td2_content.animate({
					left: "+="+ srcollWidth +"",
				},speed);
			}else if( divSlide === 4 ){ //show 3 slider 2
				divSlide = divSlide - 2 ;
				console.log(divSlide,'left2');
				td2_content.animate({
					left: "+="+ srcollWidth_2 +"",
				},speed);
			}else if( divSlide === 6 ){ //show 4 slider 2
				divSlide = divSlide - 4 ;
				console.log(divSlide,'left3');
				td2_content.animate({
					left: "+="+ srcollWidth_2 +"",
				},speed);
			
			}else if( divSlide - show+1 >= show ){ 
		        divSlide = divSlide - show ;
		        console.log(divSlide,'left4');
		        Module.prototype.onClickLeft();
			}
		});






		slide_right.on('click',function(){
			// if( divSlide+1 >= 6){
			// 	slide_right.addClass('display_n');
			// 	slide_left.removeClass('display_n');
			// }else{
			// 	slide_right.removeClass('display_n');
			// };

			if( divSlide === 1 ){
				slide_left.removeClass('display_n');
				if( slideStar + show < 7 ){
					slideStar = slideStar + divSlide ;
					Module.prototype.onClickRight();
				}
			}else{
				slide_left.removeClass('display_n');
				if( show + divSlide <= 7 ){ 
			        divSlide = divSlide + show ;
			        console.log(divSlide)
			        Module.prototype.onClickRight();
				}else if( 7 - divSlide === 1 ){
					divSlide = divSlide + 1 ;
					console.log(divSlide,'是1');
					td2_content.animate({
						left: "-="+ srcollWidth +"",
					},speed);
				}else if( 7 - divSlide === 2 ){
					divSlide = divSlide + 2 ;
					console.log(divSlide,'是2');
					td2_content.animate({
						left: "-="+ srcollWidth_2 +"",
					},speed);
				}else if( 7 - divSlide === 4 ){ //show4 slider3
					divSlide = divSlide + 4 ;
					console.log(divSlide,'是3');
					td2_content.animate({
						left: "-="+ srcollWidth_3 +"",
					},speed);
				}else{
					console.log('滑動數量大於顯示數量');
				}
			}
		});


		this.onClickDiv();
	}


	changeWindow () {
		let windowWidth = $(window).width();
		let  divShow = ( $(".td2_wrap").width() / 7 ) -2 ;
		if(windowWidth >= 768){
			$('.slide_btn').addClass('display_n');
			$(".td2_content").width(divShow);
		}else{
			Module.prototype.showDiv();
		}
	}


	showDiv () {
		let show = parseInt(ModuleDefaults.count.show);
		let divShow = ( $(".td2_wrap").width() / show ) ;
		$(".td2_content").width(divShow);
		$('.td2_box').width( divShow * 7 );
	}


	onClickLeft () {
		let divSlide = parseInt(ModuleDefaults.count.slide);
		let srcollWidth = ($('.td2_content').width() + 2) * divSlide;
		let speed = parseFloat(ModuleDefaults.speed)*1000;
			$(".td2_content").animate({
				left: "+="+ srcollWidth +"",
			},speed);
	}


	onClickRight () {
		let divSlide = ModuleDefaults.count.slide;
		let srcollWidth = ($('.td2_content').width() + 2) * divSlide;
		let speed = parseFloat(ModuleDefaults.speed)*1000;
			$( ".td2_content" ).animate({
				left: "-="+ srcollWidth +"",
			},speed);
	}


	onClickDiv () {
		let td2_content = $('.td2_content') ;
	    td2_content.on('click',function(){
	    	let thisDiv = $(this).index()+1;
	    	td2_content.removeClass('active').removeClass('bg_gray');       
	    	$('.td2_content:nth-child('+ thisDiv +')').addClass('bg_gray');
	    	$('.title_bg').removeClass('bg_gray');
	    	$(this).removeClass('bg_gray').addClass('active').siblings().addClass('bg_gray');
	    });
	}
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };