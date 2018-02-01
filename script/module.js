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
		let self = this ;
		let $this = this.$ele
		let options = this.option;
        let $slide_left = $this.find('.slide_left');
        let $slide_right = $this.find('.slide_right');
		let $td2_content = $this.find( '.td2_content' ) ;



		// slide_left.on('click',function(){
		// 	let changShow = ModuleDefaults.count.show;
		// 	if( changShow - show > 0 && divSlide !== 1 ){
		// 		changShow = changShow - divSlide;
		// 		Module.prototype.onClickLeft();
		// 	}else if(){
				
		// 	}
		// })


		// slide_right.on('click',function(){
		// 	if( divSlide + show <=7 ){
		// 		divSlide = divSlide + show ;
		// 		Module.prototype.onClickRight();
		// 	} else if( 7 - divSlide > 0 ){
		// 		let divWidth = ($('.td2_content').width() +2 ) * ( 7 - divSlide ) ;
  //               $('.td2_content').animate({
  //                   left: "-=" + divWidth + "",
  //               }, speed);
  //            // divSlide = divSlide + ( 7 - divSlide );   
		// 	}
		// })
		$slide_left.on('click',function(){
			self.onClickLeft();
		});


		$slide_right.on('click',function(){
			self.onClickRight();
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
		let self = this ;
		let $this = this.$ele
		let $td2_content = $this.find( '.td2_content' ) ;
		let $td2_box = this.find('.td2_box');
		let show = ModuleDefaults.count.show;
		let divShow = ( $(".td2_wrap").width() / show ) ;
		$td2_content.width(divShow);
		$td2_box.width( divShow * 7 );
	}


	onClickLeft () {
		let self = this ;
		let $this = this.$ele
		let $td2_content = $this.find( '.td2_content' ) ;
		let divSlide = ModuleDefaults.count.slide;
		let srcollWidth = ($('.td2_content').width() + 2) * divSlide;
		let speed = ModuleDefaults.speed * 1000;
			$td2_content.animate({
				left: "+="+ srcollWidth +"",
			},speed);
	}


	onClickRight () {
		let self = this ;
		let $this = this.$ele
		let $td2_content = $this.find( '.td2_content' ) ;
		let divSlide = ModuleDefaults.count.slide;
		let srcollWidth = ($('.td2_content').width() + 2) * divSlide;
		let speed = ModuleDefaults.speed*1000;
			$td2_content.animate({
				left: "-="+ srcollWidth +"",
			},speed);
	}


	onClickDiv () {
		let self = this ;
		let $this = this.$ele
		let $td2_content = $this.find( '.td2_content' ) ;
		let $title_bg = $this.find('.title_bg');

	    td2_content.on('click',function(){
	    	let thisDiv = $(this).index()+1;
	    	td2_content.removeClass('active').removeClass('bg_gray');       
	    	$this.find('.td2_content:nth-child('+ thisDiv +')').addClass('bg_gray');
	    	$title_bg.removeClass('bg_gray');
	    	$(this).removeClass('bg_gray').addClass('active').siblings().addClass('bg_gray');
	    });
	}
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };