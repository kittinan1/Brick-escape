var Star = cc.Sprite.extend({
    ctor: function(gameLayer) {
        this._super();
		this.gameLayer = gameLayer;
        this.initWithFile( 'Image/Star.png' );
    },
 
    randomPosition: function() {
		this.randomX = this.gameLayer.randomNumber(200,600);
		this.randomY = this.gameLayer.randomNumber(200,400);
		this.setPosition( new cc.Point( this.randomX, this.randomY ) );
		
    },
	 closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 35 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 35 ) );
    },
	
	  update: function( dt ) {	
		if( this.closeTo(this.gameLayer.brick )){
			var starPos = this.getPosition();
			if( this.gameLayer.brick.isUp == true ){
				this.setPosition( new cc.Point( starPos.x, starPos.y + 10 ) );
			}
			if( this.gameLayer.brick.isDown == true ){
				this.setPosition( new cc.Point( starPos.x, starPos.y - 10 ) );
			}
			if( this.gameLayer.brick.isLeft == true ){
				this.setPosition( new cc.Point( starPos.x-10, starPos.y ) );
			}
			if( this.gameLayer.brick.isRight == true ){
				this.setPosition( new cc.Point( starPos.x+10, starPos.y ) );
			}
		}
		  
	
		}
});