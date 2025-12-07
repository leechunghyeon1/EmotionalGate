gdjs._54665_48373Code = {};
gdjs._54665_48373Code.localVariables = [];
gdjs._54665_48373Code.idToCallbackMap = new Map();
gdjs._54665_48373Code.GDNewSpriteObjects1= [];
gdjs._54665_48373Code.GDNewSpriteObjects2= [];
gdjs._54665_48373Code.GDNewSprite6Objects1= [];
gdjs._54665_48373Code.GDNewSprite6Objects2= [];
gdjs._54665_48373Code.GDNewSprite7Objects1= [];
gdjs._54665_48373Code.GDNewSprite7Objects2= [];
gdjs._54665_48373Code.GDNewSprite8Objects1= [];
gdjs._54665_48373Code.GDNewSprite8Objects2= [];
gdjs._54665_48373Code.GDEMPTINESSObjects1= [];
gdjs._54665_48373Code.GDEMPTINESSObjects2= [];
gdjs._54665_48373Code.GDHAPPYObjects1= [];
gdjs._54665_48373Code.GDHAPPYObjects2= [];
gdjs._54665_48373Code.GDNewSprite3Objects1= [];
gdjs._54665_48373Code.GDNewSprite3Objects2= [];
gdjs._54665_48373Code.GDNewSprite5Objects1= [];
gdjs._54665_48373Code.GDNewSprite5Objects2= [];
gdjs._54665_48373Code.GDSADObjects1= [];
gdjs._54665_48373Code.GDSADObjects2= [];
gdjs._54665_48373Code.GDNewSprite2Objects1= [];
gdjs._54665_48373Code.GDNewSprite2Objects2= [];
gdjs._54665_48373Code.GDANGRYObjects1= [];
gdjs._54665_48373Code.GDANGRYObjects2= [];
gdjs._54665_48373Code.GDNewSprite4Objects1= [];
gdjs._54665_48373Code.GDNewSprite4Objects2= [];
gdjs._54665_48373Code.GDShadedLightJoystickObjects1= [];
gdjs._54665_48373Code.GDShadedLightJoystickObjects2= [];
gdjs._54665_48373Code.GDSquareWhiteSliderObjects1= [];
gdjs._54665_48373Code.GDSquareWhiteSliderObjects2= [];
gdjs._54665_48373Code.GDstart_9595bgObjects1= [];
gdjs._54665_48373Code.GDstart_9595bgObjects2= [];
gdjs._54665_48373Code.GDNewTextObjects1= [];
gdjs._54665_48373Code.GDNewTextObjects2= [];
gdjs._54665_48373Code.GDNewText2Objects1= [];
gdjs._54665_48373Code.GDNewText2Objects2= [];


gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._54665_48373Code.GDNewSprite8Objects1});
gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._54665_48373Code.GDNewSprite5Objects1});
gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._54665_48373Code.GDNewSprite8Objects1});
gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._54665_48373Code.GDNewSprite7Objects1});
gdjs._54665_48373Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._54665_48373Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._54665_48373Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite8Objects1Objects, gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "메인", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._54665_48373Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._54665_48373Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite8Objects1Objects, gdjs._54665_48373Code.mapOfGDgdjs_9546_959554665_959548373Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Untitled (3).mp3", 1, true, 5, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._54665_48373Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._54665_48373Code.GDNewSpriteObjects1.length = 0;
gdjs._54665_48373Code.GDNewSpriteObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite6Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite6Objects2.length = 0;
gdjs._54665_48373Code.GDNewSprite7Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite7Objects2.length = 0;
gdjs._54665_48373Code.GDNewSprite8Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite8Objects2.length = 0;
gdjs._54665_48373Code.GDEMPTINESSObjects1.length = 0;
gdjs._54665_48373Code.GDEMPTINESSObjects2.length = 0;
gdjs._54665_48373Code.GDHAPPYObjects1.length = 0;
gdjs._54665_48373Code.GDHAPPYObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite3Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite3Objects2.length = 0;
gdjs._54665_48373Code.GDNewSprite5Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite5Objects2.length = 0;
gdjs._54665_48373Code.GDSADObjects1.length = 0;
gdjs._54665_48373Code.GDSADObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite2Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite2Objects2.length = 0;
gdjs._54665_48373Code.GDANGRYObjects1.length = 0;
gdjs._54665_48373Code.GDANGRYObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite4Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite4Objects2.length = 0;
gdjs._54665_48373Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._54665_48373Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._54665_48373Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._54665_48373Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._54665_48373Code.GDstart_9595bgObjects1.length = 0;
gdjs._54665_48373Code.GDstart_9595bgObjects2.length = 0;
gdjs._54665_48373Code.GDNewTextObjects1.length = 0;
gdjs._54665_48373Code.GDNewTextObjects2.length = 0;
gdjs._54665_48373Code.GDNewText2Objects1.length = 0;
gdjs._54665_48373Code.GDNewText2Objects2.length = 0;

gdjs._54665_48373Code.eventsList0(runtimeScene);
gdjs._54665_48373Code.GDNewSpriteObjects1.length = 0;
gdjs._54665_48373Code.GDNewSpriteObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite6Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite6Objects2.length = 0;
gdjs._54665_48373Code.GDNewSprite7Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite7Objects2.length = 0;
gdjs._54665_48373Code.GDNewSprite8Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite8Objects2.length = 0;
gdjs._54665_48373Code.GDEMPTINESSObjects1.length = 0;
gdjs._54665_48373Code.GDEMPTINESSObjects2.length = 0;
gdjs._54665_48373Code.GDHAPPYObjects1.length = 0;
gdjs._54665_48373Code.GDHAPPYObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite3Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite3Objects2.length = 0;
gdjs._54665_48373Code.GDNewSprite5Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite5Objects2.length = 0;
gdjs._54665_48373Code.GDSADObjects1.length = 0;
gdjs._54665_48373Code.GDSADObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite2Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite2Objects2.length = 0;
gdjs._54665_48373Code.GDANGRYObjects1.length = 0;
gdjs._54665_48373Code.GDANGRYObjects2.length = 0;
gdjs._54665_48373Code.GDNewSprite4Objects1.length = 0;
gdjs._54665_48373Code.GDNewSprite4Objects2.length = 0;
gdjs._54665_48373Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._54665_48373Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._54665_48373Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._54665_48373Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._54665_48373Code.GDstart_9595bgObjects1.length = 0;
gdjs._54665_48373Code.GDstart_9595bgObjects2.length = 0;
gdjs._54665_48373Code.GDNewTextObjects1.length = 0;
gdjs._54665_48373Code.GDNewTextObjects2.length = 0;
gdjs._54665_48373Code.GDNewText2Objects1.length = 0;
gdjs._54665_48373Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_54665_48373Code'] = gdjs._54665_48373Code;
