
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper = gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper || {};

/**
 * Behavior generated from 3D platformer gamepad mapper
 */
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper = class Platformer3DGamepadMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.GamepadIdentifier = behaviorData.GamepadIdentifier !== undefined ? behaviorData.GamepadIdentifier : Number("1") || 0;
    this._behaviorData.JoystickIdentifier = behaviorData.JoystickIdentifier !== undefined ? behaviorData.JoystickIdentifier : "Left";
    this._behaviorData.JumpButton = behaviorData.JumpButton !== undefined ? behaviorData.JumpButton : "A or Cross";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.GamepadIdentifier !== undefined)
      this._behaviorData.GamepadIdentifier = behaviorOverriding.GamepadIdentifier;
    if (behaviorOverriding.JoystickIdentifier !== undefined)
      this._behaviorData.JoystickIdentifier = behaviorOverriding.JoystickIdentifier;
    if (behaviorOverriding.JumpButton !== undefined)
      this._behaviorData.JumpButton = behaviorOverriding.JumpButton;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    GamepadIdentifier: this._behaviorData.GamepadIdentifier,
    JoystickIdentifier: this._behaviorData.JoystickIdentifier,
    JumpButton: this._behaviorData.JumpButton,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.GamepadIdentifier !== undefined)
      this._behaviorData.GamepadIdentifier = networkSyncData.props.GamepadIdentifier;
    if (networkSyncData.props.JoystickIdentifier !== undefined)
      this._behaviorData.JoystickIdentifier = networkSyncData.props.JoystickIdentifier;
    if (networkSyncData.props.JumpButton !== undefined)
      this._behaviorData.JumpButton = networkSyncData.props.JumpButton;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getGamepadIdentifier() {
    return this._behaviorData.GamepadIdentifier !== undefined ? this._behaviorData.GamepadIdentifier : Number("1") || 0;
  }
  _setGamepadIdentifier(newValue) {
    this._behaviorData.GamepadIdentifier = newValue;
  }
  _getJoystickIdentifier() {
    return this._behaviorData.JoystickIdentifier !== undefined ? this._behaviorData.JoystickIdentifier : "Left";
  }
  _setJoystickIdentifier(newValue) {
    this._behaviorData.JoystickIdentifier = newValue;
  }
  _getJumpButton() {
    return this._behaviorData.JumpButton !== undefined ? this._behaviorData.JumpButton : "A or Cross";
  }
  _setJumpButton(newValue) {
    this._behaviorData.JumpButton = newValue;
  }
}

/**
 * Shared data generated from 3D platformer gamepad mapper
 */
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.SharedData = class Platformer3DGamepadMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Gamepads_Platformer3DGamepadMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Gamepads_Platformer3DGamepadMapperSharedData = new gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._Gamepads_Platformer3DGamepadMapperSharedData;
}

// Methods:
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier(), eventsFunctionContext) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setForwardAngle(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier(), eventsFunctionContext) + gdjs.evtTools.camera.getCameraRotation(runtimeScene, (gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getLayer()), 0));
}
}
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateStick(-90, gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier(), eventsFunctionContext));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton()).getAsString(), eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}
}

}


};gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
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

gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}


gdjs.registerBehavior("Gamepads::Platformer3DGamepadMapper", gdjs.evtsExt__Gamepads__Platformer3DGamepadMapper.Platformer3DGamepadMapper);
