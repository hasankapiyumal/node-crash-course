const express = require("express");
//express app
const app = express();
//listen for requests
app.listen(3000);
//register view engine
app.set("view engine", "ejs");

app.use((req,res,next)=>{
  console.log(req.hostname);
  console.log(req.path);
  console.log(req.method);
  next();
});

app.get("/", (req, res) => {
  //   res.send("<p>home page</p>");
//   res.sendFile("./views/index.html", { root: __dirname });
const blogs =[
    {title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'},
    {title:'Mario finds stars',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'},
    {title:'How to defeat bowser',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'}
];
res.render("index",{title:'Home',blogs});
});

app.use((req,res,next)=>{
  console.log('in the next middleware');
  next();
});

app.get("/about", (req, res) => {
  // res.send("<p>about page</p>");
//   res.sendFile("./views/about.html", { root: __dirname });
res.render("about",{title:'About'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})
//redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

//404 page
app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
res.status(404).render("404",{title:'404'});
});
