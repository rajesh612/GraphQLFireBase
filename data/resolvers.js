import { find, filter } from 'lodash';
import refVal  from './connector';

const resolvers = {
	Query: {
		serviceItems(root, args) {
			return refVal('/services/').then(function(serviceItems) {
				return filter(serviceItems, {category: args.category});
			});
		},
		serviceUserData(root, args) {
			return refVal('/services/').then(function(serviceItems) {
				return filter(serviceItems, {owner: args.userKey});
			});
		},
		stampUser(root, args) {
			return refVal('/users/').then(function(stampUsers) {
				return find(stampUsers, {userKey: args.userKey});
			});
		},
  },
  
  ServiceItem: {
  	owner(serviceItem) {
  		return refVal('/users/').then(function(owners) {
			return find(owners, {userKey: serviceItem.owner});
		})
  	}
  },

  StampUser: {
  	serviceuser(stampuser) {
  	return refVal('/services/').then(function(services) {
		return filter(services, {owner: stampuser.userKey});
  		})
	}
  },
}

export default resolvers;