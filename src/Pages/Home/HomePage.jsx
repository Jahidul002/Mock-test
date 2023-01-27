import React from 'react';
import About from '../../Component/About';
import SecondBAnner from '../../Component/SecondBAnner';
import Special from '../../Component/Special';
import TopBAnner from '../../Component/TopBAnner';

const HomePage = () => {
    return (
        <div>
            <TopBAnner></TopBAnner>
            <SecondBAnner></SecondBAnner>
            <About></About>
            <Special></Special>
        </div>
    );
};

export default HomePage;