const mongoose = require("mongoose");

const numberSchema = new mongoose.Schema({
  integerOnly: {
    type: Number,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    alias: "i",
  },
});

const Count = mongoose.model("Count", numberSchema);

mongoose
  .connect(
    "mongodb+srv://irfanulislamdu:NSzBhGeIvIrkkTht@cluster0.h2lah.mongodb.net/mongoose-dem",
  )
  .then(async () => {
    // const person = new Person({
    //   name: "MDDD",
    //   roll: "23",
    //   id: 23,
    //   phone: 786,
    //   comments: { name: "hlw", date: Date.now() },
    //   city: "Dk",
    //   _someId: new mongoose.Types.ObjectId(),
    // });

    const doc = new Count({
      i: 12.7,
    });

    console.log("database Created");
    console.log(doc);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    mongoose.connection.close();
  });
