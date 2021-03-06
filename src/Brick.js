var Brick = cc.Sprite.extend({
    ctor: function(gameLayer) {
        this._super();
        this.initWithFile( 'Image/Brick.png' );
        this.direction = Brick.DIR.STILL;
		this.isUp = false;
		this.isRight = false;
		this.isLeft = false;
		this.isDown = false;
		this.gameLayer = gameLayer;
    },
	
	movement: function( dt ) {
		var pos = this.getPosition();
	if(!this.gameLayer.isOver){
	if (this.isUp ){
		if ( pos.y < screenHeight-135  ) {
        	this.setPosition( new cc.Point( pos.x, pos.y + 10 ) );
		} else {
			this.setPosition( new cc.Point( pos.x, pos.y ) );
		}
	}
	if (this.isRight ){
		if ( pos.x < screenWidth-135 ) {
			this.setPosition( new cc.Point( pos.x + 10, pos.y ) );
		} else {
			this.setPosition( new cc.Point( pos.x,pos.y ) );
		}
	}
	if ( this.isDown ){
		if ( pos.y > 140) {
        	this.setPosition( new cc.Point( pos.x, pos.y - 10 ) );
		} else {
			this.setPosition( new cc.Point( pos.x, pos.y ) );
		}
	}
	if ( this.isLeft ){
		if ( pos.x > 140 ) {
        	this.setPosition( new cc.Point( pos.x - 10, pos.y ) );
		} else {
			this.setPosition( new cc.Point(pos.x, pos.y ) );
		}
	}	
	}
	},
	
	update: function(dt) {
		this.movement(dt);
	 },
	
		
    switchDirection: function(direction) {
	if ( direction == 1 ) {
		this.isUp = true;
	}
	else if( direction == 2 ){
		this.isRight = true;
	}
	
	else if( direction == 3 ){
		this.isLeft = true;
	}
	else if( direction == 4 ){
		this.isDown = true;
    }

	},
	
	switchDirectionRelease: function(direction) {
		if ( direction == 1 )
			this.isUp = false;
		else if ( direction == 2 )
			this.isRight = false;
		else if ( direction == 3 )
			this.isLeft = false;
		else if ( direction == 4 )
			this.isDown = false;
		
	}
});

Brick.DIR = {
    UP: 1,
    RIGHT: 2,
	LEFT: 3,
	DOWN: 4
};