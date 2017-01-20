/**
 * Will tell if the server is up
 */
class Status {
	constructor() { }

	/**
	 * Returns a status from server to check if it is online
	 * @param  {Express.Request} 	req 	Express request object
	 * @param  {Express.Response} 	res 	Express response object
	 * @return {Object}     				An Object with property status: Live
	 */
	index(req, res) {
		res.status(200).send({status: 'live'})
	}
}

module.exports = Status