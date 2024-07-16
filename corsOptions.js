const corsOptions = {
    origin: 'https://agency-front-theta.vercel.app/', // Adjust this to your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  };
  
  app.use(cors(corsOptions));
  