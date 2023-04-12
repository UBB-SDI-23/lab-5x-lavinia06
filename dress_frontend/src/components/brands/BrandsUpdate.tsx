import { Button, Card, CardActions, CardContent, Container, FormLabel, IconButton, TextField, colors } from "@mui/material";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Brand } from "../../models/Brand";
import { useEffect, useState } from "react";


export const UpdateBrand = () => {
    const { brandId } = useParams();
    const navigate = useNavigate();

    const [brand, setBrand] = useState<Brand>({
        id: parseInt(String(brandId)),
        brand_fondator: "",
        brand_name: "",
        brand_rank: "",
        nr_models: 1
    });

    const updateBrand = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            await axios.put(`${BACKEND_API_URL}/brands/${brandId}/`, brand);
            navigate("/brands");
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        navigate("/brands");
    };

    return (
        <Container>
            <Card>
                <CardContent>
                    <IconButton component={Link} sx={{ mr: 3 }} to={`/brands`}>
                        <ArrowBackIcon />
                    </IconButton>{" "}
                    <form onSubmit={updateBrand} style={{ display: "flex", flexDirection: "column", padding: "8px" }}>
                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Brand Fondator
                            </FormLabel>
                            <TextField
                                id="brand_fondator"
                                variant="outlined"
                                onChange={(event) => setBrand({ ...brand, brand_fondator: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Brand Name
                            </FormLabel>
                            <TextField
                                id="brand_name"
                                variant="outlined"
                                // generate the same code for onChange, but can you convert the string to int?
                                onChange={(event) => setBrand({ ...brand, brand_name: event.target.value })}
                            />
                        </Container>
                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Brand Rank
                            </FormLabel>
                            <TextField
                                id="brand_name"
                                variant="outlined"
                                // generate the same code for onChange, but can you convert the string to int?
                                onChange={(event) => setBrand({ ...brand, brand_rank: event.target.value })}
                            />
                        </Container>
                        

                    </form>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button type="submit" onClick={updateBrand} variant="contained" sx={{ backgroundColor: colors.green[500] }}>Update</Button>
                    <Button onClick={handleCancel} variant="contained" sx={{ backgroundColor: colors.green[500] }}>Cancel</Button>
                </CardActions>
            </Card>
        </Container>
    );
}