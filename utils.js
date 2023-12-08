const familyList = {
  DesertHog: "217d359f-1f2e-4703-9f74-8a6c47efb632",
  LoadHog: "e7fb88c1-972b-4c2a-999c-e1c4c5528c0e",
};

const batteryList = {
  //Deserthog
  "503743D-WGRN": "30625968-18af-4970-86da-3d17e771f882",
  "503744D-WGRN": "1bfe3fd5-d2a1-49d7-a6e3-d5aad0341219",
  "503752D-WGRN": "b2eddd81-e8f6-429f-bb0b-ce7984de66e0",
  "76121D-WGRN": "816d62a0-8f31-42a9-8b14-b2c579bb5789",
  "67167D-WGRN": "0f8c8736-7a99-4017-8697-2452acd01e30",
  "506910D-WGRN": "a3cc5186-18de-4d91-b431-fe2cdd2cc7ee",
  "503736D-WGRC": "67435132-f412-49e3-b30f-4d29a98ecd8f",
  "504944D-WGRN": "ba7a9c78-05b6-4fae-b4bb-f7c1a675d6f4",
  "76122D-WGRC": "059ea2f1-4d7a-4be2-96af-d438657197e9",
  "66144D-WGRN": "0dbe0e05-fc38-4485-8039-41b86bf5b2cd",
  "70433D-WGRN":"4245baaa-534e-4f85-af69-5e847986f694",
  "70436D-WGRN":"6338701e-dae8-4c56-8ec8-f09882ffd76f",

  //Loadhog
  "97566L-WGRN": "e697ce44-7363-4397-9384-b0b4b0b38473",
  "97568L-WGRN": "9f66f3ac-15a6-467e-a631-274fb702ff4b",
  "97564L-WGRN":"e697ce44-7363-4397-9384-b0b4b0b38473",
  "97556L-WGRN":"2611dd3a-86d3-46a3-bf88-93e5cf78e70a",
  "503752L-WGRN":"b27b0de2-52d8-40ee-8db7-9426fc5397b6",
  "97560L-WGRN":"ca138c73-2bc2-453d-9923-f003000c6c6c",
};

function getFamilyId(name) {
  return familyList[name] || "";
}
function getBatteryId(name) {
  return batteryList[name] || "";
}
