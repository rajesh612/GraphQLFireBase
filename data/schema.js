import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type StampUser {
  userKey: String
  google: GoogleUser
  stamp: StampData
  twitter: TwitterUser
  serviceuser: ServiceUser
}

type ServiceUser {
  services: [ServiceItem]
}

type ServiceItem {
  availability: Availability
  category: String
  desc: String
  duration: String
  location: String
  price: Int
  title: String
  owner: StampUser
}

type Availability {
  times: [String]
  weekdays: [Boolean]
}

type GoogleUser {
  displayName: String
  email: String
  photoURL: String
  refreshToken: String
  uid: String
}

type StampData {
  bio: String
  headline: String
  services: [ServiceItem]
  username: String
}

type TwitterUser {
  displayName: String
  photoURL: String
  refreshToken: String
  uid: String
}

type Query {
  serviceItems(category: String): [ServiceItem]
  serviceUserData(userKey:String): [ServiceItem]
  stampUser(userKey:String): StampUser
}
`;


export default makeExecutableSchema({typeDefs, resolvers});


