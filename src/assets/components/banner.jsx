import { useState, useEffect } from 'react';

function Banner() {
    const images = [
        {
            url: "https://image.tmdb.org/t/p/original/6qyzn497ujkBnjneHJZYaBTj4db.jpg",
            name: "LEO"
        },
        {
            url: "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
            name: "Deadpool & Wolverine"
        },
        {
            url: "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
            name: "Oppenheimer"
        },
        {
            url: "https://image.tmdb.org/t/p/original/wttCVXczR6sXbLYivbOJ0auL03J.jpg",
            name: "The Wild Robot"
        },
        {
            url: "https://image.tmdb.org/t/p/original/1pjMhcDSlWT7hYzxB38wwlp7Wc6.jpg",
            name: "Interstellar"
        },
        {
            url: "https://image.tmdb.org/t/p/original/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg",
            name: "Everything Everywhere All at Once"
        },
        {
            url: "https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg",
            name: "Blade Runner 2049"
        },
        {
            url: "https://image.tmdb.org/t/p/original/wPoAoC7aEQiK8QNpQK2Z9G87qrm.jpg",
            name: "Gravity"
        },
        {
            url: "https://image.tmdb.org/t/p/original/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg",
            name: "Tenet"
        },
        {
            url: "https://image.tmdb.org/t/p/original/rnhShPbZCqfYVTI3PMt5VcomGwT.jpg",
            name: "Spider-Man: No Way Home"
        } 
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(prevImage => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div
            className="mt-[50px] w-full rounded-3xl h-[60vh] md:h-[70vh] bg-black bg-cover bg-center flex items-end border-4 border-white-500"
            style={{
                backgroundImage: `url(${currentImage.url})`,
            }}
        >
            <div className="text-white w-full p-1 text-center text-xl bg-black bg-opacity-50 rounded-b-2xl">
                {currentImage.name}
            </div>
        </div>
    );
}

export default Banner;
