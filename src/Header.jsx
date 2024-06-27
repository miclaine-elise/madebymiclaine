import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <h1 className="header" onClick={(() => navigate('/about'))}>made by miclaine</h1>
    )
}
export default Header