import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
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
            director: 'Alfonso Cuarón',
            producer: 'David Heyman',
            duration: '2h 32m',
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
    ]
    const [search, setSearch] = useState('');

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <div className='md:h-[170vh] h-auto bg-black flex flex-col gap-[15vh]'>
                <div className="text-white  flex   justify-center  items-center gap-20 pt-8  max-[480px]:flex-col">
                    <h1 className="text-[35px] text-[#f9e125]">Cinevision</h1>
                    <input
                        className="border border-black text-black w-[40vh] h-[4vh] rounded-[5px] p-2 focus:outline-none" 
                        type="search"
                        placeholder="Chercher un film..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                 
                </div>

                <div className='flex flex-col gap-[15vh] justify-center items-center'>
                    <div className=' gap-10 text-white  justify-center grid md:[grid-template-columns:repeat(4,1fr)] grid-cols-1 '>
                        {filteredMovies.map((movie, index) => (
                            <div key={index} className="hover:scale-105 transform transition duration-300">
                                <Link to={`/about/${index}`}>
                                    <img className='w-[35vh] h-[40vh]' src={movie.image} alt="erore 404" />
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-[35px]'>{movie.title}</h1>

                                        <div className='flex flex-col gap-4'>
                                            <div className='flex gap-3'>
                                                <h1 className='text-[#f9e125]'>Réalisé par : </h1>
                                                <p>{movie.director}</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <h1 className='text-[#f9e125]'>Produit par : </h1>
                                                <p>{movie.producer}</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <h1 className='text-[#f9e125]'>Durée : </h1>
                                                <p>{movie.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;