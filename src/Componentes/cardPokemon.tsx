import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { CardContent, Typography } from "@mui/material";


export default function CardPokemon() {
    const [results, setResults] = useState([])
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => response.json())
            .then((CardPokemon) => (
                setResults(CardPokemon.results)
            ));
    }, [])
    return (
        <div>
            {results.map((poke: any) => {
                return (
                    <Box sx={{
                        width : 300,
                        height : 300,
                        backgroundColor: 'white',
                        '&:hover' : {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                        border: '1px dashed grey',
                        cursor : "Pointer",
                    }}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 29 }} color="text.secondary" gutterBottom>
                                    {poke.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                );
            })};
        </div>
    );
};