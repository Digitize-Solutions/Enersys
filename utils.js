const familyList = {
  DesertHog: "217d359f-1f2e-4703-9f74-8a6c47efb632",
  LoadHog: "e7fb88c1-972b-4c2a-999c-e1c4c5528c0e",
  Waterless: "86ee4623-e10e-41c7-877c-ac817d82ee69",
  PerfectPlus: "c8fda43e-6163-445c-bd11-ff9cb8487475",
};

function getFamilyId(name) {
  return familyList[name] || "";
}

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
  "70433D-WGRN": "4245baaa-534e-4f85-af69-5e847986f694",
  "70436D-WGRN": "6338701e-dae8-4c56-8ec8-f09882ffd76f",
  "68666D-WGRN": "272b8858-62b6-4d2f-a01d-09f3e33f43ea",
  "511394D-WGRN": "87ebf9f8-2429-4833-82f1-dbdfe9c8fa78",
  "501674D-WGRN": "4cb14735-2adc-42cb-ad4e-9bdfd44d92e7",
  "66584D-WGRN": "f92bf503-4a5f-46da-b8d1-2768a624412c",
  "69855D-WGRN": "cc225ec2-b6e9-4526-bd25-e9063779a425",
  "70673D-WGRC": "4369d414-ded0-4e6b-8eb2-7b857e2a531f",
  "67715D-WGRN": "f850ac84-b7af-46c3-817d-b3aef3bcae36",
  "71528D-WGRN": "19d1de86-51d0-4c50-b620-8f69c92e8fc0",
  "74691D-WGRN": "8c428957-9291-41fa-97a2-74e7eeca6bef",
  "74028D-WGRC": "3d88ea17-a5a3-4633-bd8b-9d1ac208474b",
  "88147D-WGRN": "001ed3d6-e4b7-4a00-beb8-4deaea6b4106",

  //Loadhog
  "97566L-WGRN": "e697ce44-7363-4397-9384-b0b4b0b38473",
  "97568L-WGRN": "9f66f3ac-15a6-467e-a631-274fb702ff4b",
  "97564L-WGRN": "e697ce44-7363-4397-9384-b0b4b0b38473",
  "97556L-WGRN": "2611dd3a-86d3-46a3-bf88-93e5cf78e70a",
  "503752L-WGRN": "b27b0de2-52d8-40ee-8db7-9426fc5397b6",
  "97560L-WGRN": "ca138c73-2bc2-453d-9923-f003000c6c6c",
  "503744L-WGRN": "6cdc22e3-5e80-427d-8d14-82d7e1b14aa9",
  "503743L-WGRN": "4f4c7c10-0863-4e59-94c3-8ec06bcacda7",
  "68666L-WGRN": "a6822eb1-c4cc-4912-94f4-73b66a9b4b22",
  "97588L-WGRN": "737615b6-3dad-4b26-8bbb-649ce2ad1170",
  "97592L-WGRN": "5d7644f1-8f52-406e-bc3d-d7bd769ac318",
  "503736L-WGRC": "02387ee4-c222-4776-845e-f81480387157",
  "503754L-WGRN": "f20b06c7-0885-4889-b787-737629b40360",

  //Waterless
  "4592914CBC": "79156a2c-e656-4477-8285-fa2e8f67e024",
  "4592817CBC": "22055fcf-6e85-4a00-a242-68cb8efbbaa9",
  "4592493CBC": "f2e457fa-6686-4e48-a1b7-bb39da588a81",
  "3910707CBC": "64ed7c06-1139-4d51-82b9-1aa55105e574",
  "4592452CBC": "75793db5-0cc7-4609-b816-9e958f9251f2",

  //PerfectPlus
  "3409885CBC": "c842373b-49b0-46e9-9a43-ad4965382d67",
  "4600176CBC": "737ca8b7-6e1a-4336-a590-a139fbdf6d4c",
  "4590257CBC": "06d791c1-7e95-49d1-9e5d-ca40d2c5f54b",
  "4587593CBC": "192895cf-9c70-4ccf-941c-aa190f56153a",
  "3418227CBC": "2b3cdc15-99f0-46c7-b142-d7aa417bfa48",
  "4600666CBC": "6ca1f33f-f642-4ea8-a0cf-66dacef0882c",
  "4603352CBC": "0928bf20-a12a-406a-bc0d-972d9dd52119",
  "4590654CBC": "d2c437ac-d360-4abd-a914-08445b7a36bf",
  "4588557CBC": "44817f14-f9af-44ec-a0a8-8eb213456135",
  "4588776CBC": "932926e7-6825-40d0-bce2-692746bd4790",
  "3427534CBC": "0a9aa52e-510a-4677-88c0-d200506c4678",
  "4600056CBC":"3714b8a7-b0e0-4a08-96f3-d0bb28e11444",
  "3565842CBC":"0aa3b5f1-34a7-4409-b736-8a8ae1fd8f0e",
  "4604097CBC":"a434a282-ef18-43c2-ad77-8e80ca0b85ca",
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

const batteryLabelName = {

  //perfectplus batteries labels
  "Hawker Perfect Plus": "752baa0f-0a4e-40cb-b0d5-c1804f37d697",
  "Still": "f36813bc-72c7-46ac-8914-2bb8e240e4af",
  "Fiamm Perfect Plus": "e3ec1cb6-9805-45f5-ac79-bcf2e7c9b0c7",
  "Jungheinrich": "582b1f1c-a054-47db-9c4a-e2991d2e8453",
  "Oerlikon Perfect Plus": "8e5a455b-1d94-4d9e-890d-92bfcfe0bc29",
  "Oldham Perfect Plus": "3416b28a-1456-4438-a685-3f61333a71a2",
  "KION-Still": "d4c8c22d-1e95-4425-b832-0fd330952502",
  "KION-Linde": "51cb08d7-e77a-4260-ac6e-55894475f464",
  "KION-Fenwick": "82a7b4c7-ef4a-426d-8b72-9a7203cbfbca",
  "Neutral": "dee76079-9c51-45d4-9e81-237d8a40ce94",

  //waterless batteries labels
  "Hawker Water Less":"34fed9e6-0bd1-4139-8d34-12928058990b",
  "Fiamm Water Less":"bbaf558a-4dc4-4dbe-85a0-a72d7a4decc2",
  "Oerlikon Water Less":"018c3968-4504-49da-9b5a-86d19e0ad10c",
  "Oldham Water Less":"f5355e73-ff19-47d4-8321-15c148565f03",
  "Hawker Water Less 20":"8d0622de-f30a-4447-8dc0-993b14604ddf",
  "Jungheinrich Water Less":"c5eb3777-65a4-4392-a6f2-26977bbce9dd",
  "Neutral Water Less":"a5e404ba-54bb-4059-b304-97a8f537d62c",
  "KION-Still":"e71ea13a-e136-4416-a0ad-d39ebc8e1d70",
  "KION-Linde":"20ca1d8f-3cf1-4aa3-8305-ad7dbdd97fec",
  "KION-Fenwick":"d75aa6cd-1656-4207-b5d6-82049f86be01",
};

function batteryLabelNameId(name) {
  return batteryLabelName[name] || "";
}

const initialValues = {
  "Wire Position": "A",
  "Tray Color": "Grey",
  "Water Pipe": "On",
  "Tray Cover": "Off",
  "Socket Color": "Yellow",
  "Box Dimension": "Off",
};
