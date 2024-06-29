import { Divider } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = '9041f1d93a5d4405029ca1b088e6b25d2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    let alanBtnInstance = null;

    if (!alanBtnInstance) {
      alanBtnInstance = alanBtn({
        key: alanKey,
        onCommand: ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles);
            setActiveArticle(-1);
          } else if (command === 'highlight') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === 'open') {
            const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
            const article = articles[parsedNumber - 1];

            if (parsedNumber > 20) {
              alanBtnInstance.playText('Please try again.');
            } else if (article) {
              window.open(article.url, '_blank');
              alanBtnInstance.playText('Opening...');
            }
          }
        }


      });
    }

    return () => {
      alanBtnInstance?.destroy();
    };
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="alan logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
