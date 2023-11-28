const authToken = "9b5ed056-d619-47db-a8a8-1e7fad3f5a91";
const assetId = "217d359f-1f2e-4703-9f74-8a6c47efb632";

window.addEventListener("load", loadThreekitPlayer);

function loadThreekitPlayer() {
  window
    .threekitPlayer({
      authToken,
      el: document.getElementById("playerContainer"),
      assetId,
      intialConfiguration: {},
      showConfigurator: false,
      showAR: true,
      //display: 'image',
    })
    .then(async (api) => {
      window.api = api;
      window.configurator = await api.getConfigurator();
    });
}

function setBattery(value) {
  let assetId;
  switch (value) {
    case "503743D-WGRN":
      assetId = "30625968-18af-4970-86da-3d17e771f882";
      break;
    case "503744D-WGRN":
      assetId = "1bfe3fd5-d2a1-49d7-a6e3-d5aad0341219";
      break;
    case "503752D-WGRN":
      assetId = "b2eddd81-e8f6-429f-bb0b-ce7984de66e0";
      break;
    default:
      assetId = "30625968-18af-4970-86da-3d17e771f882";
      break;
  }

  configurator.setConfiguration({
    "Choose Battery": {
      assetId: assetId,
    },
  });
}

function setWirePosition(value) {
  let assetId;
  switch (value) {
    case "A":
      assetId = "fe8fe64a-5296-40c3-aebd-b2872cc80fc3";
      break;
    case "B":
      assetId = "3793ed14-0984-40df-9c90-175a8da1473a";
      break;
    case "C":
      assetId = "58f1fda5-ef59-40ef-b70d-3754f5fc3eef";
      break;
    case "D":
      assetId = "557eb3a0-41bf-417f-b6ba-a32859864bfe";
      break;
    case "AB":
      assetId = "5c07f157-9c98-4b90-be4f-a772cad7b195";
      break;
    case "A/B":
      assetId = "48c802bf-08c1-4297-a31b-5359f3f8c93b";
      break;
    case "CD":
      assetId = "3d61c936-02e7-4890-adc4-85b3d5336929";
      break;
    case "C/D":
      assetId = "70373f8f-dded-4ecc-8d82-e708098afef4";
      break;
    case "A Reverse":
      assetId = "9cf72e62-65f9-4f6f-8efb-5715b604d72a";
      break;
    default:
      assetId = "fe8fe64a-5296-40c3-aebd-b2872cc80fc3";
      break;
  }

  configurator.setConfiguration({
    "Wire Position": {
      assetId: assetId,
    },
  });
}

function setWaterPipe(value) {
  let assetId;
  switch (value) {
    case "On":
      assetId = "d30fe1eb-db17-46d7-b562-2444ccc230bb";
      break;
    case "Off":
      assetId = "6864f552-4668-4001-bfce-c25c0100b588";
      break;

    default:
      assetId = "d30fe1eb-db17-46d7-b562-2444ccc230bb";
      break;
  }
  configurator.setConfiguration({
    "Water Pipe": {
      assetId: assetId,
    },
  });
}

function setTrayColor(value) {
  let assetId;
  switch (value) {
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
