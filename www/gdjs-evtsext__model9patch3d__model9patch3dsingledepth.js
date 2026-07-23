
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth || {};

/**
 * Object generated from 3D model 9-patch (single depth)
 */
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth = class Model9Patch3DSingleDepth extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Size = objectData.content.Size !== undefined ? objectData.content.Size : Number("100") || 0;
    this._objectData.IsTiledOnX = objectData.content.IsTiledOnX !== undefined ? objectData.content.IsTiledOnX : false;
    this._objectData.IsTiledOnY = objectData.content.IsTiledOnY !== undefined ? objectData.content.IsTiledOnY : false;
    this._objectData.ShowTopCenter = false;
    this._objectData.ShowSide = false;
    this._objectData.ShowCorner = false;
    this._objectData.ShowBottomCenter = false;
    this._objectData.Width = Number("-1") || 0;
    this._objectData.Height = Number("-1") || 0;
    this._objectData.Depth = Number("-1") || 0;
    this._objectData.X = Number("0") || 0;
    this._objectData.Y = Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Size !== newObjectData.content.Size)
      this._objectData.Size = newObjectData.content.Size;
    if (oldObjectData.content.IsTiledOnX !== newObjectData.content.IsTiledOnX)
      this._objectData.IsTiledOnX = newObjectData.content.IsTiledOnX;
    if (oldObjectData.content.IsTiledOnY !== newObjectData.content.IsTiledOnY)
      this._objectData.IsTiledOnY = newObjectData.content.IsTiledOnY;
    if (oldObjectData.content.ShowTopCenter !== newObjectData.content.ShowTopCenter)
      this._objectData.ShowTopCenter = newObjectData.content.ShowTopCenter;
    if (oldObjectData.content.ShowSide !== newObjectData.content.ShowSide)
      this._objectData.ShowSide = newObjectData.content.ShowSide;
    if (oldObjectData.content.ShowCorner !== newObjectData.content.ShowCorner)
      this._objectData.ShowCorner = newObjectData.content.ShowCorner;
    if (oldObjectData.content.ShowBottomCenter !== newObjectData.content.ShowBottomCenter)
      this._objectData.ShowBottomCenter = newObjectData.content.ShowBottomCenter;
    if (oldObjectData.content.Width !== newObjectData.content.Width)
      this._objectData.Width = newObjectData.content.Width;
    if (oldObjectData.content.Height !== newObjectData.content.Height)
      this._objectData.Height = newObjectData.content.Height;
    if (oldObjectData.content.Depth !== newObjectData.content.Depth)
      this._objectData.Depth = newObjectData.content.Depth;
    if (oldObjectData.content.X !== newObjectData.content.X)
      this._objectData.X = newObjectData.content.X;
    if (oldObjectData.content.Y !== newObjectData.content.Y)
      this._objectData.Y = newObjectData.content.Y;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getSize() {
    return this._objectData.Size !== undefined ? this._objectData.Size : Number("100") || 0;
  }
  _setSize(newValue) {
    this._objectData.Size = newValue;
  }
  _getIsTiledOnX() {
    return this._objectData.IsTiledOnX !== undefined ? this._objectData.IsTiledOnX : false;
  }
  _setIsTiledOnX(newValue) {
    this._objectData.IsTiledOnX = newValue;
  }
  _toggleIsTiledOnX() {
    this._setIsTiledOnX(!this._getIsTiledOnX());
  }
  _getIsTiledOnY() {
    return this._objectData.IsTiledOnY !== undefined ? this._objectData.IsTiledOnY : false;
  }
  _setIsTiledOnY(newValue) {
    this._objectData.IsTiledOnY = newValue;
  }
  _toggleIsTiledOnY() {
    this._setIsTiledOnY(!this._getIsTiledOnY());
  }
  _getShowTopCenter() {
    return this._objectData.ShowTopCenter !== undefined ? this._objectData.ShowTopCenter : false;
  }
  _setShowTopCenter(newValue) {
    this._objectData.ShowTopCenter = newValue;
  }
  _toggleShowTopCenter() {
    this._setShowTopCenter(!this._getShowTopCenter());
  }
  _getShowSide() {
    return this._objectData.ShowSide !== undefined ? this._objectData.ShowSide : false;
  }
  _setShowSide(newValue) {
    this._objectData.ShowSide = newValue;
  }
  _toggleShowSide() {
    this._setShowSide(!this._getShowSide());
  }
  _getShowCorner() {
    return this._objectData.ShowCorner !== undefined ? this._objectData.ShowCorner : false;
  }
  _setShowCorner(newValue) {
    this._objectData.ShowCorner = newValue;
  }
  _toggleShowCorner() {
    this._setShowCorner(!this._getShowCorner());
  }
  _getShowBottomCenter() {
    return this._objectData.ShowBottomCenter !== undefined ? this._objectData.ShowBottomCenter : false;
  }
  _setShowBottomCenter(newValue) {
    this._objectData.ShowBottomCenter = newValue;
  }
  _toggleShowBottomCenter() {
    this._setShowBottomCenter(!this._getShowBottomCenter());
  }
  _getWidth() {
    return this._objectData.Width !== undefined ? this._objectData.Width : Number("-1") || 0;
  }
  _setWidth(newValue) {
    this._objectData.Width = newValue;
  }
  _getHeight() {
    return this._objectData.Height !== undefined ? this._objectData.Height : Number("-1") || 0;
  }
  _setHeight(newValue) {
    this._objectData.Height = newValue;
  }
  _getDepth() {
    return this._objectData.Depth !== undefined ? this._objectData.Depth : Number("-1") || 0;
  }
  _setDepth(newValue) {
    this._objectData.Depth = newValue;
  }
  _getX() {
    return this._objectData.X !== undefined ? this._objectData.X : Number("0") || 0;
  }
  _setX(newValue) {
    this._objectData.X = newValue;
  }
  _getY() {
    return this._objectData.Y !== undefined ? this._objectData.Y : Number("0") || 0;
  }
  _setY(newValue) {
    this._objectData.Y = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Placeholder"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects1);
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects1[i].hide();
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.onCreatedContext.GDPlaceholderObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1[i].setIncludedInParentCollisionMask(false);
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getWidth() != eventsFunctionContext.getObjects("Object")[0]._getWidth() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getHeight() != eventsFunctionContext.getObjects("Object")[0]._getHeight() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth() != eventsFunctionContext.getObjects("Object")[0]._getDepth() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BottomCenter"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Corner"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1);
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Placeholder"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Side"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TopCenter"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setWidth((( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()))
}
{eventsFunctionContext.getObjects("Object")[0]._setHeight((( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()))
}
{eventsFunctionContext.getObjects("Object")[0]._setDepth((( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()))
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1[i].Create9Patch(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(eventsFunctionContext.getObjects("Object")[0]._getWidth());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0]._getHeight());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setDepth(eventsFunctionContext.getObjects("Object")[0]._getDepth());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(1);
}
}
{gdjs.evtsExt__Model9Patch3D__SetInnerSize.func(runtimeScene, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth(), eventsFunctionContext.getObjects("Object")[0]._getHeight(), eventsFunctionContext.getObjects("Object")[0]._getDepth(), eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPostEventsContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDTopCenterObjects1Objects = Hashtable.newFrom({"TopCenter": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDBottomCenterObjects1Objects = Hashtable.newFrom({"BottomCenter": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDCornerObjects1Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDSideObjects1Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1[i].CreateZPlan(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDTopCenterObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getDepth() / 2, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1[i].CreateZPlan(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDBottomCenterObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getDepth() / 2, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1[i].Create9PatchSlice(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDCornerObjects1Objects, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchContext_9546GDSideObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getDepth() / 2, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ(eventsFunctionContext.getObjects("Object")[0]._getDepth() / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ(eventsFunctionContext.getObjects("Object")[0]._getDepth() / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ(eventsFunctionContext.getObjects("Object")[0]._getDepth() / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ(eventsFunctionContext.getObjects("Object")[0]._getDepth() / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9Patch = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects5= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects5= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects1Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipY(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipY(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getY(), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getY(), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount3 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getHeight() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getY()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}

{ //Subevents: 
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects3);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects3[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects, eventsFunctionContext.getObjects("Object")[0]._getX(), eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects4Objects, eventsFunctionContext.getObjects("Object")[0]._getX(), eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount3 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getWidth() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getX()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}

{ //Subevents: 
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects1Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSlice = function(Corner, Side, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Corner": Corner
, "Side": Side
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
, "Corner": gdjs.objectsListsToArray(Corner)
, "Side": gdjs.objectsListsToArray(Side)
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
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects5.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.eventsList8(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDTopCenterObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDCornerObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDSideObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDBottomCenterObjects5.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.Create9PatchSliceContext.GDPlaceholderObjects5.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546TileOnXContext_9546GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}
}

}


{


const repeatCount2 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getWidth() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getX()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546TileOnXContext_9546GDTileObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getX(), eventsFunctionContext.getArgument("Y"), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnX = function(Tile, Y, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
, "Tile": gdjs.objectsListsToArray(Tile)
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
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546TileOnYContext_9546GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}
}

}


{


const repeatCount2 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getHeight() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getY()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546TileOnYContext_9546GDTileObjects2Objects, eventsFunctionContext.getArgument("X"), eventsFunctionContext.getObjects("Object")[0]._getY(), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnY = function(Tile, X, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
, "Tile": gdjs.objectsListsToArray(Tile)
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
if (argName === "X") return X;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnYContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects4= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546TileOnXYContext_9546GDTileObjects4Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount4 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getWidth() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects4);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getX()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546TileOnXYContext_9546GDTileObjects4Objects, eventsFunctionContext.getObjects("Object")[0]._getX(), eventsFunctionContext.getObjects("Object")[0]._getY(), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects4[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}
}

}


{


const repeatCount2 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getHeight() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getY()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}

{ //Subevents: 
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXY = function(Tile, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
, "Tile": gdjs.objectsListsToArray(Tile)
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
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects4.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTileObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.TileOnXYContext.GDPlaceholderObjects4.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleX((eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1[i].TileOnX(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1[i].TileOnY(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleX((eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1[i].TileOnXY(gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3DSingleDepth_9546Model9Patch3DSingleDepth_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlan = function(Tile, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDCornerObjectsList = [...runtimeScene.getObjects("Corner")];
var GDCornerObjects = Hashtable.newFrom({"Corner": thisGDCornerObjectsList});
var thisGDSideObjectsList = [...runtimeScene.getObjects("Side")];
var GDSideObjects = Hashtable.newFrom({"Side": thisGDSideObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "Corner": GDCornerObjects
, "Side": GDSideObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "Corner": thisGDCornerObjectsList
, "Side": thisGDSideObjectsList
, "BottomCenter": thisGDBottomCenterObjectsList
, "Placeholder": thisGDPlaceholderObjectsList
, "Tile": gdjs.objectsListsToArray(Tile)
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
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.CreateZPlanContext.GDPlaceholderObjects2.length = 0;


return;
}

gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Model9Patch3D::Model9Patch3DSingleDepth", gdjs.evtsExt__Model9Patch3D__Model9Patch3DSingleDepth.Model9Patch3DSingleDepth);
