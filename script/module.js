const ModuleName = 'frzTable';
const ModuleDefaults =  {
	    count: {
	        // M版時每次點擊往前往後移動幾格儲存格
	        slide: 2, // [number] 
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
		let $sliderBall = $this.find('.sliderBall') ;
		let slide = ModuleDefaults.count.slide ;
		let divSlide = ModuleDefaults.count.slide ;
		let show = ModuleDefaults.count.show;
		let speed = ModuleDefaults.count.speed;

		$slide_left.on('click',function(){
			if( slide === 1 ){
				if( 7 - divSlide >= 0 && divSlide !== 1 ){
					divSlide = divSlide - slide ;
					console.log(divSlide,'left slide=1')
					self.onClickLeft();
				}
			}else{
				console.log(divSlide,'left初始')
				if( divSlide - show > 0 && divSlide > show * 2 && divSlide !== 1){
					divSlide = divSlide - slide ;
					console.log(divSlide,'left1')
					self.onClickLeft();
				}else if( divSlide - show > 0 && divSlide <= show * 2 ){
					let divWidth = ($td2_content.width() +2 ) * ( divSlide - show ) +.5; //show4 slider2的話會直接滑到最頭
						console.log(divSlide,'left 2')
						$td2_content.animate({
	                    	left: "+=" + divWidth + "",
	                	}, speed);
	                	divSlide = slide ;
	            }   
			}
		});


		$slide_right.on('click',function(){
			$this.find(".sliderBall:first-child").removeClass('activeBall');
			console.log(divSlide,'初始')
			if( slide === 1 ){
				if( divSlide + show <=7 ){
					divSlide = divSlide + slide ;
					console.log(divSlide,'right slide=1')
					self.onClickRight();
				}
			}else{
				if( divSlide + show <=7 ){
					divSlide = divSlide + show ;
					console.log(divSlide,'right1');
					self.onClickRight();
				} else if( 7 - divSlide > 0 ){
					let divWidth = ($td2_content.width() +2 ) * ( 7 - divSlide ) + .5;
					console.log(divSlide,'right2');
	                $td2_content.animate({
	                    left: "-=" + divWidth + "",
	                }, speed);
	                divSlide = divSlide + ( 7 - divSlide ) ;
	                console.log(divSlide,'right_ends');
	                // $this.find(".sliderBall:nth-child( " + ( divSlide - 1 ) + " )").addClass('activeBall') ;

				}
			}
		});


		if( show - slide ){

		}
		$this.find(".sliderBall:first-child").addClass('activeBall');


		this.changeWindow();
		this.onClickDiv();
		this.airOnClick();
	}


	changeWindow () {
		let self = this ;
		let $this = this.$ele
		let $td2_content = $this.find( '.td2_content' ) ;
		let windowWidth = $(window).width();
		let  divShow = ( $(".td2_wrap").width() / 7 ) -2 ;
		if(windowWidth >= 768){
			$('.slide_btn').addClass('display_n');
			$td2_content.width(divShow);
		}else{
			self.showDiv();
		}
	}


	showDiv () {
		let self = this ;
		let $this = this.$ele
		let $td2_content = $this.find( '.td2_content' ) ;
		let $td2_box = $this.find('.td2_box');
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
		let srcollWidth = ($td2_content.width() + 2) * divSlide + .5;
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
		let srcollWidth = ($('.td2_content').width() + 2) * divSlide + .5;
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

	    $td2_content.on('click',function(){
	    	let thisDiv = $(this).index()+1;
	    	$td2_content.removeClass('active').removeClass('bg_gray');       
	    	$this.find('.td2_content:nth-child('+ thisDiv +')').addClass('bg_gray');
	    	$title_bg.removeClass('bg_gray');
	    	$(this).removeClass('bg_gray').addClass('active').siblings().addClass('bg_gray');
	    });
	}
	airOnClick () {
		let self = this ;
		let $this = this.$ele
		let $air_td2_content = $this.find( '.air_td2_content' ) ;
		let $title_bg = $this.find('.title_bg');

	    $air_td2_content.on('click',function(){
	    	let thisDiv = $(this).index()+1;
	    	let thisFirst = $(this).index()+1;
	    	$air_td2_content.removeClass('active').removeClass('bg_gray');
	    	$this.find('.air_td2_content:nth-child('+ thisDiv +')').removeClass('bg_gray');
	    	$this.find('.air_td2_content_head').removeClass('air_color');
	    	$this.find('.air_td2_content_head:nth-child('+ thisFirst +')').addClass('air_color');

	    	$(this).addClass('active');
	    	var title_active = $this.find('.active').parent().index()-1;
	    	$this.find('.td1_left').removeClass('air_color');
	    	$this.find('.td1_left:nth-child('+ title_active +')').addClass('air_color');

	    	$this.find('.td1_left_m').removeClass('air_color');
	    	$this.find('.td1_left_m:nth-child('+ title_active +')').addClass('air_color');
	    });
	}
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };