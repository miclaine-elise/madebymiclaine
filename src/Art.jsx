import selfPortrait from './assets/art/selfportrait.png';
import art from './assets/artPieces.js';
// import video from './assets/art/video.mov';
import startingover from './assets/art/startingover.png';
import ArtPiece from './ArtPiece';
function Art() {
    return (
        <div className='art-page-container'>
            <h1>
                <img className="self-portrait" src={selfPortrait}></img>
                <h1>some artsy <br></br> things</h1>
                {/* <img className="starting-over" src={startingover}></img> */}
                {/* <video src={video} controls='true' width='200'></video> */}
            </h1>
            <div className="art-pieces">
                {art.map((piece, index) => {
                    return (
                        <ArtPiece piece={piece} key={index} />
                    )
                })}
            </div>

        </div>


    )
}
export default Art