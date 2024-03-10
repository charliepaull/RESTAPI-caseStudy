import { MongoClient } from "mongodb";

// variables declared globally
let client;

// implementing the CRUD operation logic on Collection "Books."
export async function executeCRUDLogic() {
    // uri links to MongoDB Atlas db online
    let uriLink = process.env.DB_URI;
    try {
        client = await connectToCluster(uriLink);
    } catch (error) {
        console.error("Error with CRUD operation: ", error)
    } finally {
        // executed when the script is fully completed.
        await client.close();
    }
}

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















// // // using function above to connect, pass in uri string
// // client = await connectToCluster(uri);
// // // grab db & collection names
// // const db = client.db("Books_db");
// // const collection = db.collection("Books");

// // // build out each necessary CRUD operation and variation.
// // // insert a new book (must include: id, title, author, publicationYear)
// // export async function insertNewBook(collection) {
// //     const newBook = {
// //         id: Math.floor(Math.random() * 100) * 2,
// //         title: "Moneyball",
// //         author: "Michael Lewis",
// //         publicationYear: 2003,
// //     };

// //     await collection.insertOne(newBook);
// // }
// // // return entire collection of books
// // export async function returnAllBooks(collection) {
// //     return collection.find({}).toArray();
// // }
// // // return book by id
// // export async function returnBookById(collection, id) {
// //     return collection.find({ id }).toArray();
// // }
// // // update book details of a specific book by ID. Will need to allow partial updates. validation is applied to the input data?
// // export async function updateBookDetailByID(collection, id, updatedFields) {
// //     await collection.updateMany(
// //         { id },
// //         { $set: updatedFields }
// //     );
// // }
// // // delete book from db by ID
// // export async function deleteBook(collection, id) {
// //     await collection.deleteMany({ id });
// // }

// // these are parameters I'd like to pass in after doing some better refactoring: connectToCluster, uri, insertNewBook, returnAllBooks, returnBookById, updateBookDetailByID, deleteBook
// // implementing the CRUD operation logic on Collection "Books."
// export async function executeCRUDLogic(uri) {
//     // grab cluster connection string
//     let uri = process.env.DB_URI;
//     try {
//         // using function above to connect, pass in uri string
//         client = await connectToCluster(uri);
//         // // grab db & collection names
//         // const db = client.db("Books_db");
//         // const collection = db.collection("Books");
//         // // POST a newBook to the collection
//         // console.log("adding new book");
//         // await insertNewBook(collection);
//         // console.log("book added to collection");
//         // // return all books
//         // await returnAllBooks(collection);
//         // // return book by id
//         // await returnBookById(collection, 2);
//         // // update book details by specific id
//         // await updateBookDetailByID(collection, 2,
//         //     {
//         //         author: "Nelle Harper Lee"
//         //     })
//         // // delete book by ID
//         // await deleteBook(collection, 1)
//     }
//     catch (error) {
//         console.error("Error inserting book: ", error)
//     }
//     finally {
//         // this doesn't execute until the script is finished or there's a connection error.
//         await client.close();
//     }
// }