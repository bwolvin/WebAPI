var userSchema = new mongoose.Schema({
	firstName: String,
	LastName: String,
	skill: String
});

var userModel = mongoose.model('User', userSchema);

function registerRoutes(app, mongoose) {
	app.get('/api/users', function(request, response) {
		return UserModel.find(function(err, users) {
			if (!err) {
				return response.json(users);
			} else {
				console.log(err);
				return response.send('Error');
			}
		});
	});
}