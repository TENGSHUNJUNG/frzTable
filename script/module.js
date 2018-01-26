const ModuleName = 'frzTable';
const ModuleDefaults =  {
    count: {

        slide: 1, 

        show: 4  
    },

    speed: .3, 

    whenClick: function($element) {

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
		let options = this.options;



		this.onClick();
		return this;
	}
	onClick () {
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