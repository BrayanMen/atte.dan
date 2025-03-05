import React from 'react'

function CardArticle({articles, setSelectedProject, setShowDetails}) {
  return (
    <div className="grid grid-cols-1 mt-8 md:grid-cols-3 py-4 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white shadow-xl">
                <div className="">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover object-[35%_35%] p-3 w-full h-52 "
                    />
                  </div>
                  <div className="p-3 top-0 space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <h3 className="text-xl font-light text-ebony font-poppins">{article.title}</h3>
                    </div>
                    <p className="line-clamp-3 text-sm text-rose-quartz font-light leading-relaxed font-poppins">
                      {article.text} ...
                    </p>
                    <button className="mt-4 text-xs uppercase tracking-wider border border-olivine text-ebony px-6 py-2 hover:bg-olivine hover:text-white transition-colors font-poppins"
                      onClick={() => {
                        setSelectedProject(article);
                        setShowDetails(true);
                      }}>
                      Leer más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
  )
}

export default CardArticle