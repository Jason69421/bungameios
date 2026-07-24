
if (typeof gdjs.evtsExt__Model9Patch3D__SetInnerSize !== "undefined") {
  gdjs.evtsExt__Model9Patch3D__SetInnerSize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Model9Patch3D__SetInnerSize = {};
gdjs.evtsExt__Model9Patch3D__SetInnerSize.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__SetInnerSize.GDObjectObjects1= [];


gdjs.evtsExt__Model9Patch3D__SetInnerSize.userFunc0xe7b7a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const width = eventsFunctionContext.getArgument("Width");
const height = eventsFunctionContext.getArgument("Height");
const depth = eventsFunctionContext.getArgument("Depth");
/** @type {gdjs.CustomRuntimeObject} */
const object = objects[0];
object._innerArea.max[0] = width;
object._innerArea.max[1] = height;
object._innerArea.max[2] = depth;

};
gdjs.evtsExt__Model9Patch3D__SetInnerSize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__SetInnerSize.GDObjectObjects1);

const objects = gdjs.evtsExt__Model9Patch3D__SetInnerSize.GDObjectObjects1;
gdjs.evtsExt__Model9Patch3D__SetInnerSize.userFunc0xe7b7a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Model9Patch3D__SetInnerSize.func = function(runtimeScene, Object, Width, Height, Depth, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Model9Patch3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Model9Patch3D"),
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
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "Depth") return Depth;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__SetInnerSize.GDObjectObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__SetInnerSize.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__SetInnerSize.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Model9Patch3D__SetInnerSize.registeredGdjsCallbacks = [];