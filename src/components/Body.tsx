import Card from "./card";

const cards = ['card-1', 'card-2'];

function Body() {

    return (
        <>
            <div className="body-content">

                <h2>Lista de cartões</h2>

                {cards.map((card, index) =>

                    <Card
                        key={index}
                        name={card}
                        description="description"
                    />

                )}

            </div>
        </>
    );
}

export default Body;