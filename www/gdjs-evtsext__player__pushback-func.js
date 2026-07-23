
if (typeof gdjs.evtsExt__Player__PushBack !== "undefined") {
  gdjs.evtsExt__Player__PushBack.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Player__PushBack = {};
gdjs.evtsExt__Player__PushBack.idToCallbackMap = new Map();
gdjs.evtsExt__Player__PushBack.GDCharacterObjects1= [];
gdjs.evtsExt__Player__PushBack.GDCharacterObjects2= [];
gdjs.evtsExt__Player__PushBack.GDCrabObjects1= [];
gdjs.evtsExt__Player__PushBack.GDCrabObjects2= [];


gdjs.evtsExt__Player__PushBack.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Character"), gdjs.evtsExt__Player__PushBack.GDCharacterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Crab"), gdjs.evtsExt__Player__PushBack.GDCrabObjects1);
{for(var i = 0, len = gdjs.evtsExt__Player__PushBack.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PushBack.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCurrentForwardSpeed(-(eventsFunctionContext.getArgument("HorizontalSpeed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PushBack.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PushBack.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setForwardAngle((gdjs.evtsExt__Player__PushBack.GDCharacterObjects1[i].getAngleToObject((gdjs.evtsExt__Player__PushBack.GDCrabObjects1.length !== 0 ? gdjs.evtsExt__Player__PushBack.GDCrabObjects1[0] : null))));
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PushBack.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PushBack.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCurrentJumpSpeed(gdjs.evtsExt__Player__PushBack.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getCurrentJumpSpeed() + (eventsFunctionContext.getArgument("VerticalSpeed")));
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PushBack.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PushBack.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCurrentFallSpeed(0);
}
}
}

}


};

gdjs.evtsExt__Player__PushBack.func = function(runtimeScene, Character, PhysicsCharacter3D, Crab, HorizontalSpeed, VerticalSpeed, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Character": Character
, "Crab": Crab
},
  _objectArraysMap: {
"Character": gdjs.objectsListsToArray(Character)
, "Crab": gdjs.objectsListsToArray(Crab)
},
  _behaviorNamesMap: {
"PhysicsCharacter3D": PhysicsCharacter3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Player"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Player"),
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
if (argName === "HorizontalSpeed") return HorizontalSpeed;
if (argName === "VerticalSpeed") return VerticalSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Player__PushBack.GDCharacterObjects1.length = 0;
gdjs.evtsExt__Player__PushBack.GDCharacterObjects2.length = 0;
gdjs.evtsExt__Player__PushBack.GDCrabObjects1.length = 0;
gdjs.evtsExt__Player__PushBack.GDCrabObjects2.length = 0;

gdjs.evtsExt__Player__PushBack.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PushBack.GDCharacterObjects1.length = 0;
gdjs.evtsExt__Player__PushBack.GDCharacterObjects2.length = 0;
gdjs.evtsExt__Player__PushBack.GDCrabObjects1.length = 0;
gdjs.evtsExt__Player__PushBack.GDCrabObjects2.length = 0;


return;
}

gdjs.evtsExt__Player__PushBack.registeredGdjsCallbacks = [];