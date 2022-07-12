import React from 'react'
import Thumbnail from '../Thumbnail.jpg'
function NewsItem(props) {
  const { title, description, source, author, date, image } = props;
  return (

    <div className="rounded overflow-hidden shadow-lg m-3 bg-gray-700">
      <img className="w-full" src={image ? image : Thumbnail} alt="Mountain" />
      <div className="px-6 py-4 max-h-96">
        <div className=" mb-2">
          <div className="text-sm bg-red-600 px-1 text-white rounded-md font-semibold w-fit ml-auto">{source}</div>
          <div className="text-xl font-semibold text-yellow-400">{title}</div>
        </div>
        <p className="text-gray-200 text-base">
        {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between text-sm text-gray-400">
        <div>Uploaded at {new Date(date).toLocaleDateString()} by {author ? author : "Unknown"}</div>
      </div>
    </div>

  )
}

export default NewsItem