import React from 'react';
import { useParams, Link } from 'react-router-dom';

const About = () => {
  const { id } = useParams();
  
 
  if (id !== undefined) {
    
    const movies = [
      {
          title: 'Luca',
          director: 'Enrico Casarosa',
          producer: 'Andrea Warren',
          duration: '1h 35min',
          image: 'https://i.pinimg.com/736x/e5/28/d4/e528d4ced6261f71c56b056fc1395ee7.jpg',
          description: 'Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.'
      },
      {
          title: 'WISH',
          director: 'Chris Buck',
          producer: 'Juan Pablo Reyes',
          duration: '1h 35min',
          image: 'https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_2993_f80fee96.jpeg?region=0%2C0%2C540%2C810',
          description: 'Wish is a musical fantasy film that follows a young girl named Asha who wishes on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky to join her.'
      },
      {
          title: 'Hunter × Hunter',
          director: 'Yuzo Sato',
          producer: 'Dybex',
          duration: '148 episodes',
          image: 'https://musicart.xboxlive.com/7/a3355100-0000-0000-0000-000000000002/504/image.jpg',
          description: 'The story follows a young boy named Gon Freecss, who discovers that his father, who he was told was dead, is actually alive and a world-renowned Hunter.'
      },
      {
          title: 'Jujutsu Kaisen',
          director: 'Sunghoo Park',
          producer: 'MAPPA',
          duration: '24 episodes',
          image: 'https://static.sociofyme.com/photo/105647558/105647558.jpg',
          description: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman school to be able to locate the demon\'s other body parts and thus exorcise himself.'
      },
      {
          title: 'harry potter',
          director: 'Todd Phillips',
          producer: 'Warner Bros',
          duration: '2h 2m',
          image: 'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg',
          description: 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.'
      },
      {
          title: 'Black Phone',
          director: 'Scott Derrickson',
          producer: 'Scott Derrickson',
          duration: '1h 42m',
          image: 'https://m.media-amazon.com/images/M/MV5BMGRkYWJiYzUtYjY2Ni00MjVhLTgxNTItZDgxNjY3YWEzYjYzXkEyXkFqcGc@._V1_.jpg',
          description: 'After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer\'s previous victims.'
      },
      {
          title: 'Avatar',
          director: 'James Cameron',
          producer: 'James Cameron',
          duration: '2h 42m',
          image: 'https://i.ebayimg.com/images/g/swYAAOSwObNkv4wa/s-l1200.jpg',
          description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
      },
      {
          title: 'Demon Slayer',
          director: 'Haruo Sotozaki',
          producer: 'Aniplex',
          duration: '1h 59m',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLSe0YxHCOtJikJKKAC5nm7NmlqwyXG1tWA&s',
          description: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.'
      },
    ];
    
    const movie = movies[id];
    
  

    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <Link to="/" className="text-[#f9e125] hover:underline mb-8 inline-block">
             Back to Movies
          </Link>
          
          <div className="flex flex-col md:flex-row gap-10 mt-8">
            <div className="w-full md:w-1/3">
              <img  src={movie.image} alt="erore404" className="w-full h-[70vh] rounded-lg shadow-lg"/>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-[#f9e125] pb-6">{movie.title}</h1>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[#f9e125] font-semibold">Réalisé par: </span>
                  <span>{movie.director}</span>
                </div>
                
                <div>
                  <span className="text-[#f9e125] font-semibold">Produit par: </span>
                  <span>{movie.producer}</span>
                </div>
                
                <div>
                  <span className="text-[#f9e125] font-semibold">Durée: </span>
                  <span>{movie.duration}</span>
                </div>
              </div>
              
              <div className="pt-8">
                <h2 className="text-2xl text-[#f9e125] pb-4">Description</h2>
                <p>{movie.description }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
 

};

export default About; 