gdjs._44277_54728Code = {};
gdjs._44277_54728Code.localVariables = [];
gdjs._44277_54728Code.idToCallbackMap = new Map();
gdjs._44277_54728Code.GDNewSpriteObjects1= [];
gdjs._44277_54728Code.GDNewSpriteObjects2= [];
gdjs._44277_54728Code.GDNewSprite6Objects1= [];
gdjs._44277_54728Code.GDNewSprite6Objects2= [];
gdjs._44277_54728Code.GDNewSprite8Objects1= [];
gdjs._44277_54728Code.GDNewSprite8Objects2= [];
gdjs._44277_54728Code.GDEMPTINESSObjects1= [];
gdjs._44277_54728Code.GDEMPTINESSObjects2= [];
gdjs._44277_54728Code.GDHAPPYObjects1= [];
gdjs._44277_54728Code.GDHAPPYObjects2= [];
gdjs._44277_54728Code.GDNewSprite3Objects1= [];
gdjs._44277_54728Code.GDNewSprite3Objects2= [];
gdjs._44277_54728Code.GDNewSprite5Objects1= [];
gdjs._44277_54728Code.GDNewSprite5Objects2= [];
gdjs._44277_54728Code.GDSADObjects1= [];
gdjs._44277_54728Code.GDSADObjects2= [];
gdjs._44277_54728Code.GDNewSprite2Objects1= [];
gdjs._44277_54728Code.GDNewSprite2Objects2= [];
gdjs._44277_54728Code.GDANGRYObjects1= [];
gdjs._44277_54728Code.GDANGRYObjects2= [];
gdjs._44277_54728Code.GDNewSprite4Objects1= [];
gdjs._44277_54728Code.GDNewSprite4Objects2= [];
gdjs._44277_54728Code.GDShadedLightJoystickObjects1= [];
gdjs._44277_54728Code.GDShadedLightJoystickObjects2= [];
gdjs._44277_54728Code.GDSquareWhiteSliderObjects1= [];
gdjs._44277_54728Code.GDSquareWhiteSliderObjects2= [];
gdjs._44277_54728Code.GDstart_9595bgObjects1= [];
gdjs._44277_54728Code.GDstart_9595bgObjects2= [];
gdjs._44277_54728Code.GDNewTextObjects1= [];
gdjs._44277_54728Code.GDNewTextObjects2= [];
gdjs._44277_54728Code.GDNewText2Objects1= [];
gdjs._44277_54728Code.GDNewText2Objects2= [];


gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._44277_54728Code.GDNewSprite8Objects1});
gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._44277_54728Code.GDNewSprite3Objects1});
gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._44277_54728Code.GDNewSprite8Objects1});
gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._44277_54728Code.GDNewSprite6Objects1});
gdjs._44277_54728Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._44277_54728Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._44277_54728Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite8Objects1Objects, gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "메인", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._44277_54728Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._44277_54728Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite8Objects1Objects, gdjs._44277_54728Code.mapOfGDgdjs_9546_959544277_959554728Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Untitled.mp3", 1, true, 3, 1);
}
}

}


};

gdjs._44277_54728Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._44277_54728Code.GDNewSpriteObjects1.length = 0;
gdjs._44277_54728Code.GDNewSpriteObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite6Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite6Objects2.length = 0;
gdjs._44277_54728Code.GDNewSprite8Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite8Objects2.length = 0;
gdjs._44277_54728Code.GDEMPTINESSObjects1.length = 0;
gdjs._44277_54728Code.GDEMPTINESSObjects2.length = 0;
gdjs._44277_54728Code.GDHAPPYObjects1.length = 0;
gdjs._44277_54728Code.GDHAPPYObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite3Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite3Objects2.length = 0;
gdjs._44277_54728Code.GDNewSprite5Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite5Objects2.length = 0;
gdjs._44277_54728Code.GDSADObjects1.length = 0;
gdjs._44277_54728Code.GDSADObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite2Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite2Objects2.length = 0;
gdjs._44277_54728Code.GDANGRYObjects1.length = 0;
gdjs._44277_54728Code.GDANGRYObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite4Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite4Objects2.length = 0;
gdjs._44277_54728Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._44277_54728Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._44277_54728Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._44277_54728Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._44277_54728Code.GDstart_9595bgObjects1.length = 0;
gdjs._44277_54728Code.GDstart_9595bgObjects2.length = 0;
gdjs._44277_54728Code.GDNewTextObjects1.length = 0;
gdjs._44277_54728Code.GDNewTextObjects2.length = 0;
gdjs._44277_54728Code.GDNewText2Objects1.length = 0;
gdjs._44277_54728Code.GDNewText2Objects2.length = 0;

gdjs._44277_54728Code.eventsList0(runtimeScene);
gdjs._44277_54728Code.GDNewSpriteObjects1.length = 0;
gdjs._44277_54728Code.GDNewSpriteObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite6Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite6Objects2.length = 0;
gdjs._44277_54728Code.GDNewSprite8Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite8Objects2.length = 0;
gdjs._44277_54728Code.GDEMPTINESSObjects1.length = 0;
gdjs._44277_54728Code.GDEMPTINESSObjects2.length = 0;
gdjs._44277_54728Code.GDHAPPYObjects1.length = 0;
gdjs._44277_54728Code.GDHAPPYObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite3Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite3Objects2.length = 0;
gdjs._44277_54728Code.GDNewSprite5Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite5Objects2.length = 0;
gdjs._44277_54728Code.GDSADObjects1.length = 0;
gdjs._44277_54728Code.GDSADObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite2Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite2Objects2.length = 0;
gdjs._44277_54728Code.GDANGRYObjects1.length = 0;
gdjs._44277_54728Code.GDANGRYObjects2.length = 0;
gdjs._44277_54728Code.GDNewSprite4Objects1.length = 0;
gdjs._44277_54728Code.GDNewSprite4Objects2.length = 0;
gdjs._44277_54728Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._44277_54728Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._44277_54728Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._44277_54728Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._44277_54728Code.GDstart_9595bgObjects1.length = 0;
gdjs._44277_54728Code.GDstart_9595bgObjects2.length = 0;
gdjs._44277_54728Code.GDNewTextObjects1.length = 0;
gdjs._44277_54728Code.GDNewTextObjects2.length = 0;
gdjs._44277_54728Code.GDNewText2Objects1.length = 0;
gdjs._44277_54728Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_44277_54728Code'] = gdjs._44277_54728Code;
