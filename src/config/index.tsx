import * as path from 'path';
import Database from './database';

class Config {
  public readonly rootPath = process.env.NODE_ENV === 'production' ? path.join(process.resourcesPath, 'app.asar') : path.join(__dirname, '..');

  public resolveStatic(relative: string) {
    return path.join(this.rootPath, `static`, relative);
  }

  public async getPrivateKey() {
    return await Database.get<string>('privateKey');
  }
  public async setPrivateKey(key: string) {
    return await Database.set<string>('privateKey', key);
  }
  public async getPublicKey() {
    return await Database.get<string>('publicKey');
  }
  public async setPublicKey(key: string) {
    return await Database.set<string>('publicKey', key);
  }
  public async getTimelineId() {
    return await Database.get<string>('timelineId');
  }
  public async setTimelineId(key: string) {
    return await Database.set<string>('timelineId', key);
  }
  public async getSourceId() {
    return await Database.get<string>('sourceId');
  }
  public async setSourceId(key: string) {
    return await Database.set<string>('sourceId', key);
  }
  public async getServerUrl() {
    return await Database.get<string>('serverUrl');
  }
  public async setServerUrl(value: string) {
    return await Database.set<string>('serverUrl', value);
  }
}
export default new Config();
