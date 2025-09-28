import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='max-w-md mx-auto'>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent className="gap-x-0.25">
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={cat} className="md:basis-1/2 lg-basis-1/3 ">
                                <Button onClick={() => searchJobHandler(cat)} className=" border-1 text-black hover:bg-[#5812d1] rounded-full transition-colors duration-200">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious  />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel