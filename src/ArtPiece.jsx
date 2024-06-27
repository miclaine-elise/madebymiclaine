function ArtPiece({ piece }) {

    return (
        <div className="art-piece">
            <img src={piece.img}></img>
            <p>{piece.title}</p>
        </div>
    )
}
export default ArtPiece