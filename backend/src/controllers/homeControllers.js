

class HomeController {

    logout(req, res) {

        req.session.destroy();
        res.status(204).send();
    }

}

module.exports = new HomeController;