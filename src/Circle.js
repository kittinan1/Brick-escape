var a = 5;
var b=5;
var Circle = cc.Sprite.extend({
	
    ctor: function() {
        this._super();
        this.initWithFile( 'Image/Circle.png' );
		this.radius=35;
    },
 
    randomPosition: function() {
		this.setPosition( new cc.Point( Math.random()*800, Math.random()*600 ) );
    },
	
	update: function( dt ) {
	var pos = this.getPosition();
		
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
});	