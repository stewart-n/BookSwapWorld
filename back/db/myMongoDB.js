const { MongoClient } = require("mongodb");

function MyDB() {
  const myDB = {};

  const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

  //get user informatiom
  myDB.getUsers = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();

    const db = client.db("db");
    const users = db.collection("users");

    const query = {};

    return users
      .find(query)
      .sort({ _id: -1 })
      .limit(10)
      .toArray()
      .finally(() => client.close());
  };

  //insert new users
  myDB.insertUsers = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();

    const db = client.db("db");
    const users = db.collection("users");

    return await users.insertOne(users);
  };

  //delete books
  myDB.deleteBook = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("db");
    const books = db.collection("books");
    return books.deletMany({ title: " " });
  };

  //get books
  myDB.getBook = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("db");
    const books = db.collection("books");
    const query = {};
    return books
      .find(query)
      .sort({ _id: 1 })
      .toArray()
      .finally(() => client.close);
  };

  //insert books
  myDB.insertBook = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    await client.connect();

    const db = client.db("db");
    const book = db.collection("books");

    return await book.insertOne(book);
  };

  //update books
  myDB.updateBook = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("db");
    const books = db.collection("books");
    books.update({ title: " " });
  };
  return myDB;
}

module.exports = MyDB();
