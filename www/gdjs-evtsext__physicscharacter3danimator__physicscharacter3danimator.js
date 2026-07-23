
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator || {};

/**
 * Behavior generated from 3D physics character animator
 */
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator = class PhysicsCharacter3DAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.IdleAnimationName = behaviorData.IdleAnimationName !== undefined ? behaviorData.IdleAnimationName : "Idle";
    this._behaviorData.RunAnimationName = behaviorData.RunAnimationName !== undefined ? behaviorData.RunAnimationName : "Run";
    this._behaviorData.JumpAnimationName = behaviorData.JumpAnimationName !== undefined ? behaviorData.JumpAnimationName : "Jump";
    this._behaviorData.FallAnimationName = behaviorData.FallAnimationName !== undefined ? behaviorData.FallAnimationName : "Fall";
    this._behaviorData.OldAngle = Number("0") || 0;
    this._behaviorData.RotationSpeed = behaviorData.RotationSpeed !== undefined ? behaviorData.RotationSpeed : Number("720") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.Animation !== undefined)
      this._behaviorData.Animation = behaviorOverriding.Animation;
    if (behaviorOverriding.IdleAnimationName !== undefined)
      this._behaviorData.IdleAnimationName = behaviorOverriding.IdleAnimationName;
    if (behaviorOverriding.RunAnimationName !== undefined)
      this._behaviorData.RunAnimationName = behaviorOverriding.RunAnimationName;
    if (behaviorOverriding.JumpAnimationName !== undefined)
      this._behaviorData.JumpAnimationName = behaviorOverriding.JumpAnimationName;
    if (behaviorOverriding.FallAnimationName !== undefined)
      this._behaviorData.FallAnimationName = behaviorOverriding.FallAnimationName;
    if (behaviorOverriding.OldAngle !== undefined)
      this._behaviorData.OldAngle = behaviorOverriding.OldAngle;
    if (behaviorOverriding.RotationSpeed !== undefined)
      this._behaviorData.RotationSpeed = behaviorOverriding.RotationSpeed;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    Animation: this._behaviorData.Animation,
    IdleAnimationName: this._behaviorData.IdleAnimationName,
    RunAnimationName: this._behaviorData.RunAnimationName,
    JumpAnimationName: this._behaviorData.JumpAnimationName,
    FallAnimationName: this._behaviorData.FallAnimationName,
    OldAngle: this._behaviorData.OldAngle,
    RotationSpeed: this._behaviorData.RotationSpeed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.IdleAnimationName !== undefined)
      this._behaviorData.IdleAnimationName = networkSyncData.props.IdleAnimationName;
    if (networkSyncData.props.RunAnimationName !== undefined)
      this._behaviorData.RunAnimationName = networkSyncData.props.RunAnimationName;
    if (networkSyncData.props.JumpAnimationName !== undefined)
      this._behaviorData.JumpAnimationName = networkSyncData.props.JumpAnimationName;
    if (networkSyncData.props.FallAnimationName !== undefined)
      this._behaviorData.FallAnimationName = networkSyncData.props.FallAnimationName;
    if (networkSyncData.props.OldAngle !== undefined)
      this._behaviorData.OldAngle = networkSyncData.props.OldAngle;
    if (networkSyncData.props.RotationSpeed !== undefined)
      this._behaviorData.RotationSpeed = networkSyncData.props.RotationSpeed;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getIdleAnimationName() {
    return this._behaviorData.IdleAnimationName !== undefined ? this._behaviorData.IdleAnimationName : "Idle";
  }
  _setIdleAnimationName(newValue) {
    this._behaviorData.IdleAnimationName = newValue;
  }
  _getRunAnimationName() {
    return this._behaviorData.RunAnimationName !== undefined ? this._behaviorData.RunAnimationName : "Run";
  }
  _setRunAnimationName(newValue) {
    this._behaviorData.RunAnimationName = newValue;
  }
  _getJumpAnimationName() {
    return this._behaviorData.JumpAnimationName !== undefined ? this._behaviorData.JumpAnimationName : "Jump";
  }
  _setJumpAnimationName(newValue) {
    this._behaviorData.JumpAnimationName = newValue;
  }
  _getFallAnimationName() {
    return this._behaviorData.FallAnimationName !== undefined ? this._behaviorData.FallAnimationName : "Fall";
  }
  _setFallAnimationName(newValue) {
    this._behaviorData.FallAnimationName = newValue;
  }
  _getOldAngle() {
    return this._behaviorData.OldAngle !== undefined ? this._behaviorData.OldAngle : Number("0") || 0;
  }
  _setOldAngle(newValue) {
    this._behaviorData.OldAngle = newValue;
  }
  _getRotationSpeed() {
    return this._behaviorData.RotationSpeed !== undefined ? this._behaviorData.RotationSpeed : Number("720") || 0;
  }
  _setRotationSpeed(newValue) {
    this._behaviorData.RotationSpeed = newValue;
  }
}

/**
 * Shared data generated from 3D physics character animator
 */
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.SharedData = class PhysicsCharacter3DAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsCharacter3DAnimator_PhysicsCharacter3DAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsCharacter3DAnimator_PhysicsCharacter3DAnimatorSharedData = new gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsCharacter3DAnimator_PhysicsCharacter3DAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRunAnimationName());
}
}
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale((gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getCurrentForwardSpeed()) / (gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getForwardSpeedMax()));
}
}
}

}


{

/* Reuse gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleAnimationName());
}
}
}

}


};gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.min(0, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(Math.max(0, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getForwardAngle()) + eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
}
}

}


};gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationSpeedScale(1);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpAnimationName());
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallAnimationName());
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AngleDelta", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.common.angleDifference((( gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[0].getAngle()), (( gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).getForwardAngle())));
}

{ //Subevents
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DAnimator"),
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

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext = {};
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeed();}
}

}


};

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeed = function(parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DAnimator"),
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

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.RotationSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext = {};
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotationSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeed = function(Value, parentEventsFunctionContext) {

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
, "Animation": this._getAnimation()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsCharacter3DAnimator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsCharacter3DAnimator"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator.prototype.SetRotationSpeedContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("PhysicsCharacter3DAnimator::PhysicsCharacter3DAnimator", gdjs.evtsExt__PhysicsCharacter3DAnimator__PhysicsCharacter3DAnimator.PhysicsCharacter3DAnimator);
