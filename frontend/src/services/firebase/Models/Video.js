import { database, storage } from "../config";
import firebase from "firebase/app";
import collections from "../../../utils/collections";

function upload(file, onProgress, onError, onComplete) {
  return new Promise((resolve, reject) => {
    const str = file.name.split(".");
    console.log(
      // Buffer.from(str.slice(0, str.length - 1)).toString("base64"),
      str[str.length - 1]
    );

    const task = storage
      .ref(
        `/videos/${Date.now()}_${Buffer.from(
          str.slice(0, str.length - 1)
        ).toString("base64")}.${str[str.length - 1]}`
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

class Video {
  //precisa ser testado
  async create(data, onProgress, onError, onComplete) {
    const FieldValue = firebase.firestore.FieldValue;

    const { idCourse, ...rest } = data;
    rest.file = await upload(data.file, onProgress, onError, onComplete);
    const ref = database.collection(collections.videos).doc();
    await ref.set(rest);
    database
      .collection(collections.courses)
      .doc(idCourse)
      .update({
        videos: FieldValue.arrayUnion(ref),
      });
  }

  list(idCourse, observer) {
    const resolver = async (query) => {
      const data = query.data();
      console.log(data.videos[0]);

      return await Promise.all(
        data.videos.map((item) => item.get().then((resp) => resp.data()))
      );
    };

    if (observer) {
      database
        .collection(collections.courses)
        .doc(idCourse)
        .onSnapshot(async (query) => observer(await resolver(query)));
    } else {
      return database
        .collection(collections.courses)
        .doc(idCourse)
        .get()
        .then(resolver);
    }
  }

  async listUnique(id, observer) {
    const resolver = (query) => {
      return query.data();
    };

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
    if (typeof data.file === "object") {
      data.file = await upload(data.file, onProgress, onError, onComplete);
    }
    return database.collection(collections.videos).doc(id).update(data);
  }

  delete(id) {
    return database.collection(collections.videos).doc(id).delete();
  }
}

export default new Video();
