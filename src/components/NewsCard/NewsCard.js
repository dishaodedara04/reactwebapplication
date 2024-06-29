import React ,{useState , useEffect , createRef } from 'react';
import {Card, CardActions , CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from  './styles.js';

const NewsCard = ({ article: {description,publishedAt,source,title,url,urlToImage},i, activeArticle}) => {
    const classes = useStyles();
    const [elRefs,setElRefs]=useState([]);
    const scrollToRef=(ref)=>window.scroll(0, ref.current.offsetTop - 50);

    useEffect(()=>{
          setElRefs((refs)=>Array(20).fill().map( (_,j) => refs[j] || createRef()))
    }, []);

    useEffect(()=>{
        if(i=== activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    },[i,activeArticle,elRefs]);
    
    
    return (
        <card ref={elRefs[i]} className={classNames(classes.card, activeArticle=== i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media}  image={urlToImage || 'https://img.freepik.com/free-vector/realistic-news-studio-background_52683-103246.jpg?w=740&t=st=1684348276~exp=1684348876~hmac=8f29a8eadc24cf4b6478f083453d53b8d5b0ee2cbfb2271781f45725738faa50'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.CardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
   
        </card>
    );
  
}

export default NewsCard;


//--------------------------------------------------------------------------------------------------

// import React, { useState, useEffect, createRef } from 'react';
// import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import classNames from 'classnames';
// import useStyles from './styles.js';

// const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
//   const classes = useStyles();
//   const [elRefs, setElRefs] = useState([]);
//   const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

//   useEffect(() => {
//     setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
//   }, []);

//   useEffect(() => {
//     if (i === activeArticle && elRefs[activeArticle]) {
//       scrollToRef(elRefs[activeArticle]);
//     }
//   }, [i, activeArticle, elRefs]);

//   const openArticleInNewTab = () => {
//     window.open(url, '_blank');
//   };

//   return (
//     <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
//       <CardActionArea onClick={openArticleInNewTab}>
//         <CardMedia
//           className={classes.media}
//           image={
//             urlToImage ||
//             'https://img.freepik.com/free-vector/realistic-news-studio-background_52683-103246.jpg?w=740&t=st=1684348276~exp=1684348876~hmac=8f29a8eadc24cf4b6478f083453d53b8d5b0ee2cbfb2271781f45725738faa50'
//           }
//         />
//         <div className={classes.details}>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {(new Date(publishedAt)).toDateString()}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {source.name}
//           </Typography>
//         </div>
//         <Typography className={classes.title} gutterBottom variant="h5">
//           {title}
//         </Typography>
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions className={classes.CardActions}>
//         <Button size="small" color="primary">Learn More</Button>
//         <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
//       </CardActions>
//     </Card>
//   );
// };

// export default NewsCard;




//------------------------------W code without Ref---------------------------------------------------------------

// import React from 'react';
// import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import classNames from 'classnames';
// import useStyles from './styles.js';

// const NewsCard = ({ article, i, activeArticle }) => {
//   const classes = useStyles();

//   const handleOpenArticle = () => {
//     window.open(article.url, '_blank');
//   };

//   return (
//     <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
//       <CardActionArea onClick={handleOpenArticle}>
//         <CardMedia
//           className={classes.media}
//           image={article.urlToImage || 'https://img.freepik.com/free-vector/realistic-news-studio-background_52683-103246.jpg?w=740&t=st=1684348276~exp=1684348876~hmac=8f29a8eadc24cf4b6478f083453d53b8d5b0ee2cbfb2271781f45725738faa50'}
//         />
//         <div className={classes.details}>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {(new Date(article.publishedAt)).toDateString()}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {article.source.name}
//           </Typography>
//         </div>
//         <Typography className={classes.title} gutterBottom variant="h5">
//           {article.title}
//         </Typography>
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {article.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions className={classes.cardActions}>
//         <Button size="small" color="primary" onClick={handleOpenArticle}>
//           Learn More
//         </Button>
//         <Typography variant="h5" color="textSecondary">
//           {i + 1}
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// };

// export default NewsCard;




