import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav aria-label="breadcrumb">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/transaction">Transactions</Link>
                </li>
                <li>
                    <Link to="/budget">Budget</Link>
                </li>
            </ul>
        </nav>
    )
}