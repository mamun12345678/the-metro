const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://mamun:mamun000@cluster0.lallshp.mongodb.net/test/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("Metro");
    const OrdersCollection = database.collection("Orders");
    const EventsCollection = database.collection("Events");
    const ReviewsCollection = database.collection("Reviews");
    const UsersCollection = database.collection("Users");

    //============================ GET API =============================//

    app.get("/Orders", async (req, res) => {
      const cursor = OrdersCollection.find({});
      const News = await cursor.toArray();
      res.send(News);
    });

    app.get("/Reviews", async (req, res) => {
      const cursor = ReviewsCollection.find({});
      const News = await cursor.toArray();
      res.send(News);
    });

    app.get("/Events", async (req, res) => {
      const cursor = EventsCollection.find({});
      const Events = await cursor.toArray();
      res.send(Events);
    });

    app.get("/Events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const Event = await EventsCollection.findOne(query);
      res.send(Event);
    });

    app.get("/users", async (req, res) => {
      const cursor = UsersCollection.find({});
      const Events = await cursor.toArray();
      res.send(Events);
    });

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await UsersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    //============================ POST API =============================//

    app.post("/Events", async (req, res) => {
      const result = await EventsCollection.insertOne(req.body);
      res.json(result);
    });
    app.post("/Reviews", async (req, res) => {
      const result = await ReviewsCollection.insertOne(req.body);
      res.json(result);
    });

    app.post("/Orders", async (req, res) => {
      const matched = await OrdersCollection.findOne({ date: req.body.date });
      if (matched) {
        const error = "Already Booked";
        res.send({ error });
        console.log("Already Booked");
      } else {
        const result = await OrdersCollection.insertOne(req.body);
        res.json(result);
      }
    });

    app.post("/users", async (req, res) => {
      const result = await UsersCollection.insertOne(req.body);
      res.json(result);
    });

    // ============================= PUT API ============================ //

    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const updateDoc = { $set: user };
      const result = await UsersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });

    //============================= DELETE API ===========================//

    app.delete("/Events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await EventsCollection.deleteOne(query);
      console.log("Deleting Events with id ", result);
      res.json(result);
    });

    app.delete("/Orders/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await OrdersCollection.deleteOne(query);
      console.log("Deleting Order with id ", result);
      res.json(result);
    });

    app.delete("/Reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await ReviewsCollection.deleteOne(query);
      console.log("Deleting Review with id ", result);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(port, () => {
  console.log("Happy Hacking", port);
});
