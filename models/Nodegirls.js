var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Nodegirls Model
 * ==========
 */
var Nodegirls = new keystone.List('Nodegirls');

Nodegirls.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Nodegirls.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Nodegirls.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Nodegirls.defaultColumns = 'name, email, isAdmin';
Nodegirls.register();
