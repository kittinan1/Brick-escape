var Circle = cc.Sprite.extend({
	
    ctor: function( gameLayer ) {
        this._super();
		//this.randomSize = Math.random()*2;
		//if(this.randomSize == 1){
        	this.initWithFile( 'Image/Circle.png' );
		//}
		//else if(this.randomSize == 2){
			//this.initWithFile( 'Image/Circle2.png' );
		//}
		/*else if(this.randomSize == 3){
			this.initWithFile( 'Image/Circle3.png' );
		}*/
		
		this.radius=35;
		this.gameLayer = gameLayer;
		this.xAxisMove = Math.random()*5;
		this.yAxisMove = Math.random()*5;
    }, 			
	
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 50 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 50 ) );
	
    },
	
    update: function( dt ) {	
		this.movement(dt); 
		if ( this.closeTo(this.gameLayer.brick) && this.gameLayer.isOver == false ) {
			this.gameLayer.addChild( this.gameLayer.gameover );
			this.gameLayer.isOver = true;
			this.scheduleUpdate();
		
		}
	},
 
    randomPosition: function() {
		this.setPosition( new cc.Point( Math.random()*500 +200, Math.random()*300 +200 ) );
    },
	movement: function( dt ){
		var pos = this.getPosition();
	if(!this.gameLayer.isOver){
			if ( pos.y > screenHeight-this.radius ) {
				this.yAxisMove *=-1 ;
			}
			if ( pos.y < this.radius ) {
				this.yAxisMove *=-1 ;
			}
			if ( pos.x < this.radius ) {
				this.xAxisMove *=-1 ;
			}
			if ( pos.x > screenWidth-this.radius ) {
				this.xAxisMove *=-1 ;
			}
		
       	this.setPosition( new cc.Point( pos.x+this.xAxisMove, pos.y + this.yAxisMove ) );
	}
		
		
    }
});	