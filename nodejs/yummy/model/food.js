module.exports = {

    getAddPage: (req, res) => {

        res.render('add-food.ejs', {
            title: 'Add | Yummy',
            message: ''
        })

    }

}