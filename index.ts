import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3000;
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.sendFile('index.html', {
    root: 'public',
  });
});

interface Calculate {
  number: number;
}
interface CalculateRes {
  numbers: number[];
}

const validationPrime = (numero: number): boolean => {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return numero !== 1;
};

app.post('/calculate', (req: Request<Calculate>, res: Response<CalculateRes | string>) => {
  const { number } = req.body;
  if (typeof number !== 'number' || number < 2) {
    res.type('application/json').status(400).json('Valor ingresado incorrecto');
  } else {
    let primeNumber = [];
    for (let i = number; i >= 2; i--) {
      if (validationPrime(i)) primeNumber.push(i);
    }
    res.type('application/json').status(200).send({ numbers: primeNumber });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
