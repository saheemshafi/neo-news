import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

function News(props) {
    const [articles, setArticles] = useState([]);
    const fetchData = async () => {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageCount=6`);
        let data = await res.json();
        setArticles(data.articles);
    }
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        document.title = `Neo News - ${capitalize(props.category)}`
        fetchData()
    }, [])

    return (
        <section className="min-h-screen pt-2 pl-2 pr-2 sm:pl-64 bg-gray-800">
            <div className="text-3xl font-semibold pb-3 pl-5 mt-3 border border-transparent border-b-yellow-400 text-gray-200">Top headlines - {capitalize(props.category)}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {articles.map((article) => {
                    return <NewsItem key={article.url} title={article.title} description={article.description} author={article.author} image={article.urlToImage} source={article.source.name} url={article.url} date={article.publishedAt} />
                })}
            </div>
        </section>
    )
}

export default News