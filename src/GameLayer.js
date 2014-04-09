var i = 0;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
		
		this.isOver = false;
		
        this.brick = new Brick(this);
        this.brick.setPosition( new cc.Point( 400, 300 ) );
	
		this.wallpaper = new Wallpaper();
		this.wallpaper.setPosition(new cc.Point( 400, 300 ) );
		
		this.circle = new Circle(this);
		this.circle.randomPosition();
		
		this.gameover = new Gameover();
		this.gameover.setPosition( new cc.Point( 400, 300 ) );
	
		this.addChild( this.wallpaper );
		this.addChild( this.brick  );
		this.addChild( this.circle );
		
        this.brick.scheduleUpdate();
		this.circle.scheduleUpdate();
		
        this.setKeyboardEnabled( true );
		this.scheduleUpdate();
		
	
    },
	
	update: function() {
		if ( this.brick.closeTo( this.circle )&& this.isOver == false ) {
			this.addChild( this.gameover );
			this.isOver = true;
			this.scheduleUpdate();
		}
	 },
	
       onKeyDown: function( e ) {
		if (e == cc.KEY.up)
			this.brick.switchDirection(1);
		else if (e == cc.KEY.right)
			this.brick.switchDirection(2);
		else if (e == cc.KEY.down)
			this.brick.switchDirection(4);
		else if (e == cc.KEY.left)
			this.brick.switchDirection(3);
    },
	
	onKeyUp: function( e ){
		if (e == cc.KEY.up)
			this.brick.switchDirectionRelease(1);
		else if (e == cc.KEY.right)
			this.brick.switchDirectionRelease(2);
		else if (e == cc.KEY.down)
			this.brick.switchDirectionRelease(4);
		else if (e == cc.KEY.left)
			this.brick.switchDirectionRelease(3);
	}
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

