import React from "react";
import "../App.css";
// import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import p1 from "./images/p1.jpg";
const Projects = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // maxWidth: 345,
      flexGrow: 1,
    },
    media: {
      height: 280,
    },
  }));
  const classes = useStyles();

  const data = [
    {
      title: "Project 1 Company Port Folio",
      desc:
        "This is my first project , based on CSS and HTML , using BootStrap.",
      image: "/images/p1.jpg",
      link: "https://shehla-mushtaq-project-1.netlify.app",
    },
    {
      title: "Project of covid app",
      desc:
        "This is Covid app , shows statistics of covid, made in react, with material ui",
      image: "/images/p3.jpg",
      link: "https://covid-app-nvtcc.netlify.app",
    },
    {
      title: "Project 3 TODO CRUD",
      desc:
        "This project is based on CRUD operations , based on CSS and HTML , using BootStrap, and react",
      image: "/images/p2.jpg",
      link: "https://todo-app-nvtcc.netlify.app",
    },
  ];

  return (
    <div className={classes.root}>
      <h4 style={{ color: "white" }}> The list of my work</h4>
      <Grid container spacing={4}>
        {data.map((item, ind) => (
          <Grid item lg>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  //src={"./images/p1.jpg"}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => window.open(item.link)}
                  size="small"
                  color="primary"
                >
                  More details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* //===================================================================== */}

        {/* //=========================================================== */}
        {/* <div className="threediv">
          Project 2
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Project two packman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
 */}
        {/* //============ =============================================== */}
        {/* <div className="threediv">Project 3</div> */}
      </Grid>
    </div>
  );
};

export default Projects;
