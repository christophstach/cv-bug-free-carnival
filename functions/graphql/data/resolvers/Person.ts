import { Person } from '../models/Person';
import { find } from 'lodash';
import { Resolver } from '../../Resolver';
import { firestore } from '../../../database';
import { environment } from '../../../environment';
import * as fetch from 'node-fetch';


const persons: Person[] = [
  {
    id: '1',
    gitHubUser: 'christophstach',
    firstName: 'Christoph',
    lastName: 'Stach',
  },
  {
    id: '2',
    gitHubUser: 'SaizFerri',
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
    allPerson(obj, args, context, info): Person[] | Promise<Person[]> {
      if (environment.development) {
        return persons;
      } else {
        return firestore.collection('person').get()
          .then((snapshot) => {
            const result: Person[] = [];

            snapshot.forEach((doc) => {
              result.push({
                id: doc.id,
                ...doc.data()
              });
            });

            return result;
          });
      }
    },
    person(obj, args, context, info): Person | Promise<Person> {
      if (environment.development) {
        return find(persons, (value) => value.id === args['id']);
      } else {
        return firestore.collection('person').doc(args['id']).get()
          .then((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });
      }
    }
  },
  types: {
    Person: {
      workExperience(value: Person) {
      },
      skills(value: Person) {
        if (environment.development) {
          return skills;
        } else {
          return skills;
        }
      },
      languageSkills(value: Person) {
      },
      education(value: Person) {
      },
      projects(value: Person, args: { topic: string }): Promise<any[]> {
        let url;

        if (args.topic) {
          url = `https://api.github.com/search/repositories?q=user:${value.gitHubUser}+topic:${args.topic}&sort=updated&order=desc`;
        } else {
          url = `https://api.github.com/search/repositories?q=user:${value.gitHubUser}&sort=updated&order=desc`;
        }

        return fetch(url)
          .then((result) => result.json())
          .then((result) => result['items'])
          .then((items) => {
            return items.map((item) => {
              return {
                id: item['id'],
                name: item['name'],
                repository: item['html_url']
              };
            });
          });
      }
    }
  }
};
