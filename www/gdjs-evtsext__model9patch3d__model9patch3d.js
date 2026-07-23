
gdjs.evtsExt__Model9Patch3D__Model9Patch3D = gdjs.evtsExt__Model9Patch3D__Model9Patch3D || {};

/**
 * Object generated from 3D model 9-patch
 */
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D = class Model9Patch3D extends gdjs.CustomRuntimeObject3D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Size = objectData.content.Size !== undefined ? objectData.content.Size : Number("100") || 0;
    this._objectData.IsTiledOnX = objectData.content.IsTiledOnX !== undefined ? objectData.content.IsTiledOnX : false;
    this._objectData.IsTiledOnY = objectData.content.IsTiledOnY !== undefined ? objectData.content.IsTiledOnY : false;
    this._objectData.IsTiledOnZ = objectData.content.IsTiledOnZ !== undefined ? objectData.content.IsTiledOnZ : false;
    this._objectData.Width = Number("-1") || 0;
    this._objectData.Height = Number("-1") || 0;
    this._objectData.Depth = Number("-1") || 0;
    this._objectData.X = Number("0") || 0;
    this._objectData.Y = Number("0") || 0;
    this._objectData.Z = Number("0") || 0;
    

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
    if (oldObjectData.content.IsTiledOnZ !== newObjectData.content.IsTiledOnZ)
      this._objectData.IsTiledOnZ = newObjectData.content.IsTiledOnZ;
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
    if (oldObjectData.content.Z !== newObjectData.content.Z)
      this._objectData.Z = newObjectData.content.Z;

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
  _getIsTiledOnZ() {
    return this._objectData.IsTiledOnZ !== undefined ? this._objectData.IsTiledOnZ : false;
  }
  _setIsTiledOnZ(newValue) {
    this._objectData.IsTiledOnZ = newValue;
  }
  _toggleIsTiledOnZ() {
    this._setIsTiledOnZ(!this._getIsTiledOnZ());
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
  _getZ() {
    return this._objectData.Z !== undefined ? this._objectData.Z : Number("0") || 0;
  }
  _setZ(newValue) {
    this._objectData.Z = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Placeholder"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects1);
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects1[i].hide();
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.onCreatedContext.GDPlaceholderObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1 */
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1[i].setIncludedInParentCollisionMask(false);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1[i].setIncludedInParentCollisionMask(false);
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getWidth() != eventsFunctionContext.getObjects("Object")[0]._getWidth() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getHeight() != eventsFunctionContext.getObjects("Object")[0]._getHeight() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth() != eventsFunctionContext.getObjects("Object")[0]._getDepth() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BottomCenter"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BottomCorner"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("BottomSide"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("CenterCorner"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("CenterSide"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1);
/* Reuse gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Placeholder"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TopCenter"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TopCorner"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TopSide"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setWidth((( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()))
}
{eventsFunctionContext.getObjects("Object")[0]._setHeight((( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()))
}
{eventsFunctionContext.getObjects("Object")[0]._setDepth((( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()))
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].Create9Patch(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(eventsFunctionContext.getObjects("Object")[0]._getWidth());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0]._getHeight());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setDepth(eventsFunctionContext.getObjects("Object")[0]._getDepth());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(1);
}
}
{gdjs.evtsExt__Model9Patch3D__SetInnerSize.func(runtimeScene, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546doStepPostEventsContext_9546GDObjectObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth(), eventsFunctionContext.getObjects("Object")[0]._getHeight(), eventsFunctionContext.getObjects("Object")[0]._getDepth(), eventsFunctionContext);
}

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPostEventsContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDTopCenterObjects1Objects = Hashtable.newFrom({"TopCenter": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDTopCornerObjects1Objects = Hashtable.newFrom({"TopCorner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDTopSideObjects1Objects = Hashtable.newFrom({"TopSide": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDBottomCenterObjects1Objects = Hashtable.newFrom({"BottomCenter": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDBottomCornerObjects1Objects = Hashtable.newFrom({"BottomCorner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDBottomSideObjects1Objects = Hashtable.newFrom({"BottomSide": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterCornerObjects1Objects = Hashtable.newFrom({"CenterCorner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterSideObjects1Objects = Hashtable.newFrom({"CenterSide": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterCornerObjects2Objects = Hashtable.newFrom({"CenterCorner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterSideObjects2Objects = Hashtable.newFrom({"CenterSide": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getDepth() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setZ(eventsFunctionContext.getObjects("Object")[0]._getZ()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects2[i].Create9PatchSlice(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterCornerObjects2Objects, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getZ(), eventsFunctionContext);
}
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1[i].CreateZPlan(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDTopCenterObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getDepth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1[i].Create9PatchSlice(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDTopCornerObjects1Objects, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDTopSideObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getDepth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1[i].CreateZPlan(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDBottomCenterObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1[i].Create9PatchSlice(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDBottomCornerObjects1Objects, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDBottomSideObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnZ();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getDepth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize() > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1[i].Create9PatchSlice(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterCornerObjects1Objects, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchContext_9546GDCenterSideObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getDepth() / 2, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ((eventsFunctionContext.getObjects("Object")[0]._getDepth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setScaleZ((eventsFunctionContext.getObjects("Object")[0]._getDepth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnZ();
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setZ(eventsFunctionContext.getObjects("Object")[0]._getSize() / 2)
}

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9Patch = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects4= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects1Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipY(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDCornerObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipY(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3[i].TileOnY(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[i].TileOnY(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3[i].TileOnX(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects3Objects, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3[i].setAngle(90);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[i].TileOnX(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects1Objects = Hashtable.newFrom({"Side": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() - eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546Create9PatchSliceContext_9546GDSideObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0]._getSize() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1[i].setAngle(90);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnY();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsTiledOnX();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSlice = function(Corner, Side, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Corner": Corner
, "Side": Side
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects4.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.eventsList6(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDTopCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDCenterCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.Create9PatchSliceContext.GDPlaceholderObjects4.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546TileOnXContext_9546GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getX()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546TileOnXContext_9546GDTileObjects2Objects, eventsFunctionContext.getObjects("Object")[0]._getX(), eventsFunctionContext.getArgument("Y"), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnX = function(Tile, Y, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546TileOnYContext_9546GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects2);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setY(eventsFunctionContext.getObjects("Object")[0]._getY()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546TileOnYContext_9546GDTileObjects2Objects, eventsFunctionContext.getArgument("X"), eventsFunctionContext.getObjects("Object")[0]._getY(), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects2[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnY = function(Tile, X, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnYContext.GDPlaceholderObjects2.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects4= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects3= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects4= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546TileOnXYContext_9546GDTileObjects4Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount4 = Math.ceil(eventsFunctionContext.getObjects("Object")[0]._getWidth() / eventsFunctionContext.getObjects("Object")[0]._getSize()) - 2;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects4);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.getObjects("Object")[0]._setX(eventsFunctionContext.getObjects("Object")[0]._getX()+eventsFunctionContext.getObjects("Object")[0]._getSize())
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546TileOnXYContext_9546GDTileObjects4Objects, eventsFunctionContext.getObjects("Object")[0]._getX(), eventsFunctionContext.getObjects("Object")[0]._getY(), (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects4[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
}
}

}


};gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXY = function(Tile, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects4.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTileObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDTopCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDCenterCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomSideObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCornerObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDBottomCenterObjects4.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects3.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.TileOnXYContext.GDPlaceholderObjects4.length = 0;


return;
}
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext = {};
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.idToCallbackMap = new Map();
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomSideObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomSideObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCornerObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCornerObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCenterObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCenterObjects2= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDPlaceholderObjects1= [];
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDPlaceholderObjects2= [];


gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1});
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, (( gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleX((eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
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
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1[i].TileOnX(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getHeight() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleY((eventsFunctionContext.getObjects("Object")[0]._getHeight() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
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
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1[i].TileOnY(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getObjects("Object")[0]._getWidth() / 2, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScaleX((eventsFunctionContext.getObjects("Object")[0]._getWidth() - 2 * eventsFunctionContext.getObjects("Object")[0]._getSize()) / eventsFunctionContext.getObjects("Object")[0]._getSize());
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
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1[i].TileOnXY(gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.mapOfGDgdjs_9546evtsExt_9595_9595Model9Patch3D_9595_9595Model9Patch3D_9546Model9Patch3D_9546prototype_9546CreateZPlanContext_9546GDTileObjects1Objects, eventsFunctionContext.getArgument("Z"), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlan = function(Tile, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDTopCenterObjectsList = [...runtimeScene.getObjects("TopCenter")];
var GDTopCenterObjects = Hashtable.newFrom({"TopCenter": thisGDTopCenterObjectsList});
var thisGDTopSideObjectsList = [...runtimeScene.getObjects("TopSide")];
var GDTopSideObjects = Hashtable.newFrom({"TopSide": thisGDTopSideObjectsList});
var thisGDTopCornerObjectsList = [...runtimeScene.getObjects("TopCorner")];
var GDTopCornerObjects = Hashtable.newFrom({"TopCorner": thisGDTopCornerObjectsList});
var thisGDCenterSideObjectsList = [...runtimeScene.getObjects("CenterSide")];
var GDCenterSideObjects = Hashtable.newFrom({"CenterSide": thisGDCenterSideObjectsList});
var thisGDCenterCornerObjectsList = [...runtimeScene.getObjects("CenterCorner")];
var GDCenterCornerObjects = Hashtable.newFrom({"CenterCorner": thisGDCenterCornerObjectsList});
var thisGDBottomSideObjectsList = [...runtimeScene.getObjects("BottomSide")];
var GDBottomSideObjects = Hashtable.newFrom({"BottomSide": thisGDBottomSideObjectsList});
var thisGDBottomCornerObjectsList = [...runtimeScene.getObjects("BottomCorner")];
var GDBottomCornerObjects = Hashtable.newFrom({"BottomCorner": thisGDBottomCornerObjectsList});
var thisGDBottomCenterObjectsList = [...runtimeScene.getObjects("BottomCenter")];
var GDBottomCenterObjects = Hashtable.newFrom({"BottomCenter": thisGDBottomCenterObjectsList});
var thisGDPlaceholderObjectsList = [...runtimeScene.getObjects("Placeholder")];
var GDPlaceholderObjects = Hashtable.newFrom({"Placeholder": thisGDPlaceholderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TopCenter": GDTopCenterObjects
, "TopSide": GDTopSideObjects
, "TopCorner": GDTopCornerObjects
, "CenterSide": GDCenterSideObjects
, "CenterCorner": GDCenterCornerObjects
, "BottomSide": GDBottomSideObjects
, "BottomCorner": GDBottomCornerObjects
, "BottomCenter": GDBottomCenterObjects
, "Placeholder": GDPlaceholderObjects
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "TopCenter": thisGDTopCenterObjectsList
, "TopSide": thisGDTopSideObjectsList
, "TopCorner": thisGDTopCornerObjectsList
, "CenterSide": thisGDCenterSideObjectsList
, "CenterCorner": thisGDCenterCornerObjectsList
, "BottomSide": thisGDBottomSideObjectsList
, "BottomCorner": thisGDBottomCornerObjectsList
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

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDPlaceholderObjects2.length = 0;

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTileObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDTopCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDCenterCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomSideObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomSideObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCornerObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCornerObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCenterObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDBottomCenterObjects2.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDPlaceholderObjects1.length = 0;
gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.CreateZPlanContext.GDPlaceholderObjects2.length = 0;


return;
}

gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Model9Patch3D::Model9Patch3D", gdjs.evtsExt__Model9Patch3D__Model9Patch3D.Model9Patch3D);
