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
	Button,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Brand } from "../../models/Brand";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

export const AllBrands = () => {
	const [loading, setLoading] = useState(false);
	const [brands, setBrands] = useState<Brand[]>([]);
	useEffect(() => {
		setLoading(true);
		fetch(`${BACKEND_API_URL}/brands/`)
			.then((response) => response.json())
			.then((data) => {
				setBrands(data?.brands);
				setLoading(false);
			});
	}, []);

	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSortByName = () => {
        const sortedBrands = [...brands].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.brand_name.localeCompare(b.brand_name);
            } else {
                return b.brand_name.localeCompare(a.brand_name);
            }
        });
        setBrands(sortedBrands);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

	return (
		<Container>
			<h1>All brands</h1>

			{loading && <CircularProgress />}
			{!loading && brands.length === 0 && <p>No brands found</p>}
			{!loading && (
				<IconButton component={Link} sx={{ mr: 3 }} to={`/brands/add`}>
					<Tooltip title="Add a new brand" arrow>
						<AddIcon color="primary" />
					</Tooltip>
				</IconButton>
			)}

			
                
            <Button onClick={handleSortByName}>Sort by Name</Button>
			
			{!loading && brands.length > 0 && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>#</TableCell>
								<TableCell align="right">Brand Fondator</TableCell>
								<TableCell align="right">Brand Name</TableCell>
								<TableCell align="right">Brand Rank</TableCell>
								<TableCell align="center">Nr Models</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{brands.map((brand, index) => (
								<TableRow key={brand.id}>
									<TableCell component="th" scope="row">
										{index + 1}
									</TableCell>
									<TableCell component="th" scope="row">
										<Link to={`/brands/${brand.id}/details`} title="View brand details">
											{brand.brand_name}
										</Link>
									</TableCell>
									<TableCell align="right">{brand.brand_fondator}</TableCell>
									<TableCell align="right">{brand.brand_rank}</TableCell>
									<TableCell align="right">{brand.nr_models}</TableCell>
									<TableCell align="right">
										<IconButton
											component={Link}
											sx={{ mr: 3 }}
											to={`/brands/${brand.id}/details`}>
											<Tooltip title="View brand details" arrow>
												<ReadMoreIcon color="primary" />
											</Tooltip>
										</IconButton>

										<IconButton component={Link} sx={{ mr: 3 }} to={`/brands/${brand.id}/edit`}>
											<EditIcon />
										</IconButton>

										<IconButton component={Link} sx={{ mr: 3 }} to={`/brands/${brand.id}/delete`}>
											<DeleteForeverIcon sx={{ color: "red" }} />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Container>
	);
};