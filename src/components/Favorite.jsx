export default function Favorite({ favorite }) {
  return (
    favorite?.img && (
      <div>
        <h3>2. Your favorite coffee is: </h3>
        <div className="mt-5">
          <img src={favorite.img} />
          <p>{favorite.name}</p>
        </div>
      </div>
    )
  );
}
