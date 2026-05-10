interface CardProps {
    name: string;
    description: string;
}

function Card({ name, description }: CardProps) {

    return (
        <div className="card">

            <span className="card-title">
                {name}
            </span>

            <div className="card-body">

                <p className="card-text">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default Card;