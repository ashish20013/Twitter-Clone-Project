import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './singUpRegister.css'
import MenuItem from '@mui/material/MenuItem';
import { months, days, years } from './dobData'
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const Singup = () => {
    const [mobile, setMobile] = useState(" ");
    const [phoneToEmail, setPhoneToEmail] = useState(false)

    const saveData = () => {
        const isValidNumber = /^\d{10}$/.test(mobile);
        if (!isValidNumber) {
            Alert("Invalid mobile n umber");
            return;
        }
    }
    const [name, setName] = useState('');
    const nameRegex = /^[a-zA-Z0-9]{3,20}$/;

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (nameRegex.test(name)) {
            // The name field is valid
        } else {
            // The name field is invalid
        }
    }


    return (
        <div className='singup-container'>

            <div className='singup-form' >
                <h1>Create your account</h1>
                <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
                    <TextField id="filled-basic"
                        className='name-field'
                        label="Name"
                        variant='outlined'
                        required
                        value={name}
                        onChange={handleNameChange}
                        // sx={{width:"60%"}}

                    />
                    {phoneToEmail ? (<TextField id="filled-basic"
                        label="Phone"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        variant='outlined'
                        // sx={{width:"60%"}}
                        required />)
                        : (<TextField id="filled-basic"
                            label="Email"
                            type='email'
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            variant='outlined'
                            required
                            // sx={{width:"60%"}}
                        />)}

                        {/* <TextField id="filled-basic"
                        label="Phone"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        variant='outlined'
                        // sx={{width:"60%"}}
                        required /> */}


                    {phoneToEmail ? (<p style={{ textAlign: 'right', color: 'rgb(29, 155, 240)', cursor: 'pointer' }} onClick={() => setPhoneToEmail(false)}>Use email instead</p>) :
                        (<p style={{ textAlign: 'right', color: 'rgb(29, 155, 240)', cursor: 'pointer' }} onClick={() => setPhoneToEmail(true)}>Use phone instead</p>)


                    }

                    <h5>Date of Birth</h5>
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    <div className='dob-field'>
                        {/* <TextField
                            select
                            label="Month"
                            // defaultValue="EUR"
                            sx={{ width: '200px' }}>
                            {months.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField> */}
                        <TextField
                            select
                            label="Months"
                            // defaultValue="EUR"
                            sx={{ width: '100px' }}
                        >
                            {months.map((option, index) => (
                                <MenuItem key={option.id} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select
                            label="Days"
                            // defaultValue="EUR"
                            sx={{ width: '100px' }}
                        >
                            {days.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            select
                            label="Year"
                            // defaultValue="EUR"
                            sx={{ width: '150px' }}
                        >
                            {years.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                    <Button
                        type='submit'
                        onClick={saveData}
                        variant="contained"
                        id='next-btn'
                        disableElevation sx={{ width: '100%' }}>
                        Next
                    </Button>


                </form>
            </div>

        </div>

    )
}

export default Singup

