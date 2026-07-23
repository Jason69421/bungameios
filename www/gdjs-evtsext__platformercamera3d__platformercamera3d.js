
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D || {};

/**
 * Behavior generated from 3D Platformer thrid person camera
 */
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D = class PlatformerCamera3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.ThirdPersonCamera = behaviorData.ThirdPersonCamera !== undefined ? behaviorData.ThirdPersonCamera : "";
    this._behaviorData.IsCameraLocked = false;
    this._behaviorData.ControlKind = "Keyboard";
    this._behaviorData.IdlingRotationHalfwayDuration = behaviorData.IdlingRotationHalfwayDuration !== undefined ? behaviorData.IdlingRotationHalfwayDuration : Number("0.5") || 0;
    this._behaviorData.MovingRotationHalfwayDuration = behaviorData.MovingRotationHalfwayDuration !== undefined ? behaviorData.MovingRotationHalfwayDuration : Number("2") || 0;
    this._behaviorData.AirFollowFreeAreaBottom = behaviorData.AirFollowFreeAreaBottom !== undefined ? behaviorData.AirFollowFreeAreaBottom : Number("0") || 0;
    this._behaviorData.MouseRotationSensitivityX = behaviorData.MouseRotationSensitivityX !== undefined ? behaviorData.MouseRotationSensitivityX : Number("180") || 0;
    this._behaviorData.MouseRotationSensitivityY = behaviorData.MouseRotationSensitivityY !== undefined ? behaviorData.MouseRotationSensitivityY : Number("90") || 0;
    this._behaviorData.GamepadRotationSensitivityX = behaviorData.GamepadRotationSensitivityX !== undefined ? behaviorData.GamepadRotationSensitivityX : Number("180") || 0;
    this._behaviorData.GamepadRotationSensitivityY = behaviorData.GamepadRotationSensitivityY !== undefined ? behaviorData.GamepadRotationSensitivityY : Number("90") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.ThirdPersonCamera !== undefined)
      this._behaviorData.ThirdPersonCamera = behaviorOverriding.ThirdPersonCamera;
    if (behaviorOverriding.IsCameraLocked !== undefined)
      this._behaviorData.IsCameraLocked = behaviorOverriding.IsCameraLocked;
    if (behaviorOverriding.ControlKind !== undefined)
      this._behaviorData.ControlKind = behaviorOverriding.ControlKind;
    if (behaviorOverriding.IdlingRotationHalfwayDuration !== undefined)
      this._behaviorData.IdlingRotationHalfwayDuration = behaviorOverriding.IdlingRotationHalfwayDuration;
    if (behaviorOverriding.MovingRotationHalfwayDuration !== undefined)
      this._behaviorData.MovingRotationHalfwayDuration = behaviorOverriding.MovingRotationHalfwayDuration;
    if (behaviorOverriding.AirFollowFreeAreaBottom !== undefined)
      this._behaviorData.AirFollowFreeAreaBottom = behaviorOverriding.AirFollowFreeAreaBottom;
    if (behaviorOverriding.MouseRotationSensitivityX !== undefined)
      this._behaviorData.MouseRotationSensitivityX = behaviorOverriding.MouseRotationSensitivityX;
    if (behaviorOverriding.MouseRotationSensitivityY !== undefined)
      this._behaviorData.MouseRotationSensitivityY = behaviorOverriding.MouseRotationSensitivityY;
    if (behaviorOverriding.GamepadRotationSensitivityX !== undefined)
      this._behaviorData.GamepadRotationSensitivityX = behaviorOverriding.GamepadRotationSensitivityX;
    if (behaviorOverriding.GamepadRotationSensitivityY !== undefined)
      this._behaviorData.GamepadRotationSensitivityY = behaviorOverriding.GamepadRotationSensitivityY;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    ThirdPersonCamera: this._behaviorData.ThirdPersonCamera,
    IsCameraLocked: this._behaviorData.IsCameraLocked,
    ControlKind: this._behaviorData.ControlKind,
    IdlingRotationHalfwayDuration: this._behaviorData.IdlingRotationHalfwayDuration,
    MovingRotationHalfwayDuration: this._behaviorData.MovingRotationHalfwayDuration,
    AirFollowFreeAreaBottom: this._behaviorData.AirFollowFreeAreaBottom,
    MouseRotationSensitivityX: this._behaviorData.MouseRotationSensitivityX,
    MouseRotationSensitivityY: this._behaviorData.MouseRotationSensitivityY,
    GamepadRotationSensitivityX: this._behaviorData.GamepadRotationSensitivityX,
    GamepadRotationSensitivityY: this._behaviorData.GamepadRotationSensitivityY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.ThirdPersonCamera !== undefined)
      this._behaviorData.ThirdPersonCamera = networkSyncData.props.ThirdPersonCamera;
    if (networkSyncData.props.IsCameraLocked !== undefined)
      this._behaviorData.IsCameraLocked = networkSyncData.props.IsCameraLocked;
    if (networkSyncData.props.ControlKind !== undefined)
      this._behaviorData.ControlKind = networkSyncData.props.ControlKind;
    if (networkSyncData.props.IdlingRotationHalfwayDuration !== undefined)
      this._behaviorData.IdlingRotationHalfwayDuration = networkSyncData.props.IdlingRotationHalfwayDuration;
    if (networkSyncData.props.MovingRotationHalfwayDuration !== undefined)
      this._behaviorData.MovingRotationHalfwayDuration = networkSyncData.props.MovingRotationHalfwayDuration;
    if (networkSyncData.props.AirFollowFreeAreaBottom !== undefined)
      this._behaviorData.AirFollowFreeAreaBottom = networkSyncData.props.AirFollowFreeAreaBottom;
    if (networkSyncData.props.MouseRotationSensitivityX !== undefined)
      this._behaviorData.MouseRotationSensitivityX = networkSyncData.props.MouseRotationSensitivityX;
    if (networkSyncData.props.MouseRotationSensitivityY !== undefined)
      this._behaviorData.MouseRotationSensitivityY = networkSyncData.props.MouseRotationSensitivityY;
    if (networkSyncData.props.GamepadRotationSensitivityX !== undefined)
      this._behaviorData.GamepadRotationSensitivityX = networkSyncData.props.GamepadRotationSensitivityX;
    if (networkSyncData.props.GamepadRotationSensitivityY !== undefined)
      this._behaviorData.GamepadRotationSensitivityY = networkSyncData.props.GamepadRotationSensitivityY;
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
  _getThirdPersonCamera() {
    return this._behaviorData.ThirdPersonCamera !== undefined ? this._behaviorData.ThirdPersonCamera : "";
  }
  _setThirdPersonCamera(newValue) {
    this._behaviorData.ThirdPersonCamera = newValue;
  }
  _getIsCameraLocked() {
    return this._behaviorData.IsCameraLocked !== undefined ? this._behaviorData.IsCameraLocked : false;
  }
  _setIsCameraLocked(newValue) {
    this._behaviorData.IsCameraLocked = newValue;
  }
  _toggleIsCameraLocked() {
    this._setIsCameraLocked(!this._getIsCameraLocked());
  }
  _getControlKind() {
    return this._behaviorData.ControlKind !== undefined ? this._behaviorData.ControlKind : "Keyboard";
  }
  _setControlKind(newValue) {
    this._behaviorData.ControlKind = newValue;
  }
  _getIdlingRotationHalfwayDuration() {
    return this._behaviorData.IdlingRotationHalfwayDuration !== undefined ? this._behaviorData.IdlingRotationHalfwayDuration : Number("0.5") || 0;
  }
  _setIdlingRotationHalfwayDuration(newValue) {
    this._behaviorData.IdlingRotationHalfwayDuration = newValue;
  }
  _getMovingRotationHalfwayDuration() {
    return this._behaviorData.MovingRotationHalfwayDuration !== undefined ? this._behaviorData.MovingRotationHalfwayDuration : Number("2") || 0;
  }
  _setMovingRotationHalfwayDuration(newValue) {
    this._behaviorData.MovingRotationHalfwayDuration = newValue;
  }
  _getAirFollowFreeAreaBottom() {
    return this._behaviorData.AirFollowFreeAreaBottom !== undefined ? this._behaviorData.AirFollowFreeAreaBottom : Number("0") || 0;
  }
  _setAirFollowFreeAreaBottom(newValue) {
    this._behaviorData.AirFollowFreeAreaBottom = newValue;
  }
  _getMouseRotationSensitivityX() {
    return this._behaviorData.MouseRotationSensitivityX !== undefined ? this._behaviorData.MouseRotationSensitivityX : Number("180") || 0;
  }
  _setMouseRotationSensitivityX(newValue) {
    this._behaviorData.MouseRotationSensitivityX = newValue;
  }
  _getMouseRotationSensitivityY() {
    return this._behaviorData.MouseRotationSensitivityY !== undefined ? this._behaviorData.MouseRotationSensitivityY : Number("90") || 0;
  }
  _setMouseRotationSensitivityY(newValue) {
    this._behaviorData.MouseRotationSensitivityY = newValue;
  }
  _getGamepadRotationSensitivityX() {
    return this._behaviorData.GamepadRotationSensitivityX !== undefined ? this._behaviorData.GamepadRotationSensitivityX : Number("180") || 0;
  }
  _setGamepadRotationSensitivityX(newValue) {
    this._behaviorData.GamepadRotationSensitivityX = newValue;
  }
  _getGamepadRotationSensitivityY() {
    return this._behaviorData.GamepadRotationSensitivityY !== undefined ? this._behaviorData.GamepadRotationSensitivityY : Number("90") || 0;
  }
  _setGamepadRotationSensitivityY(newValue) {
    this._behaviorData.GamepadRotationSensitivityY = newValue;
  }
}

/**
 * Shared data generated from 3D Platformer thrid person camera
 */
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.SharedData = class PlatformerCamera3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PlatformerCamera3D_PlatformerCamera3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PlatformerCamera3D_PlatformerCamera3DSharedData = new gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.SharedData(
      initialData
    );
  }
  return instanceContainer._PlatformerCamera3D_PlatformerCamera3DSharedData;
}

// Methods:
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCameraLocked();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetRotationHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovingRotationHalfwayDuration(), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCameraLocked();
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetRotationHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovingRotationHalfwayDuration(), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, 1, "Primary", eventsFunctionContext) > 0;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setControlKind("Touch")
}

{ //Subevents
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", eventsFunctionContext) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setControlKind("Gamepad")
}
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetRotationHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovingRotationHalfwayDuration(), eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setControlKind("Keyboard")
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControlKind() != "Keyboard");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Left", eventsFunctionContext) > 0;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, 1, "Primary", eventsFunctionContext) > 0;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14140948);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetRotationHalfwayDuration(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdlingRotationHalfwayDuration(), eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCameraLocked(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControlKind() == "Keyboard");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCameraLocked(true)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__IsMoving.func(runtimeScene, eventsFunctionContext);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetCameraRotation(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).RotationAngle(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseRotationSensitivityX() * gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, eventsFunctionContext) / gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetElevationAngleOffset(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).ElevationAngleOffset(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseRotationSensitivityY() * gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, eventsFunctionContext) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCameraLocked(true)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, 1, "Right", eventsFunctionContext) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetCameraRotation(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).RotationAngle(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadRotationSensitivityX() * gdjs.evtsExt__Gamepads__StickForceX.func(runtimeScene, 1, "Right", eventsFunctionContext) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetElevationAngleOffset(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).ElevationAngleOffset(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadRotationSensitivityY() * gdjs.evtsExt__Gamepads__StickForceY.func(runtimeScene, 1, "Right", eventsFunctionContext) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCameraLocked(true)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCameraLocked();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetRotationHalfwayDuration(1000000, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.evtTools.common.clamp((gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY()), -90, 90));
}
}
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetElevationAngleOffset(gdjs.evtTools.common.clamp((gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).ElevationAngleOffset(eventsFunctionContext)), -90, 90), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetFollowFreeAreaZMin(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirFollowFreeAreaBottom(), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetFollowFreeAreaZMin(0, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetTargetedRotationAngle((gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getForwardAngle()), eventsFunctionContext);
}
}
}

}


{

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasBackwardKeyPressed(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasStickUsed(eventsFunctionContext) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
{isConditionTrue_3 = (Math.abs(gdjs.evtTools.common.angleDifference(90, gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 1, "Primary", eventsFunctionContext))) < 90);
}
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
{isConditionTrue_3 = (Math.abs(gdjs.evtTools.common.angleDifference(90, gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Left", eventsFunctionContext))) < 90);
}
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetTargetedRotationAngle(180 - (gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getForwardAngle()), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.common.angleDifference((( gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).TargetedRotationAngle(eventsFunctionContext)) + 90, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0))) > 90);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera")).SetRotationHalfwayDuration(1000000, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "ThirdPersonCamera": this._getThirdPersonCamera()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlatformerCamera3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlatformerCamera3D"),
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

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext = {};
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.userFunc0x1ddf180 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
/** @type {gdjs.PhysicsCharacter3DRuntimeBehavior} */
const characterBehavior = object.getBehavior(behavior._getPhysicsCharacter3D());

eventsFunctionContext.returnValue = characterBehavior.wasBackwardKeyPressed();

};
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.GDObjectObjects1;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.userFunc0x1ddf180(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressed = function(parentEventsFunctionContext) {

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
, "ThirdPersonCamera": this._getThirdPersonCamera()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlatformerCamera3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlatformerCamera3D"),
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

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasBackwardKeyPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext = {};
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.GDObjectObjects1= [];


gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.userFunc0x1dd4bc8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
/** @type {gdjs.PhysicsCharacter3DRuntimeBehavior} */
const characterBehavior = object.getBehavior(behavior._getPhysicsCharacter3D());

eventsFunctionContext.returnValue = characterBehavior.wasStickUsed();

};
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.GDObjectObjects1;
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.userFunc0x1dd4bc8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsed = function(parentEventsFunctionContext) {

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
, "ThirdPersonCamera": this._getThirdPersonCamera()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlatformerCamera3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlatformerCamera3D"),
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

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D.prototype.WasStickUsedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("PlatformerCamera3D::PlatformerCamera3D", gdjs.evtsExt__PlatformerCamera3D__PlatformerCamera3D.PlatformerCamera3D);
