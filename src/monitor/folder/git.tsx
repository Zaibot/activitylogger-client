import path from 'path';
import fs from 'async-file';
import memoryCache from 'node-memory-cache';

const timeCacheGitFolder = 30000;

const hasGitFolder = async (folder: string) => {
  try {
    const stat = await fs.stat(path.join(folder, `.git`));
    const isDirectory = stat.isDirectory();
    return isDirectory;
  } catch (ex) {
    if (ex.code === 'ENOENT') {
      return false;
    }
    throw ex;
  }
}

export default class {
  public async resolve(folder: string): Promise<string> {
    if (!folder) { return; }
    const cached = memoryCache.get(`git`, folder);
    if (cached) { return cached; }
    const hasGit = await hasGitFolder(folder);
    if (hasGit) {
      memoryCache.set(`git`, folder, folder, timeCacheGitFolder);
      return folder;
    } else {
      const folderParent = path.dirname(folder);
      if (folderParent === folder) { return; }
      const resolved = await this.resolve(folderParent);
      memoryCache.set(`git`, folder, resolved, timeCacheGitFolder);
      return resolved;
    }
  }
}
