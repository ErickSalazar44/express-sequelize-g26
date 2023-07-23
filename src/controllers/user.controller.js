const catchError = require('../utils/catchError');
const User = require('../models/User');

// get all
const getAll = catchError(async(req, res) => {
    const user = await User.findAll();

    return res.json(user);
})

// Create User 
const create = catchError(async(req, res) => {
    const user = await User.create(req.body)

    return res.status(201).json(user);
})


// delete
const destroy = catchError(async(req, res) => {
    const {id} = req.params;
    const user = await User.destroy({where: {id} });

    if (!user) return res.status(404).json({error: 'User no encontrado'});

    return res.sendStatus(204);

})

// Get user by id 
const getOne = catchError(async(req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.sendStatus(400);

    return res.json(user);
})

// Update

const update = catchError(async (req, res) => {
    const {id} = req.params;

    const user = await User.update(req.body, {
        where: {id}, returning: true
    })

    return res.json(user[1][0]);
})

module.exports = {
    getAll,
    create,
    update,
    getOne,
    destroy
}