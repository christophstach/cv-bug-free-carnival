import { Person } from '../models/Person';
import { find } from 'lodash';
import { Resolver } from '../../Resolver';
import { firestore } from '../../../database';


// firestore


const persons: Person[] = [
  {
    id: '1',
    firstName: 'Christoph',
    lastName: 'Stach',
  },
  {
    id: '2',
    firstName: 'Adrian',
    lastName: 'Saiz Ferri',
  }
];

const skills = [
  {
    id: '1',
    name: 'PHP',
    strength: 0.7
  },
  {
    id: '2',
    name: 'JavaScript',
    strength: 0.85
  },
];

export const personResolvers: Resolver = {
  queries: {
    allPerson(obj, args, context, info): Person[] {
      return persons;
    },
    person(obj, args, context, info): Person {
      return find(persons, (value) => value.id === args['id']);
    }
  },
  types: {
    Person: {
      workExperience(value: Person) {
      },
      skills(value: Person) {
        return Promise.resolve(skills);
      },
      languageSkills(value: Person) {

      },
      education(value: Person) {

      }
    }
  }
};
