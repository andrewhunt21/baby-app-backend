const router = require("express").Router();
const Voters = require("./voters-model");
const { validateForm } = require('./voters-middleware')

router.get("/", async (req, res, next) => {
    try {
        const voters = await Voters.getAll();
        if(!voters) {
            next({ message: 'could not retrieve voters' })
        } else {
            res.status(200).json(voters);
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', validateForm, (req, res, next) => {
    Voters.insert(req.body)
        .then(newVote => {
            res.status(201).json(newVote)
        })
        .catch(next)
})

module.exports = router;