import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({newsList}) => {
    return (
        <div className="row">
            {newsList.map(news => {
                return(
                    <News key={news.url} news={news}/>
                )
            })}
        </div>
    );
};

NewsList.propTypes = {
    newsList: PropTypes.array.isRequired,
};

export default NewsList;