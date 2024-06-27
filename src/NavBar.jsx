import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function NavBar() {
    const navigate = useNavigate();
    // const [underline, setUnderline] = useState('none');

    return (
        <div className="nav-bar">
            <button className="about-btn" onClick={(() => {
                navigate('/about');
            }
            )}
            > ABOUT</button >
            <button onClick={(() => navigate('/software'))}>SOFTWARE & DESIGN PORTFOLIO</button>
            <button onClick={(() => navigate('/art'))}>ART</button>
        </div >


    )
}
export default NavBar