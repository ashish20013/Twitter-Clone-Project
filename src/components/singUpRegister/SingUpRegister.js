import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import './singUpRegister.css'
import MenuItem from '@mui/material/MenuItem';
import { months, days, years } from './dobData'
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const Singup = () => {
    
    const [phone,Setphone]=useState("")
    const [name, Setname]=useState("")
    const [email,Setemail]=useState("")
    const [month,Setmonth]=useState("")
    const [year,Setyear]=useState("")
    const [day,Setday]=useState("")

    const [validation,Setvalidation]=useState({
        name:"",
        phone:"",
        email:"",
        month:"",
        year:"",
        day:""
    })
   
    const [phoneToEmail, setPhoneToEmail] = useState(false)

    // const saveData = () => {
    //     const isValidNumber = /^\d{10}$/.test(mobile);
    //     if (!isValidNumber) {
    //         Alert("Invalid mobile n umber");
    //         return;
    //     }
    // }
   
    // const nameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const saveData=()=>{
        var users=JSON.parse(localStorage.getItem("users") || "[]")
        var userData={
            name:name,
            email:email,
            phone:phone,
            day:day,
            year:year,
            month:month

        }
        users.push(userData)
        localStorage.setItem("users",JSON.stringify(users))
    }




    return (
        <div className='singup-container'>

            <div className='singup-form' >
                <h1>Create your account</h1>
                <form style={{ display: 'contents' }}>
                    <TextField id="filled-basic"
                        className='name-field'
                        label="Name"
                        variant='outlined'
                        required
                        
                        value={name}
                        onChange={(e)=>{Setname(e.target.value)}}
                    // sx={{width:"60%"}}

                    />
                    {phoneToEmail ? (<TextField id="filled-basic"
                        label="Phone"
                        value={phone}
                        onChange={(e) => Setphone(e.target.value)}
                        variant='outlined'
                        // sx={{width:"60%"}}
                        required />)
                        : (<TextField id="filled-basic"
                            label="Email"
                            type='email'
                            value={email}
                            onChange={(e) =>Setemail(e.target.value)}
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
                            value={month}
                            onChange={(e)=>{Setmonth(e.target.value)}}
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
                            value={day}
                            onChange={(e)=>{Setday(e.target.value)}}
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
                            value={year}
                            onChange={(e)=>{Setyear(e.target.value)}}
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

export default Singup;

