
gdjs.evtsExt__Collectible__Collectible = gdjs.evtsExt__Collectible__Collectible || {};

/**
 * Behavior generated from Collectible
 */
gdjs.evtsExt__Collectible__Collectible.Collectible = class Collectible extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Collectible__Collectible.Collectible.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
}

/**
 * Shared data generated from Collectible
 */
gdjs.evtsExt__Collectible__Collectible.Collectible.SharedData = class CollectibleSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Collectible__Collectible.Collectible.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Collectible_CollectibleSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Collectible_CollectibleSharedData = new gdjs.evtsExt__Collectible__Collectible.Collectible.SharedData(
      initialData
    );
  }
  return instanceContainer._Collectible_CollectibleSharedData;
}

// Methods:
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(19867732);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(gdjs.randomFloat(360));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1[i].rotate(45, runtimeScene);
}
}
}

}


};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Collectible"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Collectible"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext = {};
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1= [];
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects2= [];
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1= [];
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects2= [];


gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Collectible_9595_9595Collectible_9546Collectible_9546prototype_9546ExplodeContext_9546GDCoinExplosionObjects1Objects = Hashtable.newFrom({"CoinExplosion": gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1});
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1);
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Collectible_9595_9595Collectible_9546Collectible_9546prototype_9546ExplodeContext_9546GDCoinExplosionObjects1Objects, (( gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getCenterZInScene()));
}
}
}

}


};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.Explode = function(CoinExplosion, Object3D, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "CoinExplosion": CoinExplosion
},
  _objectArraysMap: {
"Object": thisObjectList
, "CoinExplosion": gdjs.objectsListsToArray(CoinExplosion)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Collectible"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Collectible"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects2.length = 0;

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.ExplodeContext.GDCoinExplosionObjects2.length = 0;


return;
}


gdjs.registerBehavior("Collectible::Collectible", gdjs.evtsExt__Collectible__Collectible.Collectible);
