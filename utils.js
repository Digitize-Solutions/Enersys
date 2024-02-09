const familyList = {
  DesertHog: "217d359f-1f2e-4703-9f74-8a6c47efb632",
  LoadHog: "e7fb88c1-972b-4c2a-999c-e1c4c5528c0e",
};

function getFamilyId(name) {
  return familyList[name] || "";
}

const batteryList = {
  //Deserthog
  "503743D-WGRN": "30625968-18af-4970-86da-3d17e771f882",
  "503744D-WGRN": "1bfe3fd5-d2a1-49d7-a6e3-d5aad0341219",
  "503752D-WGRN": "b2eddd81-e8f6-429f-bb0b-ce7984de66e0",
  "76121D-WGRN":  "816d62a0-8f31-42a9-8b14-b2c579bb5789",
  "67167D-WGRN":  "0f8c8736-7a99-4017-8697-2452acd01e30",
  "506910D-WGRN": "a3cc5186-18de-4d91-b431-fe2cdd2cc7ee",
  "503736D-WGRC": "67435132-f412-49e3-b30f-4d29a98ecd8f",
  "504944D-WGRN": "ba7a9c78-05b6-4fae-b4bb-f7c1a675d6f4",
  "76122D-WGRC":  "059ea2f1-4d7a-4be2-96af-d438657197e9",
  "66144D-WGRN":  "0dbe0e05-fc38-4485-8039-41b86bf5b2cd",
  "70433D-WGRN":  "4245baaa-534e-4f85-af69-5e847986f694",
  "70436D-WGRN":  "6338701e-dae8-4c56-8ec8-f09882ffd76f",
  "68666D-WGRN":  "272b8858-62b6-4d2f-a01d-09f3e33f43ea",
  "511394D-WGRN": "87ebf9f8-2429-4833-82f1-dbdfe9c8fa78",
  "501674D-WGRN": "4cb14735-2adc-42cb-ad4e-9bdfd44d92e7",
  "66584D-WGRN":  "f92bf503-4a5f-46da-b8d1-2768a624412c",
  "69855D-WGRN":  "cc225ec2-b6e9-4526-bd25-e9063779a425",
  "70673D-WGRC":  "4369d414-ded0-4e6b-8eb2-7b857e2a531f",
  "67715D-WGRN":  "f850ac84-b7af-46c3-817d-b3aef3bcae36",
  "71528D-WGRN":  "19d1de86-51d0-4c50-b620-8f69c92e8fc0",
  "74691D-WGRN":  "8c428957-9291-41fa-97a2-74e7eeca6bef",
  "74028D-WGRC":  "3d88ea17-a5a3-4633-bd8b-9d1ac208474b",
  "88147D-WGRN":  "001ed3d6-e4b7-4a00-beb8-4deaea6b4106",

  //Loadhog
  "97566L-WGRN":  "e697ce44-7363-4397-9384-b0b4b0b38473",
  "97568L-WGRN":  "9f66f3ac-15a6-467e-a631-274fb702ff4b",
  "97564L-WGRN":  "e697ce44-7363-4397-9384-b0b4b0b38473",
  "97556L-WGRN":  "2611dd3a-86d3-46a3-bf88-93e5cf78e70a",
  "503752L-WGRN": "b27b0de2-52d8-40ee-8db7-9426fc5397b6",
  "97560L-WGRN":  "ca138c73-2bc2-453d-9923-f003000c6c6c",
  "503744L-WGRN": "6cdc22e3-5e80-427d-8d14-82d7e1b14aa9",
  "503743L-WGRN": "4f4c7c10-0863-4e59-94c3-8ec06bcacda7",
  "68666L-WGRN":  "a6822eb1-c4cc-4912-94f4-73b66a9b4b22",
  "97588L-WGRN":  "737615b6-3dad-4b26-8bbb-649ce2ad1170",
  "97592L-WGRN":  "5d7644f1-8f52-406e-bc3d-d7bd769ac318",
  "503736L-WGRC": "02387ee4-c222-4776-845e-f81480387157",
  "503754L-WGRN": "f20b06c7-0885-4889-b787-737629b40360",
};

function getBatteryId(name) {
  return batteryList[name] || "";
}


const TrayColorName = {
  "Grey": "cf2f8cd0-d70a-448a-8ec9-fef0c9c0614e",
  "Blue": "404a924d-e40e-4fd1-8ed1-b4c86a4bdace",
};


function TrayColorNameId(name) {
  return TrayColorName[name] || "";
}


const SocketColorName = {
  "Yellow": "5d9d84fa-5706-4959-86d9-8e76f5007371",
  "Red"   : "ea3e06df-3451-46f6-975f-af4b877dd854",
};


function SocketColorNameId(name) {
  return SocketColorName[name] || "";
}


const initialValues = {
  "Wire Position": "A",
  "Tray Color": "Grey",
  "Water Pipe": "On",
  "Tray Cover": "Off",
  "Socket Color": "Yellow",
  "Box Dimension": "Off",
};
