import { find, filter } from 'lodash';
import  refVal from './connector';

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
  	stamp(stampuser) {
  		return stampuser.stamp;
  	},
  	serviceuser(stampuser) {
  		return stampuser.stamp;
	}
  },

  StampData: {
  	services(stampData) {
  		var serviceKey, servicesPromise, serviceArray= [];
  		return refVal('/services/').then(function(userServices) {
            servicesPromise = userServices;
        })
        .then(function() {
  			for(var service in stampData.services) {
  			serviceKey = stampData.services[service].serviceItemKey;  
  		    for(var userService in servicesPromise ) {
                if(serviceKey === userService) {
                	serviceArray.push(servicesPromise[userService]);
                } 
            };      	
  		    };
             return serviceArray;
            })
    },
  },
  
  ServiceUser: {
  	  	services(stampData) {
  		var serviceKey, servicesPromise, serviceArray= [];
  		return refVal('/services/').then(function(userServices) {
            servicesPromise = userServices;
        })
        .then(function() {
  			for(var service in stampData.services) {
  			serviceKey = stampData.services[service].serviceItemKey;  
  		    for(var userService in servicesPromise ) {
                if(serviceKey === userService) {
                	serviceArray.push(servicesPromise[userService]);
                } 
            };      	
  		    };
             return serviceArray;
            })
    },
  },
}

export default resolvers;