import { Document, Model } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(public readonly model: Model<T>) {}
  private async isCollectionExists(): Promise<boolean> {
    const result = await this.model.db.db
      .listCollections({ name: this.model.collection.collectionName })
      .next();
    return !!result;
  }
  public async createCollection() {
    if (!(await this.isCollectionExists())) {
      this.model.createCollection();
    }
  }
}
