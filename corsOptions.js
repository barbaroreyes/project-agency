const corsOptions = {
    origin: 'http://your-frontend-url.com', // Adjust this to your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  };
  
  app.use(cors(corsOptions));
  