
if (typeof gdjs.evtsExt__Background__CreateObjectOnCylinder !== "undefined") {
  gdjs.evtsExt__Background__CreateObjectOnCylinder.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Background__CreateObjectOnCylinder = {};
gdjs.evtsExt__Background__CreateObjectOnCylinder.idToCallbackMap = new Map();
gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects1= [];
gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2= [];


gdjs.evtsExt__Background__CreateObjectOnCylinder.mapOfGDgdjs_9546evtsExt_9595_9595Background_9595_9595CreateObjectOnCylinder_9546GDCloudObjects2Objects = Hashtable.newFrom({"Cloud": gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2});
gdjs.evtsExt__Background__CreateObjectOnCylinder.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Background__CreateObjectOnCylinder.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = eventsFunctionContext.getArgument("ObjectCount");
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Background__CreateObjectOnCylinder.mapOfGDgdjs_9546evtsExt_9595_9595Background_9595_9595CreateObjectOnCylinder_9546GDCloudObjects2Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].setAngle(gdjs.randomFloat(360));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].putAround(eventsFunctionContext.getArgument("CenterX"), eventsFunctionContext.getArgument("CenterY"), gdjs.randomFloatInRange(eventsFunctionContext.getArgument("RadiusMin"), eventsFunctionContext.getArgument("RadiusMax")), (gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getAngle()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].setAngle(gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getAngle() + (gdjs.randomFloatInRange(-15, 15)));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.randomFloatInRange(-30, -15));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.randomFloatInRange(eventsFunctionContext.getArgument("MinZ"), eventsFunctionContext.getArgument("MaxZ")));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(gdjs.randomFloatInRange(0.5, 2));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleX(gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScaleX() * (gdjs.randomFloatInRange(0.8, 1.25)));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY(gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScaleY() * (gdjs.randomFloatInRange(1, 1.25)));
}
}
{for(var i = 0, len = gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ(gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getScaleZ() * (gdjs.randomFloatInRange(0.8, 1.125)));
}
}
}
}

}


};

gdjs.evtsExt__Background__CreateObjectOnCylinder.func = function(runtimeScene, Cloud, Object3D, Scale, ObjectCount, CenterX, CenterY, RadiusMin, RadiusMax, MinZ, MaxZ, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Cloud": Cloud
},
  _objectArraysMap: {
"Cloud": gdjs.objectsListsToArray(Cloud)
},
  _behaviorNamesMap: {
"Object3D": Object3D
, "Scale": Scale
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Background"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Background"),
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
if (argName === "ObjectCount") return ObjectCount;
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "RadiusMin") return RadiusMin;
if (argName === "RadiusMax") return RadiusMax;
if (argName === "MinZ") return MinZ;
if (argName === "MaxZ") return MaxZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects1.length = 0;
gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length = 0;

gdjs.evtsExt__Background__CreateObjectOnCylinder.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects1.length = 0;
gdjs.evtsExt__Background__CreateObjectOnCylinder.GDCloudObjects2.length = 0;


return;
}

gdjs.evtsExt__Background__CreateObjectOnCylinder.registeredGdjsCallbacks = [];