import articles from "../db/articles.json" with { type: "json" };;

export const homeController = {
  findAll: (req, res, next) => {
		try {
			res.render("pages/home", {articles , title: "Home page" })
    } catch (error) {
      next(error);
    }
  },
};
