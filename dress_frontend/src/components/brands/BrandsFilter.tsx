import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	CircularProgress,
	Container,
	IconButton,
	Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { BACKEND_API_URL } from "../../constants";
import { Brand } from "../../models/Brand";


export const BrandsFilter= () => {
    const[loading, setLoading] = useState(true)
    const [brands, setBrands] = useState([]);

    useEffect(() => {
    fetch(`${BACKEND_API_URL}/brands-ordered-by-nr-models`)
        .then(res => res.json())
        .then(data => {setBrands(data); setLoading(false);})
    }, []);

    console.log(brands);

    
    return (
    <Container>
        <h1 style={{marginTop:"65px"}}>All brands ordered by their number of models</h1>

        {loading && <CircularProgress />}

        {!loading && brands.length == 0 && <div>No brands found</div>}

        {!loading && brands.length > 0 && (

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="center" style={{color:"#2471A3", fontWeight:'bold'}}>Brand Fondator</TableCell>
                            <TableCell align="center" style={{color:"#2471A3", fontWeight:'bold'}}>Brand Name</TableCell>
                            <TableCell align="center" style={{color:"#2471A3", fontWeight:'bold'}}>Brand Rank</TableCell>
                            <TableCell align="center" style={{color:"#2471A3", fontWeight:'bold'}}>Nr Models</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {brands.map((brands:Brand, index) => (
                            <TableRow key={brands.id}>
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="center">{brands.brand_fondator}</TableCell>
                                <TableCell align="center">{brands.brand_name}</TableCell>
                                <TableCell align="center">{brands.nr_models}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
                </Table>
            </TableContainer>
        )
        }
    </Container>
        
    );       
};