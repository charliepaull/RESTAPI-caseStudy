import { MongoClient } from "mongodb";

// define some global variables
// grab cluster connection string
const uri = process.env.DB_URI;
// declaring client variable
let client;
// grab db & collection names
const db = client.db("Books_db");
const collection = db.collection("Books");

// authenticating to database
export async function connectToCluster(uri) {
    try {
        // new mongo client object 
        client = new MongoClient(uri);
        console.log("connecting to MongoDB cluster...");
        // connection attempt
        await client.connect();
        console.log("successfully connected");

        return client;
    } catch (error) {
        // if failed, return "failed" and error to explain
        console.error("Connection to MongoDB failed: ", error);
        // exits process.env(used to begin connection process)
        process.exit();
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
// return entire collection of books
export async function returnAllBooks(collection) {
    return collection.find({}).toArray();
}
// return book by id
export async function returnBookById(collection, id) {
    return collection.find({id}).toArray();
}
// update book details of a specific book by ID. Will need to allow partial updates. validation is applied to the input data?
export async function updateBookDetailByID(collection, id, updatedFields) {
    await collection.updateMany(
        { id },
        { $set: updatedFields }
    );
}
// delete book from db by ID
export async function deleteBook(collection, id) {
    await collection.deleteMany({id});
}

// implementing the CRUD operation logic on Collection "Books."
export async function executeCRUDLogic(connectToCluster, insertNewBook, returnAllBooks, returnBookById, updateBookDetailByID, deleteBook) {
    try {
        // using function above to connect, pass in uri string
        client = await connectToCluster(uri);
        // POST a newBook to the collection
        console.log("adding new book");
        // await insertNewBook(collection);
        console.log("book added to collection");
        // return all books
        // await returnAllBooks(collection);
        // return book by id
        // await returnBookById(collection, {id});
        // update book details by specific id
        // await updateBookDetailByID(collection, {id}, {updatedFields})
        // delete book by ID
        // await deleteBook(collection, {id})
    } 
    catch(error) {
        console.error("Error inserting book: ", error)
    }
    finally {
        // this doesn't execute until the script is finished or there's a connection error.
        await client.close();
    }
}