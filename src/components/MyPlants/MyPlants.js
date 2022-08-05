import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import * as dataService from '../../services/dataService.js';
import { AuthContext } from "../../contexts/AuthContext.js";

import PlantList from './PlantList/PlantList.js';
import './MyPlants.css';

export default function MyPlants() {
    const { user } = useContext(AuthContext);
    const [myPlants, setMyPlants] = useState([]);

    useEffect(() => {
        dataService.getMyItems(user._id)
            .then(result => {
                setMyPlants(result)
            })
    }, [user._id])

    return (
        <section className="my-card">
            <h2>My Plant List</h2>
            <Link to="/create" className="create">
                <span>Add New</span>
                {/* <img src="https://www.gardenia.net/public/Front/images/btn-plants.png" alt="flower" /> */}
            </Link>
            {myPlants.length > 0
                ? myPlants.map(x => <PlantList key={x._id} plant={x} />)
                : <h3 className="no-articles">No articles yet</h3>}
        </section>
    );
}