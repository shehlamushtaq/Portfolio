import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


const Contact = () => {
    
  const formik = useFormik({
    initialValues: {
      email: 'shehla@example.com',
      password: 'f12345678',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      var alvalue =(JSON.stringify(values, null, 2));
      alert(alvalue);
      console.log(alvalue)
      // const newobj ={
      //   email:value.email,
      //   password:value.password
      // }
      setEmail2(values.email)
      setPassword2(values.password)
    },

  });
  const [data, setData] = useState({})

  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');

  return (
      
    <>
<Grid container spacing={3} style={{marginTop: 60, display: 'inline-flex'}}>
    <Grid item xs={5} style={{backgroundColor: '#fff', padding: 20, marginLeft: 20, marginRight: 20 }}>
      <form className="formSetting" onSubmit={formik.handleSubmit}>
        <TextField
          
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button  color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form><br/>
      </Grid>
      <Grid item xs={6} style={{backgroundColor: '#fff', marginRight: 20}}>
          <label>Email = {formik.values.email}</label><br />
          <label>Your Password = {formik.values.password}</label><br /><br />

          <label>Email ={email2} </label><br />
          <label>Your Password ={password2} </label><br />

      </Grid> 
  </Grid>   
  </>     
  );
};

export default Contact

           