
if (typeof gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid !== "undefined") {
  gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid = {};
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.idToCallbackMap = new Map();
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachIndex2 = 0;

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachObjects2 = [];

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachTemporary2 = null;

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachTotalCount2 = 0;

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects1= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects2= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects3= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects4= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects5= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects1= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects2= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects5= [];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6= [];


gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595CreateRandomGrid_9546GDObjectObjects6Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6});
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4, gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6);

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() < (( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6[0].getX()) + (( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6[0].getWidth()) - 0.1);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.mapOfGDgdjs_9546evtsExt_9595_9595DecoratedPlatform_9595_9595CreateRandomGrid_9546GDObjectObjects6Objects, gdjs.randomFloatInRange(eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() + eventsFunctionContext.getArgument("Margin"), eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() + eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - eventsFunctionContext.getArgument("Margin")), gdjs.randomFloatInRange(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() + eventsFunctionContext.getArgument("Margin"), eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() + eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() - eventsFunctionContext.getArgument("Margin")), (( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6.length === 0 ) ? "" :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6[0].getLayer()));
}
{for(var i = 0, len = gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6[i].setAngle(gdjs.randomFloat(360));
}
}
{eventsFunctionContext.localVariables[0].getFromIndex(2).add(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}

{ //Subevents: 
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(3).add(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber());
}
}

}


};gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3, gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4);

{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber((( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4[0].getY()));
}
}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3, gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() < (( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4[0].getY()) + (( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4[0].getHeight()) - 0.1);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber((( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4[0].getX()));
}

{ //Subevents: 
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CellSizeX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("CellSizeY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("X", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Y", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects2, gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3);

{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3[0].getWidth()) / Math.ceil((( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3[0].getWidth()) / eventsFunctionContext.getArgument("CellSize")));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3[0].getHeight()) / Math.ceil((( gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3[0].getHeight()) / eventsFunctionContext.getArgument("CellSize")));
}

{ //Subevents
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Platform"), gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects1);

for (gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachIndex2 = 0;gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachIndex2 < gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects1.length;++gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachIndex2) {
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects2.length = 0;


gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachTemporary2 = gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects1[gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachIndex2];
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects2.push(gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList3(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.func = function(runtimeScene, Object, CellSize, Platform, Margin, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Platform": Platform
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Platform": gdjs.objectsListsToArray(Platform)
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
if (argName === "CellSize") return CellSize;
if (argName === "Margin") return Margin;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects3.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects4.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects5.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects5.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6.length = 0;

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects3.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects4.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects5.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDObjectObjects6.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects1.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects2.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects3.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects4.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects5.length = 0;
gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.GDPlatformObjects6.length = 0;


return;
}

gdjs.evtsExt__DecoratedPlatform__CreateRandomGrid.registeredGdjsCallbacks = [];