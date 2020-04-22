import { database, storage } from "../services/firebase/config";
import collections from "../utils/collections";

function upload(file, onProgress, onError, onComplete) {
  return new Promise((resolve, reject) => {
    const str = file.name.split(".");
    const task = storage
      .ref(
        `/images/${Date.now()}_${Buffer.from(
          str.slice(0, str.length - 2)
        ).toString("base64")}.${str.lastItem}`
      )
      .put(file);

    task.on(
      "state_changed",
      onProgress,
      (error) => {
        onError(error);
        reject(error);
      },
      async () => {
        onComplete();

        resolve(await task.snapshot.ref.getDownloadURL());
      }
    );
  });
}

class Course {
  //precisa ser testado
  async create(data, onProgress, onError, onComplete) {
    data.img = await upload(data.img, onProgress, onError, onComplete);
    await database.collection(collections.courses).doc().set(data);
  }

  list(observer) {
    const resolver = (query) => {
      let docs = [];
      query.forEach((course) => {
        docs.push({ id: course.id, ...course.data() });
      });
      return docs;
    };

    if (observer) {
      database
        .collection(collections.courses)
        .onSnapshot((query) => observer(resolver(query)));
    } else {
      return database.collection(collections.courses).get().then(resolver);
    }
  }

  async listUnique(id, observer) {
    const resolver = (query) => {
      return query.data();
    };

    if (observer) {
      database
        .collection(collections.courses)
        .doc(id)
        .onSnapshot((query) => observer(resolver(query)));
    } else {
      return database
        .collection(collections.courses)
        .doc(id)
        .get()
        .then(resolver);
    }
  }

  async update(id, data, onProgress, onError, onComplete) {
    if (typeof data.img === "object") {
      data.img = await upload(data.img, onProgress, onError, onComplete);
    }
    return database.collection(collections.courses).doc(id).update(data);
  }

  delete(id) {
    return database.collection(collections.courses).doc(id).delete();
  }
}

export default new Course();
