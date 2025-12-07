gdjs._49884_51089Code = {};
gdjs._49884_51089Code.localVariables = [];
gdjs._49884_51089Code.idToCallbackMap = new Map();
gdjs._49884_51089Code.GDNewSprite8Objects1= [];
gdjs._49884_51089Code.GDNewSprite8Objects2= [];
gdjs._49884_51089Code.GDEMPTINESSObjects1= [];
gdjs._49884_51089Code.GDEMPTINESSObjects2= [];
gdjs._49884_51089Code.GDHAPPYObjects1= [];
gdjs._49884_51089Code.GDHAPPYObjects2= [];
gdjs._49884_51089Code.GDNewSprite3Objects1= [];
gdjs._49884_51089Code.GDNewSprite3Objects2= [];
gdjs._49884_51089Code.GDNewSprite5Objects1= [];
gdjs._49884_51089Code.GDNewSprite5Objects2= [];
gdjs._49884_51089Code.GDSADObjects1= [];
gdjs._49884_51089Code.GDSADObjects2= [];
gdjs._49884_51089Code.GDNewSprite2Objects1= [];
gdjs._49884_51089Code.GDNewSprite2Objects2= [];
gdjs._49884_51089Code.GDANGRYObjects1= [];
gdjs._49884_51089Code.GDANGRYObjects2= [];
gdjs._49884_51089Code.GDNewSprite4Objects1= [];
gdjs._49884_51089Code.GDNewSprite4Objects2= [];
gdjs._49884_51089Code.GDShadedLightJoystickObjects1= [];
gdjs._49884_51089Code.GDShadedLightJoystickObjects2= [];
gdjs._49884_51089Code.GDSquareWhiteSliderObjects1= [];
gdjs._49884_51089Code.GDSquareWhiteSliderObjects2= [];
gdjs._49884_51089Code.GDstart_9595bgObjects1= [];
gdjs._49884_51089Code.GDstart_9595bgObjects2= [];
gdjs._49884_51089Code.GDNewTextObjects1= [];
gdjs._49884_51089Code.GDNewTextObjects2= [];
gdjs._49884_51089Code.GDNewText2Objects1= [];
gdjs._49884_51089Code.GDNewText2Objects2= [];


gdjs._49884_51089Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._49884_51089Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._49884_51089Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._49884_51089Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("start_bg"), gdjs._49884_51089Code.GDstart_9595bgObjects1);
{for(var i = 0, len = gdjs._49884_51089Code.GDstart_9595bgObjects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDstart_9595bgObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDNewTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDNewText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._49884_51089Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._49884_51089Code.GDNewSprite8Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "메인", false);
}
}

}


};

gdjs._49884_51089Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49884_51089Code.GDNewSprite8Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite8Objects2.length = 0;
gdjs._49884_51089Code.GDEMPTINESSObjects1.length = 0;
gdjs._49884_51089Code.GDEMPTINESSObjects2.length = 0;
gdjs._49884_51089Code.GDHAPPYObjects1.length = 0;
gdjs._49884_51089Code.GDHAPPYObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects2.length = 0;
gdjs._49884_51089Code.GDNewSprite5Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite5Objects2.length = 0;
gdjs._49884_51089Code.GDSADObjects1.length = 0;
gdjs._49884_51089Code.GDSADObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects2.length = 0;
gdjs._49884_51089Code.GDANGRYObjects1.length = 0;
gdjs._49884_51089Code.GDANGRYObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects2.length = 0;
gdjs._49884_51089Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._49884_51089Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._49884_51089Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._49884_51089Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._49884_51089Code.GDstart_9595bgObjects1.length = 0;
gdjs._49884_51089Code.GDstart_9595bgObjects2.length = 0;
gdjs._49884_51089Code.GDNewTextObjects1.length = 0;
gdjs._49884_51089Code.GDNewTextObjects2.length = 0;
gdjs._49884_51089Code.GDNewText2Objects1.length = 0;
gdjs._49884_51089Code.GDNewText2Objects2.length = 0;

gdjs._49884_51089Code.eventsList0(runtimeScene);
gdjs._49884_51089Code.GDNewSprite8Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite8Objects2.length = 0;
gdjs._49884_51089Code.GDEMPTINESSObjects1.length = 0;
gdjs._49884_51089Code.GDEMPTINESSObjects2.length = 0;
gdjs._49884_51089Code.GDHAPPYObjects1.length = 0;
gdjs._49884_51089Code.GDHAPPYObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite3Objects2.length = 0;
gdjs._49884_51089Code.GDNewSprite5Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite5Objects2.length = 0;
gdjs._49884_51089Code.GDSADObjects1.length = 0;
gdjs._49884_51089Code.GDSADObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite2Objects2.length = 0;
gdjs._49884_51089Code.GDANGRYObjects1.length = 0;
gdjs._49884_51089Code.GDANGRYObjects2.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects1.length = 0;
gdjs._49884_51089Code.GDNewSprite4Objects2.length = 0;
gdjs._49884_51089Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._49884_51089Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._49884_51089Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._49884_51089Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._49884_51089Code.GDstart_9595bgObjects1.length = 0;
gdjs._49884_51089Code.GDstart_9595bgObjects2.length = 0;
gdjs._49884_51089Code.GDNewTextObjects1.length = 0;
gdjs._49884_51089Code.GDNewTextObjects2.length = 0;
gdjs._49884_51089Code.GDNewText2Objects1.length = 0;
gdjs._49884_51089Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_49884_51089Code'] = gdjs._49884_51089Code;
