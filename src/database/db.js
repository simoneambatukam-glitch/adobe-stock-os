import Dexie from 'dexie';

export const db = new Dexie('AdobeStockOSDB');

db.version(1).stores({
  assets: 'id, title, niche, status, createdAt, type',
    earnings: 'id, date, amount, downloads, niche',
      prompts: 'id, title, category, isFavorite, createdAt',
        settings: 'id'
        });