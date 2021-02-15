import React from "react";
import "../App.css";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import p1 from "./images/p1.jpg";
const Projects = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // maxWidth: 345,
      flexGrow: 1,
    },
    media: {
      height: 140,
    },
  }));
  const classes = useStyles();
  const myproject = () => {
    // window.open("https://shehla-mushtaq-project-1.netlify.app");
  };
  return (
    <div className={classes.root}>
      <h4 style={{ color: "white" }}> The list of my work</h4>
      <Grid container spacing={4}>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="./images/p1.jpg"
                //src={"./images/p1.jpg"}
                title="Project one company portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 1 Company Port Folio{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is my first project , based on CSS and HTML , using
                  BootStrape,
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() =>
                  window.open("https://shehla-mushtaq-project-1.netlify.app")
                }
                size="small"
                color="primary"
              >
                More details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* //============================================================ */}
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="./images/p1.jpg"
                //src={"./images/p1.jpg"}
                title="Project one company portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project of covid app{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is Covid app , shows statistics of covid, made in react,
                  with material ui{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() =>
                  window.open("https://covid-app-nvtcc.netlify.app")
                }
                size="small"
                color="primary"
              >
                More details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* //===================================================================== */}
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="./images/p1.jpg"
                //src={"./images/p1.jpg"}
                title="Project one company portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 3 TODO CRUD{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is based on CRUD operations , based on CSS and
                  HTML , using BootStrape, and react
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() =>
                  window.open("https://todo-app-nvtcc.netlify.app")
                }
                size="small"
                color="primary"
              >
                More details
              </Button>
            </CardActions>
          </Card>
        </Grid>
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
