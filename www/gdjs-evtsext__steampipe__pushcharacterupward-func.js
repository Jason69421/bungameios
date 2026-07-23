
if (typeof gdjs.evtsExt__SteamPipe__PushCharacterUpward !== "undefined") {
  gdjs.evtsExt__SteamPipe__PushCharacterUpward.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SteamPipe__PushCharacterUpward = {};
gdjs.evtsExt__SteamPipe__PushCharacterUpward.idToCallbackMap = new Map();
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects4= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects3= [];
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects4= [];


gdjs.evtsExt__SteamPipe__PushCharacterUpward.mapOfGDgdjs_9546evtsExt_9595_9595SteamPipe_9595_9595PushCharacterUpward_9546GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1});
gdjs.evtsExt__SteamPipe__PushCharacterUpward.mapOfGDgdjs_9546evtsExt_9595_9595SteamPipe_9595_9595PushCharacterUpward_9546GDPipeEndObjects1Objects = Hashtable.newFrom({"PipeEnd": gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1});
gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2, gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3);

{for(var i = 0, len = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCurrentJumpSpeed(gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getCurrentJumpSpeed() + (eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCurrentFallSpeed(gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getCurrentFallSpeed() - (eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


};gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Force", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() < 500);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getCurrentJumpSpeed() < 1000 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2[k] = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber(gdjs.evtTools.common.lerp(80, 0, (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()) / 500));
}
{eventsFunctionContext.localVariables[1].getFromIndex(0).mul(eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber());
}

{ //Subevents
gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DeltaZ", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1, gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2);

gdjs.copyArray(gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1, gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2);

{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) - ((( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth())));
}

{ //Subevents
gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Character"), gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("PipeEnd"), gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__SteamPipe__PushCharacterUpward.mapOfGDgdjs_9546evtsExt_9595_9595SteamPipe_9595_9595PushCharacterUpward_9546GDCharacterObjects1Objects, gdjs.evtsExt__SteamPipe__PushCharacterUpward.mapOfGDgdjs_9546evtsExt_9595_9595SteamPipe_9595_9595PushCharacterUpward_9546GDPipeEndObjects1Objects, 100, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() > (( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1[k] = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AdvancedJump3D")).RemoveOneRemainingAirJump(eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SteamPipe__PushCharacterUpward.func = function(runtimeScene, Character, AdvancedJump3D, Object3D, PhysicsCharacter3D, PipeEnd, Object3D, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Character": Character
, "PipeEnd": PipeEnd
},
  _objectArraysMap: {
"Character": gdjs.objectsListsToArray(Character)
, "PipeEnd": gdjs.objectsListsToArray(PipeEnd)
},
  _behaviorNamesMap: {
"AdvancedJump3D": AdvancedJump3D
, "Object3D": Object3D
, "PhysicsCharacter3D": PhysicsCharacter3D
, "Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SteamPipe"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SteamPipe"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects4.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects3.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects4.length = 0;

gdjs.evtsExt__SteamPipe__PushCharacterUpward.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects1.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects2.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects3.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDCharacterObjects4.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects1.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects2.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects3.length = 0;
gdjs.evtsExt__SteamPipe__PushCharacterUpward.GDPipeEndObjects4.length = 0;


return;
}

gdjs.evtsExt__SteamPipe__PushCharacterUpward.registeredGdjsCallbacks = [];