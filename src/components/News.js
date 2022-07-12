import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

function News(props) {
    const [articles, setArticles] = useState([]);
    const fetchData = async () => {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}`);
        let data = await res.json();
        setArticles(data.articles);
    }
    useEffect(() => {
        fetchData()
    }, [])




    return (
        <section className="min-h-screen pt-2 pl-2 pr-2 sm:pl-64 bg-gray-800">
            <div className="text-3xl font-semibold pb-3 pl-5 mt-3 border border-transparent border-b-yellow-400 text-gray-200">Top headlines</div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {articles.map((article) => {
                    return <NewsItem title={article.title} description={article.description} author={article.author} image={article.urlToImage} source={article.source.name} key={article.url} date={article.publishedAt} />
                })}
            </div>
        </section>
    )
}

export default News