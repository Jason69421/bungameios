
gdjs.evtsExt__DecoratedPlatform__BigPlatform = gdjs.evtsExt__DecoratedPlatform__BigPlatform || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform = class BigPlatform extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.ShowGrass3 = false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.ShowGrass3 !== newObjectData.content.ShowGrass3)
      this._objectData.ShowGrass3 = newObjectData.content.ShowGrass3;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getShowGrass3() {
    return this._objectData.ShowGrass3 !== undefined ? this._objectData.ShowGrass3 : false;
  }
  _setShowGrass3(newValue) {
    this._objectData.ShowGrass3 = newValue;
  }
  _toggleShowGrass3() {
    this._setShowGrass3(!this._getShowGrass3());
  }

  

  
}

// Methods:
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final = [];

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1= [];
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects2= [];
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1= [];
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2= [];


gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595BigPlatform_9546BigPlatform_9546prototype_9546doStepPostEventsContext_9546GDGrass3Objects1Objects = Hashtable.newFrom({"Grass3": gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1});
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595BigPlatform_9546BigPlatform_9546prototype_9546doStepPostEventsContext_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1});
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getWidth() != (( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[0].getWidth()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.indexOf(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[j]) === -1 )
            gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.push(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getHeight() != (( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[0].getHeight()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.indexOf(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[j]) === -1 )
            gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.push(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth() != (( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.indexOf(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[j]) === -1 )
            gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final.push(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.copyArray(gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1_1final, gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Grass3"), gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1);
/* Reuse gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1 */
/* Reuse gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize((( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()), (( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()));
}
}
{for(var i = 0, len = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setDepth((( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}
{for(var i = 0, len = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.func(runtimeScene, gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595BigPlatform_9546BigPlatform_9546prototype_9546doStepPostEventsContext_9546GDGrass3Objects1Objects, 400, gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595BigPlatform_9546BigPlatform_9546prototype_9546doStepPostEventsContext_9546GDPlatformObjects1Objects, 20, eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}
}

}


};

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGrass3ObjectsList = [...runtimeScene.getObjects("Grass3")];
var GDGrass3Objects = Hashtable.newFrom({"Grass3": thisGDGrass3ObjectsList});
var thisGDPlatformObjectsList = [...runtimeScene.getObjects("Platform")];
var GDPlatformObjects = Hashtable.newFrom({"Platform": thisGDPlatformObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Grass3": GDGrass3Objects
, "Platform": GDPlatformObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Grass3": thisGDGrass3ObjectsList
, "Platform": thisGDPlatformObjectsList
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

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length = 0;

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDGrass3Objects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPostEventsContext.GDPlatformObjects2.length = 0;


return;
}

gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("DecoratedPlatform::BigPlatform", gdjs.evtsExt__DecoratedPlatform__BigPlatform.BigPlatform);
