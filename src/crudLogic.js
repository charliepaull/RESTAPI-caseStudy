import { MongoClient } from "mongodb";

// variables declared globally
let client;
// connection attempt to online Mongo db
export async function connectToCluster(uriLink) {
    try {
        // new mongo client object
        client = new MongoClient(uriLink);
        console.log("connecting to MongoDB cluster...");
        // connection attempt
        await client.connect();
        console.log("successfully connected");

        return client;
    } catch (error) {
        // if failed, return error
        console.error("Connection to MongoDB failed: ", error);
        // exit connection process
        process.exit();
    }
}

// return entire collection of books
export async function returnAllBooks(collection) {
    return collection.find({}).toArray();
}

// implementing the CRUD operation logic on Collection "Books."
export async function executeCRUDLogic(returnAllBooks) {
    // uri links to MongoDB Atlas db online
    let uriLink = process.env.DB_URI;
    try {
        client = await connectToCluster(uriLink);
        // grab db & collection names
        const db = client.db("Books_db");
        const collection = db.collection("Books");
        await returnAllBooks(collection);
        await insertNewBook(collection);
        await returnBookById(collection, 2);
        await updateBookDetailByID(collection, 2,
            {
                author: "Nelle Harper Lee"
            });
        await deleteBook(collection, 1);
    } catch (error) {
        console.error("Error with CRUD operation: ", error)
    } finally {
        // executed when the script is fully completed.
        await client.close();
    }
}

// build out each necessary CRUD operation and variation.
// insert a new book (must include: id, title, author, publicationYear)
export async function insertNewBook(collection) {
    const newBook = {
        id: Math.floor(Math.random() * 100) * 2,
        title: "Moneyball",
        author: "Michael Lewis",
        publicationYear: 2003,
    };

    await collection.insertOne(newBook);
}
// // return book by id
export async function returnBookById(collection, id) {
    return collection.find({ id }).toArray();
}
// update book details of a specific book by ID.
export async function updateBookDetailByID(collection, id, updatedFields) {
    await collection.updateMany(
        { id },
        { $set: updatedFields }
    );
}
// delete book from db by ID
export async function deleteBook(collection, id) {
    await collection.deleteMany({ id });
}