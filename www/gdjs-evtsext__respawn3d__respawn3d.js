
gdjs.evtsExt__Respawn3D__Respawn3D = gdjs.evtsExt__Respawn3D__Respawn3D || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D = class Respawn3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.SafeX = Number("") || 0;
    this._behaviorData.SafeY = Number("") || 0;
    this._behaviorData.SafeZ = Number("") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.SafeX !== undefined)
      this._behaviorData.SafeX = behaviorOverriding.SafeX;
    if (behaviorOverriding.SafeY !== undefined)
      this._behaviorData.SafeY = behaviorOverriding.SafeY;
    if (behaviorOverriding.SafeZ !== undefined)
      this._behaviorData.SafeZ = behaviorOverriding.SafeZ;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    SafeX: this._behaviorData.SafeX,
    SafeY: this._behaviorData.SafeY,
    SafeZ: this._behaviorData.SafeZ,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.SafeX !== undefined)
      this._behaviorData.SafeX = networkSyncData.props.SafeX;
    if (networkSyncData.props.SafeY !== undefined)
      this._behaviorData.SafeY = networkSyncData.props.SafeY;
    if (networkSyncData.props.SafeZ !== undefined)
      this._behaviorData.SafeZ = networkSyncData.props.SafeZ;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getSafeX() {
    return this._behaviorData.SafeX !== undefined ? this._behaviorData.SafeX : Number("") || 0;
  }
  _setSafeX(newValue) {
    this._behaviorData.SafeX = newValue;
  }
  _getSafeY() {
    return this._behaviorData.SafeY !== undefined ? this._behaviorData.SafeY : Number("") || 0;
  }
  _setSafeY(newValue) {
    this._behaviorData.SafeY = newValue;
  }
  _getSafeZ() {
    return this._behaviorData.SafeZ !== undefined ? this._behaviorData.SafeZ : Number("") || 0;
  }
  _setSafeZ(newValue) {
    this._behaviorData.SafeZ = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.SharedData = class Respawn3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Respawn3D_Respawn3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Respawn3D_Respawn3DSharedData = new gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.SharedData(
      initialData
    );
  }
  return instanceContainer._Respawn3D_Respawn3DSharedData;
}

// Methods:
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 3) < 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSafeX((gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSafeY((gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSafeZ((gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()));
}
}
}

}


};

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn3D"),
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

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext = {};
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.idToCallbackMap = new Map();
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1[i].setPosition(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeX(),eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeY());
}
}
{for(var i = 0, len = gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSafeZ());
}
}
}

}


};

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.Respawn = function(parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn3D"),
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

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D.prototype.RespawnContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Respawn3D::Respawn3D", gdjs.evtsExt__Respawn3D__Respawn3D.Respawn3D);
