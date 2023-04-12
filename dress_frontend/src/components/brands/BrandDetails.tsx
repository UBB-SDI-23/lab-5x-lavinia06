import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Brand} from "../../models/Brand";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BrandDetails = () => {
	const { brandId } = useParams();
	const [brand, setBrand] = useState<Brand>();

	useEffect(() => {
		const fetchBrand = async () => {
			
			const response = await fetch(`${BACKEND_API_URL}/brands/${brandId}`);
			const brand = await response.json();
			setBrand(brand);
		};
		fetchBrand();
	}, [brandId]);

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/brands`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h1>Brand Details</h1>
					<p>Brand Fondator: {brand?.brand_fondator}</p>
					<p>Brand Name: {brand?.brand_name}</p>
                    <p>Brand Rank: {brand?.brand_rank}</p>
                    <p>Number Models: {brand?.nr_models}</p>
					
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