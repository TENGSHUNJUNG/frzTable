const ModuleName = 'frzTable';
const ModuleDefaults =  {
	    count: {
	        // M版時每次點擊往前往後移動幾格儲存格
	        slide: 2, // [number] 
	        // M版時一個畫面show幾格儲存格
	        show: 4 // [number] 
	    },
	    // 設定花多久時間移動完成
	    speed: .3, // [number] 
	    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
	    whenClick: function($element) {
	        // console.log($element)
	    }
};
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
	}



	init () {

		var slideStar = 0 ;
		var divSlide = ModuleDefaults.count.slide;
		var speed = parseFloat(ModuleDefaults.speed)*1000;
		var srcollWidth = ($('.td2_content').width() + 1.5);

		$(".slide_left").on('click',function(){
			if( slideStar - divSlide >= 0 ){
				slideStar = slideStar - divSlide ;
				console.log(slideStar)
				Module.prototype.onClickLeft();
			}
		});


		$(".slide_right").on('click',function(){
			if( slideStar + divSlide <= 7){ 
		        slideStar = slideStar + divSlide ;
				console.log(slideStar)
		        Module.prototype.onClickRight();
			}
		});


		this.changeWindow();
		this.onClickDiv();
		return this;
	}


	changeWindow () {
		var windowWidth = $(window).width();
		if(windowWidth >= 1024){
			$('.slide_btn').addClass('display_n');
			var  divShow = ($(".td2").width() / 7 ) ;
			$(".td2_content").width(divShow);
		}else{
			Module.prototype.showDiv();
		}
		return this;
	}


	showDiv () {
		var show = parseInt(ModuleDefaults.count.show);
		var divShow = ($(".td2").width()- show) / show ;
		$(".td2_content").width(divShow);
		$('.td2').width((divShow + 1) *7);

		return this;
	}




	onClickLeft () {
		var divSlide = parseInt(ModuleDefaults.count.slide);
		var srcollWidth = ($('.td2_content').width() + 1.5) * divSlide;
		var speed = parseFloat(ModuleDefaults.speed)*1000;
			$(".td2_content").animate({
				left: "+="+ srcollWidth +"",
			},speed);
		return this;
	}


	onClickRight () {
		var divSlide = ModuleDefaults.count.slide;
		var srcollWidth = ($('.td2_content').width() + 1.5) * divSlide;
		var speed = parseFloat(ModuleDefaults.speed)*1000;
			$( ".td2_content" ).animate({
				left: "-="+ srcollWidth +"",
			},speed);
		return this;
	}


	onClickDiv () {
	    $('.td2_content').on('click',function(){
	    	let thisDiv = $(this).index()+1;
	    	$('.td2_content').removeClass('active').removeClass('bg_gray');       
	    	$('.td2_content:nth-child('+ thisDiv +')').addClass('bg_gray');
	    	$(this).removeClass('bg_gray').addClass('active').siblings().addClass('bg_gray');
	    });
		
		return this;
	}
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };