import firebase from 'firebase/app';

import { database, storage } from '..';

import collections from '../../../utils/collections';

const { FieldValue } = firebase.firestore;

function upload(file, onProgress, onError, onComplete) {
  return new Promise((resolve, reject) => {
    const task = storage.ref(`/videos/${Date.now()}_${file.name}`).put(file);

    task.on(
      'state_changed',
      onProgress,
      (error) => {
        onError(error);
        reject(error);
      },
      async () => {
        if (onComplete) {
          onComplete();
        }

        resolve(await task.snapshot.ref.getDownloadURL());
      },
    );
  });
}

class Video {
  // precisa ser testado
  async create(data, onProgress, onError, onComplete) {
    data.file = await upload(data.file, onProgress, onError, onComplete);
    const ref = database.collection(collections.videos).doc();
    await ref.set(data);
    database
      .collection(collections.courses)
      .doc(data.idCourse)
      .update({
        videos: FieldValue.arrayUnion(ref),
      });
  }

  list(idCourse, observer) {
    const resolver = (query) => {
      const data = [];
      query.forEach((item) => {
        const video = { id: item.id, ...item.data() };

        if (video.idCourse === idCourse) {
          data.push(video);
        }
      });

      return data;
    };

    if (observer) {
      database
        .collection(collections.videos)
        .onSnapshot(async (query) => observer(resolver(query)));
    } else {
      const query = database.collection(collections.videos).get();
      return resolver(query);
    }
  }

  async listUnique(id, observer) {
    const resolver = (query) => query.data();

    if (observer) {
      database
        .collection(collections.videos)
        .doc(id)
        .onSnapshot((query) => observer(resolver(query)));
    } else {
      return database
        .collection(collections.videos)
        .doc(id)
        .get()
        .then(resolver);
    }
  }

  async update(id, data, onProgress, onError, onComplete) {
    if (typeof data.file === 'object') {
      data.file = await upload(data.file, onProgress, onError, onComplete);
    }
    if (onComplete) {
      onComplete();
    }
    return database.collection(collections.videos).doc(id).update(data);
  }

  async delete(data) {
    const ref = database.collection(collections.videos).doc(data.id);

    database
      .collection(collections.courses)
      .doc(data.idCourse)
      .update({
        videos: FieldValue.arrayRemove(ref),
      });
    await storage.refFromURL(data.file).delete();
    ref.delete();
  }
}

export default new Video();
