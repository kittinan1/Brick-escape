var Point = cc.Sprite.extend({
    ctor: function(gameLayer) {
        this._super();
		this.gameLayer = gameLayer;
        this.initWithFile( 'Image/Point.png' );
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
    }
});