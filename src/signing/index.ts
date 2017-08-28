import * as crypto from 'crypto';

export class Signing {
  public sign(privateKey: string, buffer: Buffer): string {
    const signer = crypto.createSign('RSA-SHA256');
    signer.update(buffer);
    signer.end();
    const signature = signer.sign(privateKey);
    return signature.toString('base64');
  }

  public verify(buffer: Buffer, publicKey: string, signature: string): boolean {
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(buffer);
    verifier.end();
    const sign = new Buffer(signature, 'base64');
    const verified = verifier.verify(publicKey, sign);
    return verified;
  }
}

export default new Signing();
