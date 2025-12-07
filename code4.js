gdjs._48516_45432Code = {};
gdjs._48516_45432Code.localVariables = [];
gdjs._48516_45432Code.idToCallbackMap = new Map();
gdjs._48516_45432Code.GDNewSpriteObjects1= [];
gdjs._48516_45432Code.GDNewSpriteObjects2= [];
gdjs._48516_45432Code.GDNewSprite6Objects1= [];
gdjs._48516_45432Code.GDNewSprite6Objects2= [];
gdjs._48516_45432Code.GDNewSprite8Objects1= [];
gdjs._48516_45432Code.GDNewSprite8Objects2= [];
gdjs._48516_45432Code.GDEMPTINESSObjects1= [];
gdjs._48516_45432Code.GDEMPTINESSObjects2= [];
gdjs._48516_45432Code.GDHAPPYObjects1= [];
gdjs._48516_45432Code.GDHAPPYObjects2= [];
gdjs._48516_45432Code.GDNewSprite3Objects1= [];
gdjs._48516_45432Code.GDNewSprite3Objects2= [];
gdjs._48516_45432Code.GDNewSprite5Objects1= [];
gdjs._48516_45432Code.GDNewSprite5Objects2= [];
gdjs._48516_45432Code.GDSADObjects1= [];
gdjs._48516_45432Code.GDSADObjects2= [];
gdjs._48516_45432Code.GDNewSprite2Objects1= [];
gdjs._48516_45432Code.GDNewSprite2Objects2= [];
gdjs._48516_45432Code.GDANGRYObjects1= [];
gdjs._48516_45432Code.GDANGRYObjects2= [];
gdjs._48516_45432Code.GDNewSprite4Objects1= [];
gdjs._48516_45432Code.GDNewSprite4Objects2= [];
gdjs._48516_45432Code.GDShadedLightJoystickObjects1= [];
gdjs._48516_45432Code.GDShadedLightJoystickObjects2= [];
gdjs._48516_45432Code.GDSquareWhiteSliderObjects1= [];
gdjs._48516_45432Code.GDSquareWhiteSliderObjects2= [];
gdjs._48516_45432Code.GDstart_9595bgObjects1= [];
gdjs._48516_45432Code.GDstart_9595bgObjects2= [];
gdjs._48516_45432Code.GDNewTextObjects1= [];
gdjs._48516_45432Code.GDNewTextObjects2= [];
gdjs._48516_45432Code.GDNewText2Objects1= [];
gdjs._48516_45432Code.GDNewText2Objects2= [];


gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._48516_45432Code.GDNewSprite8Objects1});
gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._48516_45432Code.GDNewSprite4Objects1});
gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._48516_45432Code.GDNewSprite8Objects1});
gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._48516_45432Code.GDNewSprite6Objects1});
gdjs._48516_45432Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._48516_45432Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._48516_45432Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite8Objects1Objects, gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "메인", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._48516_45432Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._48516_45432Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite8Objects1Objects, gdjs._48516_45432Code.mapOfGDgdjs_9546_959548516_959545432Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Untitled (1).mp3", 1, true, 5, 1);
}
}

}


};

gdjs._48516_45432Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48516_45432Code.GDNewSpriteObjects1.length = 0;
gdjs._48516_45432Code.GDNewSpriteObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite6Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite6Objects2.length = 0;
gdjs._48516_45432Code.GDNewSprite8Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite8Objects2.length = 0;
gdjs._48516_45432Code.GDEMPTINESSObjects1.length = 0;
gdjs._48516_45432Code.GDEMPTINESSObjects2.length = 0;
gdjs._48516_45432Code.GDHAPPYObjects1.length = 0;
gdjs._48516_45432Code.GDHAPPYObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite3Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite3Objects2.length = 0;
gdjs._48516_45432Code.GDNewSprite5Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite5Objects2.length = 0;
gdjs._48516_45432Code.GDSADObjects1.length = 0;
gdjs._48516_45432Code.GDSADObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite2Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite2Objects2.length = 0;
gdjs._48516_45432Code.GDANGRYObjects1.length = 0;
gdjs._48516_45432Code.GDANGRYObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite4Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite4Objects2.length = 0;
gdjs._48516_45432Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._48516_45432Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._48516_45432Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._48516_45432Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._48516_45432Code.GDstart_9595bgObjects1.length = 0;
gdjs._48516_45432Code.GDstart_9595bgObjects2.length = 0;
gdjs._48516_45432Code.GDNewTextObjects1.length = 0;
gdjs._48516_45432Code.GDNewTextObjects2.length = 0;
gdjs._48516_45432Code.GDNewText2Objects1.length = 0;
gdjs._48516_45432Code.GDNewText2Objects2.length = 0;

gdjs._48516_45432Code.eventsList0(runtimeScene);
gdjs._48516_45432Code.GDNewSpriteObjects1.length = 0;
gdjs._48516_45432Code.GDNewSpriteObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite6Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite6Objects2.length = 0;
gdjs._48516_45432Code.GDNewSprite8Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite8Objects2.length = 0;
gdjs._48516_45432Code.GDEMPTINESSObjects1.length = 0;
gdjs._48516_45432Code.GDEMPTINESSObjects2.length = 0;
gdjs._48516_45432Code.GDHAPPYObjects1.length = 0;
gdjs._48516_45432Code.GDHAPPYObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite3Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite3Objects2.length = 0;
gdjs._48516_45432Code.GDNewSprite5Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite5Objects2.length = 0;
gdjs._48516_45432Code.GDSADObjects1.length = 0;
gdjs._48516_45432Code.GDSADObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite2Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite2Objects2.length = 0;
gdjs._48516_45432Code.GDANGRYObjects1.length = 0;
gdjs._48516_45432Code.GDANGRYObjects2.length = 0;
gdjs._48516_45432Code.GDNewSprite4Objects1.length = 0;
gdjs._48516_45432Code.GDNewSprite4Objects2.length = 0;
gdjs._48516_45432Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._48516_45432Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._48516_45432Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._48516_45432Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._48516_45432Code.GDstart_9595bgObjects1.length = 0;
gdjs._48516_45432Code.GDstart_9595bgObjects2.length = 0;
gdjs._48516_45432Code.GDNewTextObjects1.length = 0;
gdjs._48516_45432Code.GDNewTextObjects2.length = 0;
gdjs._48516_45432Code.GDNewText2Objects1.length = 0;
gdjs._48516_45432Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_48516_45432Code'] = gdjs._48516_45432Code;
