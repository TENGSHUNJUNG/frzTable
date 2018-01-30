const ModuleName = 'frzTable';
const ModuleDefaults =  {
	    count: {
	        // M版時每次點擊往前往後移動幾格儲存格
	        slide: 2, // [number] 
	        // M版時一個畫面show幾格儲存格
	        show: 3 // [number] 
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
		let slideStar = 0 ;
		let divSlide = ModuleDefaults.count.slide;
		let speed = parseFloat(ModuleDefaults.speed)*1000;
		let srcollWidth = ($('.td2_content').width());

		$(".slide_left").on('click',function(){
			if( slideStar - divSlide >= 0 ){
				slideStar = slideStar - divSlide ;
				Module.prototype.onClickLeft();
			}
		});
		$(".slide_right").on('click',function(){
			if( slideStar + divSlide <= 4 ){ 
		        slideStar = slideStar + divSlide ;
		        Module.prototype.onClickRight();
			}
		});


		this.changeWindow();
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