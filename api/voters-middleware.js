
function validateForm(req, res, next) {
    const { name, gender, birthday } = req.body
    if (!name || !name.trim() || !gender || !gender.trim() || !birthday) {
        res.status(400).json({
            message: 'Your name, guess for gender, and guess for birthday are required'
        })
    } else {
        next()
    }
}

module.exports = {validateForm}