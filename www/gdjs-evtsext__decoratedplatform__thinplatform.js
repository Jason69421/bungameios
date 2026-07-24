
gdjs.evtsExt__DecoratedPlatform__ThinPlatform = gdjs.evtsExt__DecoratedPlatform__ThinPlatform || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform = class ThinPlatform extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1= [];
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2= [];
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1= [];
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects2= [];


gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595ThinPlatform_9546ThinPlatform_9546prototype_9546doStepPostEventsContext_9546GDGrass3Objects1Objects = Hashtable.newFrom({"Grass3": gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1});
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595ThinPlatform_9546ThinPlatform_9546prototype_9546doStepPostEventsContext_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1});
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getWidth() != 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[k] = gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18952244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1 */
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length = 0;

{gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.func(runtimeScene, gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595ThinPlatform_9546ThinPlatform_9546prototype_9546doStepPostEventsContext_9546GDGrass3Objects1Objects, 400, gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595ThinPlatform_9546ThinPlatform_9546prototype_9546doStepPostEventsContext_9546GDPlatformObjects1Objects, 20, eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}
}

}


};

gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlatformObjectsList = [...runtimeScene.getObjects("Platform")];
var GDPlatformObjects = Hashtable.newFrom({"Platform": thisGDPlatformObjectsList});
var thisGDGrass3ObjectsList = [...runtimeScene.getObjects("Grass3")];
var GDGrass3Objects = Hashtable.newFrom({"Grass3": thisGDGrass3ObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Platform": GDPlatformObjects
, "Grass3": GDGrass3Objects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Platform": thisGDPlatformObjectsList
, "Grass3": thisGDGrass3ObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DecoratedPlatform"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DecoratedPlatform"),
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

gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects2.length = 0;

gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPostEventsContext.GDGrass3Objects2.length = 0;


return;
}

gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("DecoratedPlatform::ThinPlatform", gdjs.evtsExt__DecoratedPlatform__ThinPlatform.ThinPlatform);
