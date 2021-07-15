import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from '@material-ui/core'
import React from 'react'
import {ReactComponent as Close} from '../../Assets/Icons/svg/fi-rs-cross.svg'
import { makeStyles } from '@material-ui/core/styles';

import {ReactComponent as Download} from '../../Assets/Icons/svg/fi-rs-download.svg'
import {ReactComponent as Pdf} from '../../Assets/Icons/svg/fi-rs-form.svg'



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Invoices({handleClose}) {
    const classes = useStyles();

    const fake = [
        {
            date:'13/12/2021',
            invoice_id:'1AZFF44',
            status:'paid',
            download_link:'##',
            view_link:'##'
        },
        {
            date:'13/12/2020',
            invoice_id:'1234',
            status:'pending',
            download_link:'##',
            view_link:'##'
        }
    ]
    return (
        <Grid item md={8} xs={12} style={{background:'white',padding:'20px',borderRadius:'10px',minHeight:'300px',overflowY:'auto'}}>
          <section style={{borderBottom:'1px solid #D9DDFB',paddingBottom:'15px'}}>
         <span className='boldText' style={{fontSize:'25px'}}>INVOICES</span>
         <Close style={{fill:'#6A7BFF',width:'15px',height:'15px',float:'right',cursor:'pointer'}} onClick={handleClose} />
         </section>
        <TableContainer >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:'bold'}}>Date</TableCell>
              <TableCell style={{fontWeight:'bold'}} align="center">Invoice ID</TableCell>
              <TableCell style={{fontWeight:'bold'}} align="center">Status</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fake.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.invoice_id}</TableCell>
                <TableCell align="center"><span style={{textTransform:'capitalize',background:row.status==='paid'?'rgb(237, 247, 237)':'rgb(253, 236, 234)',borderRadius:'4px',padding:'5px',display:'block',fontWeight:'bold',color:row.status==='paid'?'rgb(30, 70, 32)':'rgb(97, 26, 21)'}}>{row.status}</span></TableCell>
                <TableCell align="center">
                    <a href={row?.download_link?row.download_link:'#'} target='_blank'>
                        <Download style={{fill:'#6A7BFF',width:'15px',height:'15px',float:'right',cursor:'pointer'}}/>
                    </a>
                </TableCell>
                <TableCell align="center">
                <a href={row?.view_link?row.view_link:'#'} target='_blank'>
                    <Pdf style={{fill:'#6A7BFF',width:'15px',height:'15px',float:'right',cursor:'pointer'}} />
                </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
    )
}

export default Invoices
