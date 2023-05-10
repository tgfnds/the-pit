import Button from "~/components/ui/Button";

interface Props {
  name: string;
}

function GameCard({ name }: Props) {
  return (
    <div className="card glass w-full">
      <figure>
        <img src={`https://placehold.co/600x250?text=${name}`} alt="cover" />
      </figure>
      <div className="card-body gap-8">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <Button className="btn-sm">Finished</Button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
