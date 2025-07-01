import React from 'react';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import Data from '../logements.json';
import Banner from '../components/Banner';
function Home() {
  return (
    <>
    <Banner title="Chez vous, partout et ailleurs"/>
    <CardContainer>
      {Data.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          src={logement.cover}
          title={logement.title}
        />
      ))}
    </CardContainer>
    </>
  );
}

export default Home;
