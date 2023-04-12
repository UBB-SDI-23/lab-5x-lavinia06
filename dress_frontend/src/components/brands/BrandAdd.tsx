import { Button, Card, CardActions, CardContent, IconButton, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Brand } from "../../models/Brand";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios, { AxiosError } from "axios";
import { debounce } from "lodash";

export const BrandAdd = () => {
	const navigate = useNavigate();

	const [brand, setBrand] = useState<Brand>({
		brand_fondator: "",
		brand_name: "",
        brand_rank: "",
        nr_models: 1
	});

	const addBrand = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post(`${BACKEND_API_URL}/brands/`, brand);
			navigate("/brands");
		} catch (error) {
			console.log(error as AxiosError);
		}
	};

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/brands`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={addBrand}>
						<TextField
							id="brand_fondator"
							label="Brand Fondator"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setBrand({ ...brand, brand_fondator: event.target.value })}
						/>
						<TextField
							id="brand_name"
							label="Brand Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setBrand({ ...brand, brand_name: event.target.value })}
						/>
						<TextField
							id="brand_rank"
							label="Brand Rank"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setBrand({ ...brand, brand_rank: event.target.value })}
						/>
						<TextField
							id="nr_models"
							label="Number of Models"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setBrand({ ...brand, nr_models: Number(event.target.value) })}
						/>
						<Button type="submit">Add Brand</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
};
