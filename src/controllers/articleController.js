import articles from "../db/articles.json" with { type: "json" };;

export const articleController = {
  findOne: (req, res, next) => {
    try {
      const id = req.params.id
  
      const article = articles.find(article => article.id === +id)


      if (!article) {
        throw new Error("Article not found!"); 
      }

      res.render('pages/article', { ...article })
    } catch (error) {
      next(error)
    }
  }
};
