import React, { Component } from 'react';
import './styles.css';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Ana Júlia',
          avatar:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        date: 'November 01, 2005',
        content: 'React is amazing! With this technology it is possible to create websites with features of Desktop applications!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Fernanda Souza',
              avatar:
                'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            content: 'Yeah Ana! And do not forget React Native! We can reuse our knowledge on React to develop amazing mobile applications!',
          },
          {
            id: 2,
            author: {
              name: 'Rodrigo Oliveira',
              avatar:
                'https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            },
            content: 'Where did you learn it?',
          },
          {
            id: 3,
            author: {
              name: 'Ana Júlia',
              avatar:
                'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            content: `Yeah, Fernanda! I'm loving React Native, it's great to be able to reuse all React syntax to mobile!
            Hi Rodrigo! I know several sites, but I think is most important the steps you take until you learn React... 
            First, do you know HTML and CSS? I believe that is the first step. Second, you need to learn JavaScript. 
            And look! You should learn the most modern JavaScript, the "ES6" syntax. After that, I recommend you to learn react!`,
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'José Henrique',
          avatar: 'https://images.pexels.com/photos/167669/pexels-photo-167669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        date: 'January 26, 2020',
        content: `Hey guys! I'm selling my car, it's a black Honda City... Anyone interested, send me a inbox!`,
        comments: []
      },
      {
        id: 3,
        author: {
          name: 'Rodrigo Oliveira',
          avatar:
            'https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        },
        date: 'July 13, 2019',
        content: 'We are returning from a travel this Friday, Rio de Janeiro. Amazing place! Brazil is a blessed land.',
        comments: [
          {
            id: 1,
            author: {
              name: 'José Henrique',
              avatar: 'https://images.pexels.com/photos/167669/pexels-photo-167669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            },
            content: 'Cool mate! You should try out northeast region of Brazil, you should visit amazing places, know an rich culture, and eat a wandeful food!',
          }
        ],
      }

    ],
  };

  render() {
    return (
      <main>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            author={post.author}
            date={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </main>
    );
  }
}

export default PostList;
