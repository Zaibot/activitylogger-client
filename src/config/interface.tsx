export default interface IConfig {
  getPrivateKey(): Promise<string>;
  setPrivateKey(key: string): Promise<void>;
  getPublicKey(): Promise<string>;
  setPublicKey(key: string): Promise<void>;
  getTimelineId(): Promise<string>;
  setTimelineId(key: string): Promise<void>;
  getSourceId(): Promise<string>;
  setSourceId(key: string): Promise<void>;
  getServerUrl(): Promise<string>;
  setServerUrl(value: string): Promise<void>;
}
