import express, {Express, Request, Response, NextFunction} from 'express';
import { IUser, User } from "./models/User";

const app: Express = express();
const PORT = 3000;

app.use(express.json());

interface customRequest extends Request{
  startTime?: number
}

// middleware -> add startTime to request
app.use((req: customRequest, res: Response, next: NextFunction) => {
  req.startTime = Date.now();
  next();
})

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, typescript with express");
});

app.get('/User', async(req: Request, res: Response) => {
  try{

    const user: IUser[] = await User.find();

  } catch(e){
    res.status(400).json({message: 'Some error occured!'})
  }
})

// post route -> new user -> new, email 
// -> /user/:id?name -> request <{}, {}, {}, {}>

interface user{
  name: string,
  email: string  
}
app.post('/user', (req: Request<{}, {}, user>, res: Response) => {
  const {name, email} = req.body;
  res.json({
    message: `user created ${name}-${email}`,
  })
})

// user based on id
app.get('/users/:id', (req: Request<{id: string}>, res: Response) => {
  const {id} = req.params;
  res.json({
    userId: id, 
  });
});

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`)
});