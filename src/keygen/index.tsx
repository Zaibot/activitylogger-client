export default () => {
  const NodeRSA = require('node-rsa');
  const key = NodeRSA();
  key.generateKeyPair(2048);
  return {
    public: `-----BEGIN PUBLIC KEY-----\n${key.exportKey('pkcs8-public-der').toString('base64')}\n-----END PUBLIC KEY-----`,
    private: `-----BEGIN RSA PRIVATE KEY-----\n${key.exportKey('pkcs1-der').toString('base64')}\n-----END RSA PRIVATE KEY-----`,
  };
};
