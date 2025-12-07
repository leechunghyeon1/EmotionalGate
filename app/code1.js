gdjs._47700_51064Code = {};
gdjs._47700_51064Code.localVariables = [];
gdjs._47700_51064Code.idToCallbackMap = new Map();
gdjs._47700_51064Code.GDNewSpriteObjects1= [];
gdjs._47700_51064Code.GDNewSpriteObjects2= [];
gdjs._47700_51064Code.GDNewSprite6Objects1= [];
gdjs._47700_51064Code.GDNewSprite6Objects2= [];
gdjs._47700_51064Code.GDNewSprite8Objects1= [];
gdjs._47700_51064Code.GDNewSprite8Objects2= [];
gdjs._47700_51064Code.GDEMPTINESSObjects1= [];
gdjs._47700_51064Code.GDEMPTINESSObjects2= [];
gdjs._47700_51064Code.GDHAPPYObjects1= [];
gdjs._47700_51064Code.GDHAPPYObjects2= [];
gdjs._47700_51064Code.GDNewSprite3Objects1= [];
gdjs._47700_51064Code.GDNewSprite3Objects2= [];
gdjs._47700_51064Code.GDNewSprite5Objects1= [];
gdjs._47700_51064Code.GDNewSprite5Objects2= [];
gdjs._47700_51064Code.GDSADObjects1= [];
gdjs._47700_51064Code.GDSADObjects2= [];
gdjs._47700_51064Code.GDNewSprite2Objects1= [];
gdjs._47700_51064Code.GDNewSprite2Objects2= [];
gdjs._47700_51064Code.GDANGRYObjects1= [];
gdjs._47700_51064Code.GDANGRYObjects2= [];
gdjs._47700_51064Code.GDNewSprite4Objects1= [];
gdjs._47700_51064Code.GDNewSprite4Objects2= [];
gdjs._47700_51064Code.GDShadedLightJoystickObjects1= [];
gdjs._47700_51064Code.GDShadedLightJoystickObjects2= [];
gdjs._47700_51064Code.GDSquareWhiteSliderObjects1= [];
gdjs._47700_51064Code.GDSquareWhiteSliderObjects2= [];
gdjs._47700_51064Code.GDstart_9595bgObjects1= [];
gdjs._47700_51064Code.GDstart_9595bgObjects2= [];
gdjs._47700_51064Code.GDNewTextObjects1= [];
gdjs._47700_51064Code.GDNewTextObjects2= [];
gdjs._47700_51064Code.GDNewText2Objects1= [];
gdjs._47700_51064Code.GDNewText2Objects2= [];


gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._47700_51064Code.GDNewSprite6Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._47700_51064Code.GDNewSprite6Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._47700_51064Code.GDNewSprite8Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._47700_51064Code.GDNewSprite3Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._47700_51064Code.GDNewSprite8Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._47700_51064Code.GDNewSprite5Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._47700_51064Code.GDNewSprite8Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._47700_51064Code.GDNewSprite2Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._47700_51064Code.GDNewSprite8Objects1});
gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._47700_51064Code.GDNewSprite4Objects1});
gdjs._47700_51064Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._47700_51064Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._47700_51064Code.GDNewSprite8Objects1.length;i<l;++i) {
    if ( !(gdjs._47700_51064Code.GDNewSprite8Objects1[i].getBehavior("PathfindingObstacle").isImpassable()) ) {
        isConditionTrue_0 = true;
        gdjs._47700_51064Code.GDNewSprite8Objects1[k] = gdjs._47700_51064Code.GDNewSprite8Objects1[i];
        ++k;
    }
}
gdjs._47700_51064Code.GDNewSprite8Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._47700_51064Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs._47700_51064Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._47700_51064Code.GDNewSprite6Objects1[i].getBehavior("PathfindingObstacle").setImpassable(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._47700_51064Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite6Objects1Objects, gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite6Objects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._47700_51064Code.GDNewSprite8Objects1);
{for(var i = 0, len = gdjs._47700_51064Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._47700_51064Code.GDNewSprite8Objects1[i].clearForces();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._47700_51064Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._47700_51064Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects, gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "공허", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._47700_51064Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._47700_51064Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects, gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "행복", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._47700_51064Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._47700_51064Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects, gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "슬픔", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._47700_51064Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._47700_51064Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite8Objects1Objects, gdjs._47700_51064Code.mapOfGDgdjs_9546_959547700_959551064Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "분노", false);
}
}

}


};

gdjs._47700_51064Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._47700_51064Code.GDNewSpriteObjects1.length = 0;
gdjs._47700_51064Code.GDNewSpriteObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite6Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite6Objects2.length = 0;
gdjs._47700_51064Code.GDNewSprite8Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite8Objects2.length = 0;
gdjs._47700_51064Code.GDEMPTINESSObjects1.length = 0;
gdjs._47700_51064Code.GDEMPTINESSObjects2.length = 0;
gdjs._47700_51064Code.GDHAPPYObjects1.length = 0;
gdjs._47700_51064Code.GDHAPPYObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite3Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite3Objects2.length = 0;
gdjs._47700_51064Code.GDNewSprite5Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite5Objects2.length = 0;
gdjs._47700_51064Code.GDSADObjects1.length = 0;
gdjs._47700_51064Code.GDSADObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite2Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite2Objects2.length = 0;
gdjs._47700_51064Code.GDANGRYObjects1.length = 0;
gdjs._47700_51064Code.GDANGRYObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite4Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite4Objects2.length = 0;
gdjs._47700_51064Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._47700_51064Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._47700_51064Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._47700_51064Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._47700_51064Code.GDstart_9595bgObjects1.length = 0;
gdjs._47700_51064Code.GDstart_9595bgObjects2.length = 0;
gdjs._47700_51064Code.GDNewTextObjects1.length = 0;
gdjs._47700_51064Code.GDNewTextObjects2.length = 0;
gdjs._47700_51064Code.GDNewText2Objects1.length = 0;
gdjs._47700_51064Code.GDNewText2Objects2.length = 0;

gdjs._47700_51064Code.eventsList0(runtimeScene);
gdjs._47700_51064Code.GDNewSpriteObjects1.length = 0;
gdjs._47700_51064Code.GDNewSpriteObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite6Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite6Objects2.length = 0;
gdjs._47700_51064Code.GDNewSprite8Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite8Objects2.length = 0;
gdjs._47700_51064Code.GDEMPTINESSObjects1.length = 0;
gdjs._47700_51064Code.GDEMPTINESSObjects2.length = 0;
gdjs._47700_51064Code.GDHAPPYObjects1.length = 0;
gdjs._47700_51064Code.GDHAPPYObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite3Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite3Objects2.length = 0;
gdjs._47700_51064Code.GDNewSprite5Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite5Objects2.length = 0;
gdjs._47700_51064Code.GDSADObjects1.length = 0;
gdjs._47700_51064Code.GDSADObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite2Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite2Objects2.length = 0;
gdjs._47700_51064Code.GDANGRYObjects1.length = 0;
gdjs._47700_51064Code.GDANGRYObjects2.length = 0;
gdjs._47700_51064Code.GDNewSprite4Objects1.length = 0;
gdjs._47700_51064Code.GDNewSprite4Objects2.length = 0;
gdjs._47700_51064Code.GDShadedLightJoystickObjects1.length = 0;
gdjs._47700_51064Code.GDShadedLightJoystickObjects2.length = 0;
gdjs._47700_51064Code.GDSquareWhiteSliderObjects1.length = 0;
gdjs._47700_51064Code.GDSquareWhiteSliderObjects2.length = 0;
gdjs._47700_51064Code.GDstart_9595bgObjects1.length = 0;
gdjs._47700_51064Code.GDstart_9595bgObjects2.length = 0;
gdjs._47700_51064Code.GDNewTextObjects1.length = 0;
gdjs._47700_51064Code.GDNewTextObjects2.length = 0;
gdjs._47700_51064Code.GDNewText2Objects1.length = 0;
gdjs._47700_51064Code.GDNewText2Objects2.length = 0;


return;

}

gdjs['_47700_51064Code'] = gdjs._47700_51064Code;
