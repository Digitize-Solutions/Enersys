const familyList = {
  'DesertHog': '217d359f-1f2e-4703-9f74-8a6c47efb632', 
  'LoadHog': 'e7fb88c1-972b-4c2a-999c-e1c4c5528c0e', 
}

const batteryList = {

  //Deserthog
  "503743D-WGRN": "30625968-18af-4970-86da-3d17e771f882",
  "503744D-WGRN": "1bfe3fd5-d2a1-49d7-a6e3-d5aad0341219",
  "503752D-WGRN": "b2eddd81-e8f6-429f-bb0b-ce7984de66e0",
  "76121D-WGRN": "816d62a0-8f31-42a9-8b14-b2c579bb5789",
  "67167D-WGRN": "0f8c8736-7a99-4017-8697-2452acd01e30",

//Loadhog
  "97566L-WGRN": "e697ce44-7363-4397-9384-b0b4b0b38473",
  "97568L-WGRN": "9f66f3ac-15a6-467e-a631-274fb702ff4b",
}

function getFamilyId (name) {
  return familyList[name] || '';
}
function getBatteryId (name) {
  return batteryList[name] || '';
}