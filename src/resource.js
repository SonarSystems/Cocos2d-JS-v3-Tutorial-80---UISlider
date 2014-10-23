var folder = "";

if (!cc.sys.isNative)
{
    folder = "res/mediumRes/";
}

var res = {
    HelloWorld_png : folder + "HelloWorld.png",
    CloseNormal_png : folder + "CloseNormal.png",
    CloseSelected_png : folder+ "CloseSelected.png",
    SliderProgress_png: folder + "sliderProgress.png",
    SliderThumb_png: folder + "sliderThumb.png",
    SliderTrack_png: folder + "sliderTrack.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}