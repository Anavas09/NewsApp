import React from 'react';
import PropTypes from 'prop-types';

const News = ({news}) => {
    const { urlToImage, url, title, description, source } = news

    const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
        :
        null

    return (
        <div className="col s12 m6 lg4">
            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn">
                            Ver noticia completa
                        </a>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object.isRequired,
};

export default News;