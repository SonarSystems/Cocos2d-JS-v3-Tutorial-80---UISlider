var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var slider = new ccui.Slider();
        slider.setTouchEnabled(true);
        slider.loadBarTexture(res.SliderTrack_png);
        slider.loadSlidBallTextures(res.SliderThumb_png, res.SliderThumb_png, "");
        slider.loadProgressBarTexture(res.SliderProgress_png);
        slider.x = size.width / 2;
        slider.y = size.height / 2;
        slider.addEventListener(this.sliderEvent, this);
        this.addChild(slider);

        return true;
    },

    sliderEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Slider.EVENT_PERCENT_CHANGED:
                cc.log("Percent " + sender.getPercent().toFixed(0));

                break;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

