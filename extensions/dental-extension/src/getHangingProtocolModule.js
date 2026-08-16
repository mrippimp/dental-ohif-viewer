import dentalProtocol from './hangingprotocols/dentalProtocol';

function getHangingProtocolModule() {
  return [
    {
      name: dentalProtocol.id,
      protocol: dentalProtocol,
    },
  ];
}

export default getHangingProtocolModule;
