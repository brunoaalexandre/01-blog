import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    post: Model
  },

  seeds(server) {
    server.db.loadData({
      posts: [
        {
          id: 1,
          title: 'Agora é oficial: o Windows 11 está vindo',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
          liked: true,
          createdAt: new Date('2021-07-02 09:00:23')
        },
        {
          id: 2,
          title: 'Tim Berners-Lee vai leiloar código-fonte da web',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
          liked: false,
          createdAt: new Date('2021-07-03 11:23:08')
        },
        {
          id: 3,
          title: 'Tem Firefox novo no pedaço e você vai querer migrar',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
          liked: false,
          createdAt: new Date('2021-07-03 09:00:23')
        },
        {
          id: 4,
          title: 'John McAfee, criador do antivírus McAfee, morre',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
          liked: true,
          createdAt: new Date('2021-07-02 09:00:23')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return this.schema.all('post');
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
