import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { CardContent, TextField, Button, Avatar} from "@mui/material";
import { useRef, useEffect, } from 'react';

export default function Login() {

    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    useEffect(() => {

    }, [])

    const onSubmit : any = () => {
        console.log(emailRef);
        console.log(passwordRef);
    };



    return (
        <Box sx={{
            padding: 30,
            width: 300,
            height: 500,
            backgroundColor: 'white',
        }}>
            <Card sx={{
                minWidth: 400,
                border: "black"
            }}>
                <CardContent sx={{
                    backgroundColor: "white",
                    border: 'black',
                    maxHeight: 500,
                    maxWidth: 500,
                }}>
                    <Avatar alt="Remy Sharp" 
                    src="valdo avatar.jpg" 
                    sx={{ width: 50, height: 50  }}/>
                    <div>LogIn</div>
                    <TextField  focused required id="standard-basic" label="Email" variant="standard" ref={emailRef} />
                    <TextField required id="standard-basic" label="password" variant="standard" ref={passwordRef} />
                    <p></p>
                    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
                </CardContent>
            </Card>
        </Box>
    );
};