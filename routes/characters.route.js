const router = require('express').Router()
const Character = require('../models/Character.model')
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get('/', async (req, res, next) => {
	/**Your code goes here */
	try {
		const allCharacters = await Character.find()
		res.status(200).json(allCharacters)
	} catch (error) {
		next(error)
	}
})

/**
 * ? This route should create one character and respond with
 * ? the created character
 */
router.post('/', async (req, res, next) => {
	/**Your code goes here */
	try {
		const characterToCreate = { ...req.body}
		const createdCharacter = await Character.create(characterToCreate)
		res.status(201).json(createdCharacter)
	} catch (error) {
		next(error)
	}
})

/**
 * ? This route should respond with one character
 */
router.get('/:id', async (req, res, next) => {
	/**Your code goes here */
	const retrieveChar = req.params.id
	try {
		await Character.findById(retrieveChar)
		res.json(retrieveChar)
	} catch (error) {
		next(error)
	}
})

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */
router.patch('/:id', async (req, res, next) => {
	/**Your code goes here */
	const { characterId } = req.params
	const characterToUpdate = { ...req.body }
	try {
		await Character.findByIdAndUpdate(characterId, characterToUpdate, {new: true})
		res.json({ message : `update successful: ${characterId}`})
	} catch (error) {
		next(error)
	}

})

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete('/:id', async (req, res, next) => {
	/**Your code goes here */
	try {
		await Character.findByIdAndDelete(req.params.characterId)
		res.json({ message: `${req.params.characterId} was deleted`})
	} catch (error) {
		next(error)
	}
})

module.exports = router
