import {Card, CardActions, CardContent, IconButton} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Brand } from "../../models/Brand";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        padding: '4em',
    },
    card: {
        display: "inline-block",
        minWidth: 100,
        maxWidth: 1000,
        overflow: "hidden",
    },

    second_card: {
        display: "inline-block",
    },

    p: {
        paddingLeft: "3%",
    }
});

export const BrandDetails1 = () => {
    const { brandId } = useParams();
    const [brand, setBrand] = useState<Brand>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = `${BACKEND_API_URL}/brands/${brandId}`
        const axiosTeam = async () => {
            setLoading(true);
            await axios.get(url)
                .then(response => {
                    const brand = response.data;
                    setBrand(brand);
                    setLoading(false);
                }, error => {
                    console.log(error);
                });
        };
        axiosTeam();

        //fetchTeam();
    }, [brandId]);


    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardContent>
                <IconButton component={Link} sx={{ mr: 3 }} to={`/brands`}>
                    <ArrowBackIcon />
                </IconButton>{" "}
                <h1>Brands Details</h1>
                
                <p>Brand name fondator: {brand?.brand_fondator}</p>
                <p>Brand name: {brand?.brand_name}</p>
                <p>Brand rank: {brand?.brand_rank}</p>
                <p>Number Models: {brand?.nr_models.toString()}</p>
                </CardContent>
               
                    
                <CardActions>
                    <IconButton component={Link} sx={{ mr: 3 }} to={`/brands/${brandId}/edit`}>
                        <EditIcon />
                    </IconButton>

                    <IconButton component={Link} sx={{ mr: 3 }} to={`/brands/${brandId}/delete`}>
                        <DeleteForeverIcon sx={{ color: "red" }} />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    );
};
