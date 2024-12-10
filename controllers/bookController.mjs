class bookController {
    static async index(req,res) {
        res.render("home"); // trả về file home.ejs trong view
    } 
}

export default bookController