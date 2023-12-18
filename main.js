//const authToken = "9b5ed056-d619-47db-a8a8-1e7fad3f5a91"; // localhost
const authToken = "3ec9ad4d-3567-4a6d-9ba3-cda3ea8b6b4a";// github
var playerObj;
async function loadThreekitPlayer(name) {
  const tmpAssetId = getFamilyId(name);

  window
    .threekitPlayer({
      authToken,
      el: document.getElementById("playerContainer"),
      assetId: tmpAssetId,
      initialConfiguration: {},
      showConfigurator: false,
      showAR: true,
    })
    .then(async (api) => {
    window.api = api;
    window.configurator = await api.getConfigurator();
    playerObj = api.enableApi("player");
    setInitialAttributeValue();
  });
  }

  function setInitialAttributeValue() {
    for (const attributeName in initialValues) {
      const value = initialValues[attributeName];
      setAttributeValue(attributeName, value);
    }

    OffsetFunction();
  }

async function setAttributeValue(attributeName, value) {
      switch (attributeName) {
      case "Water Pipe":
        setWaterPipe(value);
        break;
      case "Tray Cover":
        setTrayCover(value);
        break;
      case "Wire Position":
        setWirePosition(value);
        break;
      case "Socket Color":
        setSocketColor(value);
        break;
      case "Tray Color":
        setTrayColor(value);
        break;
      case "Box Dimension":
        setBoxDimension(value);
        break;
      }
}

function setBattery(value) {
      let assetId = getBatteryId(value);
    
  configurator
    .setConfiguration({
      "Choose Battery": {
        assetId: assetId,
      },
})
    .then((item) => {
      setInitialAttributeValue();
    });
}

async function setWirePosition(value) {
  let meshToShow;

  switch (value) {
    case "A":
      meshToShow = "A_Assembly";
      break;
    case "B":
      meshToShow = "B_Assembly";
      break;
    case "AB":
      meshToShow = "AB_Assembly";
      break;
    case "C":
      meshToShow = "C_Assembly";
      break;
    case "D":
      meshToShow = "D_Assembly";
      break;
    case "A/B":
      meshToShow = "A_B_Assembly";
      break;
    case "CD":
      meshToShow = "CD_Assembly";
      break;
    case "C/D":
      meshToShow = "C_D_Assembly";
      break;
    case "A Reverse":
      meshToShow = "A_Reverse_Assembly";
      break;

    case "C Alternative":
      meshToShow = "C_Alternate_Assembly";
      break;

    default:
      meshToShow = "A_Assembly";
      break;
  }

  const allMeshes = [
    "A_Assembly",
    "B_Assembly",
    "AB_Assembly",
    "A_Reverse_Assembly",
    "C_D_Assembly",
    "CD_Assembly",
    "A_B_Assembly",
    "D_Assembly",
    "C_Assembly",
    "C_Alternate_Assembly",
    // "CD_Center_Assembly",
  ];
  const meshesToHide = allMeshes.filter((mesh) => mesh !== meshToShow);
  for (const meshToHide of meshesToHide) {
    // Show the All expect selected mesh
    await setScene(meshToHide, false);
  }
  // Show the selected mesh
  await setScene(meshToShow, true);
}

async function setWaterPipe(value) {
  let mesh = "Waterwire_Assembly";
  switch (value) {
    case "On":
      value = true;
      break;
    case "Off":
      value = false;
      break;
    default:
      value = true;
      break;
  }

  setScene(mesh, value);
}

async function setTrayCover(value) {
  let mesh = "Covertop_Assembly";
  switch (value) {
    case "On":
      value = true;
      break;
    case "Off":
      value = false;
      break;
    default:
      value = true;
      break;
  }

  setScene(mesh, value);
}

async function setBoxDimension(value) {
  let mesh = "Box Dimensions";
  switch (value) {
    case "On":
      value = true;
      break;
    case "Off":
      value = false;
      break;
    default:
      value = true;
      break;
  }

  setScene(mesh, value);
}

async function setScene(mesh, value) {
  const model = playerObj.configurator.appliedConfiguration["Choose Battery"];
  var assetInstance = await playerObj.getAssetInstance({
    id: model,
    plug: "Proxy",
    property: "asset",
  });
  window.assetInstance = assetInstance;
    api.scene.set(
    {
      from: assetInstance,
      id: api.scene.findNode({
        from: assetInstance,
        name: mesh,
      }),
      plug: "Properties",
      property: "visible",
    },
    value
  );
}

// const allPlugMeshes = [
//   "A_Assembly_plug",
//   "B_Assembly_plug",
//   "D_Assembly_plug",
//   "C_Assembly_plug",
//   "AB_Assembly_plug",
//   "A_Reverse_plug",
//   "C_D_Assembly_plug",
//   "CD_Assembly_plug",
//   "A_B_Assembly_plug",
//   "C_Alternate_Assembly_plug",
//   "CD_Center_Assembly_plug",
// ];

// async function setSocketColor(val) {
//   try {
//     let attributeColor = "Socket_Color";
//     let value=val;
//     switch (val) {
//       case "Red":
//         value = "#b81718";
//         break;
//       case "Yellow":
//         value = "#F9F642";
//         break;
//     }

//    // console.log("val>>>>>>>>>>", val, "value>>>>>>>>>>>", value);

//     const model = playerObj.configurator.appliedConfiguration["Choose Battery"];
//     var assetInstance = await playerObj.getAssetInstance({
//       id: model,
//       plug: "Proxy",
//       property: "asset",
//     });

//     for (const meshName of allPlugMeshes) {
//       configurator = await playerObj.getConfiguratorInstance({
//         from: assetInstance,
//         name: meshName,
//         plug: "Material",
//         property: "reference",
//       });

//       await configurator.setConfiguration({ [attributeColor]: value });
//     }

   
//   } catch (error) {
//     console.log("socketColor:", error);
//   }
// }

async function OffsetFunction() {
  const model = playerObj.configurator.appliedConfiguration["Choose Battery"];
  const assetInstance = await playerObj.getAssetInstance({
    id: model,
    plug: "Proxy",
    property: "asset",
  });

  const boxDimensionsNodeId = api.scene.findNode({
    from: assetInstance,
    name: "Box Dimensions",
  });

  api.scene.set(
    {
      from: assetInstance,
      id: boxDimensionsNodeId,
      plug: "Measurement",
      property: "xOffset",
    },
    {
      x: 0,
      y: 2,
      z: 0,
    }
  );

  api.scene.set(
    {
      from: assetInstance,
      id: boxDimensionsNodeId,
      plug: "Measurement",
      property: "yOffset",
    },
    { x: 0, y: 0, z: 2 }
  );

  api.scene.set(
    {
      from: assetInstance,
      id: boxDimensionsNodeId,
      plug: "Measurement",
      property: "zOffset",
    },
    {
      x: 0,
      y: 2,
      z: 0,
    }
  );
}

function setTrayColor(color) {
  let assetId;
  switch (color) {
    case "Grey":
      assetId = "cf2f8cd0-d70a-448a-8ec9-fef0c9c0614e";
      break;
    case "Blue":
      assetId = "404a924d-e40e-4fd1-8ed1-b4c86a4bdace";
      break;
    default:
      assetId = "cf2f8cd0-d70a-448a-8ec9-fef0c9c0614e";
      break;
  }

  configurator.setConfiguration({
    "Tray Color": {
      assetId: assetId,
    },
  });
}


// older-version setcolor by assetid
function setSocketColor(value) {
  let assetId;
  switch (value) {
    case "Yellow":
      assetId = "5d9d84fa-5706-4959-86d9-8e76f5007371";
      break;
    case "Red":
      assetId = "ea3e06df-3451-46f6-975f-af4b877dd854";
      break;
    default:
      assetId = "5d9d84fa-5706-4959-86d9-8e76f5007371";
      break;
  }

  configurator.setConfiguration({
    "Socket Color": {
      assetId: assetId,
    },
  });
}
