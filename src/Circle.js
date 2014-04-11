var a = 5;
var b = 5;
var Circle = cc.Sprite.extend({
	
    ctor: function( gameLayer ) {
        this._super();
        this.initWithFile( 'Image/Circle.png' );
		this.radius=35;
		this.gameLayer = gameLayer;
	
    }, 	
 
    randomPosition: function() {
		this.setPosition( new cc.Point( Math.random()*500 +200, Math.random()*300 +200 ) );
    },
	
	update: function( dt ) {
		this.movement(dt);
	},
	movement: function( dt ){
		var pos = this.getPosition();
	if(!this.gameLayer.isOver){
			if ( pos.y > screenHeight-this.radius ) {
				a *=-1 ;
			}
			if ( pos.y < this.radius ) {
				a *=-1 ;
			}
			if ( pos.x < this.radius ) {
				b *=-1 ;
			}
			if ( pos.x > screenWidth-this.radius ) {
				b *=-1 ;
			}
		
       	this.setPosition( new cc.Point( pos.x+b, pos.y + a ) );
	}
		
		
    }
});	