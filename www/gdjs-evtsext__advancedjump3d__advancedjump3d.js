
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D || {};

/**
 * Behavior generated from Coyote time and air jump for 3D
 */
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D = class AdvancedJump3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.CoyoteTimeFrameDuration = behaviorData.CoyoteTimeFrameDuration !== undefined ? behaviorData.CoyoteTimeFrameDuration : Number("0.25") || 0;
    this._behaviorData.CanCoyoteJump = false;
    this._behaviorData.WasInTheAir = false;
    this._behaviorData.AirJumpCountMaximum = behaviorData.AirJumpCountMaximum !== undefined ? behaviorData.AirJumpCountMaximum : Number("1") || 0;
    this._behaviorData.AreFloorJumpCountedAsAirJump = behaviorData.AreFloorJumpCountedAsAirJump !== undefined ? behaviorData.AreFloorJumpCountedAsAirJump : false;
    this._behaviorData.AirJumpCount = Number("0") || 0;
    this._behaviorData.WasJumpKeyReleased = false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.CoyoteTimeFrameDuration !== undefined)
      this._behaviorData.CoyoteTimeFrameDuration = behaviorOverriding.CoyoteTimeFrameDuration;
    if (behaviorOverriding.CanCoyoteJump !== undefined)
      this._behaviorData.CanCoyoteJump = behaviorOverriding.CanCoyoteJump;
    if (behaviorOverriding.WasInTheAir !== undefined)
      this._behaviorData.WasInTheAir = behaviorOverriding.WasInTheAir;
    if (behaviorOverriding.AirJumpCountMaximum !== undefined)
      this._behaviorData.AirJumpCountMaximum = behaviorOverriding.AirJumpCountMaximum;
    if (behaviorOverriding.AreFloorJumpCountedAsAirJump !== undefined)
      this._behaviorData.AreFloorJumpCountedAsAirJump = behaviorOverriding.AreFloorJumpCountedAsAirJump;
    if (behaviorOverriding.AirJumpCount !== undefined)
      this._behaviorData.AirJumpCount = behaviorOverriding.AirJumpCount;
    if (behaviorOverriding.WasJumpKeyReleased !== undefined)
      this._behaviorData.WasJumpKeyReleased = behaviorOverriding.WasJumpKeyReleased;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    CoyoteTimeFrameDuration: this._behaviorData.CoyoteTimeFrameDuration,
    CanCoyoteJump: this._behaviorData.CanCoyoteJump,
    WasInTheAir: this._behaviorData.WasInTheAir,
    AirJumpCountMaximum: this._behaviorData.AirJumpCountMaximum,
    AreFloorJumpCountedAsAirJump: this._behaviorData.AreFloorJumpCountedAsAirJump,
    AirJumpCount: this._behaviorData.AirJumpCount,
    WasJumpKeyReleased: this._behaviorData.WasJumpKeyReleased,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.CoyoteTimeFrameDuration !== undefined)
      this._behaviorData.CoyoteTimeFrameDuration = networkSyncData.props.CoyoteTimeFrameDuration;
    if (networkSyncData.props.CanCoyoteJump !== undefined)
      this._behaviorData.CanCoyoteJump = networkSyncData.props.CanCoyoteJump;
    if (networkSyncData.props.WasInTheAir !== undefined)
      this._behaviorData.WasInTheAir = networkSyncData.props.WasInTheAir;
    if (networkSyncData.props.AirJumpCountMaximum !== undefined)
      this._behaviorData.AirJumpCountMaximum = networkSyncData.props.AirJumpCountMaximum;
    if (networkSyncData.props.AreFloorJumpCountedAsAirJump !== undefined)
      this._behaviorData.AreFloorJumpCountedAsAirJump = networkSyncData.props.AreFloorJumpCountedAsAirJump;
    if (networkSyncData.props.AirJumpCount !== undefined)
      this._behaviorData.AirJumpCount = networkSyncData.props.AirJumpCount;
    if (networkSyncData.props.WasJumpKeyReleased !== undefined)
      this._behaviorData.WasJumpKeyReleased = networkSyncData.props.WasJumpKeyReleased;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getCoyoteTimeFrameDuration() {
    return this._behaviorData.CoyoteTimeFrameDuration !== undefined ? this._behaviorData.CoyoteTimeFrameDuration : Number("0.25") || 0;
  }
  _setCoyoteTimeFrameDuration(newValue) {
    this._behaviorData.CoyoteTimeFrameDuration = newValue;
  }
  _getCanCoyoteJump() {
    return this._behaviorData.CanCoyoteJump !== undefined ? this._behaviorData.CanCoyoteJump : false;
  }
  _setCanCoyoteJump(newValue) {
    this._behaviorData.CanCoyoteJump = newValue;
  }
  _toggleCanCoyoteJump() {
    this._setCanCoyoteJump(!this._getCanCoyoteJump());
  }
  _getWasInTheAir() {
    return this._behaviorData.WasInTheAir !== undefined ? this._behaviorData.WasInTheAir : false;
  }
  _setWasInTheAir(newValue) {
    this._behaviorData.WasInTheAir = newValue;
  }
  _toggleWasInTheAir() {
    this._setWasInTheAir(!this._getWasInTheAir());
  }
  _getAirJumpCountMaximum() {
    return this._behaviorData.AirJumpCountMaximum !== undefined ? this._behaviorData.AirJumpCountMaximum : Number("1") || 0;
  }
  _setAirJumpCountMaximum(newValue) {
    this._behaviorData.AirJumpCountMaximum = newValue;
  }
  _getAreFloorJumpCountedAsAirJump() {
    return this._behaviorData.AreFloorJumpCountedAsAirJump !== undefined ? this._behaviorData.AreFloorJumpCountedAsAirJump : false;
  }
  _setAreFloorJumpCountedAsAirJump(newValue) {
    this._behaviorData.AreFloorJumpCountedAsAirJump = newValue;
  }
  _toggleAreFloorJumpCountedAsAirJump() {
    this._setAreFloorJumpCountedAsAirJump(!this._getAreFloorJumpCountedAsAirJump());
  }
  _getAirJumpCount() {
    return this._behaviorData.AirJumpCount !== undefined ? this._behaviorData.AirJumpCount : Number("0") || 0;
  }
  _setAirJumpCount(newValue) {
    this._behaviorData.AirJumpCount = newValue;
  }
  _getWasJumpKeyReleased() {
    return this._behaviorData.WasJumpKeyReleased !== undefined ? this._behaviorData.WasJumpKeyReleased : false;
  }
  _setWasJumpKeyReleased(newValue) {
    this._behaviorData.WasJumpKeyReleased = newValue;
  }
  _toggleWasJumpKeyReleased() {
    this._setWasJumpKeyReleased(!this._getWasJumpKeyReleased());
  }
}

/**
 * Shared data generated from Coyote time and air jump for 3D
 */
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.SharedData = class AdvancedJump3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AdvancedJump3D_AdvancedJump3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AdvancedJump3D_AdvancedJump3DSharedData = new gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.SharedData(
      initialData
    );
  }
  return instanceContainer._AdvancedJump3D_AdvancedJump3DSharedData;
}

// Methods:
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getTimerElapsedTimeInSecondsOrNaN("__CoyoteTime_CoyoteJump") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCanNotAirJump();
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(false)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(false)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasInTheAir();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("__CoyoteTime_CoyoteJump");
}
}
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCanJump();
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(true)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanCoyoteJump();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir(eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreFloorJumpCountedAsAirJump();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()+1)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(true)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CanCoyoteJump(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18840308);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasJumpKeyPressed(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18844396);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(true)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).canJump()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasJumpKeyReleased();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCanJump();
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()+1)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreated = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects1[i].removeTimer("__CoyoteTime_CoyoteJump");
}
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivate = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivate = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCoyoteTimeFrameDuration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTime = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetCoyoteTimeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanCoyoteJump();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJump = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.CanCoyoteJumpContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(false)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(true)
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAir = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.UpdateWasInTheAirContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum();}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMax = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AirJumpsMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCountMaximum(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximum = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.SetAirJumpCountMaximumContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).canJump()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = Math.max(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount());}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).canJump() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp(1 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount(), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum());}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumps = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemainingAirJumpsContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects3= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasJumpKeyPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCountMaximum());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCanNotAirJump();
}
}
}

}


};gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAirJumpCount()+1)
}

{ //Subevents
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJump = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.RemoveOneRemainingAirJumpContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAirJumpCount(0)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setCanNotAirJump();
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(true)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WasJumpKeyPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasJumpKeyReleased(false)
}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounter = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.ResetAirJumpCounterContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreFloorJumpCountedAsAirJump();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJump = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.AreFloorJumpCountedAsAirJumpContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext = {};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.GDObjectObjects1= [];


gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.userFunc0x1ab64f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
/** @type {gdjs.PhysicsCharacter3DRuntimeBehavior} */
const character3D = object.getBehavior(behavior._getPhysicsCharacter3D());
eventsFunctionContext.returnValue = character3D.wasJumpKeyPressed();

};
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.GDObjectObjects1;
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.userFunc0x1ab64f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedJump3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedJump3D"),
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

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D.prototype.WasJumpKeyPressedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("AdvancedJump3D::AdvancedJump3D", gdjs.evtsExt__AdvancedJump3D__AdvancedJump3D.AdvancedJump3D);
