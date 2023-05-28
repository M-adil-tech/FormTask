import React , {useState}from 'react'
import styled from "styled-components";
import { useFormik } from "formik";
import {apiResponse} from "../data";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Formik, Field, FieldArray } from 'formik';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button';
const form = () => {
  const handleApply = (values) => {
    const { applicable_items, applied_to } = values;
    console.log('applied_to:', applied_to);
    console.log('applicable_items:', applicable_items);
  };

  const handleSubmit=()=>{
    console.log("sucess")
  }

  return (
  <>
  
 <Heading>
      Add Tax!
    </Heading>

<TextBox>
<Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth  id="fullWidth" />
    </Box>
    <TextBoxper>
<FormControl >
          <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            
          />
        </FormControl>

</TextBoxper>

</TextBox>

<Container>
<FormGroup>
<FormControlLabel  control={<Checkbox />}  icon={<FiberManualRecordOutlinedIcon />} label="Apply to All items in Collections" />
<FormControlLabel   control={<Checkbox />} label="Apply to Specific item" />
   
</FormGroup>
</Container>


<Searchcontainer>
<Wrapper>
<Left>
    <Searchbar>
     <Input  Search item/>
    <Search style={{color:"gray", fontSize:16}}/>
    </Searchbar>
    
    </Left>
</Wrapper>


<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <TextField
          id="outlined-select-currency-native"
          select
          label="select"
          defaultValue="Bracelets"
          SelectProps={{
            native: true,
          }}
         
        >
          {apiResponse.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
     
    </Box>
</Searchcontainer>

<Buttoncontainer>
<Button variant="contained">Apply Tax to all 6 items</Button>
</Buttoncontainer>


 
 






     


{/* <Container>
<Formik
        initialValues={{
          applicable_items: [],
          applied_to: 'some',
        }}
        onSubmit={handleApply}
      >
        {({ values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Applied to:
                <Field 
                type="checkbo"
                name="applied_to" as="select">
                  <option value="some">Apply to specific item in collection</option>
                  <option value="all">Apply to all item in collection</option>
                </Field>
              </label>
            </div>
                        
          </form>
        )}
      </Formik>
      </Container>
                            */}
                 







 
   
  </>
   
     
    
     
  )
}
const Heading = styled.h1`
  
    display: flex;
    justify-content: left;
    margin-top:50px;
    margin-left:50px;
  `

  const TextBox = styled.div`
  
    display: flex;
    justify-content: left;
    margin-top:50px;
    margin-left:50px;
  `

  const TextBoxper = styled.div`
  
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:15px;
   
  `

  const Container = styled.div`
  margin-top:20px;
  margin-left:60px;
 
  
  `

const Searchbar=styled.div`
display:flex;
align-items:center;
padding:5px ;
margin-left:25px; 
border:0.5px  solid lightgray;
border-radius:5%;


`
const Input=styled.input`
border:none;
`
const Wrapper = styled.div`
padding: 3px 10px;
display:flex;
justify-content:space-between;
align-items:center;

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center:
`

const Searchcontainer = styled.div`
margin-top:20px;
margin-left:60px;
border:0.5px  solid lightgray;
background-color: #efedee;
`
const Buttoncontainer = styled.div`
margin-top:60px;
display:flex;
justify-content:right;
align-items:center:

`
export default form