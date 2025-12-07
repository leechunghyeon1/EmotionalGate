gdjs._49836_54548Code = {};
gdjs._49836_54548Code.localVariables = [];
gdjs._49836_54548Code.idToCallbackMap = new Map();
gdjs._49836_54548Code.GDNewSpriteObjects1= [];
gdjs._49836_54548Code.GDNewSpriteObjects2= [];
gdjs._49836_54548Code.GDNewSprite6Objects1= [];
gdjs._49836_54548Code.GDNewSprite6Objects2= [];
gdjs._49836_54548Code.GDNewSprite8Objects1= [];
gdjs._49836_54548Code.GDNewSprite8Objects2= [];
gdjs._49836_54548Code.GDEMPTINESSObjects1= [];
gdjs._49836_54548Code.GDEMPTINESSObjects2= [];
gdjs._49836_54548Code.GDHAPPYObjects1= [];
gdjs._49836_54548Code.GDHAPPYObjects2= [];
gdjs._49836_54548Code.GDNewSprite3Objects1= [];
gdjs._49836_54548Code.GDNewSprite3Objects2= [];
gdjs._49836_54548Code.GDNewSprite5Objects1= [];
gdjs._49836_54548Code.GDNewSprite5Objects2= [];
gdjs._49836_54548Code.GDSADObjects1= [];
gdjs._49836_54548Code.GDSADObjects2= [];
gdjs._49836_54548Code.GDNewSprite2Objects1= [];
gdjs._49836_54548Code.GDNewSprite2Objects2= [];
gdjs._49836_54548Code.GDANGRYObjects1= [];
gdjs._49836_54548Code.GDANGRYObjects2= [];
gdjs._49836_54548Code.GDNewSprite4Objects1= [];
gdjs._49836_54548Code.GDNewSprite4Objects2= [];
gdjs._49836_54548Code.GDShadedLightJoystickObjects1= [];
gdjs._49836_54548Code.GDShadedLightJoystickObjects2= [];
gdjs._49836_54548Code.GDSquareWhiteSliderObjects1= [];
gdjs._49836_54548Code.GDSquareWhiteSliderObjects2= [];
gdjs._49836_54548Code.GDstart_9595bgObjects1= [];
gdjs._49836_54548Code.GDstart_9595bgObjects2= [];
gdjs._49836_54548Code.GDNewTextObjects1= [];
gdjs._49836_54548Code.GDNewTextObjects2= [];
gdjs._49836_54548Code.GDNewText2Objects1= [];
gdjs._49836_54548Code.GDNewText2Objects2= [];


gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._49836_54548Code.GDNewSprite8Objects1});
gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._49836_54548Code.GDNewSprite2Objects1});
gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._49836_54548Code.GDNewSprite8Objects1});
gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._49836_54548Code.GDNewSprite6Objects1});
gdjs._49836_54548Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._49836_54548Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._49836_54548Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite8Objects1Objects, gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "메인", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._49836_54548Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._49836_54548Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite8Objects1Objects, gdjs._49836_54548Code.mapOfGDgdjs_9546_959549836_959554548Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Untitled (2).mp3", 1, true, 5, 1);
}
}

}


};

gdjs._49836_54548Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49836_54548Code.GDNewSpriteObjects1.length = 0;
gdjs._49836_54548Code.GDNewSpriteObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite6Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite6Objects2.length = 0;
gdjs._49836_54548Code.GDNewSprite8Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite8Objects2.length = 0;
gdjs._49836_54548Code.GDEMPTINESSObjects1.length = 0;
gdjs._49836_54548Code.GDEMPTINESSObjects2.length = 0;
gdjs._49836_54548Code.GDHAPPYObjects1.length = 0;
gdjs._49836_54548Code.GDHAPPYObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite3Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite3Objects2.length = 0;
gdjs._49836_54548Code.GDNewSprite5Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite5Objects2.length = 0;
gdjs._49836_54548Code.GDSADObjects1.length = 0;
gdjs._49836_54548Code.GDSADObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite2Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite2Objects2.length = 0;
gdjs._49836_54548Code.GDANGRYObjects1.length = 0;
gdjs._49836_54548Code.GDANGRYObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite4Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite4Objects2.length = 0;
gdjs._49836_54548Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._49836_54548Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._49836_54548Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._49836_54548Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._49836_54548Code.GDstart_9595bgObjects1.length = 0;
gdjs._49836_54548Code.GDstart_9595bgObjects2.length = 0;
gdjs._49836_54548Code.GDNewTextObjects1.length = 0;
gdjs._49836_54548Code.GDNewTextObjects2.length = 0;
gdjs._49836_54548Code.GDNewText2Objects1.length = 0;
gdjs._49836_54548Code.GDNewText2Objects2.length = 0;

gdjs._49836_54548Code.eventsList0(runtimeScene);
gdjs._49836_54548Code.GDNewSpriteObjects1.length = 0;
gdjs._49836_54548Code.GDNewSpriteObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite6Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite6Objects2.length = 0;
gdjs._49836_54548Code.GDNewSprite8Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite8Objects2.length = 0;
gdjs._49836_54548Code.GDEMPTINESSObjects1.length = 0;
gdjs._49836_54548Code.GDEMPTINESSObjects2.length = 0;
gdjs._49836_54548Code.GDHAPPYObjects1.length = 0;
gdjs._49836_54548Code.GDHAPPYObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite3Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite3Objects2.length = 0;
gdjs._49836_54548Code.GDNewSprite5Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite5Objects2.length = 0;
gdjs._49836_54548Code.GDSADObjects1.length = 0;
gdjs._49836_54548Code.GDSADObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite2Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite2Objects2.length = 0;
gdjs._49836_54548Code.GDANGRYObjects1.length = 0;
gdjs._49836_54548Code.GDANGRYObjects2.length = 0;
gdjs._49836_54548Code.GDNewSprite4Objects1.length = 0;
gdjs._49836_54548Code.GDNewSprite4Objects2.length = 0;
gdjs._49836_54548Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._49836_54548Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._49836_54548Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._49836_54548Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._49836_54548Code.GDstart_9595bgObjects1.length = 0;
gdjs._49836_54548Code.GDstart_9595bgObjects2.length = 0;
gdjs._49836_54548Code.GDNewTextObjects1.length = 0;
gdjs._49836_54548Code.GDNewTextObjects2.length = 0;
gdjs._49836_54548Code.GDNewText2Objects1.length = 0;
gdjs._49836_54548Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_49836_54548Code'] = gdjs._49836_54548Code;
