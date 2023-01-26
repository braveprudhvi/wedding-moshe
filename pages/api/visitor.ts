import VisitorDb from "models/VisitorModel";
import dbConnect from "lib/dbConnect";
import { NextApiHandler } from "next";


const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
      case "GET":
          const everything = await VisitorDb.find();
          res.json({ message: everything});
          res.status(200);
      break;
    case "POST":
        try {
            const everything = await VisitorDb.find({ name: req.body[0].name,ip:req.body[0].ip });
          req.body.forEach(async (i) => {
              let p = 0;
            everything.forEach(async (j) => {
                if (everything[0]) {
                  p = p + 1;
                await VisitorDb.findOneAndUpdate(
                  { name: i.name, ip: i.ip },
                  { count: j.count + 1 }
                );
              } else {
                console.log('inserting');
              }
            });
              if (p === 0) {
              await VisitorDb.insertMany({...i,count:1});    
            }
          });
        } catch (err) {
          res.status(400).json({ message: err.message});
          break;
        }
          res.json({ message: "Updating visitor" });
          res.status(200);
        break

    default:
      break;
  }
};
export default handler;
